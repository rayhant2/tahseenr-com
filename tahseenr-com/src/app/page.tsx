"use client"

import React, { useState } from "react";

import Image from "next/image";
import ProfileIntro from "./components/ProfileIntro";
import Experiences from "./components/Experience";
import ProfileImage from '../../public/TahseenRayhan.png';

export const ThemeContext = React.createContext()

export default function Home() {
  const [major, setMajor] = useState('Computer Science')
  // const [item, setItem] = useState('Computer Science') <-- THIS IS FROM SKILL TOGGLE

  // DO WE EVEN NEED THIS FUNCTION IF ALL WE ARE DOING IS CHANGING THE STATE?? REDUNDANT!!
  function toggleTheme(selectedMajor: 'Computer Science' | 'Business') {
    setMajor(prevMajor => prevMajor !== selectedMajor ? selectedMajor : prevMajor)
  }

  return (
    <div className="p-10 w-screen h-screen content-center">
      <ThemeContext.Provider value={major}>
        
        <section id="intro">

            <div className="flex flex-row gap-8 items-center">
                <div className="flex flex-col items-center gap-4">
                    
                    <Image
                        src={ProfileImage}
                        alt="Profile Picture"
                        className="rounded-full size-35 border-4 border-white"/>

                    <div className="flex flex-row gap-5">
                        
                        <a href="https://www.linkedin.com/in/tahseenr/" target="_blank" rel="noopener noreferrer">
                            <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            
                            width={24}
                            height={24}
                            />
                        </a>
                        <a href="https://github.com/rayhant2" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/github.svg"
                                alt="Github"
                                width={24}
                                height={24}
                                />
                        </a>
                        <a href="https://x.com/tahseenr0" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/xlogo.svg"
                                alt="X"
                                width={24}
                                height={24}
                                />
                        </a>
                    </div>    
                    
                </div>

                <div className="font-poppins flex flex-col content-center">
                    <div className="mb-5">
                        <div className="flex flex-row gap-2 align-items items-end">
                            <p>Hi, I'm</p>
                            <p className="font-bold text-3xl">Tahseen Rayhan 👋</p>
                        </div>
                        <div className="flex flex-row gap-1 mt-1 text-[14px]">
                            <p className="text-[#f0bb16] duration-400">CS</p>
                            <p>@ UWaterloo, </p>
                            <p className="text-[#bb88f7] duration-400">BBA</p>
                            <p>@ Wilfrid Laurier </p>
                            <p className="pl-1 text-slate-400">(Dual Degree)</p>
                        </div>
                    </div>


                    <div className="flex flex-col justify-end">
                        <p>Explore my journey in ...</p>
                        {/* SKILL TOGGLE */}
                          <section
            id = 'Computer Science'>
            
            <div className="m-auto w-auto">{/* button goes here*/}
                <div className="py-2 mt-2 bg-[#0c171f] rounded-full relative overflow-hidden">

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


        
        {/* <ProfileIntro/> <--- DO NOT UNCOMMENT */}
        <Experiences/>

      </ThemeContext.Provider>
    </div>
    
  );
}
