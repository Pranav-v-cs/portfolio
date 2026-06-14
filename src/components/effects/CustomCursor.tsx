'use client'

import { useState, useLayoutEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

export function CustomCursor() {
  const { x, y } = useMousePosition()
  const [onAccent, setOnAccent] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const checkAccent = useCallback((target: HTMLElement | null) => {
    let el: HTMLElement | null = target
    while (el && el !== document.documentElement) {
      if (getComputedStyle(el).backgroundColor === 'rgb(136, 255, 85)' || getComputedStyle(el).backgroundColor === 'rgb(107, 142, 92)') {
        return true
      }
      el = el.parentElement
    }
    return false
  }, [])

  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsMobile(!mq.matches)
    if (!mq.matches) return

    document.documentElement.setAttribute('style', 'cursor: none !important')
    const sheet = new CSSStyleSheet()
    sheet.replaceSync('*, *::before, *::after { cursor: none !important; }')
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]

    const handle = (e: MouseEvent) => setOnAccent(checkAccent(e.target as HTMLElement))
    document.addEventListener('mouseover', handle)
    return () => {
      document.documentElement.removeAttribute('style')
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== sheet)
      document.removeEventListener('mouseover', handle)
    }
  }, [checkAccent])

  if (isMobile) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      style={{ translate: '-50% -50%' }}
      animate={{ left: x, top: y }}
      transition={{ type: 'spring', stiffness: 2000, damping: 25, mass: 0.1 }}
    >
      <div
        className="h-4 w-4 rounded-full blur-[3px] transition-colors duration-150"
        style={{
          backgroundColor: onAccent ? '#0a0a0a' : 'var(--color-accent)',
          boxShadow: onAccent
            ? '0 0 10px var(--color-accent-glow)'
            : '0 0 10px var(--color-accent-glow)',
        }}
      />
    </motion.div>
  )
}
