'use client'

import { ThemeProvider } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
import { BottomNav } from './components/layout/BottomNav'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/effects/CustomCursor'
import { InteractiveDotGrid } from './components/effects/InteractiveDotGrid'
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
      <InteractiveDotGrid />
      <div className="fixed inset-0 z-5 bg-white/40 dark:bg-black/30 backdrop-blur-[2px]" aria-hidden="true" />

      <Navbar />
      <BottomNav />

      <main className="pt-20 relative z-10">
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
