"use client"

import ProjectsBox from "./ProjectsBox";
import ProfileImage from '../../../public/TahseenRayhan.png';

const CompSciProj = (): React.ReactElement => {
    return (
        <div className="w-full relative p-1">
            <ProjectsBox
                project_name="Boids Project"
                description="Simulation of crowding and emergent behavior within a dynamic group of unrelated objects, done with PhD students at the University of Toronto."
                project_img={ProfileImage}
                gh_link="https://github.com/rayhant2/Boids-simulation"
                tech_tags={["Python", "TensorFlow", "NumPy", "SciPy", "SQL", "React", "Typescript"]}
            />
        </div>
    )
}


export default CompSciProj;