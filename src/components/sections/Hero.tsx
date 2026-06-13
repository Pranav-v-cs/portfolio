'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { Magnetic } from '../effects/Magnetic'
import { Button } from '../ui/button'
import { portfolioData } from '../../data/portfolio'

const nameLetters = portfolioData.name.split('')
const roleWords = portfolioData.role.split(' ')

function FloatingOrb({ delay = 0, size = 300, x = 0, y = 0, opacity = 0.12 }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full bg-accent blur-3xl"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%`, opacity }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-20"
    >
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <FloatingOrb delay={0} size={400} x={-10} y={20} opacity={0.12} />
        <FloatingOrb delay={2} size={250} x={80} y={10} opacity={0.08} />
        <FloatingOrb delay={4} size={300} x={50} y={70} opacity={0.1} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-3xl text-center">
        <motion.div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Available for work
        </motion.div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          <span className="flex items-center justify-center gap-2 flex-wrap">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block text-[#1a1a1a] dark:text-[#f5f5f0]"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.06,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <motion.span
              className="text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + nameLetters.length * 0.06 + 0.3 }}
            >
              .
            </motion.span>
          </span>
        </h1>

        <p className="mb-2 text-lg text-[#666] dark:text-[#888] sm:text-xl">
          {roleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + i * 0.15,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.p
          className="mx-auto mb-10 max-w-lg text-sm text-[#999] dark:text-[#666] sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {portfolioData.tagline}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <Magnetic>
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gap-2"
            >
              <Mail size={16} />
              Get in touch
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToProjects}
            >
              View work
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#999] transition-colors hover:text-accent dark:text-[#666]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={scrollToProjects}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  )
}
