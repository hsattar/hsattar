import HeroSection from '@/components/HeroSection'
import Experiences from '@/components/Experiences'
import Skills from '@/components/Skills'
import CodingProjects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <CodingProjects />
      <Experiences />
    </>
  )
}
