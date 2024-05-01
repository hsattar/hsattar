'use client'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center my-4 select-none min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-5xl p-4 text-center">Hasan Sattar</p>
          <h1 className="text-8xl mt-4 mb-6 font-semibold text-center gradient-text">Full Stack Developer</h1>
        </motion.div>
        <div className="flex text-4xl my-8 lg:mb-0">
          <motion.div
            variants={fadeInAnimationSocialVariants}
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
            variants={fadeInAnimationSocialVariants}
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
        {/* <div className='flex mt-16'>
          <a className=''>Tech Stack</a>
          <a>Projects</a>
          <a>Experience</a>
        </div> */}
      </div>
    </section>
  )
}

const fadeInAnimationVariants = {
  initial: {
      opacity: 0,
      y: 100
  },
  animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
          delay: 0.25,
          type: 'spring'
      }
  })
}

const fadeInAnimationSocialVariants = {
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