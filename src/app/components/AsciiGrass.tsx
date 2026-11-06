"use client";

import { useEffect, useRef } from "react";

const LOOP_DURATION = 9400;
const TAU = Math.PI * 2;
const ATLAS_MIN_SIZE = 4;
const ATLAS_MAX_SIZE = 14;
const ATLAS_CELL_SIZE = 22;

type Blade = {
  baseX: number;
  baseY: number;
  coordinates: Float32Array;
  depth: number;
  elasticity: number;
  fontSize: number;
  height: number;
  lean: number;
  phase: number;
  segments: number;
  species: number;
  sway: number;
};

const TOP_GLYPHS = ["'", "`", '"', "^", "*", "+"];
const GROUND_GLYPHS = [".", ",", "_", ";", "`"];
const ALL_GLYPHS = Array.from(
  new Set([...TOP_GLYPHS, ...GROUND_GLYPHS, "|", ")", "(", "/", "\\", "!", ":"]),
);
const GLYPH_COLUMNS = new Map(
  ALL_GLYPHS.map((glyph, index) => [glyph, index]),
);

type GlyphAtlas = {
  canvas: HTMLCanvasElement;
  cellPixels: number;
};

type GrassTheme = "light" | "dark";

const GRASS_PALETTES = {
  dark: { grass: "#8ebd7c", outline: "rgba(8, 10, 8, 0.97)" },
  light: { grass: "#072600", outline: "rgba(255, 255, 255, 0.97)" },
} as const;

const getGrassTheme = (): GrassTheme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

const createGlyphAtlas = (pixelRatio: number, color: string): GlyphAtlas => {
  const atlas = document.createElement("canvas");
  const cellPixels = Math.ceil(ATLAS_CELL_SIZE * pixelRatio);
  const atlasScale = cellPixels / ATLAS_CELL_SIZE;
  const sizeCount = ATLAS_MAX_SIZE - ATLAS_MIN_SIZE + 1;

  atlas.width = ALL_GLYPHS.length * cellPixels;
  atlas.height = sizeCount * cellPixels;

  const atlasContext = atlas.getContext("2d");

  if (!atlasContext) {
    return { canvas: atlas, cellPixels };
  }

  atlasContext.setTransform(atlasScale, 0, 0, atlasScale, 0, 0);
  atlasContext.textAlign = "center";
  atlasContext.textBaseline = "middle";
  atlasContext.lineJoin = "round";
  atlasContext.fillStyle = color;
  atlasContext.strokeStyle = color;
  atlasContext.lineWidth = 1.4;

  for (let size = ATLAS_MIN_SIZE; size <= ATLAS_MAX_SIZE; size += 1) {
    const row = size - ATLAS_MIN_SIZE;
    atlasContext.font = `900 ${size}px "Courier New", monospace`;

    ALL_GLYPHS.forEach((glyph, column) => {
      const centerX = column * ATLAS_CELL_SIZE + ATLAS_CELL_SIZE / 2;
      const centerY = row * ATLAS_CELL_SIZE + ATLAS_CELL_SIZE / 2;

      atlasContext.strokeText(glyph, centerX, centerY);
      atlasContext.fillText(glyph, centerX, centerY);
    });
  }

  return { canvas: atlas, cellPixels };
};

const noise = (seed: number) => {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
};

const makeBlades = (width: number, height: number): Blade[] => {
  const spacing = Math.max(3.8, Math.min(5.3, width / 250));
  const count = Math.ceil(width / spacing) + 8;

  return Array.from({ length: count }, (_, index) => {
    const clump = Math.floor(index / 9);
    const clumpPosition = (index % 9) / 8;
    const depth = noise(index + 11);
    const clumpHeight = 0.82 + noise(clump + 103) * 0.3;
    const centerLift = 0.88 + Math.sin(clumpPosition * Math.PI) * 0.18;
    const fontSize = 6.4 + depth * 2.8;
    const bladeHeight =
      height *
      (0.3 + noise(index + 31) * 0.53) *
      clumpHeight *
      centerLift;
    const species = Math.floor(noise(index + 97) * TOP_GLYPHS.length);
    const segments = Math.max(
      9,
      Math.round(bladeHeight / (fontSize * 0.57)),
    );

    return {
      baseX: (index - 4) * spacing + (noise(index + 7) - 0.5) * spacing,
      baseY: height + 1 + noise(index + 47) * 4,
      coordinates: new Float32Array(segments * 3),
      depth,
      elasticity: 0.76 + noise(index + 113) * 0.42,
      fontSize,
      height: bladeHeight,
      lean: (noise(index + 59) - 0.5) * 8,
      phase: (noise(index + 71) - 0.5) * 0.9,
      segments,
      species,
      sway: 5 + noise(index + 89) * 9,
    };
  }).sort((a, b) => a.depth - b.depth);
};

const stemGlyph = (blade: Blade, slope: number, progress: number) => {
  const direction = slope >= 0 ? 1 : -1;

  switch (blade.species) {
    case 1:
      return progress > 0.72 ? (direction > 0 ? ")" : "(") : "|";
    case 2:
      return progress > 0.5 ? (direction > 0 ? "/" : "\\") : "!";
    case 3:
      return progress < 0.58 ? ":" : direction > 0 ? "/" : "\\";
    case 4:
      return Math.abs(slope) < 0.42 ? "|" : direction > 0 ? ")" : "(";
    case 5:
      return progress < 0.4 ? "!" : direction > 0 ? "/" : "\\";
    default:
      return Math.abs(slope) < 0.42 ? "|" : direction > 0 ? "/" : "\\";
  }
};

export default function AsciiGrass() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let blades: Blade[] = [];
    let glyphAtlas: GlyphAtlas | null = null;
    let glyphAtlases: Record<GrassTheme, GlyphAtlas> | null = null;
    let outlineColor = GRASS_PALETTES[getGrassTheme()].outline;
    let pixelRatio = 1;
    let cssHeight = 0;
    let cssWidth = 0;
    let lastFrameTime = 0;
    const framesPerSecond =
      window.innerWidth <= 480 || (navigator.hardwareConcurrency ?? 8) <= 4
        ? 24
        : 30;
    const frameInterval = 1000 / framesPerSecond;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        window.innerWidth <= 480 ? 1.25 : 1.5,
      );

      cssWidth = bounds.width;
      cssHeight = bounds.height;
      canvas.width = Math.round(cssWidth * pixelRatio);
      canvas.height = Math.round(cssHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      blades = makeBlades(cssWidth, cssHeight);
      const theme = getGrassTheme();
      const palette = GRASS_PALETTES[theme];
      outlineColor = palette.outline;
      glyphAtlases = {
        dark: createGlyphAtlas(pixelRatio, GRASS_PALETTES.dark.grass),
        light: createGlyphAtlas(pixelRatio, GRASS_PALETTES.light.grass),
      };
      glyphAtlas = glyphAtlases[theme];
    };

    const drawGlyph = (
      glyph: string,
      x: number,
      y: number,
      blade: Blade,
      scale = 1,
    ) => {
      if (!glyphAtlas) {
        return;
      }

      const renderedSize = blade.fontSize * scale * 1.1;
      const size = Math.max(
        ATLAS_MIN_SIZE,
        Math.min(ATLAS_MAX_SIZE, Math.round(renderedSize)),
      );
      const column = GLYPH_COLUMNS.get(glyph) ?? 0;
      const row = size - ATLAS_MIN_SIZE;
      const sourceX = column * glyphAtlas.cellPixels;
      const sourceY = row * glyphAtlas.cellPixels;

      context.drawImage(
        glyphAtlas.canvas,
        sourceX,
        sourceY,
        glyphAtlas.cellPixels,
        glyphAtlas.cellPixels,
        x - ATLAS_CELL_SIZE / 2,
        y - ATLAS_CELL_SIZE / 2,
        ATLAS_CELL_SIZE,
        ATLAS_CELL_SIZE,
      );
    };

    const render = (time: number) => {
      context.clearRect(0, 0, cssWidth, cssHeight);

      const loopAngle = ((time % LOOP_DURATION) / LOOP_DURATION) * TAU;

      for (const blade of blades) {
        const horizontalPhase =
          (blade.baseX / Math.max(cssWidth, 1)) * TAU;
        const broadWave = Math.sin(
          loopAngle - horizontalPhase * 0.72 + 0.14 * Math.sin(loopAngle * 2),
        );
        const passingGust = 0.28 * Math.sin(
          loopAngle * 2 + horizontalPhase * 1.35 + blade.phase * 0.25,
        );
        const fineFlutter = 0.12 * Math.sin(
          loopAngle * 3 - horizontalPhase * 0.45 + blade.phase,
        );
        const wind =
          (broadWave * 0.68 + passingGust + fineFlutter) * blade.elasticity;
        const coordinates = blade.coordinates;

        for (let segment = 0; segment < blade.segments; segment += 1) {
          const progress = (segment + 1) / blade.segments;
          const previousProgress = segment / blade.segments;
          const flutter =
            Math.sin(loopAngle * 3 + blade.phase + progress * 1.6) *
            blade.sway *
            0.07;
          const bend =
            blade.lean * progress +
            blade.sway * wind * Math.pow(progress, 1.85) +
            flutter * progress * progress;
          const previousBend =
            blade.lean * previousProgress +
            blade.sway * wind * Math.pow(previousProgress, 1.85);
          const slope = bend - previousBend;
          const x = blade.baseX + bend;
          const y =
            blade.baseY -
            blade.height * progress +
            Math.abs(bend) * 0.045 * progress;

          const coordinateIndex = segment * 3;
          coordinates[coordinateIndex] = x;
          coordinates[coordinateIndex + 1] = y;
          coordinates[coordinateIndex + 2] = slope;
        }

        context.save();
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = outlineColor;
        const outlineBands = 4;
        for (let band = 0; band < outlineBands; band += 1) {
          const startSegment = Math.floor(
            (band * blade.segments) / outlineBands,
          );
          const endSegment =
            Math.floor(((band + 1) * blade.segments) / outlineBands) - 1;
          const startCoordinate = Math.max(0, startSegment - 1) * 3;
          const progress =
            ((startSegment + endSegment) * 0.5 + 1) / blade.segments;
          const taper = 1.34 - progress * 0.76;

          context.beginPath();
          context.moveTo(
            startSegment === 0
              ? blade.baseX
              : coordinates[startCoordinate],
            startSegment === 0
              ? blade.baseY
              : coordinates[startCoordinate + 1],
          );
          for (let segment = startSegment; segment <= endSegment; segment += 1) {
            const coordinateIndex = segment * 3;
            context.lineTo(
              coordinates[coordinateIndex],
              coordinates[coordinateIndex + 1],
            );
          }
          context.lineWidth =
            (blade.fontSize * taper +
              4.3 -
              progress * 1.35 +
              blade.depth * 1.3) *
            0.9;
          context.stroke();
        }
        context.restore();

        for (let segment = 0; segment < blade.segments; segment += 1) {
          const progress = (segment + 1) / blade.segments;
          const coordinateIndex = segment * 3;
          const x = coordinates[coordinateIndex];
          const y = coordinates[coordinateIndex + 1];
          const slope = coordinates[coordinateIndex + 2];
          const glyph =
            segment === blade.segments - 1
              ? TOP_GLYPHS[blade.species]
              : stemGlyph(blade, slope, progress);
          const taper = 1.28 - progress * 0.7;

          drawGlyph(glyph, x, y, blade, taper);
        }

        if (blade.depth > 0.22) {
          drawGlyph(
            GROUND_GLYPHS[blade.species % GROUND_GLYPHS.length],
            blade.baseX,
            blade.baseY - 3,
            blade,
            1.05,
          );
        }
      }

    };

    const tick = (time: number) => {
      if (time - lastFrameTime >= frameInterval) {
        lastFrameTime = time;
        render(time);
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    const restart = () => {
      window.cancelAnimationFrame(animationFrame);
      lastFrameTime = 0;
      render(0);

      if (!reducedMotion.matches && !document.hidden) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      restart();
    });

    const updateTheme = () => {
      const theme = getGrassTheme();
      const palette = GRASS_PALETTES[theme];
      outlineColor = palette.outline;
      glyphAtlas = glyphAtlases?.[theme] ?? glyphAtlas;

      if (reducedMotion.matches && !document.hidden) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    resize();
    resizeObserver.observe(canvas);
    reducedMotion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);
    window.addEventListener("themechange", updateTheme);
    restart();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
      window.removeEventListener("themechange", updateTheme);
    };
  }, []);

  return (
    <div className="ascii-grass" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
