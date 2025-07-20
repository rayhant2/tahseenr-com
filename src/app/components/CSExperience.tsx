"use client"

import Image from "next/image";
import ExperienceBox from "./ExpBox"
import WatStreetLogo from '../../../public/wat_street_logo.jpeg';
import PhilerAiLogo from '../../../public/philer_ai_logo.jpeg';
import UTorontoLogo from '../../../public/university_of_toronto_logo.jpeg';
import WatoLogo from '../../../public/watonomous_logo.jpeg';
import BrandEq from '../../../public/brandeq_logo.jpg';

const CompSciExperience = (): React.ReactElement => {
    return (
            <div className="w-full relative">

                <div className="absolute left-[4.5rem] top-30 md:bottom-30 bottom-30 w-[2px] bg-white/30 rounded-full -z-10" />

                <div className="flex flex-col">
                    <ExperienceBox 
                        position="Software Engineer Intern"
                        company="Philer AI"
                        start_date="Jun 2025"
                        end_date="Present"
                        logo_img={PhilerAiLogo}
                        description=" Developing AI-powered client dashboards, optimizing management of real-estate closing processes"
                    />
                    <ExperienceBox 
                        position="Machine Learning Engineer"
                        company="Wat Street"
                        start_date="May 2025"
                        end_date="Present"
                        logo_img={WatStreetLogo}
                        description="Algorithmic trading team"
                    />
                    <ExperienceBox 
                        position="Software Developer"
                        company="WATonomous"
                        start_date="Jan 2025"
                        end_date="Present"
                        logo_img={WatoLogo}
                        description="Autonomous perception engineering, and computer vision for a ROS-powered humanoid"
                    />
                    <ExperienceBox 
                        position="Student Researcher"
                        company="University of Toronto"
                        start_date="Mar 2024"
                        end_date="Mar 2024"
                        logo_img={UTorontoLogo}
                        description="Researching Computer Vision and Computational Imaging to help the Dynamic Graphics Project simulate various physics-based, real-world simulations"
                    />
                    <ExperienceBox 
                        position="Web Developer"
                        company="Brand EQ"
                        start_date="Jul 2023"
                        end_date="Aug 2023"
                        logo_img={BrandEq}
                        description="Using Microsoft Power Apps and Azure databases to develop mobile applications for Brand EQ clients."
                    />
                </div>
            </div>
    );
}


export default CompSciExperience;