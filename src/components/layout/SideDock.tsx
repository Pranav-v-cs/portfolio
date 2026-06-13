'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { useTheme } from '../../hooks/useTheme'
import { Home, User, FolderKanban, Code, Mail, Sun, Moon } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export function SideDock() {
  const [active, setActive] = useState('hero')
  const { theme, toggle } = useTheme()

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
    <nav className="fixed left-0 top-0 z-50 hidden h-dvh flex-col items-center gap-2 border-r border-white/10 bg-white/5 px-3 py-6 backdrop-blur-xl lg:flex">
      <button
        onClick={() => scrollTo('hero')}
        className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-lg font-bold text-accent"
      >
        P
      </button>

      <div className="flex flex-1 flex-col items-center gap-1">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={cn(
              'group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200',
              active === id
                ? 'bg-accent/15 text-accent'
                : 'text-white/40 hover:bg-white/5 hover:text-white/70'
            )}
          >
            <Icon size={18} />
            <span className="pointer-events-none absolute left-full ml-3 rounded-lg bg-black/90 px-3 py-1.5 text-xs text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap border border-white/10 backdrop-blur-xl">
              {label}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={toggle}
        className="flex h-11 w-11 items-center justify-center rounded-xl text-white/40 transition-all duration-200 hover:bg-white/5 hover:text-white/70"
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.div>
      </button>
    </nav>
  )
}
