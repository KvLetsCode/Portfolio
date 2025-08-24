import { MdLocationOn } from "react-icons/md"; // solid + bold
import { TiDownload } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import CopyEmail from "../util/Copy";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <div id="intro">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-8 pt-6 max-w-4xl mx-auto gap-20 border-b border-gray-600 pb-8">
        <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
          <img
            src="Prof.jpg"
            alt="prof"
            className="lg:size-40 rounded-xl h-45 w-50"
          />
          <div className="flex items-center flex-col justify-center lg:items-start ">
            <h1 className="text-3xl font-bold">Krishanveer Singh</h1>
            <h2 className="text-2xl mt-2 font-semibold text-gray-400">
              Web Developer
            </h2>
            <p className="flex items-center gap-1 mt-2 text-gray-400">
              <figure>
                <MdLocationOn className="size-4  " />
              </figure>
              <figcaption className="font-semibold">
                Ghaziabad, India
              </figcaption>
            </p>

            <p className="mt-5 text-gray-400 font-semibold flex items-center">
              <span>
                <GoDotFill className="text-green-500" />
              </span>
              Available for Work
            </p>
          </div>
        </div>

        <a
            href="/Resume_WebDev.pdf"
            download='Krishanveer_CV.pdf'
          className="flex items-center gap-1 border-b relative z-10 border-gray-500 pb-1 hover:border-white transition-colors duration-300 hover:shadow hover:scale-110 text-xl "
        >
          <span>
            <TiDownload />
          </span>
          Download CV
        </a>
      </div>

      <div className="max-w-4xl mx-auto lg:justify-between lg:flex-row flex flex-col justify-center items-center">
        <CopyEmail />
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/KvLetsCode"
            className="flex items-center gap-2 text-xl text-gray-400 hover:text-white"
          >
            <span>
              <FaGithub className="w-5 h-5 " />
            </span>
            Github
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            className="flex items-center gap-2 text-xl text-gray-400 hover:text-white"
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
