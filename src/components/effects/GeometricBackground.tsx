'use client'

export function GeometricBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-geometric">
      {/* Large circle */}
      <div
        className="shape-float-a absolute -left-32 -top-32 h-96 w-96 rounded-full border border-black/5 dark:border-white/5"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.04) 0%, transparent 70%)' }}
      />
      {/* Triangle-ish (square rotated) */}
      <div
        className="shape-float-b absolute -bottom-20 -right-20 h-80 w-80 rotate-45 rounded-3xl border border-black/5 dark:border-white/5"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.03) 0%, transparent 70%)' }}
      />
      {/* Small circle */}
      <div
        className="shape-float-c absolute left-1/3 top-1/2 h-48 w-48 rounded-full border border-black/5 dark:border-white/5"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.04) 0%, transparent 70%)' }}
      />
      {/* Diamond */}
      <div
        className="shape-float-a absolute right-1/4 top-1/4 h-32 w-32 rotate-45 rounded-2xl border border-black/5 dark:border-white/5"
        style={{
          animationDelay: '-5s',
          background: 'radial-gradient(circle, rgba(5,150,105,0.03) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
