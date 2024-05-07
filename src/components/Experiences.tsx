'use client'

import { motion } from 'framer-motion'

export default function Experiences() {
  return (
    <motion.div variants={slideUpAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="select-none flex flex-col">
      <section className="flex flex-col items-center">
        <h2 className="text-center text-4xl mb-8 mt-16">Experiences</h2>
        {experiences.map(({ title, description, type, year }, index) => (
          <div key={index} className={`flex items-center w-[90vw] lg:w-[75vw] my-4 rounded-md text-center border-[3px] ${type === 'education' ? 'border-green-300' : 'border-blue-500'}`}>
            <div
              className={`h-[100%] ${description.length === 24 && 'leading-[100px]'} ${description.length === 34 && 'leading-[125px]'} ${description.length === 48 && 'leading-[145px]'} sm:leading-[100px] w-[150px] border-r-[3px] ${type === 'education' ? 'border-green-300' : 'border-blue-500'}`}
            >
              <h3 className="font-medium">{year}</h3>
            </div>

            <div className="w-full p-4">
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
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

const experiences: IExperience[] = [
  {
    year: '2023 - 2023',
    title: 'Northcoders',
    description: '3 Month Data Engineering Bootcamp.',
    type: 'education',
  },
  {
    year: '2022 - 2023',
    title: 'WHSmith',
    description: 'Team Leader At Manchester Airport.',
    type: 'work',
  },
  {
    year: '2021 - 2022',
    title: 'Epicode',
    description: '6 Month Coding Bootcamp. Full Stack Development.',
    type: 'education',
  },
  {
    year: '2018 - 2021',
    title: 'WHSmith',
    description: 'Team Leader At Manchester Airport.',
    type: 'work',
  },
]
