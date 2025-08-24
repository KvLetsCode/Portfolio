
import TechCard from "../util/TechStack";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


const TechStack = () => {
  return (
      <div className="max-w-4xl mx-auto mt-[10rem] lg:pl-0 pl-4 lg:pr-0 pr-3" id="stack">
          <h1 className="text-3xl font-semibold ">Stack</h1>
          <div className="grid lg:grid-cols-2 mt-8 gap-4 mb-16">
              <TechCard
                  title='NextJs'
                  desc='Reacr framework for full-stack apps'
                  icon={<SiNextdotjs className="size-8  " />}
                  href='https://nextjs.org/'
              
              />
              <TechCard
                  title='Tailwindcss'
                  desc='Utility-first CSS framework'
                  icon={<RiTailwindCssFill className="size-8 text-[#38BDF8]" />}
                  href='https://tailwindcss.com'
              
              />
              
              <TechCard
                  title='Github'
                  desc='Version control and collaboration'
                  icon={<FaGithubSquare className="size-8" />}
                  href='https://github.com/'
              
              />
              <TechCard
                  title='NodeJs'
                  desc='JavaScript runtime environment'
                  icon={<FaNodeJs className="size-8 text-green-600" />}
                  href='https://nextjs.org/'
              
              />
              <TechCard
                  title='MongoDB'
                  desc='NoSQL document databse'
                  icon={<SiMongodb className="size-8 text-green-600" />}
                  href='https://www.mongodb.com/'
              
              />
              <TechCard
                  title='ExpressJs'
                  desc='Minimal backend framework'
                  icon={<SiExpress className="size-8" />}
                  href='https://expressjs.com/'
              
              />
         </div>
    </div>
  )
}

export default TechStack