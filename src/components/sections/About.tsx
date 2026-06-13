'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '../effects/ScrollReveal'
import { Avatar, AvatarFallback } from '../ui/avatar'
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
      <p className="mt-1 text-sm text-[#666] dark:text-[#888]">{suffix}</p>
      <p className="text-xs text-[#999] dark:text-[#666]">{label}</p>
    </div>
  )
}

export function About() {
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
              <Avatar className="h-48 w-48 rounded-2xl border border-black/10 shadow-lg sm:h-56 sm:w-56 dark:border-white/10">
                <AvatarFallback className="rounded-2xl bg-black/5 text-4xl text-[#999] dark:bg-white/5 dark:text-[#666]">
                  P
                </AvatarFallback>
              </Avatar>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-3">
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 text-base leading-relaxed text-[#666] dark:text-[#888] sm:text-lg">
                {portfolioData.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="glass-card mt-12 grid grid-cols-3 gap-6 p-6">
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
