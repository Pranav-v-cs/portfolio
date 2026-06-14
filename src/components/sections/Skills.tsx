import { useState } from 'react'
import { ScrollReveal } from '../effects/ScrollReveal'
import { skillIcons } from '../../data/portfolio'

const groups = [
  { label: 'Programming', skills: ['Python', 'Java', 'C++', 'C'] },
  { label: 'Frontend', skills: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
  { label: 'Backend', skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'MySQL', 'SQLite', 'PostgreSQL', 'MongoDB'] },
  { label: 'AI & Tools', skills: ['OpenCV', 'Git', 'Linux', 'GitHub', 'Figma', 'Shell', 'LMStudio', 'Ollama', 'Vercel', 'Render', 'Railway', 'Docker'] },
]

function MarqueeRow({ skills, reverse }: { skills: string[]; reverse: boolean }) {
  const [paused, setPaused] = useState(false)
  const copies = 8
  const items = Array.from({ length: copies * skills.length }, (_, i) => ({
    name: skills[i % skills.length],
    id: Math.floor(i / skills.length) * skills.length + (i % skills.length),
  }))

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max items-center gap-4 py-2"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${12 + skills.length * 2}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((item, i) => {
          const icon = skillIcons[item.name]
          const isDirectUrl = icon && (icon.startsWith('http') || icon.startsWith('/'))
          return (
            <div
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 rounded-xl border border-black/10 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              {icon && isDirectUrl ? (
                <img
                  src={icon}
                  alt={item.name}
                  className="h-5 w-5"
                />
              ) : icon ? (
                <>
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}&theme=light`}
                    alt={item.name}
                    className="h-5 w-5 dark:hidden"
                  />
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                    alt={item.name}
                    className="hidden h-5 w-5 dark:block"
                  />
                </>
              ) : null}
              <span className="whitespace-nowrap text-sm font-medium text-[#444] dark:text-[#ccc]">
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-40">
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
          <p className="mb-10 text-base text-secondary">
            Technologies I work with day-to-day.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            {groups.map((group, i) => (
              <div key={group.label}>
                <span className="mb-2 block text-xs font-medium tracking-wider text-tertiary uppercase">
                  {group.label}
                </span>
                <MarqueeRow skills={group.skills} reverse={i % 2 === 1} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
