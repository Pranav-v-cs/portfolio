'use client'

import { type ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  once?: boolean
}

const directionVariants = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const initial = directionVariants[direction]

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ ...initial, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : { ...initial, opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.08,
  once = true,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function fadeInItem({ direction = 'up' }: { direction?: 'up' | 'down' | 'left' | 'right' } = {}) {
  const initial = directionVariants[direction]
  return {
    hidden: { ...initial, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  }
}
