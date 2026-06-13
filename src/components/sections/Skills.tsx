'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal, StaggerReveal, fadeInItem } from '../effects/ScrollReveal'
import { portfolioData } from '../../data/portfolio'

function SkillBar({ name, level, category }: { name: string; level: number; category: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div variants={fadeInItem()} ref={ref}>
      <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-medium text-[#1a1a1a] dark:text-[#f5f5f0]">{name}</span>
          <span className="font-mono text-xs text-[#999] dark:text-[#666]">{category}</span>
        </div>
        <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-accent"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <ScrollReveal>
          <div className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">
            Skills
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#f5f5f0] sm:text-5xl">
            Tools & technologies
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mb-10 text-base text-[#666] dark:text-[#888]">
            Technologies I work with day-to-day.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioData.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </StaggerReveal>
        </ScrollReveal>
      </div>
    </section>
  )
}
