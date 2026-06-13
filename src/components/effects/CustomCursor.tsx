'use client'

import { useEffect } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const { x, y } = useMousePosition()
  const cursorX = useSpring(x, { stiffness: 200, damping: 30 })
  const cursorY = useSpring(y, { stiffness: 200, damping: 30 })

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden lg:block"
      style={{ left: cursorX, top: cursorY, translateX: '-50%', translateY: '-50%' }}
    >
      <div className="h-6 w-6 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-sm" />
    </motion.div>
  )
}
