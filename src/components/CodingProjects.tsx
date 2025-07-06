'use client'

import { motion } from 'framer-motion'
import { AnimatedTabs } from './ui/AnimatedTabs'
import { SingleTabView } from './ui/SingleTabView'

export default function PersonalProjects() {
  return (
    <section className="flex flex-col min-h-[800px] lg:min-h-[850px]">
      <motion.div variants={slideUpAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <h2 className="text-center text-4xl mt-20 mb-16 select-none">
          <span className="relative px-2">
            Personal Projects
            <svg className="pointer-events-none absolute inset-x-0 -bottom-8 text-blue-500" viewBox="0 0 687 155">
              <g stroke="currentColor" strokeWidth="7" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
              </g>
            </svg>
          </span>
        </h2>
        <AnimatedTabs tabs={personalProjects.map((project) => ({ title: project.title, value: project.value, content: <SingleTabView {...project} /> }))} />
      </motion.div>
    </section>
  )
}

const slideUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.25,
    },
  }),
}

const personalProjects: IPersonalProjects[] = [
  {
    title: 'Smiths Air',
    value: 'smithsair',
    image: '/assets/smiths-air.png',
    link: 'https://youtu.be/biNf-jZZ9gk',
    subtitle: 'Solo Project',
    description: 'A workplace communication Progressive Web App. Live App with 50 Users.',
    technologies: 'https://skillicons.dev/icons?i=nextjs,redux,tailwind,nodejs,express,mongodb,typescript,jest,vercel',
  },
  {
    title: 'Code Buddy',
    value: 'codebuddy',
    image: '/assets/code-buddy.jpg',
    link: 'https://youtu.be/gJ_Q4nzSVMs',
    subtitle: 'Solo Project',
    description: 'Code Buddy is a no-code platform that allows you to create websites using a drag and drop interface.',
    technologies: 'https://skillicons.dev/icons?i=react,redux,tailwind,nodejs,express,mongodb,typescript',
  },
]
