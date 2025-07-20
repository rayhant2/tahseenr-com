"use client"

import Image from "next/image";
import LaurierLogo from "../../../public/laurier_logo.png";
import WaterlooLogo from "../../../public/Uwaterloo_logo.png";

const Coursework = () => {
    return (
        <div className="text-white p-5 font-poppins">
            <div className="flex flex-col">

                <div className="flex flex-row sm:gap-10 gap-8 items-center">
                    <Image
                        src={WaterlooLogo}
                        alt="University of Waterloo"
                        className="rounded-xl sm:size-30 size-25"/>

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-3 items-center">
                            <p className="text-xl font-bold">University of Waterloo</p>
                            <p className="opacity-70 text-xs md:block hidden">(2025 - 2029)</p>
                        </div>
                        
                        <p className="opacity-80">Computer Science</p>
                        <div className="mt-5 sm:block hidden">
                            <p>Relevant courses:</p>
                            <p className="text-sm font-style: italic font-light ml-5 mt-2 opacity-80">Designing Functional Programs, Algorithm Design, Linear Algebra, Discrete Mathematics, Calculus (1/2), Combinatorics & Optimization</p>
                        </div>
                    </div>


                </div>
                <div className="mt-8 sm:hidden block">
                        <p>Relevant courses:</p>
                        <p className="text-sm font-style: italic font-light ml-5 mt-2 opacity-80">Designing Functional Programs, Algorithm Design, Linear Algebra, Discrete Mathematics, Calculus (1/2), Combinatorics & Optimization</p>
                </div>
                
            </div>
            
            <div className="flex w-full items-center justify-center my-15 opacity-15">
                <div className="bg-white h-[1px] w-4/5"/>
            </div>

            <div className="flex flex-col mb-3">

                <div className="flex flex-row sm:gap-10 gap-8 items-center">
                        <Image
                            src={LaurierLogo}
                            alt="Wilfrid Laurier University"
                            className="rounded-xl sm:size-30 size-25"/>

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-3 items-center">
                            <p className="text-xl font-bold">Wilfrid Laurier University</p>
                            <p className="opacity-70 text-xs md:block hidden">(2025 - 2029)</p>
                        </div>
                        
                        <p className="opacity-80">Business Administration</p>
                        <div className="mt-5 sm:block hidden">
                            <p>Relevant courses:</p>
                            <p className="text-sm font-style: italic font-light ml-5 mt-2 opacity-80">Business Environment, Microeconomics, Macroeconomics, Financial Managment, Accounting</p>
                        </div>
                    </div>


                </div>
                <div className="mt-8 sm:hidden block">
                        <p>Relevant courses:</p>
                        <p className="text-sm font-style: italic font-light ml-5 mt-2 opacity-80">Business Environment, Microeconomics, Macroeconomics, Financial Managment, Accounting</p>
                </div>
                
            </div>

        </div>
    );
}

export default Coursework;