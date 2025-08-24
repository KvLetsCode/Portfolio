import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "../util/ProjectCard";

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto mt-[8rem]" id="project">
      <div className="flex justify-between">
        <h1 className="font-semibold lg:text-2xl text-xl lg:pl-0 pl-6">
          Some of my projects
        </h1>
        <a
          href="https://github.com/KvLetsCode"
          target="_blank"
          className="flex items-center font-semibold gap-2 text-gray-400 lg:text-xl hover:text-white lg:pr-0 pr-4"
        >
          View all{" "}
          <span>
            <MdArrowOutward className="w-5 h-5" />
          </span>
        </a>
      </div>
      <div className="grid lg:grid-cols-2 grid-col-1 gap-6 mt-10 justify-items-center">
        <ProjectCard
          img="542shots_so.png"
          title="QuickBlog"
          desc="AI Integrated Blog Writing App"
          href="https://quick-blog-nine-black.vercel.app/"
        />
        <ProjectCard
          img="298shots_so.png"
          href="https://cocktail-git-main-kvletscodes-projects.vercel.app/"
          title="Cocktail"
          desc="An interactive animated cocktail site that mixes sleek design with smooth animations for a refreshing digital experience."
        />
        <ProjectCard
          href="https://yc-directory-ruddy-rho.vercel.app/"
          title="YCDirectory"
          desc="Pitch Your Startup Connect With Entrepreneurs"
          img='295shots_so.png'
        />
        <ProjectCard href="https://kvletscode.github.io/Space/" desc='Discover the wonders of space through a sleek, cosmic-inspired web experience' title='Interactive Space Odyssey in Motion'
        img='Overview.png'/>
      </div>
    </div>
  );
};

export default Projects;
