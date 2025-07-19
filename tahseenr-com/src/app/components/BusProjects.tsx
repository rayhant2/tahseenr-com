"use client"

import ProjectsBox from "./ProjectsBox";
import ProfileImage from "../../../public/TahseenRayhan.png"

const BusProj = (): React.ReactElement => {
    return (
        <div className="p-1">
            <ProjectsBox
                project_name="Shut up Project"
                description="Simulation of crowding and emergent behavior within a dynamic group of unrelated objects, done with PhD students at the University of Toronto."
                project_img={ProfileImage}
                gh_link="https://github.com/rayhant2/Boids-simulation"
                tech_tags={["Python", "TensorFlow", "NumPy", "SciPy", "SQL", "React", "Typescript"]}
            />
        </div>
    );
}

export default BusProj;