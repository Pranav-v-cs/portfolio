'use client'

import { ThemeProvider } from './hooks/useTheme'
import { SideDock } from './components/layout/SideDock'
import { BottomNav } from './components/layout/BottomNav'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/effects/CustomCursor'
import { ParticleBackground } from './components/effects/ParticleBackground'
import { SplashScreen } from './components/effects/SplashScreen'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <SplashScreen />
      <CustomCursor />
      <ParticleBackground />

      <SideDock />
      <BottomNav />

      <main className="lg:ml-20">
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>
        <Skills />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
