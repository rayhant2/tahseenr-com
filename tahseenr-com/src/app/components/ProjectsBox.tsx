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
        <div>
            {tech_tags.map((tag, index) => (
                <div key={index} className="tag">
                    {tag}
                </div>
            ))}
        </div>
    );
}


const ProjectsBox: React.FC<ProjectBoxProps> = ({project_name, description, project_img, gh_link, tech_tags}) => {
    
    
    
    
    return (
        <div className="hover:shadow-xl/20 shadow-black-500 transition-shadow duration-300 flex flex-row bg-[#22303b] align-items items-center font-poppins m-4 mt-7 rounded-xl h-auto w-3/4 p-6 px-9 gap-8">
            <a href={gh_link} target="_blank" rel="noopener noreferrer">
            <p className="font-bold text-[20px] opacity-90">{project_name}</p>
            <p className="font-raleway">{description}</p>
            {ReturnTags(tech_tags)}
            <Image
                src={project_img}
                alt="Company Logo"
                className="rounded-xl size-25"/>
            </a>
        </div>
    );
}


export default ProjectsBox;