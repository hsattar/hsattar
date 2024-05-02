'use client'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { motion } from 'framer-motion'
import { SiAmazonaws, SiBootstrap, SiCss3, SiExpress, SiFramer, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si"

export default function HeroSection() {
  return (
    <>
    <section className="flex flex-col lg:flex-row items-center my-4 select-none min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        <motion.div
            variants={slideDownAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
          <p className="text-5xl p-4 text-center">Hasan Sattar</p>
        </motion.div>
        <motion.div
          variants={slideUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h1 className="text-8xl mt-4 mb-6 font-semibold text-center gradient-text">Full Stack Developer</h1>
        </motion.div>
        <div className="flex text-4xl my-8 lg:mb-0">
          <motion.div
            variants={bounceInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
          >
            <a className="mx-3" href="https://github.com/hsattar" target="_blank" rel="noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
          </motion.div>
          <motion.div
            variants={bounceInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
          >
            <a className="mx-3" href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer">
              <LinkedInIcon fontSize="large" />
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
          className='grid grid-cols-6 gap-16 mt-20'
        >
          <SiHtml5 size={75} />
          <SiCss3 size={75} />
          <SiBootstrap size={75} />
          <SiTailwindcss size={75} />
          <SiFramer size={75} />
          <SiPython size={75} />
          <SiJavascript size={75} />
          <SiTypescript size={75} />
          <SiReact size={75} />
          <SiRedux size={75} />
          <SiNextdotjs size={75} />
          <SiNodedotjs size={75} />
          <SiExpress size={75} />
          <SiMongodb size={75} />
          <SiPostgresql size={75} />
          <SiJest size={75} />
          <SiVercel size={75} />
          <SiAmazonaws size={75} />
        </motion.div>
        {/* <div className='flex mt-16'>
          <a className=''>Tech Stack</a>
          <a>Projects</a>
          <a>Experience</a>
        </div> */}
      </div>
    </section>
    </>
  )
}

const slideDownAnimationVariants = {
  initial: {
      opacity: 0,
      y: -100
  },
  animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring'
      }
  })
}

const slideUpAnimationVariants = {
  initial: {
      opacity: 0,
      y: 100
  },
  animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring'
      }
  })
}

const bounceInAnimationVariants = {
  initial: {
      opacity: 0,
      y: 100
  },
  animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
          delay: 0.25 * index,
          type: 'spring'
      }
  })
}

const fadeInAnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.25,
      duration: 2.5
    }
  },
  remove: { opacity: 0 }
}