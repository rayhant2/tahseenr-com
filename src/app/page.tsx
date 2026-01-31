"use client";

import Image from "next/image";
import Link from "next/link";
import "animate.css";
import "@fontsource/pretendard";
import "@fontsource/pretendard/400.css";
import TvLoop from "@/app/components/TVLoop";

const styles = {
  background: {
    objectFit: "cover" as const,
    zIndex: 0,
    filter: "brightness(var(--bg-brightness, 1)) contrast(0.8)",
    objectPosition: "center var(--bg-pos, -20%)", 
    transform: "scale(var(--bg-scale, 1.9))", 
    transition: "all 0.3s ease",
  },
  textBlock: {
    position: "absolute" as const,
    top: "var(--text-top, 8%)",
    left: "5%",
    zIndex: 20,
    padding: "20px",
    transition: "all 0.3s ease",
  },
  tvWrapper: {
    position: "absolute" as const,
    top: "var(--tv-top, 64%)",
    left: "var(--tv-left, 68%)",
    transform: "translate(-50%, -50%) scale(var(--tv-scale, 1))",
    zIndex: 10,
    transition: "all 0.3s ease",
  },
};

export default function Home() {
  return (
    <main 
      className="relative w-screen h-full overflow-hidden
                 [--bg-brightness:1.6] [--bg-scale:1.9] [--text-top:14%]
                 md:[--bg-brightness:1.4] md:[--bg-scale:1.18] md:[--bg-pos:30%] md:[--text-top:18%]
                 [--tv-top:83%] [--tv-left:60%] [--tv-scale:0.8] 
                 md:[--tv-top:73%] md:[--tv-left:72%] md:[--tv-scale:1]"
    >
      <Image
        src="/background.webp"
        alt="Background"
        fill
        priority
        style={styles.background}
        sizes="100vw"
      />

      <div style={styles.textBlock} className="max-w-[90vw] md:max-w-[67vw] lg:max-w-[50vw]">
        <div className="flex flex-row gap-3 items-end mb-2 md:mb-3">
          <h1 className="font-pretendard font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black m-0 leading-tight">
            Tahseen Rayhan
          </h1>
          <p className="font-pretendard font-normal text-sm md:text-base lg:text-lg text-[#1e1e1e] mb-1 whitespace-nowrap">
            [SWE / ML]
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-4 md:gap-6 md:mb-12 ml-1 mb-8 items-center text-[#111111]">
          <Link href="/files/TahseenRayhanResume.pdf" target="_blank" className="underline text-md md:text-xl">Resume</Link>
          <p className="text-sm font-bold opacity-70">\\</p>
          <Link href="https://linkedin.com/in/tahseenr/" target="_blank" className="underline text-md md:text-xl">LinkedIn</Link>
          <p className="text-sm font-bold opacity-70">\\</p>
          <Link href="https://github.com/rayhant2" target="_blank" className="underline text-md md:text-xl">Github</Link>
          <p className="text-sm font-bold opacity-70">\\</p>
          <Link href="https://x.com/tahseenr0" target="_blank" className="underline text-md md:text-xl">X</Link>
        </div>

        <div className="max-w-[720px] max-h-[35vh] md:max-h-[calc(64vh-180px)] overflow-y-auto no-scrollbar space-y-6">
          <div className="font-pretendard text-sm md:text-lg lg:text-[1.1rem] leading-relaxed text-black ml-1">
            I&apos;m an <span className="font-bold">Intern of Technical Staff</span> at&nbsp;
            <span className="inline-flex items-center gap-1 px-2 py-[2px] mr-1 bg-white md:bg-white/70 rounded-md align-middle border border-black/5">
              <Image src="/coherelogo.png" alt="Cohere" width={18} height={18} />
              <span className="text-sm font-semibold text-[#1e1e1e]">Cohere</span>
            </span>
            working on AI evaluations. 
            I focus on human-in-the-loop infrastructure using human-grounded analytics to analyze 
            IRR, surface performance regressions, and drive refinement.
          </div>

          <div className="text-black ml-1 font-bold text-xs md:text-lg">&&</div>

          <div className="font-pretendard text-sm md:text-lg lg:text-[1.1rem] leading-relaxed text-black ml-1">
            I study <span className="font-bold">Computer Science</span> at&nbsp;
            <span className="inline-flex items-center gap-1 px-2 py-[2px] mr-1 mb-1 bg-white md:bg-white/70 rounded-md align-middle border border-black/5">
              <Image src="/Uwaterloo_logo.png" alt="UW" width={16} height={16} />
              <span className="text-sm font-semibold text-[#1e1e1e]">UWaterloo</span>
            </span>
            , <span className="font-bold">BBA</span> at&nbsp;
            <span className="inline-flex items-center gap-1 px-2 py-[3px] md:mr-0 mr-1 bg-white md:bg-white/70 rounded-md align-middle border border-black/5">
              <Image src="/laurier_logo.png" alt="WLU" width={16} height={16} />
              <span className="text-sm font-semibold text-[#1e1e1e]">Wilfrid Laurier</span>
            </span>
            and expand into research focusing on AI safety and control.
          </div>
        </div>
      </div>

      <div style={styles.tvWrapper}>
        <TvLoop />
      </div>
    </main>
  );
}