
import './App.css'
import About from './component/About'
import Education from './component/Education'
import Experience from './component/Experience'
import Header from './component/Header'
import Intro from './component/Intro'
import Projects from './component/Projects'
import TechStack from './component/TechStack'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  

  return (
    <>
      <div className='!max-w-5xl mx-auto'>
        <div className=''>
          <Header />
          <Intro />
          <About />
          <Projects />
          <Experience />
          <Education />
          <TechStack />
        </div>
       
      </div>
    </>
  )
}

export default App
