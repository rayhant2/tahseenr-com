"use client";

import Image from "next/image";
import SkillToggle from "./SkillToggle";
import ProfileImage from '../../../public/TahseenRayhan.png';

const ProfileIntro = () => {

    return (
        <section id="intro">

            <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center gap-4">
                    
                    <Image
                        src={ProfileImage}
                        alt="Profile Picture"
                        className="rounded-full size-40 border-4 border-white"/>

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

                <div>
                    <div className="flex flex-row gap-2">
                        <p>Hi, I'm</p>
                        <p>Tahseen Rayhan 👋</p>
                    </div>

                    <div className="flex flex-row gap-1">
                        <p className="hover:text-[#f0bb16] duration-400">CS</p>
                        <p>@ UWaterloo, </p>
                        <p className="hover:text-[#bb88f7] duration-400">BBA</p>
                        <p>@ Wilfrid Laurier </p>
                        <p className="pl-1">(Dual Degree)</p>
                    </div>

                    <div>
                        <p>Explore my journey in ...</p>
                        <SkillToggle/>
                    </div>
                </div>
            </div>

            
        </section>
        
    )
    

}

export default ProfileIntro;