import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center my-4 select-none min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-5xl p-4 text-center">Hasan Sattar</p>
        <h1 className="text-8xl mt-4 mb-6 font-semibold text-center gradient-text">Full Stack Developer</h1>
        <div className="text-4xl my-8 lg:mb-0">
          <a className="mx-3" href="https://github.com/hsattar" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
          <a className="mx-3" href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        {/* <div className='flex mt-16'>
          <a className=''>Tech Stack</a>
          <a>Projects</a>
          <a>Experience</a>
        </div> */}
      </div>
    </section>
  )
}
