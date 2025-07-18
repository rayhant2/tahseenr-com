"use client"

import React, { useState } from "react";
import Resume from "../../public/resume.svg";
import CompSciProj from "./components/CSProjects";
import BusProj from "./components/BusProjects";
import Image from "next/image";
import ProfileIntro from "./components/ProfileIntro";
import Experiences from "./components/Experience";
import ProfileImage from '../../public/TahseenRayhan.png';
import ProjectsBox from "./components/ProjectsBox";
import RenderProjects from "./components/Projects";
import RenderExpProj from "./components/RenderExpProj";
import Coursework from "./components/Coursework";
import Footer from "./components/Footer";
import 'animate.css'
import { motion } from "motion/react"

export const ThemeContext = React.createContext('Computer Science')
export const ExProjContext = React.createContext('Experience')

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const  // <-- TypeScript fix: enforce as valid easing string
    }
  }
};


export default function Home() {
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
    <div>
    <div className="min-h-screen p-8 sm:mt-10 content-center">
      <ThemeContext.Provider value={major}>
        
        <section id="intro" className="flex items-center justify-center">

            <div className="flex md:flex-row flex-col w-full h-full align-items items-center md:gap-8 gap-6">
                <div className="flex flex-col items-center gap-6 p-4">
                    
                    <Image
                        src={ProfileImage}
                        alt="Profile Picture"
                        className="rounded-full size-50 aspect-square object-cover border-4 border-white"/>

                    <div className="flex flex-row gap-7">
                        
                        <a href="/TahseenRayhanResume.pdf" target="_blank" rel="noopener noreferrer">
                            <Image
                            src={Resume}
                            alt="Resume"
                            
                            width={30}
                            height={30}
                            />
                        </a>

                        <a href="https://www.linkedin.com/in/tahseenr/" target="_blank" rel="noopener noreferrer">
                            <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            
                            width={30}
                            height={30}
                            />
                        </a>
                        <a href="https://github.com/rayhant2" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/github.svg"
                                alt="Github"
                                width={30}
                                height={30}
                                />
                        </a>
                        <a href="https://x.com/tahseenr0" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/xlogo.svg"
                                alt="X"
                                width={30}
                                height={30}
                                />
                        </a>
                    </div>    
                    
                </div>

                <div className="font-poppins flex flex-col justify-center h-full w-full md:w-2/3 mb-5">
                    <div className="mb-5 w-full flex flex-col">
                        <div className="animate__animated animate__fadeInDown flex flex-row gap-2 align-items items-end">
                            <p className="md:text-[18px]">Hi, I'm</p>
                            <p className="font-bold md:text-[33px] text-2xl">Tahseen Rayhan 👋</p>
                        </div>
                        <div className="animate__animated animate__fadeInDown flex md:flex-row flex-col gap-1 mt-1 md:text-[14px] font-light">
                            <div className="flex flex-row gap-1">
                              <p className="text-[#f0bb16]">CS</p>
                              <p>@ UWaterloo, </p>
                              <p className="text-[#bb88f7]">BBA</p>
                              <p>@ Wilfrid Laurier </p>
                            </div>
                            <p className="pl-1 text-slate-400 hidden md:block">(Dual Degree)</p>
                        </div>
                    </div>


                    <div className="animate__animated animate__fadeIn flex flex-col justify-end">
                        <p>Explore my journey in ...</p>
                        {/* SKILL TOGGLE */}
                          <section
                        id = 'Computer Science'>
            
            <div className="m-auto w-auto">{/* button goes here*/}
                <div className="py-2 mt-3 bg-[#0c171f] rounded-full relative overflow-hidden">

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


        <p className="font-raleway font-light mt-8 bg-[#0c171f] p-8 rounded-2xl">I'm a full-stack software developer expanding into ML. I've grown a sharp eye for business needs, building tools to solve real problems, increase efficiency, and turn complex problems into clean, useable products.</p>

        <div className="h-[1px] w-full flex justify-center my-10">
            <div className="bg-white h-[1px] w-1/4"/>
        </div>

        <ExProjContext.Provider value={exProj}>

          <div className="mt-10 mb-3 mx-1">{/* button goes here*/}
                <div className="h-10 bg-[#0c171f] rounded-xl relative overflow-hidden">

                    {/* Moving Toggle */}
                    <div className="absolute top-0 bg-[#2a323b] rounded-xl h-full w-1/2 ease-in-out transition-all duration-300"
                    style={{left: exProj === 'Experience' ? '0%' : '50%'
                    }}
                    ></div>
                    
                    {/* Button Items */}
                    <div className="relative z-[1] flex text-center text-white items-center h-full font-medium">

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

                
                
            </div>

        {/* DONE UP TO HERE!!! */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="mb-5 bg-[#0b131a]/40 rounded-xl pr-10 pb-5"
        >
            <RenderExpProj />
        </motion.div>
        {/* <div className="mb-5 bg-[#0b131a]/40 rounded-xl pr-10 pb-5">
          <RenderExpProj/>
        </div> */}

        {/* <div className="flex w-full items-center justify-center my-10">
            <div className="bg-white h-[1px] w-1/4"/>
        </div> */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex w-full items-center justify-center my-10"
        >
            <div className="bg-white h-[1px] w-1/4"/>
        </motion.div>

        {/* <div className="bg-[#0c171f] rounded-xl p-3 mx-1">
            <Coursework/>
        </div> */}
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
    
    <div className="w-full">
        <Footer/>
    </div>
    </div>
  );
}
