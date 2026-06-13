'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'
import { useTheme } from '../../hooks/useTheme'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
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
    for (const { id } of links) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass flex items-center gap-6 rounded-2xl px-5 py-2.5 shadow-sm">
        <button
          onClick={() => scrollTo('hero')}
          className="text-lg font-bold tracking-tight text-[#1a1a1a] dark:text-[#f5f5f0]"
        >
          P<span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                'relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200',
                active === id
                  ? 'text-accent'
                  : 'text-[#555] hover:text-[#1a1a1a] dark:text-[#aaa] dark:hover:text-[#f5f5f0]'
              )}
            >
              {active === id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-accent/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#555] transition-colors hover:text-[#1a1a1a] dark:text-[#aaa] dark:hover:text-[#f5f5f0]"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </motion.div>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#555] transition-colors hover:text-[#1a1a1a] dark:text-[#aaa] dark:hover:text-[#f5f5f0] md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 w-[calc(100%-2rem)] max-w-md md:hidden"
          >
            <nav className="glass rounded-2xl p-3">
              {links.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    'flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    active === id
                      ? 'bg-accent/10 text-accent'
                      : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a] dark:text-[#aaa] dark:hover:bg-white/5 dark:hover:text-[#f5f5f0]'
                  )}
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
