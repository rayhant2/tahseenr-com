"use client";

import { useEffect, useState } from "react";
import AsciiBackground from "./AsciiBackground";
import AsciiGrass from "./AsciiGrass";
import AsciiKoiScene from "./AsciiKoiScene";
import AsciiLamps from "./AsciiLamps";

type Scene = "gate" | "koi";

export default function RandomScene() {
  const [scene, setScene] = useState<Scene | null>(null);

  useEffect(() => {
    setScene(Math.random() < 0.5 ? "gate" : "koi");
  }, []);

  if (scene === "gate") {
    return (
      <>
        <AsciiBackground />
        <AsciiLamps />
        <AsciiGrass />
      </>
    );
  }

  if (scene === "koi") {
    return <AsciiKoiScene />;
  }

  return <div className="scene-loading" aria-hidden="true" />;
}
