'use client'

import { motion } from 'framer-motion'
 
export default function Skills() {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-10 select-none">Tech Stack</h2>
        <div className="flex justify-center select-none">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 max-w-[1000px] place-items-center place-content-center">
                { technologies.map(({technology, color, shadow}, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className={`${color} h-[75px] w-[150px] flex justify-center items-center rounded-lg shadow-xl ${shadow}`}
                    >
                        <p className="text-white text-2xl">{technology}</p>
                    </motion.li>
                )) }
            </div>
        </div>
        </>
    )
}

const technologies:ITechnologies[] = [{
    technology: 'HTML',
    color: 'bg-orange-500',
    shadow: 'shadow-orange-500/50'
}, {
    technology: 'CSS',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'Bootstrap',
    color: 'bg-purple-600',
    shadow: 'shadow-purple-600/50'
}, {
    technology: 'Tailwind',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'Python',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'JavaScript',
    color: 'bg-yellow-400',
    shadow: 'shadow-yellow-400/50'
}, {
    technology: 'TypeScript',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'React',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'Redux',
    color: 'bg-purple-600',
    shadow: 'shadow-purple-600/50'
}, {
    technology: 'Next.js',
    color: 'bg-gray-900',
    shadow: 'shadow-gray-900/50'
}, {
    technology: 'Node.js',
    color: 'bg-green-600',
    shadow: `shadow-green-600/50`
}, {
    technology: 'Express',
    color: 'bg-gray-900',
    shadow: 'shadow-gray-900/50'
}, {
    technology: 'MongoDB',
    color: 'bg-green-600',
    shadow: `shadow-green-600/50`
}, {
    technology: 'PostgreSQL',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'Vercel',
    color: 'bg-gray-900',
    shadow: 'shadow-gray-900/50'
}, {
    technology: 'Jest',
    color: 'bg-orange-500',
    shadow: 'shadow-orange-500/50'
}, {
    technology: 'Pytest',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'Digital Ocean',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/50'
}, {
    technology: 'AWS',
    color: 'bg-orange-500',
    shadow: 'shadow-orange-500/50'
}, {
    technology: 'DevOps',
    color: 'bg-gray-900',
    shadow: 'shadow-gray-900/50'
}]

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}