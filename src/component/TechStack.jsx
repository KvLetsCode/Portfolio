import StackIcon from "tech-stack-icons";
import { MdArrowOutward } from "react-icons/md";
import TechCard from "../util/TechStack";

const TechStack = () => {
  return (
      <div className="max-w-4xl mx-auto mt-[10rem] lg:pl-0 pl-4 lg:pr-0 pr-3" id="stack">
          <h1 className="text-3xl font-semibold ">Stack</h1>
          <div className="grid lg:grid-cols-2 mt-8 gap-4 mb-16">
              <TechCard
                  title='NextJs'
                  desc='Reacr framework for full-stack apps'
                  icon='nextjs2'
                  href='https://nextjs.org/'
              
              />
              <TechCard
                  title='Tailwindcss'
                  desc='Utility-first CSS framework'
                  icon='tailwindcss'
                  href='https://tailwindcss.com'
              
              />
              
              <TechCard
                  title='Github'
                  desc='Version control and collaboration'
                  icon='github'
                  href='https://github.com/'
              
              />
              <TechCard
                  title='NodeJs'
                  desc='JavaScript runtime environment'
                  icon='nodejs'
                  href='https://nextjs.org/'
              
              />
              <TechCard
                  title='MongoDB'
                  desc='NoSQL document databse'
                  icon='mongodb'
                  href='https://www.mongodb.com/'
              
              />
              <TechCard
                  title='ExpressJs'
                  desc='Minimal backend framework'
                  icon='expressjs'
                  href='https://expressjs.com/'
              
              />
         </div>
    </div>
  )
}

export default TechStack