"use client"

import React, { useState } from "react";
import Resume from "../../public/resume.svg";
import Image from "next/image";
import ProfileImage from '../../public/profile.png';
import RenderExpProj from "./components/RenderExpProj";
import Coursework from "./components/Coursework";
import Footer from "./components/Footer";
import 'animate.css'
import { motion } from "motion/react"
import { ThemeContext, ExProjContext } from "./contexts/ThemeContext";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};


export default function HomeCopy() {
  const [major, setMajor] = useState('Computer Science')
  const [exProj, setExProj] = useState('Experience')

  // DO WE EVEN NEED THIS FUNCTION IF ALL WE ARE DOING IS CHANGING THE STATE?? REDUNDANT!!
  function toggleTheme(selectedMajor: 'Computer Science' | 'Business') {
    setMajor(prevMajor => prevMajor !== selectedMajor ? selectedMajor : prevMajor)
  }

  function toggleExProj(selected: 'Experience' | 'Projects') {
    setExProj(prevExProj => prevExProj !== selected ? selected : prevExProj)
  }

  return (
    <div className="sm:px-25 px-8">
    <div className="sm:mt-10 sm:px-30 pt-20 content-center">
      <ThemeContext.Provider value={major}>
        
        <section id="intro" className="flex items-center justify-center">

            <div className="flex md:flex-row flex-col w-full h-full items-center justify-center max-w-[1000px] mx-auto">
                <div className="flex flex-col items-center gap-6 sm:pt-4 sm:pr-4 sm:pb-4 sm:mr-10 shrink-0 mb-4">
                    
                    {/* <Image
                        src={ProfileImage}
                        alt="Profile Picture"
                        className="rounded-full sm:size-45 size-40 aspect-square object-cover border-2 border-white"/> */}


                    <div className="flex flex-row gap-7 animate__animated animate__fadeIn sm:mb-0 mb-4">
                        
                        <a href="/TahseenRayhanResume.pdf" target="_blank" rel="noopener noreferrer">
                            <Image
                            src={Resume}
                            alt="Resume"
                            
                            width={22}
                            height={22}
                            />
                        </a>

                        <a href="https://www.linkedin.com/in/tahseenr/" target="_blank" rel="noopener noreferrer">
                            <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            
                            width={20}
                            height={20}
                            />
                        </a>
                        <a href="https://github.com/rayhant2" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/github.svg"
                                alt="Github"
                                width={20}
                                height={20}
                                />
                        </a>
                        <a href="https://x.com/tahseenr0" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/xlogo.svg"
                                alt="X"
                                width={20}
                                height={20}
                                />
                        </a>
                    </div>    
                    
                </div>

                <div className="font-poppins flex flex-col justify-center h-full w-full flex-1 mb-5">
                    <div className="max-w-3xl w-full">
                        {/* <div className="animate__animated animate__fadeInDown flex flex-row gap-2 align-items items-end sm:mt-0 mt-4">
                            <p className="md:text-[18px] text-sm">Hi, I&apos;m</p>
                            <p className="font-bold md:text-[30px] text-xl">Tahseen Rayhan 👋</p>
                        </div> */}
                        <div className="animate__animated animate__fadeInDown flex md:flex-row flex-col gap-1 mt-1 md:text-[14px] font-light">
                            <div className="flex flex-row gap-1">
                              <p className="text-[#f0bb16] sm:text-md text-sm">CS</p>
                              <p className="sm:text-md text-sm">@ UWaterloo, </p>
                              <p className="text-[#bb88f7] sm:text-md text-sm">BBA</p>
                              <p className="sm:text-md text-sm">@ Wilfrid Laurier </p>
                            </div>
                            <p className="pl-1 text-slate-400 hidden md:block">(Dual Degree)</p>
                        </div>
                        <p className="block sm:hidden opacity-65 text-sm font-style: italic mt-2 -ml-1 mb-3">(Software / ML Developer)</p>
                        <div className="mt-2 mb-1">
                            <a href="/TahseenRayhanResume.pdf" target="_blank" rel="noopener noreferrer">
                                <p className="sm:text-[#FFFCE3] text-[#faf3bb] sm:text-sm text-xs sm:mt-0 mt-5 mb-3 font-style: hover:italic hover:underline">View my resume 🔗</p>
                            </a>
                        </div>
                    </div>


                    <div className="animate__animated animate__fadeIn flex flex-col justify-end my-6">
                        <p className="text-sm">Switch between my journeys in ...</p>
                        {/* SKILL TOGGLE */}
                          <section className="text-sm"
                        id = 'Computer Science'>
            
            <div className="ml-0 w-auto">{/* button goes here*/}
                <div className="py-2 mt-3 bg-[#1b252b] rounded-full relative overflow-hidden">

                    {/* Moving Toggle */}
                    <div className="absolute top-0 bg-[#535e67] rounded-full h-full w-1/2 ease-in-out transition-all duration-300"
                    style={{left: major === 'Computer Science' ? '0%' : '50%'
                    }}
                    ></div>
                    
                    {/* Button Items */}
                    <div className="relative z-[1] flex text-center text-white font-medium">

                        <div onClick={() => toggleTheme("Computer Science")}
                        className="w-1/2 cursor-pointer px-2 py-1 flex justify-center items-center">

                            <span className={`transition-opacity duration-200 
                            ${major === "Computer Science" ? "opacity-100" : "opacity-70"}`}>
                                Computer Science
                            </span>
                        </div>

                        <div onClick={() => toggleTheme("Business")}
                            className="w-1/2 cursor-pointer px-2 py-1 flex justify-center items-center">
                            <span className={`transition-opacity duration-200 
                            ${major === "Business" ? "opacity-100" : "opacity-70"}`}>
                                Business Admin.
                            </span>    
                        </div>
                    </div>

                
                
                </div>

                
                
            </div>

        </section>
                        {/* SKILL TOGGLE */}
                    </div>
                </div>
            </div>

            
        </section>

        <motion.p
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5, ease: "easeOut"}}
            viewport={{ once: true }}
            className="font-raleway font-light mt-4 bg-[#0c171f] p-3 px-4 pb-5 rounded-2xl hidden sm:block">
                I&apos;m a full-stack software developer with growing experience in ML. I&apos;ve grown a sharp eye for business needs, solving real problems, increase efficiency, and turn complex problems into clean, useable products.
        </motion.p>

        <div className="h-[1px] w-full flex justify-center sm:my-10 mt-2 pb-5 sm:opacity-100 opacity-60">
            <div className="bg-white h-[1px] w-1/4 mb-4"/>
        </div>

        <ExProjContext.Provider value={exProj}>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="sm:mt-10 mt-8 mb-3 mx-1 px-2"
            >
                <div className="h-10 bg-[#1b252b] rounded-xl relative overflow-hidden">

                    {/* Moving Toggle */}
                    <div className="absolute top-0 bg-[#2a323b] rounded-xl h-full w-1/2 ease-in-out transition-all duration-300"
                    style={{left: exProj === 'Experience' ? '0%' : '50%'
                    }}
                    ></div>
                    
                    {/* Button Items */}
                    <div className="relative z-[1] text-sm flex text-center text-white items-center h-full font-medium">

                        <div onClick={() => toggleExProj("Experience")}
                        className="w-1/2 cursor-pointer px-2 h-full flex justify-center items-center">

                            <span className={`transition-opacity duration-200 
                                ${exProj === "Experience" ? "opacity-100" : "opacity-70"}`}>
                                    Experience
                            </span>
                        </div>

                        <div onClick={() => toggleExProj("Projects")}
                            className="w-1/2 cursor-pointer px-2 h-full flex justify-center items-center">
                            <span className={`transition-opacity duration-200 
                            ${exProj === "Projects" ? "opacity-100" : "opacity-70"}`}>
                                Projects
                            </span>    
                        </div>
                    </div>

                
                
                </div>
            </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="mb-5 bg-[#0b131a]/40 rounded-xl pr-10 pb-5"
        >
            <RenderExpProj />
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex w-full items-center justify-center my-10"
        >
            <div className="bg-white h-[1px] w-1/4 sm:opacity-100 opacity-60"/>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="bg-[#0c171f] rounded-xl p-3 mx-1"
        >
            <Coursework/>
        </motion.div>
        


        </ExProjContext.Provider>
      </ThemeContext.Provider>
    </div>
    

    <motion.div
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once:true }}
        className="w-screen mx-[calc(50%-50vw)]">

        <Footer/>

    </motion.div>
    </div>
  );
}
