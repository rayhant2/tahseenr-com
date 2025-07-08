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
        <div className="hover:shadow-xl/20 shadow-black-500 transition-shadow duration-300 flex flex-row align-items items-center font-poppins m-4 rounded-xl h-auto w-3/4 p-6 px-9 gap-8 w-full">
            
            <Image
                src={logo_img}
                alt="Company Logo"
                className="rounded-xl size-25"/>
            <div>
                <div className="mb-3">
                    <div className="flex flex-row justify-between items-end w-full">
                        <p className="font-bold text-[20px] opacity-90">{position}</p>
                        <p className="font-style: italic font-light text-slate-300">{start_date} – {end_date}</p>
                    </div>
                    <p>{company}</p>
                </div>


                <p className="font-raleway">{description}</p>
            </div>
        </div>
    )
}


export default ExperienceBox;