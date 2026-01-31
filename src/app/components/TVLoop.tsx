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
            // Force attributes for Safari compliance
            video.muted = true;
            video.playsInline = true;

            const attemptPlay = () => {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.error("Autoplay blocked:", error);
                        // Fallback: start on first user interaction
                        const playOnGesture = () => {
                            video.play();
                            document.removeEventListener('click', playOnGesture);
                        };
                        document.addEventListener('click', playOnGesture);
                    });
                }
            };

            video.load();
            attemptPlay();
        }
    }, [currentVideo]);

    return (
        <div className={styles.tvWrapper}> 
            <div className={styles.screenTransform}>
                <video
                    ref={videoRef}
                    src={currentVideo}
                    onEnded={pickNextVideo}
                    muted
                    autoPlay
                    playsInline // CamelCase is required for React/Next.js
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