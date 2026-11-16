"use client";

import { Fragment } from "react";
import { useLayoutEffect, useRef } from "react";
import { KOI_ONE, type KoiRow } from "./asciiKoiData";

const koi: Array<{ art: KoiRow[]; className: string; fishIndex: number }> = [
  { art: KOI_ONE, className: "ascii-koi--2", fishIndex: 1 },
  { art: KOI_ONE, className: "ascii-koi--3", fishIndex: 2 },
  { art: KOI_ONE, className: "ascii-koi--4", fishIndex: 3 },
];

export default function AsciiKoiScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    const fish = scene?.querySelector<HTMLElement>(".ascii-koi--2");
    const mouth = scene?.querySelector<HTMLElement>("[data-koi-mouth]");
    const lowerFish = scene?.querySelector<HTMLElement>(".ascii-koi--3");
    const lowerMouth = scene?.querySelector<HTMLElement>(
      "[data-koi-lower-mouth]",
    );
    const tailSegments = Array.from(
      scene?.querySelectorAll<HTMLElement>("[data-koi-tail-segment]") ?? [],
    );
    const heading = document.querySelector<HTMLElement>(".intro h1");
    const socials = document.querySelector<HTMLElement>(".social-stubs");
    const content = document.querySelector<HTMLElement>(".site-content");

    if (
      !fish ||
      !mouth ||
      !lowerFish ||
      !lowerMouth ||
      tailSegments.length === 0 ||
      !heading ||
      !socials ||
      !content
    ) {
      return;
    }

    let animationFrame = 0;

    const alignFish = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        fish.style.setProperty("--koi-mouth-offset-y", "0px");
        lowerFish.style.setProperty("--koi-tail-offset-y", "0px");
        lowerFish.style.setProperty("--koi-lower-offset-x", "0px");

        if (window.matchMedia("(max-width: 480px)").matches) {
          lowerFish.style.setProperty("--koi-lower-offset-x", "40px");
          lowerFish.style.setProperty("--koi-tail-offset-y", "20px");
          return;
        }

        const mouthBounds = mouth.getBoundingClientRect();
        const headingBounds = heading.getBoundingClientRect();
        const mouthCenter = mouthBounds.top + mouthBounds.height / 2;
        const targetCenter = headingBounds.top / 2;

        fish.style.setProperty(
          "--koi-mouth-offset-y",
          `${targetCenter - mouthCenter - 50}px`,
        );

        const upperTailProng = tailSegments.reduce((furthest, candidate) =>
          candidate.getBoundingClientRect().right >
          furthest.getBoundingClientRect().right
            ? candidate
            : furthest,
        );
        const tailBounds = upperTailProng.getBoundingClientRect();
        const lowerMouthBounds = lowerMouth.getBoundingClientRect();
        const socialsBounds = socials.getBoundingClientRect();
        const contentBounds = content.getBoundingClientRect();
        const tailCenter = tailBounds.top + tailBounds.height / 2;
        const lowerMouthCenter =
          lowerMouthBounds.left + lowerMouthBounds.width / 2;
        const lowerTargetCenter =
          socialsBounds.bottom +
          (window.innerHeight - socialsBounds.bottom) / 2;
        const lowerHorizontalTarget = contentBounds.left / 2;

        lowerFish.style.setProperty(
          "--koi-tail-offset-y",
          `${lowerTargetCenter - tailCenter + 30}px`,
        );
        lowerFish.style.setProperty(
          "--koi-lower-offset-x",
          `${lowerHorizontalTarget - lowerMouthCenter + 70}px`,
        );
      });
    };

    alignFish();
    window.addEventListener("resize", alignFish);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", alignFish);
    };
  }, []);

  return (
    <div
      className="ascii-koi-scene is-loaded"
      aria-hidden="true"
      data-nosnippet
      ref={sceneRef}
    >
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet="/top-left-koi-transparent.png"
        />
        <img
          alt=""
          className="ascii-koi-reference"
          draggable="false"
          src="/top-left-koi.png"
        />
      </picture>
      {koi.map(({ art, className, fishIndex }) => {
        return (
          <pre className={`ascii-koi ${className}`} key={className}>
            {art.map((row, rowIndex) => (
              <Fragment key={`${fishIndex}-${rowIndex}`}>
                {row.map(([tone, characters], segmentIndex) => (
                  <span
                    className={`ascii-koi__tone ascii-koi__tone--${tone}`}
                    data-koi-mouth={
                      fishIndex === 1 &&
                      rowIndex === 0 &&
                      segmentIndex === 1
                        ? ""
                        : undefined
                    }
                    data-koi-tail-segment={
                      fishIndex === 2 &&
                      rowIndex >= 45 &&
                      tone !== "space"
                        ? ""
                        : undefined
                    }
                    data-koi-lower-mouth={
                      fishIndex === 2 &&
                      rowIndex === 0 &&
                      segmentIndex === 1
                        ? ""
                        : undefined
                    }
                    key={`${fishIndex}-${rowIndex}-${segmentIndex}`}
                  >
                    {characters}
                  </span>
                ))}
                {rowIndex < art.length - 1 ? "\n" : null}
              </Fragment>
            ))}
          </pre>
        );
      })}
    </div>
  );
}
