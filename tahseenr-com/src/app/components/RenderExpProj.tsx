"use client"

import React, { useContext } from "react";
import { ThemeContext } from "../page";
import { ExProjContext } from "../page";
import BusExperience from "./BusExperience";
import CompSciExperience from "./CSExperience";
import CompSciProj from "./CSProjects";
import BusProj from "./BusProjects";

const RenderExpProj = () => {
    const degreeSide = useContext(ThemeContext)
    const contentType = useContext(ExProjContext)

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

