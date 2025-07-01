import Image from "next/image";
import ProfileIntro from "./components/ProfileIntro";

export default function Home() {
  return (
    <div className="p-10 w-screen h-screen content-center">
      <ProfileIntro/>
    </div>
    
  );
}
