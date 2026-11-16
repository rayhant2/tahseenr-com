"use client";

import { useLayoutEffect, useState, type CSSProperties } from "react";

const RIPPLE_RING =
  "     .-''''-.\n   .'        '.\n  /            \\\n /              \\\n(                )\n \\              /\n  \\            /\n   '.        .'\n     '-....-'";

const RING_SCALES = [
  { start: 0.16, end: 0.62 },
  { start: 0.2, end: 0.84 },
  { start: 0.24, end: 1.06 },
  { start: 0.28, end: 1.28 },
] as const;

type Ripple = {
  delay: number;
  duration: number;
  fontSize: number;
  id: number;
  left: number;
  ringCount: number;
  ringDelay: number;
  top: number;
};

function makeRipples(protectedAreas: DOMRect[]): Ripple[] {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const count = viewportWidth <= 600 ? 5 : 8;
  const ripples: Ripple[] = [];
  const protection = viewportWidth <= 600 ? 14 : 24;

  for (let id = 0; id < count; id += 1) {
    const fontSize =
      viewportWidth <= 600 ? 7 + Math.random() * 2 : 9 + Math.random() * 3;
    const halfWidth = fontSize * 7.5;
    const halfHeight = fontSize * 6.5;
    let left = viewportWidth / 2;
    let top = viewportHeight / 2;
    let placed = false;

    for (let attempt = 0; attempt < 80; attempt += 1) {
      left = halfWidth + Math.random() * (viewportWidth - halfWidth * 2);
      top = halfHeight + Math.random() * (viewportHeight - halfHeight * 2);

      const overlapsContent = protectedAreas.some(
        (area) =>
          left + halfWidth > area.left - protection &&
          left - halfWidth < area.right + protection &&
          top + halfHeight > area.top - protection &&
          top - halfHeight < area.bottom + protection,
      );

      if (!overlapsContent) {
        placed = true;
        break;
      }
    }

    if (!placed) {
      continue;
    }

    const duration = 3.8 + Math.random() * 2.2;

    ripples.push({
      delay: -Math.random() * duration,
      duration,
      fontSize,
      id,
      left,
      ringCount: Math.random() < 0.5 ? 3 : 4,
      ringDelay: 0.12 + Math.random() * 0.1,
      top,
    });
  }

  return ripples;
}

export default function AsciiRainRipples() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useLayoutEffect(() => {
    let animationFrame = 0;

    const placeRipples = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const contentBlocks = Array.from(
          document.querySelectorAll<HTMLElement>(".site-content > *"),
        ).map((element) => element.getBoundingClientRect());

        if (contentBlocks.length > 0) {
          setRipples(makeRipples(contentBlocks));
        }
      });
    };

    placeRipples();
    window.addEventListener("resize", placeRipples, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", placeRipples);
    };
  }, []);

  return (
    <div className="ascii-ripple-field" aria-hidden="true" data-nosnippet>
      {ripples.map((ripple) => {
        const style: CSSProperties = {
          fontSize: `${ripple.fontSize}px`,
          left: `${ripple.left}px`,
          top: `${ripple.top}px`,
        };

        return (
          <div className="ascii-ripple" key={ripple.id} style={style}>
            {Array.from({ length: ripple.ringCount }, (_, index) => (
              <pre
                className="ascii-ripple__ring"
                key={index}
                style={
                  {
                    "--ring-end-scale": RING_SCALES[index].end,
                    "--ring-start-scale": RING_SCALES[index].start,
                    animationDelay: `${ripple.delay + index * ripple.ringDelay}s`,
                    animationDuration: `${ripple.duration}s`,
                  } as CSSProperties
                }
              >
                {RIPPLE_RING}
              </pre>
            ))}
          </div>
        );
      })}
    </div>
  );
}
