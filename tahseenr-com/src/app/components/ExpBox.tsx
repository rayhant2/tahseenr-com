"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";


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
                    <div className="flex md:flex-row flex-col md:justify-between md:items-end w-full">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row md:justify-between md:items-end w-full">
                                <p className="font-bold text-[20px] opacity-90 mr-8">{position}</p>
                                <p className="hidden md:block font-style: italic md:text-[15px] text-[12px] font-light text-slate-300 opacity-50">{start_date} – {end_date}</p>
                            </div>
                            <p className="opacity-70">{company}</p>
                        </div>
                        <p className="block md:hidden font-style: italic md:text-[15px] text-[12px] font-light text-slate-300">{start_date} – {end_date}</p>
                    </div>
                </div>


                <p className="font-raleway hidden md:block text-[15px] w-4/5">{description}</p>
            </div>
        </div>
    )
}


export default ExperienceBox;