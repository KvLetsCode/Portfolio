import { MdLocationOn } from "react-icons/md"; // solid + bold
import { TiDownload } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import CopyEmail from "../util/Copy";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Intro = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#profile-pic",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      "#intro-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
    gsap.fromTo(
      "#social-links",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    );
  });
  return (
    <div id="intro !max-w-4xl">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-8 pt-6  mx-auto gap-20 border-b border-gray-600 pb-8">
        <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
          <img
            id="profile-pic"
            src="Profile.jpg"
            alt="prof"
            className="lg:size-40 rounded-xl h-45 w-50"
          />
          <div
            className="flex items-center flex-col justify-center lg:items-start "
            id="intro-text"
          >
            <h1 className="text-3xl font-bold">Krishanveer Singh</h1>
            <h2 className="text-2xl mt-2 font-semibold text-gray-400">
              Web Developer
            </h2>
            <div className="flex items-center gap-1 mt-2 text-gray-400">
              <figure>
                <MdLocationOn className="size-4  " />
              </figure>
              <figcaption className="font-semibold">
                Ghaziabad, India
              </figcaption>
            </div>

            <p className="mt-5 text-gray-400 font-semibold flex items-center">
              <span>
                <GoDotFill className="text-green-500" />
              </span>
              Available for Work
            </p>
          </div>
        </div>

        <a
          href="Resume_WebDev.pdf"
          download="Krishanveer_CV.pdf"
          className="flex items-center gap-1 border-b relative z-10 border-gray-500 pb-1 hover:border-white transition-colors duration-300 hover:shadow hover:scale-110 lg:text-xl text-lg"
        >
          <span>
            <TiDownload />
          </span>
          Download CV
        </a>
      </div>

      <div
        className="!max-w-5xl mx-auto lg:justify-between lg:flex-row flex flex-col justify-center items-center"
        id="social-links"
      >
        <CopyEmail />
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/KvLetsCode"
            target="_blank"
            className="flex items-center gap-2 md:text-xl text-lg text-gray-400 hover:text-white"
          >
            <span>
              <FaGithub className="w-5 h-5 " />
            </span>
            Github
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="flex items-center gap-2 lg:text-xl text-lg text-gray-400 hover:text-white"
          >
            <span>
              <FaLinkedin className="w-5 h-5" />
            </span>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
