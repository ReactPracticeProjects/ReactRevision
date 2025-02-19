import React, { Fragment } from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function HeroSec({darkmode,setdarkmode}) {
  return (
    <Fragment>
      {/* Main Container */}
      <div className={`relative ${darkmode ? "bg-zinc-800 text-white":'bg-white'}   w-full md:h-[50vh] lg:h-[70vh] xl:h-full pb-5 lg:py-10 flex flex-col items-center text-center`}>
        
        {/* Title Section */}
        <div className="flex flex-col items-center pt-5">
          <div className="flex items-center gap-2 pb-5 text-lg md:text-xl">
            <LiaLaptopCodeSolid className="text-3xl" />
            <p>Your Future in Tech Starts Here</p>
          </div>

          <div className="text-lg md:text-2xl lg:text-6xl xl:text-8xl font-semibold w-[90%] md:w-[70%]">
            The Ultimate Coding Bootcamp to Master Your Skills
          </div>

          {/* Description */}
          <div className="lg:w-[50%] p-5">
            <p>
              Learn to code from industry experts with hands-on projects, real-world challenges, and 24/7 mentor support. Flexible learning. Unlimited access. Career-ready skills.
            </p>
          </div>

          {/* Button */}
          <div>
            <button className={`px-6 py-3 ${darkmode ? "bg-white text-black" : "bg-red-400 text-white" } rounded-sm hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-400 transition-all`}>
              I'm Already Interested
            </button>
          </div>
        </div>

        {/* Images for Large Screens */}
        <img
          src="mobiledev.png"
          className="hidden lg:block absolute bottom-0 left-0 w-[30vw] max-w-[250px] xl:max-w-[350px]"
          alt="Mobile Developer"
        />
        <img
          src="programmingdev.png"
          className="hidden lg:block absolute bottom-0 right-0 w-[30vw] max-w-[250px] xl:max-w-[350px]"
          alt="Programming Developer"
        />
      </div>
    </Fragment>
  );
}

export default HeroSec;
