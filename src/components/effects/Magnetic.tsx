'use client'

import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticProps {
  children: ReactNode
  className?: string
}

export function Magnetic({ children, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
    >
      {children}
    </motion.div>
  )
}
