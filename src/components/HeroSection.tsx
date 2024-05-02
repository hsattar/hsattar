'use client'

import { motion } from 'framer-motion'
import {
  SiAmazonaws,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center my-4 select-none min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center">
          <motion.div variants={slideDownAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <p className="text-3xl md:text-5xl p-4 text-center">Hasan Sattar</p>
          </motion.div>
          <motion.div variants={slideUpAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h1 className="text-6xl md:text-8xl mt-4 mb-6 font-semibold text-center gradient-text">Full Stack Developer</h1>
          </motion.div>
          <div className="flex text-4xl my-8 lg:mb-0">
            <motion.div variants={bounceInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={2} className="mx-3">
              <a href="https://github.com/hsattar" target="_blank" rel="noreferrer">
                <SiGithub size={50} />
              </a>
            </motion.div>
            <motion.div variants={bounceInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={3} className="mx-3">
              <a href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer">
                <SiLinkedin size={50} />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="remove"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12 sm:gap-16 mt-20"
          >
            <SiHtml5 size={75} color="#ea7331" />
            <SiCss3 size={75} color="#2466f1" />
            <SiBootstrap size={75} color="#8119f4" />
            <SiTailwindcss size={75} color="#3abdf6" />
            <SiFramer size={75} color="#000" />
            <SiPython size={75} color="#3d76a7" />
            <SiJavascript size={75} color="#f6e028" />
            <SiTypescript size={75} color="#127ecd" />
            <SiReact size={75} color="#67dbfa" />
            <SiRedux size={75} color="#7b50bd" />
            <SiNextdotjs size={75} />
            <SiNodedotjs size={75} color="#78b95b" />
            <SiExpress size={75} />
            <SiMongodb size={75} color="#15ad55" />
            <SiPostgresql size={75} color="#396c95" />
            <SiJest size={75} color="#c8441f" />
            <SiVercel size={75} />
            <SiAmazonaws size={75} color="#ff9d13" />
          </motion.div>
        </div>
      </section>
    </>
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
