"use client"

import React, { useState, useEffect } from "react";
import Resume from "../../public/resume.svg";
import TvLoop from "@/app/components/TVLoop";
import Image from "next/image";
import ProfileImage from '../../public/profile.png';
import RenderExpProj from "./components/RenderExpProj";
import Coursework from "./components/Coursework";
import Footer from "./components/Footer";
import 'animate.css'
import { motion } from "motion/react"
import { ThemeContext, ExProjContext } from "./contexts/ThemeContext";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};


export default function Home() {

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Background */}
      <Image 
        src="/background.webp" 
        fill 
        priority 
        alt="Background" 
        style={{ objectFit: 'cover' }} 
      />

      {/* TV Loop */}
      <div style={{ 
        position: 'absolute', 
        top: '64%',   /* Move down: higher % is lower on screen */
        left: '70%',  /* Move right: higher % is further right */
        transform: 'translate(-50%, -50%)', /* Keeps the TV centered on your chosen coordinates */
        zIndex: 10 
      }}>
        <TvLoop />
      </div>
    </main>
  );
}
