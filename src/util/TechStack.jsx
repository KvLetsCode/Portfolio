
import { MdArrowOutward } from "react-icons/md";
const TechCard = ({title,desc,href,icon}) => {
  return (
    <a href={href} target="_blank" className="flex  gap-4 group">
      <div
        style={{ width: 65, height: 65 }}
        className="border flex items-center justify-center border-gray-700 group-hover:border-gray-500 rounded-lg"
      >
        <span className="mb-0.5">{icon}</span>
        
      </div>
      <div>
        <h1 className="md:text-2xl text-xl font-semibold flex items-center gap-2">
                  { title}{" "}
          <span>
            <MdArrowOutward className="text-gray-400 group-hover:text-white" />
          </span>
        </h1>
        <p className="text-gray-400 font-semibold">
          {desc}
        </p>
      </div>
    </a>
  );
};

export default TechCard;
