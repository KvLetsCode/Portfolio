import StackIcon from "tech-stack-icons";
import { MdArrowOutward } from "react-icons/md";
const TechCard = ({title,desc,href,icon}) => {
  return (
    <a href={href} target="_blank" className="flex  gap-4 group">
      <div
        style={{ width: 65, height: 65 }}
        className="border border-gray-700 group-hover:border-gray-500 rounded-lg"
      >
        <StackIcon name={icon} variant="dark" className="p-2" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
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
