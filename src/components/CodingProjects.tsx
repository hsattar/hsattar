'use client'

import { motion } from 'framer-motion'
import { AnimatedTabs } from './ui/AnimatedTabs'
import { SingleTabView } from './ui/SingleTabView'

export default function CodingProjects() {
  return (
    <section className="flex flex-col min-h-screen">
      <motion.div variants={slideUpAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <h2 className="text-center text-4xl mt-20 mb-16 select-none">
          <span className="relative px-2">
            Coding Projects
            <svg className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-8 text-blue-500" viewBox="0 0 687 155">
              <g stroke="currentColor" strokeWidth="7" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
              </g>
            </svg>
          </span>
        </h2>
        <AnimatedTabs tabs={ codingProjects.map(project => ({ title: project.title, value: project.value, content: <SingleTabView {...project} /> })) } />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          {codingProjects.map(({ title, description, technologies, link, image }, index) => (
            <li key={index} className={`flex flex-col items-center p-2 select-none`}>
              <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full md:w-[75%]">
                <img src={image} className="w-full" alt={title} />
              </a>
              <div className="flex flex-grow flex-col justify-between items-center text-center py-8">
                <a href={link} target="_blank" rel="noreferrer">
                  <h4 className="text-center text-3xl font-medium">{title}</h4>
                </a>
                <p className="mt-4 mb-2 text-xl">{description}</p>
                <p className="text-md text-gray-300">{technologies}</p>
              </div>
            </li>
          ))}
        </div> */}
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

const codingProjects: ICodingProjects[] = [
  {
    title: 'Smiths Air',
    value: 'smithsair',
    image: '/assets/smiths-air.png',
    link: 'https://youtu.be/biNf-jZZ9gk',
    subtitle: 'Solo Project',
    description: 'A workplace communication Progressive Web App. Live App with 50 Users',
    technologies: 'Next.js, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript, Jest',
  },
  {
    title: 'Code Buddy',
    value: 'codebuddy',
    image: '/assets/code-buddy.jpg',
    link: 'https://youtu.be/gJ_Q4nzSVMs',
    subtitle: 'Solo Project',
    description: 'Code Buddy is a no-code platform that allows you to create websites using a drag and drop interface.',
    technologies: 'React, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript',
  },
]
