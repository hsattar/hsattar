'use client'

import { useState } from 'react'
import { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

export const AnimatedTooltip = ({ items }: IProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)

  return (
    <>
      {items.map((item, idx) => (
        <div className="-mr-4 relative group" key={item.id} onMouseEnter={() => setHoveredIndex(item.id)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -top-16 -left-1/2 -right-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className={`absolute inset-x-10 z-30 w-[50%] -bottom-px bg-gradient-to-r from-transparent ${item.color} to-transparent h-px`} />
                <div className={`absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent ${item.color} to-transparent h-px`} />
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
              </motion.div>
            )}
          </AnimatePresence>
          {item.icon}
        </div>
      ))}
    </>
  )
}

interface IProps {
  items: {
    id: number
    name: string
    icon: React.JSX.Element
    color: string
  }[]
}
