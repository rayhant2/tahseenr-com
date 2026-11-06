"use client"

import ExperienceBox from "./ExpBox"
import WatStreetLogo from '../../../public/wat_street_logo.jpeg';
import JaCanada from '../../../public/jacanada_logo.jpeg';

const BusExperience = (): React.ReactElement => {
    return (
        <div className="w-full">
            <div className="relative">

                <div className="absolute left-[4.5rem] top-40 md:bottom-30 bottom-45 w-[2px] bg-white/40 rounded-full -z-10" />

                <div className="flex flex-col">
                    <ExperienceBox 
                        position="Data Analyst"
                        company="Junior Achievement Canada"
                        start_date="Jun 2025"
                        end_date="Aug 2025"
                        logo_img={JaCanada}
                        description="Scraping and formatting over 1000+ survey entries, analyzing company-held programs’ successes and proposing strategies to help address areas of improvement"
                    />
                    <ExperienceBox 
                        position="Machine Learning Engineer"
                        company="Wat Street"
                        start_date="May 2025"
                        end_date="Present"
                        logo_img={WatStreetLogo}
                        description="Algorithmic trading team"
                    />
                </div>
            </div>
        </div>
    );
}


export default BusExperience;