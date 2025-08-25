import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdLocationOn } from "react-icons/md";

const Education = () => {
  useGSAP(() => {
    // Education section
    gsap.timeline({
      scrollTrigger: {
        trigger: "#education", start: "top 80%"
      }
    })
      .fromTo("#education .edu-item",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        
        ease: "power1.inOut"
        
      }
    )
    .fromTo("#etitle",
      { opacity: 0, yPercent: 100 },
      {
        stagger: 0.2,
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    )
  }
)
  
  
  return (
    <div className="mt-[10rem] !max-w-4xl mx-auto lg:pl-0 pl-4 lg:pr-0 pr-3 " id="education">
      <h1 className="font-semibold text-3xl" id='etitle'>Education</h1>
      <div className="edu-item p-4 shadow border-l border-gray-500 mt-8">
        <div className="flex items-center gap-0.5 mt-2 text-gray-400 text-lg pl-1">
          <figure>
            <MdLocationOn className="size-4" />
          </figure>
          <figcaption className="font-sans text-md">Delhi, India</figcaption>
        </div>
        <div className="flex justify-between items-center gap-6">
          <h1 className="lg:text-2xl text-xl mt-2 pl-2 font-semibold">
            Bachelors of Science in Computer Science
          </h1>
          <p className="font-semibold text-md">JUNE 2020 – JULY 2023</p>
        </div>
        <p className="pl-3 mt-2 font-semibold text-gray-400 lg:text-lg text-md">
          University of Delhi
        </p>
        <p className="text-gray-400 lg:text-xl text-lg  font-semibold flex gap-6 items-center mt-6 pl-3">
          Focused on advanced web technologies and front-end development
        </p>
      </div>
    </div>
  );
};

export default Education;
