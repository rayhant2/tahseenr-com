"use client"

import React from "react"
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
        <div className="hover:shadow-xl/20 shadow-black-500 transition-shadow duration-300 flex flex-row bg-[#22303b] align-items items-center font-poppins m-4 rounded-xl h-full w-full p-8 md:px-10 px-7">
            <a href={gh_link} onClick={gh_link === "#" ? (e) => e.preventDefault() : undefined} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row justify-between items-center w-full h-full gap-10">
                    <div className="flex flex-col justify-center h-full gap-2">
                        <p className="font-bold text-[20px] opacity-90 mb-4">{project_name}</p>
                        <p className="font-raleway text-sm">{description}</p>
                        <div>
                            {ReturnTags(tech_tags)}
                        </div>
                    </div>
                    
                    <Image
                        src={project_img}
                        alt="Company Logo"
                        className="rounded-xl w-full max-w-[400px] md:max-w-[300px] lg:max-w-[400px] w-[400px]"
                        />

            </a>
        </div>
    );
}


export default ProjectsBox;