"use client"

import React, { useContext } from "react"
import { ThemeContext } from "../page"
import Image, { StaticImageData } from "next/image";

interface ProjectBoxProps {
    project_name: string,
    description: string,
    project_img: StaticImageData,
    gh_link: string,
    tech_tags: string[],
}

const ReturnTags = (tech_tags: string[]) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
            {tech_tags.map((tag, index) => (
                <div key={index} className="bg-[#54787e] p-2 px-3 rounded-xl text-white text-[11px] sm:text-sm">
                    {tag}
                </div>
            ))}
        </div>
    );
}


const ProjectsBox: React.FC<ProjectBoxProps> = ({project_name, description, project_img, gh_link, tech_tags}) => {
    
    
    
    
    return (
        <div className="hover:shadow-xl/20 shadow-black-500 transition-shadow duration-300 flex flex-row bg-[#22303b] align-items items-center font-poppins m-4 rounded-xl h-full w-full p-6 px-7">
            <a href={gh_link} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row justify-between items-center w-full h-full gap-6">
                    <div className="flex flex-col justify-center h-full gap-2">
                        <p className="font-bold text-[20px] opacity-90 mb-1">{project_name}</p>
                        <p className="font-raleway text-sm mb-3">{description}</p>
                        <div className="">
                            {ReturnTags(tech_tags)}
                        </div>
                    </div>
                    
                    <Image
                        src={project_img}
                        alt="Company Logo"
                        className="rounded-xl size-50"/>

            </a>
        </div>
    );
}


export default ProjectsBox;