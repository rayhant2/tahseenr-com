import Image from "next/image";
import ProfileIntro from "./components/ProfileIntro";
import ExperienceBox from "./components/ExpBox";
import WatStreetLogo from '../../public/wat_street_logo.jpeg';
import PhilerAiLogo from '../../public/philer_ai_logo.jpeg';
import UTorontoLogo from '../../public/university_of_toronto_logo.jpeg';
import WatoLogo from '../../public/watonomous_logo.jpeg';

export default function Home() {
  return (
    <div className="p-10 w-screen h-screen content-center">
      <ProfileIntro/>
      <ExperienceBox 
        position = "Machine Learning Engineer"
        company = "Wat Street"
        start_date = "May 2025"
        end_date = "Present"
        logo_img = {WatStreetLogo}
        description = "Using Python and ARIMA models to create various technical indicators and train algorithms based on stock data aggregated from yfinance"
        />
      
    </div>
    
  );
}
