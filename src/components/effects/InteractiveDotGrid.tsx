'use client'

import { useEffect, useRef } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

interface Dot {
  ox: number
  oy: number
  x: number
  y: number
  size: number
}

export function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { x, y } = useMousePosition()
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const timeRef = useRef(0)

  useEffect(() => {
    mouseRef.current = { x, y }
  }, [x, y])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const spacing = 32
    const baseSize = 1.2
    const influenceRadius = 140
    const isDark = () => document.documentElement.classList.contains('dark')

    function resize() {
      const c = canvas!
      const cx = ctx!
      const dpr = window.devicePixelRatio || 1
      c.width = window.innerWidth * dpr
      c.height = window.innerHeight * dpr
      c.style.width = `${window.innerWidth}px`
      c.style.height = `${window.innerHeight}px`
      cx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const ww = window.innerWidth
      const wh = window.innerHeight
      const dots: Dot[] = []
      for (let x = spacing / 2; x < ww; x += spacing) {
        for (let y = spacing / 2; y < wh; y += spacing) {
          dots.push({ ox: x, oy: y, x, y, size: baseSize })
        }
      }
      dotsRef.current = dots
    }

    resize()
    window.addEventListener('resize', resize)
    const obs = new MutationObserver(() => {
      if (!canvas.classList.contains('dark')) {
        canvas.classList.toggle('dark', isDark())
      }
    })
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    let animId: number

    function draw(now: number) {
      timeRef.current = now
      const c = canvas!
      const cx = ctx!
      cx.clearRect(0, 0, c.width, c.height)

      const { x: mx, y: my } = mouseRef.current
      const dark = isDark()
      const r = dark ? 136 : 107
      const g = dark ? 255 : 142
      const b = dark ? 85 : 92

      for (const dot of dotsRef.current) {
        const dx = dot.ox - mx
        const dy = dot.oy - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const proximity = Math.max(0, 1 - dist / influenceRadius)

        dot.size = baseSize + proximity * 5
        const alpha = 0.25 + proximity * 0.75

        cx.beginPath()
        cx.arc(dot.ox, dot.oy, dot.size, 0, Math.PI * 2)
        cx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        cx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      obs.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
