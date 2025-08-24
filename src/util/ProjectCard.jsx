import { IoArrowForward } from "react-icons/io5";

const ProjectCard = ({title , desc,img,href}) => {
  return (
    <a href={href} target="_blank" className="rounded-xl overflow-hidden shadow-xl lg:w-full w-[80%] cursor-pointer border border-gray-400 hover:scale-104 group ">
      <img
        src={img}
        alt="QuickBlog"
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
            <h1 className="text-lg font-semibold mb-1 flex justify-between">{title} <span className="transition-transform duration-300 group-hover:-rotate-45" ><IoArrowForward className="w-6 h-6 " /></span></h1>
        <p className="text-gray-400 font-semibold">{desc}</p>
        
        </div>
          
    </a>
  );
};

export default ProjectCard;
