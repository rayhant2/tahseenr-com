"use client"

import CompSciProj from "./CSProjects"
import BusProj from "./BusProjects"

import React, { useContext } from 'react'
import { ExProjContext } from '../page'

const RenderProjects = () => {
    const projType = useContext(ExProjContext)
    return (
        <div>
            {
                projType === "Experience" ? <CompSciProj/> : <BusProj/>
            }
        </div>
    );
}

export default RenderProjects;