import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import Expt from "../util/Expt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = () => {
  useGSAP(() => {
    // Education section
    gsap.timeline({
      scrollTrigger: {
        trigger: "#experience", start: "top 80%"
      }
    })
      .fromTo("#experience .exp-item",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power1.inOut"
        
      }
    )
    .fromTo("#extitle",
      { opacity: 0, yPercent: 50 },
      {
        
        opacity: 1,
        yPercent: 0,
        duration: 0.7,
        ease: "power1.inOut",
      }
    )
  }
)
  return (
    <div className="!max-w-4xl mx-auto mt-[10rem] lg:pl-0 pl-4 lg:pr-0 pr-3" id="experience">
      <h1 className="font-semibold text-3xl" id='extitle'>Experience</h1>
      <div className=" exp-item border-l border-gray-500 pl-4 mt-8" >
        <p className="flex items-center gap-1 mt-2 text-gray-400 text-lg pl-1">
          <figure>
            <MdLocationOn className="size-4 " />
          </figure>
          <figcaption className="font-sans">Delhi, India</figcaption>
        </p>
        <div className="flex justify-between items-center">
          <h1 className="lg:text-3xl text-2xl mt-2 pl-2 font-semibold">Edulty India</h1>
          <p className="font-semibold text-md">SEP 2024 – DEC 2024</p>
        </div>
        <p className="pl-3 mt-2 font-semibold text-gray-400 lg:text-lg">
          Web Developer Intern
        </p>
        <div className="pl-3 mt-4 ">
          <Expt desc='Crafted responsive React components with Tailwind CSS for
            educational web pages, enhancing user experience.'/>
                  
            <Expt desc='Assisted in building and testing Node.js/Express APIs, contributing
            to backend functionality.'/>
                  
             <Expt desc='Collaborated with the team using Git & GitHub, streamlining version
            control and workflow.'/>
                  
            <Expt desc='Improved coding efficiency through debugging, problem-solving, and
            deploying small projects in a real-world environment.'/>
                  
        </div>
      </div>
    </div>
  );
};

export default Experience;
