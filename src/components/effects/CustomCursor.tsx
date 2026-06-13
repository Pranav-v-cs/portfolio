'use client'

import { useEffect } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const { x, y } = useMousePosition()
  const cursorX = useSpring(x, { stiffness: 250, damping: 25 })
  const cursorY = useSpring(y, { stiffness: 250, damping: 25 })

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      style={{ left: cursorX, top: cursorY, translateX: '-50%', translateY: '-50%' }}
    >
      <div className="h-5 w-5 rounded-full border border-accent/40 bg-accent/8" />
    </motion.div>
  )
}
