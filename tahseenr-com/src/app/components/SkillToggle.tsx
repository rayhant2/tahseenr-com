"use client";

import React from "react";
import { useState } from "react";

const SkillToggle = (): React.ReactElement => {
    const [item, setItem] = useState('Computer Science')
    return (
        <section
            id = 'Computer Science'>
            
            <div className="m-auto w-auto">{/* button goes here*/}
                <div className="py-2 mt-2 bg-[#0c171f] rounded-full relative overflow-hidden">

                    {/* Moving Toggle */}
                    <div className="absolute top-0 bg-[#535e67] rounded-full h-full w-1/2 ease-in-out transition-all duration-300"
                    style={{left: item === 'Computer Science' ? '0%' : '50%'
                    }}
                    ></div>
                    
                    {/* Button Items */}
                    <div className="relative z-[1] flex text-center text-white font-medium">

                        <div onClick={() => setItem('Computer Science')}
                        className="w-1/2 cursor-pointer px-2 py-1 flex justify-center items-center">

                            <span className={`transition-opacity duration-200 
                            ${item === "Computer Science" ? "opacity-100" : "opacity-70"}`}>
                                Computer Science
                            </span>
                        </div>

                        <div onClick={() => setItem('Business')}
                            className="w-1/2 cursor-pointer px-2 py-1 flex justify-center items-center">
                            <span className={`transition-opacity duration-200 
                            ${item === "Business" ? "opacity-100" : "opacity-70"}`}>
                                Business Admin.
                            </span>    
                        </div>
                    </div>

                
                
                </div>

                
                
            </div>

        </section>

    )
}

export default SkillToggle