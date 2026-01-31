"use client";

import Image from "next/image";
import Link from "next/link";
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
    top: "15%",
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
    fontSize: "1.1vw",
    marginTop: "4px",
    marginLeft: "4px",
    marginBottom: "20px",
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
    <span className="inline-flex items-center gap-1 px-2 py-[2px] mx-1 bg-white/70 rounded-md align-middle">
      <Image src={src} alt={alt} width={22} height={22} />
      <span className="text-[15px] font-semibold text-[#1e1e1e] leading-none">
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
          <p style={styles.title}>[SWE / ML]</p>
        </div>

        <div className="flex flex-row gap-6 ml-3 mb-15 items-center" style={{color:"black"}}>
            <Link href="/files/TahseenRayhanResume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-xl text-black">
              Resume
            </Link>
            <p className="text-sm font-bold">\\</p>
            <Link href="https://www.linkedin.com/in/tahseenr/" target="_blank" rel="noopener noreferrer" className="underline text-xl text-black">
              LinkedIn
            </Link>
            <p className="text-sm font-bold">\\</p>
            <Link href="https://github.com/rayhant2" target="_blank" rel="noopener noreferrer" className="underline text-xl text-black">
              Github
            </Link>
            <p className="text-sm font-bold">\\</p>
            <Link href="https://x.com/tahseenr0" target="_blank" rel="noopener noreferrer" className="underline text-xl text-black">
              X
            </Link>
            
        </div>


        <div style={{fontFamily: "Pretendard", fontSize: "0.9vw", lineHeight: "1.6", color: "#000", maxWidth: "720px",}}
              className="ml-2">
          I am an <p className="font-bold inline-flex mx-2">Intern of Technical Staff</p> at
          
          <span className="inline-flex items-center gap-1 px-2 py-[2px] ml-3 mr-2 bg-white/70 rounded-md align-middle">
            <Image src={"/coherelogo.png"} alt={"Cohere"} width={22} height={22} />
            <span className="text-[15px] font-semibold text-[#1e1e1e] leading-none">
              {"Cohere"}
            </span>
          </span>
          , helping bridge human intuition and model performance using LLM evaluations. 
          I focus on human-in-the-loop (HITL) infrastructure using human-grounded analytics to analyze 
          inter-rater reliability (IRR), surface performance regressions, and drive model refinement.
          </div>
          <div className="text-black ml-3 mt-7">&&</div>
          <div style={{fontFamily: "Pretendard", fontSize: "0.9vw", lineHeight: "1.6", color: "#000", maxWidth: "680px",}}
              className="ml-2 mt-7">
          I study <p className="inline-flex mr-2 ml-2 font-bold">Computer Science</p> at
          <span className="inline-flex items-center gap-1 px-2 py-[3px] ml-3 mr-2 mb-[3px] bg-white/70 rounded-md align-middle">
            <Image src={'/Uwaterloo_logo.png'} alt={"University of Waterloo"} width={20} height={20} />
            <span className="text-[15px] font-semibold text-[#1e1e1e] leading-none ml-1">
              {"University of Waterloo"}
            </span>
          </span>
          
          , <p className="inline-flex mr-2 ml-2 font-bold">BBA</p> at
          <span className="inline-flex items-center gap-1 px-2 py-[3px] ml-3 mb-[3px] bg-white/70 rounded-md align-middle">
            <Image src={'/laurier_logo.png'} alt={"Wilfrid Laurier University"} width={20} height={20} />
            <span className="text-[15px] font-semibold text-[#1e1e1e] leading-none ml-1">
              {"Wilfrid Laurier"}
            </span>
          </span>
          and I'm expanding into ML research focusing on evals, safety, and
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