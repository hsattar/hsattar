'use client'

import { motion } from 'framer-motion'
import {
  SiAmazonaws,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiStorybook,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVitest,
} from 'react-icons/si'
import { AnimatedTooltip } from './ui/AnimatedTooltip'

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute bg-[#181818] pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="flex flex-col lg:flex-row items-center my-4 select-none min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center z-20">
          <motion.h2
            variants={slideDownAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-4 text-center"
          >
            Hasan Sattar
          </motion.h2>
          <motion.h1
            variants={slideUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-6xl md:text-8xl mt-4 mb-6 font-semibold text-center gradient-text"
          >
            Full Stack Developer
          </motion.h1>
          <div className="flex text-4xl my-8 lg:mb-0">
            <motion.div variants={bounceInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={2} className="mx-3">
              <a href="https://github.com/hsattar" target="_blank" rel="noreferrer">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub Icon" className="hover:scale-125" />
              </a>
            </motion.div>
            <motion.div variants={bounceInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={3} className="mx-3">
              <a href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer">
                <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn Icon" className="hover:scale-125" />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeInAnimationVariants} initial="hidden" animate="visible" exit="remove" whileInView="animate" viewport={{ once: true }} className="mt-10 sm:mt-16 md:mt-20">
            <div className="hidden md:grid md:grid-cols-6 md:gap-16">
              <AnimatedTooltip
                items={[
                  {
                    name: 'Javascript',
                    icon: <SiJavascript size={75} color="#f6e028" />,
                    color: 'via-yellow-500',
                  },
                  {
                    name: 'Typescript',
                    icon: <SiTypescript size={75} color="#127ecd" />,
                    color: 'via-blue-500',
                  },
                  {
                    name: 'React',
                    icon: <SiReact size={75} color="#67dbfa" />,
                    color: 'via-blue-400',
                  },
                  {
                    name: 'Redux',
                    icon: <SiRedux size={75} color="#7b50bd" />,
                    color: 'via-purple-500',
                  },
                  {
                    name: 'Next.js',
                    icon: <SiNextdotjs size={75} />,
                    color: 'via-white',
                  },
                  {
                    name: 'Tailwind CSS',
                    icon: <SiTailwindcss size={75} color="#3abdf6" />,
                    color: 'via-blue-400',
                  },
                  {
                    name: 'Python',
                    icon: <SiPython size={75} color="#3d76a7" />,
                    color: 'via-sky-700',
                  },
                  {
                    name: 'Node.js',
                    icon: <SiNodedotjs size={75} color="#78b95b" />,
                    color: 'via-green-500',
                  },
                  {
                    name: 'Express',
                    icon: <SiExpress size={75} />,
                    color: 'via-white',
                  },
                  {
                    name: 'NestJS',
                    icon: <SiNestjs size={75} color="#e0234e" />,
                    color: 'via-red-600',
                  },
                  {
                    name: 'MongoDB',
                    icon: <SiMongodb size={75} color="#15ad55" />,
                    color: 'via-green-600',
                  },
                  {
                    name: 'Postgresql',
                    icon: <SiPostgresql size={75} color="#396c95" />,
                    color: 'via-sky-700',
                  },
                  {
                    name: 'Vitest',
                    icon: <SiVitest size={75} color="#22c55e" />,
                    color: 'via-green-600',
                  },
                  {
                    name: 'Storybook',
                    icon: <SiStorybook size={75} color="#db2777" />,
                    color: 'via-pink-500',
                  },
                  {
                    name: 'Github Actions',
                    icon: <SiGithubactions size={75} color="#2563eb" />,
                    color: 'via-blue-600',
                  },
                  {
                    name: 'Vercel',
                    icon: <SiVercel size={75} />,
                    color: 'via-white',
                  },
                  {
                    name: 'Terraform',
                    icon: <SiTerraform size={75} color="#7b42bc" />,
                    color: 'via-purple-500',
                  },
                  {
                    name: 'AWS',
                    icon: <SiAmazonaws size={75} color="#ff9d13" />,
                    color: 'via-orange-400',
                  },
                ]}
              />
            </div>

            <div className="hidden sm:grid sm:grid-cols-4 sm:gap-16 md:hidden">
              <AnimatedTooltip
                items={[
                  {
                    name: 'Javascript',
                    icon: <SiJavascript size={60} color="#f6e028" />,
                    color: 'via-yellow-500',
                  },
                  {
                    name: 'Typescript',
                    icon: <SiTypescript size={60} color="#127ecd" />,
                    color: 'via-blue-500',
                  },
                  {
                    name: 'React',
                    icon: <SiReact size={60} color="#67dbfa" />,
                    color: 'via-blue-400',
                  },
                  {
                    name: 'Redux',
                    icon: <SiRedux size={60} color="#7b50bd" />,
                    color: 'via-purple-500',
                  },
                  {
                    name: 'Next.js',
                    icon: <SiNextdotjs size={75} />,
                    color: 'via-white',
                  },
                  {
                    name: 'Tailwind CSS',
                    icon: <SiTailwindcss size={60} color="#3abdf6" />,
                    color: 'via-blue-400',
                  },
                  {
                    name: 'Python',
                    icon: <SiPython size={60} color="#3d76a7" />,
                    color: 'via-sky-700',
                  },
                  {
                    name: 'Node.js',
                    icon: <SiNodedotjs size={60} color="#78b95b" />,
                    color: 'via-green-500',
                  },
                  {
                    name: 'Express',
                    icon: <SiExpress size={75} />,
                    color: 'via-white',
                  },
                  {
                    name: 'NestJS',
                    icon: <SiNestjs size={60} color="#e0234e" />,
                    color: 'via-red-600',
                  },
                  {
                    name: 'MongoDB',
                    icon: <SiMongodb size={60} color="#15ad55" />,
                    color: 'via-green-600',
                  },
                  {
                    name: 'Postgresql',
                    icon: <SiPostgresql size={60} color="#396c95" />,
                    color: 'via-sky-700',
                  },
                  {
                    name: 'Vitest',
                    icon: <SiVitest size={60} color="#22c55e" />,
                    color: 'via-green-600',
                  },
                  {
                    name: 'Storybook',
                    icon: <SiStorybook size={60} color="#db2777" />,
                    color: 'via-pink-500',
                  },
                  {
                    name: 'Github Actions',
                    icon: <SiGithubactions size={60} color="#2563eb" />,
                    color: 'via-blue-600',
                  },
                  {
                    name: 'Vercel',
                    icon: <SiVercel size={60} />,
                    color: 'via-white',
                  },
                  {
                    name: 'Terraform',
                    icon: <SiTerraform size={60} color="#7b42bc" />,
                    color: 'via-purple-500',
                  },
                  {
                    name: 'AWS',
                    icon: <SiAmazonaws size={60} color="#ff9d13" />,
                    color: 'via-orange-400',
                  },
                ]}
              />
            </div>

            <div className="grid grid-cols-4 gap-12 sm:hidden">
              <AnimatedTooltip
                items={[
                  {
                    name: 'Javascript',
                    icon: <SiJavascript size={50} color="#f6e028" />,
                    color: 'via-yellow-500',
                  },
                  {
                    name: 'Typescript',
                    icon: <SiTypescript size={50} color="#127ecd" />,
                    color: 'via-blue-500',
                  },
                  {
                    name: 'React',
                    icon: <SiReact size={50} color="#67dbfa" />,
                    color: 'via-blue-400',
                  },
                  {
                    name: 'Redux',
                    icon: <SiRedux size={50} color="#7b50bd" />,
                    color: 'via-purple-500',
                  },
                  {
                    name: 'Next.js',
                    icon: <SiNextdotjs size={50} />,
                    color: 'via-white',
                  },
                  {
                    name: 'Tailwind CSS',
                    icon: <SiTailwindcss size={50} color="#3abdf6" />,
                    color: 'via-blue-400',
                  },
                  {
                    name: 'Python',
                    icon: <SiPython size={50} color="#3d76a7" />,
                    color: 'via-sky-700',
                  },
                  {
                    name: 'Node.js',
                    icon: <SiNodedotjs size={50} color="#78b95b" />,
                    color: 'via-green-500',
                  },
                  {
                    name: 'Express',
                    icon: <SiExpress size={50} />,
                    color: 'via-white',
                  },
                  {
                    name: 'NestJS',
                    icon: <SiNestjs size={50} color="#e0234e" />,
                    color: 'via-red-600',
                  },
                  {
                    name: 'MongoDB',
                    icon: <SiMongodb size={50} color="#15ad55" />,
                    color: 'via-green-600',
                  },
                  {
                    name: 'Postgresql',
                    icon: <SiPostgresql size={50} color="#396c95" />,
                    color: 'via-sky-700',
                  },
                  {
                    name: 'Vitest',
                    icon: <SiVitest size={50} color="#22c55e" />,
                    color: 'via-green-600',
                  },
                  {
                    name: 'Storybook',
                    icon: <SiStorybook size={50} color="#db2777" />,
                    color: 'via-pink-500',
                  },
                  {
                    name: 'Github Actions',
                    icon: <SiGithubactions size={50} color="#2563eb" />,
                    color: 'via-blue-600',
                  },
                  {
                    name: 'Vercel',
                    icon: <SiVercel size={50} />,
                    color: 'via-white',
                  },
                  {
                    name: 'Terraform',
                    icon: <SiTerraform size={50} color="#7b42bc" />,
                    color: 'via-purple-500',
                  },
                  {
                    name: 'AWS',
                    icon: <SiAmazonaws size={50} color="#ff9d13" />,
                    color: 'via-orange-400',
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const slideDownAnimationVariants = {
  initial: {
    opacity: 0,
    y: -75,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  }),
}

const slideUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 75,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  }),
}

const bounceInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 * index,
      type: 'spring',
    },
  }),
}

const fadeInAnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.25,
      duration: 2.5,
    },
  },
  remove: { opacity: 0 },
}
