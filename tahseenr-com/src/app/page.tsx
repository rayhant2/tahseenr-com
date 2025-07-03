import Image from "next/image";
import ProfileIntro from "./components/ProfileIntro";
import CompSciExperience from "./components/CSExperience";
import BusExperience from "./components/BusExperience";

export default function Home() {
  return (
    <div className="p-10 w-screen h-screen content-center">
      <ProfileIntro/>
      <CompSciExperience/>
      <BusExperience/>
    </div>
    
  );
}
