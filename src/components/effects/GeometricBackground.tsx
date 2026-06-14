'use client'

import { useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

function ReactiveShape({
  className,
  style,
  factorX = 0.02,
  factorY = 0.02,
  mouseX,
  mouseY,
  centerX,
  centerY,
}: {
  className?: string
  style?: React.CSSProperties
  factorX?: number
  factorY?: number
  mouseX: number
  mouseY: number
  centerX: number
  centerY: number
}) {
  const targetX = (mouseX - centerX) * factorX
  const targetY = (mouseY - centerY) * factorY
  const springX = useSpring(0, { stiffness: 50, damping: 15 })
  const springY = useSpring(0, { stiffness: 50, damping: 15 })

  useEffect(() => {
    springX.set(targetX)
    springY.set(targetY)
  }, [targetX, targetY, springX, springY])

  return (
    <motion.div
      className={className}
      style={{ ...style, x: springX, y: springY }}
    />
  )
}

export function GeometricBackground() {
  const { x, y } = useMousePosition()
  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-geometric">
      <ReactiveShape
        factorX={-0.03}
        factorY={-0.02}
        mouseX={x}
        mouseY={y}
        centerX={centerX}
        centerY={centerY}
        className="shape-float-a absolute -left-32 -top-32 h-96 w-96 rounded-full border border-black/5 dark:border-white/5"
        style={{
          background: 'radial-gradient(circle, rgba(107,142,92,0.05) 0%, transparent 70%)',
        }}
      />

      <ReactiveShape
        factorX={0.025}
        factorY={-0.03}
        mouseX={x}
        mouseY={y}
        centerX={centerX}
        centerY={centerY}
        className="shape-float-b absolute -bottom-20 -right-20 h-80 w-80 rotate-45 rounded-3xl border border-black/5 dark:border-white/5"
        style={{
          background: 'radial-gradient(circle, rgba(107,142,92,0.04) 0%, transparent 70%)',
        }}
      />

      <ReactiveShape
        factorX={-0.015}
        factorY={0.025}
        mouseX={x}
        mouseY={y}
        centerX={centerX}
        centerY={centerY}
        className="shape-float-c absolute left-1/3 top-1/2 h-48 w-48 rounded-full border border-black/5 dark:border-white/5"
        style={{
          background: 'radial-gradient(circle, rgba(107,142,92,0.04) 0%, transparent 70%)',
        }}
      />

      <ReactiveShape
        factorX={0.02}
        factorY={0.015}
        mouseX={x}
        mouseY={y}
        centerX={centerX}
        centerY={centerY}
        className="shape-float-a absolute right-1/4 top-1/4 h-32 w-32 rotate-45 rounded-2xl border border-black/5 dark:border-white/5"
        style={{
          background: 'radial-gradient(circle, rgba(107,142,92,0.03) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
