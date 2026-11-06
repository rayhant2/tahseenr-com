"use client"

import ProjectsBox from "./ProjectsBox";
import PaperTrading from '../../../public/papertrading.png';
import CVCar from '../../../public/gesture_car.jpg';
import Boids from '../../../public/boids.png';
import Tapi from '../../../public/tapi.png';
import Website from '../../../public/website.png';

const CompSciProj = (): React.ReactElement => {
    return (
        <div className="w-full">
            <ProjectsBox
                project_name="Personal Portfolio"
                description="Learn more about me!"
                project_img={Website}
                gh_link="https://github.com/rayhant2/tahseenr-com"
                tech_tags={["NextJS", "React", "TypeScript", "TailwindCSS"]}
            />
            <ProjectsBox
                project_name="Crowding & Emergent Behavior Simulation"
                description="Emergent behavior for a population of x uniquely defined objects"
                project_img={Boids}
                gh_link="https://github.com/rayhant2/Boids-simulation"
                tech_tags={["Python", "NumPy", "SciPy"]}
            />
            <ProjectsBox
                project_name="Tapi: Digital Marketing & Loyalty Platform"
                description="Web app used for increasing the digital footprint for bubble-tea buisnesses and increase their foot traffic"
                project_img={Tapi}
                gh_link="#"
                tech_tags={["React", "Firebase", "ExpressJS", "NodeJS", "JavaScript", "Python", "TailwindCSS"]}
            />
            <ProjectsBox
                project_name="Real-Time Paper Trading Platform"
                description="Simulate the trading environment using AlphaVantage’s API to promote financial literacy"
                project_img={PaperTrading}
                gh_link="https://github.com/rayhant2/sun-folio"
                tech_tags={["React", "JavaScript", "MongoDB", "ExpressJS", "NodeJS", "TailwindCSS"]}
            />
            <ProjectsBox
                project_name="CV-Controlled Car"
                description="RC car navigating by user hand gestures using OpenCV and Mediapipe"
                project_img={CVCar}
                gh_link="https://github.com/rayhant2/Gesture-controlled-car"
                tech_tags={["OpenCV", "Medipipe", "Arduino", "Python", "C++"]}
            />
        </div>
    )
}


export default CompSciProj;