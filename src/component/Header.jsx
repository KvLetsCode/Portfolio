

import { useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
   
      <div className="p-4 hidden lg:flex items-center justify-center lg:gap-4 gap-2 bg-black lg:ml-0 ml-18">
      {/* Left menu */}
      <div
        className={`flex gap-6 items-center transition-all duration-300 bg-neutral-500 px-4 py-2 rounded-xl ${
          isActive
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-6 pointer-events-none"
        }`}
      >
        <a href="#intro" className="text-white font-medium">Intro</a>
        <a href="#about" className="text-white font-medium">About</a>
        <a href="#work" className="text-white font-medium">Work</a>
        
      </div>

      {/* Center button */}
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className={`p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-transform duration-300 ${
          isActive ? "-rotate-45" : "rotate-0"
        }`}
      >
        <FaRegSquarePlus className="size-6 text-white" />
      </button>

      {/* Right menu */}
      <div
        className={`flex gap-6 items-center transition-all duration-300 bg-neutral-500 px-4 py-2 rounded-xl ${
          isActive
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-6 pointer-events-none"
        }`}
      >
        <a href="#education" className="text-white font-medium">Education</a>
        <a href="#stack" className="text-white font-medium">Stack</a>
        <a href="#experience" className="text-white font-medium">Experience</a>

      </div>
    </div>
    
    
  );
};

export default Header;
