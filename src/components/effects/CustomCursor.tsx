'use client'

import { useEffect } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const { x, y } = useMousePosition()
  const cursorX = useSpring(x, { stiffness: 300, damping: 35 })
  const cursorY = useSpring(y, { stiffness: 300, damping: 35 })
  const dotX = useSpring(x, { stiffness: 500, damping: 20 })
  const dotY = useSpring(y, { stiffness: 500, damping: 20 })

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="h-7 w-7 rounded-full border border-accent/50 bg-accent/5" />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: dotX,
          top: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-accent/70" />
      </motion.div>
    </>
  )
}
