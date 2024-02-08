import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function HeroSection() {
  return (
    // <div className="flex flex-col justify-center items-center">
    //   <h2 className="text-3xl text-center font-semibold mt-20">I'm <span className="text-indigo-600">Hasan</span>. A Full Stack Developer.</h2>
    //   <Image src="/assets/hasan.png" className="mt-12" alt="Hasan Sattar" width="400" height="800" />
    // </div>
    <section className="flex flex-col lg:flex-row items-center my-4 select-none">
    
          <div className="flex-grow flex flex-col items-center justify-center">
              <h1 className="text-7xl p-4 font-semibold text-center gradient-text">Hasan Sattar</h1>
              <p className="text-3xl mt-4 mb-6 text-center">Full Stack Developer</p>
              <div className="text-4xl mb-8 lg:mb-0">
                  <a className="mx-3" href="https://github.com/hsattar" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large" /></a>
                  <a className="mx-3" href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
              </div>
          </div>

          <div className="md:w-[35vw] flex justify-center">
              <img className="h-[45vh] rounded-lg" src="/assets/hasan.jpg" alt="Hasan Sattar" />
          </div>

    </section>
  )
}