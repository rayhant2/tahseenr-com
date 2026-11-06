"use client";

import Image from "next/image";
import { useState } from "react";

export default function AsciiBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`ascii-background${isLoaded ? " is-loaded" : ""}`}
      aria-hidden="true"
    >
      <Image
        className="ascii-background__image"
        src="/ascii-background-light.png"
        alt=""
        fill
        priority
        sizes="(orientation: portrait) 155vh, 100vw"
        unoptimized
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
