"use client";

import Image from "next/image";
import "animate.css";
import "@fontsource/pretendard";
import "@fontsource/pretendard/400.css";
import UW from "../../public/Uwaterloo_logo.png";
import WLU from "../../public/laurier_logo.png";

import TvLoop from "@/app/components/TVLoop";

/* ---------------------------------- */
/* Styles                              */
/* ---------------------------------- */
const styles = {
  container: {
    position: "relative" as const,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    objectFit: "cover" as const,
    zIndex: 0,
  },
  textBlock: {
    position: "absolute" as const,
    top: "20%",
    left: "5%",
    zIndex: 20,
    padding: "40px",
  },
  name: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "3.6vw",
    margin: 0,
    color: "black",
  },
  title: {
    fontFamily: "Pretendard",
    fontWeight: 400,
    fontSize: "1.5vw",
    marginTop: "4px",
    marginBottom: "13px",
    color: "#1e1e1e",
  },
  subtitle: {
    fontFamily: "Pretendard",
    color: "#1e1e1e",
    marginBottom: "6px",
  },
  company: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "1.1vw",
    color: "#1e1e1e",
    margin: 0,          // 🔑 removes default <p> margin
    lineHeight: "24px", // 🔑 vertically centers with logo
  },
  tvWrapper: {
    position: "absolute" as const,
    top: "64%",
    left: "68%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  },
};

function InlineBadge({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-[2px] mx-1 bg-white rounded-md align-middle">
      <Image src={src} alt={alt} width={16} height={16} />
      <span className="text-sm font-semibold text-[#1e1e1e] leading-none">
        {text}
      </span>
    </span>
  );
}
/* ---------------------------------- */
/* Component                           */
/* ---------------------------------- */
export default function Home() {
  return (
    <main style={styles.container}>
      {/* Background */}
      <Image
        src="/background.webp"
        alt="Background"
        fill
        priority
        style={styles.background}
      />

      {/* Intro Text */}
      <div style={styles.textBlock}>
        <div className="flex flex-row gap-4 items-end">
          <h1 style={styles.name}>Tahseen Rayhan</h1>
          <p style={styles.title}>ML Developer</p>
        </div>


        <div style={{fontFamily: "Pretendard", fontSize: "1.05vw", lineHeight: "1.6", color: "#1e1e1e", maxWidth: "680px",}}>
          I am an Intern of Technical Staff at
          <InlineBadge
            src="/coherelogo.png"
            alt="Cohere"
            text="Cohere"
          />
          , working on evaluating and improving LLMs to help support reliable model iteration and deployment.
          On a daily basis, I help build eval pipelines using model judgements to surface regressions, weaknesses,
          and comparative performance, while assessing model quality over time. I study Computer Science at the
          <InlineBadge
            src='/Uwaterloo_logo.png'
            alt="University of Waterloo"
            text="University of Waterloo"
          />
          , and Business at
          <InlineBadge
            src="/laurier_logo.png"
            alt="Wilfrid Laurier University"
            text="Wilfrid Laurier"
          />
          , and I am expanding into ML research focusing on evaluation, safety, and
          control for agentic and physical AI systems.
        </div>
        {/* Cohere badge */}
        

        

        



      </div>

      {/* TV Loop */}
      <div style={styles.tvWrapper}>
        <TvLoop />
      </div>
    </main>
  );
}