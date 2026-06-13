'use client'

import { ThemeProvider } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
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

      <Navbar />
      <BottomNav />

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
