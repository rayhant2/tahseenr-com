"use client";

import Image from "next/image";
import Link from "next/link";
import "animate.css";
import "@fontsource/pretendard";
import "@fontsource/pretendard/400.css";
import TvLoop from "@/app/components/TVLoop";

export default function Home() {
  return (
    <main className="relative w-screen min-h-screen overflow-hidden bg-[#ffffff]">
      
      {/* 1. MOBILE BACKGROUND - Enlarged and translated vertically up */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src="/background/Background.webp"
          alt="Mobile Background"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(1.6) contrast(0.8)",
            /* objectPosition: center and a negative percentage or px shifts it UP */
            transform: "scale(2.2) translateY(-5.5%)", // Increased scale for mobile
          }}
        />
      </div>

      {/* 2. TABLET/IPAD BACKGROUND */}
      <div className="hidden md:block lg:hidden absolute inset-0 z-0">
        <Image
          src="/background/Background.webp"
          alt="Tablet Background"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(1.4) contrast(0.8)",
            objectPosition: "center 30%",
            transform: "scale(1.3)",
          }}
        />
      </div>

      {/* 3. DESKTOP BACKGROUND */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/background/Background.webp"
          alt="Desktop Background"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(1.4) contrast(0.8)",
            objectPosition: "center 40%",
            transform: "scale(1.05)",
          }}
        />
      </div>

      {/* Content Block */}
      <div 
        className="absolute z-20 left-[5%] p-[20px] transition-all duration-300
                   top-[11.5%] md:top-[22%] lg:top-[20%]
                   max-w-[90vw] md:max-w-[67vw] lg:max-w-[50vw]"
      >
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
          <p className="text-sm font-bold opacity-30">\\</p>
          <Link href="https://linkedin.com/in/tahseenr/" target="_blank" className="underline text-md md:text-xl">LinkedIn</Link>
          <p className="text-sm font-bold opacity-30">\\</p>
          <Link href="https://github.com/rayhant2" target="_blank" className="underline text-md md:text-xl">Github</Link>
          <p className="text-sm font-bold opacity-30">\\</p>
          <Link href="https://x.com/tahseenr0" target="_blank" className="underline text-md md:text-xl">X</Link>
        </div>

        <div className="max-w-[720px] max-h-[35vh] md:max-h-[calc(64vh-180px)] overflow-y-auto no-scrollbar space-y-3 md:space-y-6">
          <div className="font-pretendard text-sm md:text-lg lg:text-[1.1rem] leading-relaxed text-black ml-1">
            I&apos;m an <span className="font-bold">Intern of Technical Staff</span> at&nbsp;
            <a 
              href="https://cohere.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2 py-[2px] mr-1 bg-white md:bg-white/60 rounded-md align-middle border border-black/5 hover:bg-white hover:border-black/10 transition-all duration-200"
            >
              <Image src="/coherelogo.png" alt="Cohere" width={18} height={18} />
              <span className="text-sm font-semibold text-[#1e1e1e]">Cohere</span>
            </a>
            working on AI evaluations. 
            I focus on human-in-the-loop infrastructure using human-grounded analytics to analyze 
            IRR, surface performance regressions, and drive refinement.
          </div>

          <div className="text-black ml-1 font-bold text-xs md:text-lg">&&</div>

          <div className="font-pretendard text-sm md:text-lg lg:text-[1.1rem] leading-relaxed text-black ml-1">
            I study <span className="font-bold">Computer Science</span> at&nbsp;
            <a 
              href="https://uwaterloo.ca/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2 py-[2px] mr-1 bg-white md:bg-white/60 rounded-md align-middle border border-black/5 hover:bg-white hover:border-black/10 transition-all duration-200"
            >
              <Image src="/Uwaterloo_logo.png" alt="UW" width={16} height={16} />
              <span className="text-sm font-semibold text-[#1e1e1e]">UWaterloo</span>
            </a>
            , <span className="font-bold">BBA</span> at&nbsp;
            <a 
              href="https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/index.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2 py-[3px] md:mr-0 mr-1 bg-white md:bg-white/60 rounded-md align-middle border border-black/5 hover:bg-white hover:border-black/10 transition-all duration-200"
            >
              <Image src="/laurier_logo.png" alt="WLU" width={16} height={16} />
              <span className="text-sm font-semibold text-[#1e1e1e]">Wilfrid Laurier</span>
            </a>
            , and expanding into research focusing on AI safety and control.
          </div>
        </div>
      </div>

      {/* TV Loop Container - Enlarged for Mobile and positioned */}
      <div 
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300
                   top-[80%] left-[60%] scale-[0.8] 
                   md:top-[75%] md:left-[74%] md:scale-[1]
                   lg:top-[69%] lg:left-[68%]"
      >
        <TvLoop />
      </div>
    </main>
  );
}