'use client'

import { motion } from 'framer-motion'

export default function Experiences() {
  return (
    <motion.div variants={slideUpAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="select-none flex flex-col">
      <section className="flex flex-col items-center">
        <h2 className="text-center text-4xl mt-0 mb-8">
          <span className="relative px-2">
            Experience
            <svg className="pointer-events-none absolute inset-x-0 -bottom-8 text-blue-500" viewBox="0 0 687 155">
              <g stroke="currentColor" strokeWidth="7" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
              </g>
            </svg>
          </span>
        </h2>
        {/* {experiences.map(({ title, description, type, year }, index) => (
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
        ))} */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full mt-12 mb-32 justify-center items-center'>
          { experiences.map(({ title, description, type, year }, index) => (
            <div key={index} className={(experiences.length % 2 !== 0 && index === (experiences.length - 1)) ? 'col-span-2 w-[50%] text-center border-2 border-gray-800 py-8 px-4 rounded-xl place-self-center' : 'w-[75%] text-center border-2 border-gray-800 py-8 px-4 rounded-xl place-self-center'}>
              <h4 className='text-3xl mb-3 font-semibold'>{title}</h4>
              <p className='text-muted text-gray-400 text-sm mb-6'>{year}</p>
              <p className='text-xl'>{description}</p>
            </div>
          )) }
        </div>
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
    year: 'May 2023 - Aug 2023',
    title: 'Northcoders',
    description: '3 Month Data Engineering Bootcamp.',
    type: 'education'
  },
  {
    year: 'Sep 2021 - Mar 2022',
    title: 'Epicode',
    description: '6 Month Coding Bootcamp. Full Stack Development.',
    type: 'education'
  },
  {
    year: 'Jun 2018 - Sep 2021, Mar 2022 - June 2023, Sep 2023 - Present',
    title: 'WHSmith',
    description: 'Team Leader At Manchester Airport.',
    type: 'work'
  }
]
