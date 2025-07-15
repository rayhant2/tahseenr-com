"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";
import { start } from "repl";


interface ExperienceProps {
    position: string; 
    company: string;
    start_date: string;
    end_date: string;
    logo_img: StaticImageData; 
    description: string;
}

const ExperienceBox: React.FC<ExperienceProps> = ({position, company, start_date, end_date, logo_img, description}) => {
    return (
        <div className="flex flex-row align-items items-center font-poppins m-4 rounded-xl h-auto p-6 px-9 w-full">
            
            <Image
                src={logo_img}
                alt="Company Logo"
                className="rounded-xl size-25 mr-8"/>
            <div className="w-full">
                <div className="mb-5">
                    <div className="flex flex-row justify-between items-end w-full">
                        <p className="font-bold text-[20px] opacity-90 mr-8">{position}</p>
                        <p className="font-style: italic text-[15px] font-light text-slate-300">{start_date} – {end_date}</p>
                    </div>
                    <p className="opacity-70">{company}</p>
                </div>


                <p className="font-raleway hidden md:block text-[15px] w-4/5">{description}</p>
            </div>
        </div>
    )
}


export default ExperienceBox;