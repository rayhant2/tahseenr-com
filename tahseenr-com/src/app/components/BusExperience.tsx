"use client"

import Image from "next/image";
import ExperienceBox from "./ExpBox"
import WatStreetLogo from '../../../public/wat_street_logo.jpeg';
import PhilerAiLogo from '../../../public/philer_ai_logo.jpeg';
import UTorontoLogo from '../../../public/university_of_toronto_logo.jpeg';
import WatoLogo from '../../../public/watonomous_logo.jpeg';
import BrandEq from '../../../public/brandeq_logo.jpg';
import JaCanada from '../../../public/jacanada_logo.jpeg';

const BusExperience = (): React.ReactElement => {
    return (
        <div className="w-full">
            <div className="relative">

                <div className="absolute left-[3.0rem] top-10 bottom-10 w-[4px] bg-white/40 rounded-full -z-10" />

                <div className="flex flex-col">
                    <ExperienceBox 
                        position="Data Analyst"
                        company="Junior Achievement Canada"
                        start_date="Jun 2025"
                        end_date="Present"
                        logo_img={JaCanada}
                        description="Building an AI-leveraged dashboard for clients to manage and track transactions and filings."
                    />
                    <ExperienceBox 
                        position="Machine Learning Engineer"
                        company="Wat Street"
                        start_date="May 2025"
                        end_date="Present"
                        logo_img={WatStreetLogo}
                        description="Using Python and ARIMA models to create various technical indicators and train algorithms based on stock data aggregated from yfinance"
                    />
                </div>
            </div>
        </div>
    );
}


export default BusExperience;