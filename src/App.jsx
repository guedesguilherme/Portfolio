import { useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LangProvider } from './contexts/LangContext'
import MagneticDots from './components/Background/MagneticDots'
import Controls from './components/ui/Controls'
import Navbar from './components/ui/Navbar'
import BasketballFixed from './components/ui/BasketballFixed'
import Home from './sections/Home'
import Projects from './sections/Projects'
import About from './sections/About'
import Writing from './sections/Writing'
import Contacts from './sections/Contacts'

export default function App() {
  const projectsRef = useRef(null)

  return (
    <ThemeProvider>
      <LangProvider>
        <div style={{ position: 'relative', minHeight: '100dvh', overflowX: 'hidden' }}>
          {/* Fixed background canvas */}
          <MagneticDots />

          {/* Fixed controls: language + theme */}
          <Controls />

          {/* Rolling basketball (easter egg — traverses projects section) */}
          <BasketballFixed target={projectsRef} />

          {/* Bottom floating pill navbar */}
          <Navbar />

          {/* Main content */}
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Home />
            <Projects ref={projectsRef} />
            <About />
            <Writing />
            <Contacts />
          </main>
        </div>
      </LangProvider>
    </ThemeProvider>
  )
}
