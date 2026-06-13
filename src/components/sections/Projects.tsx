'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerReveal, fadeInItem } from '../effects/ScrollReveal'
import { Badge } from '../ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'
import { portfolioData } from '../../data/portfolio'
import { ExternalLink } from 'lucide-react'

const categories = [
  { value: 'all', label: 'All' },
  { value: 'Web', label: 'Web' },
  { value: 'Design', label: 'Design' },
  { value: 'Mobile', label: 'Mobile' },
]

function ProjectCard({
  title,
  description,
  tags,
  gradient,
  index,
}: {
  title: string
  description: string
  tags: string[]
  gradient: string
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <motion.div variants={fadeInItem()}>
      <div
        ref={cardRef}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-200 hover:border-accent/30 hover:shadow-accent/5 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20"
        style={{ transition: 'transform 0.15s ease-out' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-10 p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-mono text-[#888] dark:text-[#777]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <ExternalLink size={14} className="text-[#aaa] transition-colors duration-200 group-hover:text-accent dark:text-[#555]" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a] dark:text-[#f5f5f0]">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-[#444] dark:text-[#aaa]">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [category, setCategory] = useState('all')

  const filtered = category === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === category)

  return (
    <section
      id="projects"
      className="relative px-6 py-40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <ScrollReveal>
          <div className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">
            Projects
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#f5f5f0] sm:text-5xl">
            Selected work
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mb-10 text-base text-[#555] dark:text-[#aaa]">
            A collection of projects I&apos;ve built and designed.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Tabs value={category} onValueChange={(v) => setCategory(v)}>
            <TabsList>
              {categories.map(({ value, label }) => (
                <TabsTrigger key={value} value={value}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={category}>
              <StaggerReveal className="grid gap-8 sm:grid-cols-2">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.title} {...project} index={i} />
                ))}
              </StaggerReveal>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
}
