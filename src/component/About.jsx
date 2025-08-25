import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const About = () => {

  useGSAP(() => {
    const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // Laptop / Desktop
  gsap.fromTo("#title",
    { opacity: 0, yPercent: 100 },
    { opacity: 1, yPercent: 0, duration: 1.5, ease: "power1.inOut" }
  );

  gsap.fromTo(".content",
    { opacity: 0, yPercent: 50 },
    { opacity: 1, yPercent: 0, duration: 1.5, ease: "power1.inOut", stagger: 0.2 }
  );
});

mm.add("(max-width: 767px)", () => {
  // Mobile → less translate
  gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start:"top 80%"
    }
  })
  .fromTo("#title",
    { opacity: 0, yPercent: 40 },
    { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
  )
  .fromTo(".content",
    { opacity: 0, yPercent: 20 },
    { opacity: 1, yPercent: 0, duration: 1.2, ease: "power1.inOut", stagger: 0.15 },'-=1'
  )
});

  })
  return (
      <div className='mt-18 !max-w-4xl mx-auto' id="about">
      <h1 className='lg:text-3xl text-2xl font-semibold lg:ml-0 lg:pl-0 pl-6 lg:pr-0 pr-4 ' id="title">About me</h1>
      <div className='content'>
        <p className='lg:text-xl text-lg mt-4 pt-4 font-stretch-50% leading-relaxed font-sans    text-gray-400 lg:pl-0 pl-6 ' >Hey 👋 I'm Krishanveer Singh, a web developer who loves turning ideas into clean, functional, and good-looking digital experiences.</p>
          <p className='lg:text-xl text-lg mt-4 pt-4 font-sans leading-relaxed text-gray-400 lg:pl-0 pl-6 tracking-wide lg:pr-0  pr-4'>I’m all about writing code that not only works but feels good to work with. From crafting smooth frontends in React to building solid backends with Node.js / Express, I enjoy the full process of bringing a project to life.
          </p>
          <p className='lg:text-xl text-lg mt-4 pt-4 font-stretch-50% font-sans leading-relaxed text-gray-400 lg:pl-0 pl-6 lg:pr-0  pr-4'>When I’m not coding, you’ll probably find me 🎮 playing games, 🏞️ out on some adventure, or just tinkering with a random side project.</p>
      </div>
          
    </div>
  )
}

export default About