import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center my-4 select-none">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-7xl p-4 font-semibold text-center gradient-text">Hasan Sattar</h1>
        <p className="text-3xl mt-4 mb-6 text-center">Full Stack Developer</p>
        <div className="text-4xl mb-8 lg:mb-0">
          <a className="mx-3" href="https://github.com/hsattar" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
          <a className="mx-3" href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </section>
  )
}
