"use client"

import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import CompSciExperience from './CSExperience'
import BusExperience from './BusExperience'

export default function Experiences() {
    const major = useContext(ThemeContext)
    return (
        <div className='w-full'>
            {
                major === 'Computer Science' ? <CompSciExperience/> : <BusExperience/>
            }
        </div>
    )
}