'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '../effects/ScrollReveal'
import { portfolioData } from '../../data/portfolio'

function Counter({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-3xl font-bold text-[#1a1a1a] dark:text-[#f5f5f0] sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {value}
        </motion.span>
        <span className="text-accent">+</span>
      </motion.p>
      <p className="mt-1 text-sm text-secondary">{suffix}</p>
      <p className="text-xs text-tertiary">{label}</p>
    </div>
  )
}

export function About() {
  const base = import.meta.env.BASE_URL
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [revealed, setRevealed] = useState(false)
  const [hovering, setHovering] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }, [])

  const mask = revealed
    ? undefined
    : `radial-gradient(circle 50px at ${pos.x}% ${pos.y}%, black 50px, transparent 51px)`
  return (
    <section
      id="about"
      className="relative px-6 py-40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <ScrollReveal>
          <div className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">
            About
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mb-16 text-4xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#f5f5f0] sm:text-5xl">
            Who I am
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
            <div className="flex justify-center lg:justify-start">
              <div
                ref={ref}
                className="relative h-72 w-72 sm:h-80 sm:w-80"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => setRevealed((r) => !r)}
              >
                <img
                  src={`${base}images/avatar-dotmatrix.svg`}
                  alt="Pranav"
                  className="h-full w-full"
                />
                <img
                  src={`${base}images/avatar-original.jpg`}
                  alt="Pranav"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-300"
                  style={{
                    opacity: hovering || revealed ? 1 : 0,
                    maskImage: revealed ? undefined : mask,
                    WebkitMaskImage: revealed ? undefined : mask,
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-3">
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 text-base leading-relaxed text-secondary sm:text-lg">
                {portfolioData.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="glass-card mt-12 grid grid-cols-2 gap-6 p-6 sm:grid-cols-4">
                {portfolioData.stats.map((stat, i) => (
                  <Counter key={i} {...stat} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
