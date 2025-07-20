"use client"

import React, { useContext } from "react";
import { ThemeContext, ExProjContext } from "../contexts/ThemeContext";
import BusExperience from "./BusExperience";
import CompSciExperience from "./CSExperience";
import CompSciProj from "./CSProjects";
import BusProj from "./BusProjects";

const RenderExpProj = () => {
    const degreeSide = useContext(ThemeContext)
    const contentType = useContext(ExProjContext)

    {/* Working on Project rendering */}

    return (
        <div>
            {
                degreeSide === "Computer Science"
                ? (contentType === "Experience" ? <CompSciExperience/> : <CompSciProj/>) 
                : (contentType === "Experience" ? <BusExperience/> : <BusProj/>)
            }
        </div>
    );
}

export default RenderExpProj;

