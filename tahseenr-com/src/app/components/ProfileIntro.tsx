"use client";

import SkillToggle from "./SkillToggle";
import Image from "next/image";
import ProfileImage from '../../../public/TahseenRayhan.png';

const ProfileIntro = () => {

    return (
        <section id="intro">

            <div className="flex flex-row gap-4">
                <div>
                    <Image
                        src={ProfileImage}
                        alt="Profile Picture"
                        className="rounded-full size-40 border-4 border-white"/>

                    <div></div>    
                    <p>Socials</p>
                    {/* Profile Picture
                    Linkedin, Github, X */}
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