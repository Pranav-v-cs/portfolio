'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { Home, User, FolderKanban, Code, Mail } from 'lucide-react'

const sections = [
  { id: 'hero', icon: Home },
  { id: 'about', icon: User },
  { id: 'projects', icon: FolderKanban },
  { id: 'skills', icon: Code },
  { id: 'contact', icon: Mail },
]

export function BottomNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 lg:hidden">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/80 px-3 py-2 backdrop-blur-2xl">
        {sections.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={cn(
              'relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200',
              active === id
                ? 'text-accent'
                : 'text-white/40 hover:text-white/70'
            )}
          >
            {active === id && (
              <motion.div
                layoutId="bottom-nav-pill"
                className="absolute inset-0 rounded-full bg-accent/15"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Icon size={18} className="relative z-10" />
          </button>
        ))}
      </div>
    </nav>
  )
}
