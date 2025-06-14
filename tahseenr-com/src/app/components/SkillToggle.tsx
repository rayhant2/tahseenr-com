"use client";

import { useState } from "react";

const SkillToggle = () => {
    const [item, setItem] = useState('Computer Science')
    return (
        <section
            id = 'Computer Science'
            className="bg-white">
            
            <div className="container-m-auto">{/* button goes here*/}
                <div className="m-auto w-max border-2 border-[#d33a3a] py-3
                px-5 rounded-full relative ease-in-out duration-200">

                    <div style={{width: item === 'Computer Science' ? '40%' : '65%', 
                    left: item === 'Computer Science' ? '0' : '36%'
                }}
                className="absolute top-0 bg-[#d33a3a] rounded-full h-full ease-in-out
                duration-200"
                ></div>
                    {/* {button items} */}
                    <div className="flex gap-7 md:text-lg font-bold-z-[1]
                    relative cursor-pointer">

                        <p onClick={() => setItem('Computer Science')}
                            className={`${item === 'Computer Science' && 'text-white opacity-100'}`}>
                                Computer Science
                            </p>

                        <p onClick={() => setItem('Business')}
                            className={`${item === 'Business' && 'text-white opacity-100'}`}>
                                Business
                            </p>
                    </div>

                
                
                </div>

                
                
            </div>

        </section>

    )
}

export default SkillToggle