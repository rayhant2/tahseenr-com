    // components/TvLoop.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './TvLoop.module.css';

const MAIN_VIDEOS = [
    '/videos/Website_TV 1.mp4',
    '/videos/Website_TV 2.mp4',
    '/videos/Website_TV 3.mp4',
    '/videos/Website_TV 4.mp4',
    '/videos/Website_TV 5.mp4',
    '/videos/Website_TV 6.mp4',
];
const TV_STATIC = '/videos/Website_TV 7.mp4';

export default function TvLoop() {
    const [currentVideo, setCurrentVideo] = useState(TV_STATIC);
    const [lastMainIndex, setLastMainIndex] = useState(-1);
    const [isTV_STATICNext, setIsTV_STATICNext] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const pickNextVideo = () => {
    if (isTV_STATICNext) {
        setCurrentVideo(TV_STATIC);
        setIsTV_STATICNext(false);
    } else {
        let nextIndex;
        do {
        nextIndex = Math.floor(Math.random() * MAIN_VIDEOS.length);
        } while (nextIndex === lastMainIndex);

        setLastMainIndex(nextIndex);
        setCurrentVideo(MAIN_VIDEOS[nextIndex]);
        setIsTV_STATICNext(true);
    }
    };

    useEffect(() => {
    const video = videoRef.current;
    if (video) {
        // 🔑 Forces the DOM element to be muted regardless of React's state
        video.muted = true; 
        video.defaultMuted = true;

        const attemptPlay = async () => {
            try {
                // 🔑 Re-loading the video ensures the new src is ready for autoplay
                video.load(); 
                await video.play();
            } catch (e) {
                console.log("Autoplay blocked, attempting with mute:", e);
                // Secondary attempt: some browsers need a second nudge
                video.muted = true;
                video.play();
            }
        };

        attemptPlay();
    }
}, [currentVideo]);

    return (
        <div className={styles.container}>
            <div className={styles.screenTransform}>
            <video
                ref={videoRef}
                src={currentVideo}
                onEnded={pickNextVideo}
                muted
                autoPlay
                playsInline
                className={styles.videoElement}
            />
            </div>
            <img 
            src="/tv_plant.png" 
            alt="TV and Plant Overlay" 
            className={styles.tvOverlay} 
            />
        </div>
    );
}