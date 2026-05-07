import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../contexts/LangContext'

const SECTIONS = ['home', 'projects', 'about', 'writing', 'contacts']

export default function Navbar() {
  const { t } = useLang()
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState(null)
  const observersRef = useRef([])

  useEffect(() => {
    observersRef.current.forEach(obs => obs.disconnect())
    observersRef.current = []

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observersRef.current.push(obs)
    })

    return () => observersRef.current.forEach(obs => obs.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navKeys = {
    home: t.nav.home,
    projects: t.nav.projects,
    about: t.nav.about,
    writing: t.nav.writing,
    contacts: t.nav.contacts,
  }

  return (
    <nav
      className="glass"
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9000,
        borderRadius: 9999,
        padding: '0.55rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
      }}
    >
      {SECTIONS.map(id => {
        const isActive = active === id
        const isHovered = hovered === id

        return (
          <div
            key={id}
            style={{ position: 'relative' }}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 6, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.94 }}
                  transition={{ duration: 0.16 }}
                  style={{
                    position: 'absolute',
                    bottom: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    color: 'var(--gold)',
                    pointerEvents: 'none',
                    padding: '3px 8px',
                    borderRadius: 4,
                    background: 'var(--bg-2)',
                    border: '1px solid var(--gold-border)',
                  }}
                >
                  {navKeys[id]}
                </motion.span>
              )}
            </AnimatePresence>

            <button
              onClick={() => scrollTo(id)}
              aria-label={navKeys[id]}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: isActive ? 'var(--gold-dim)' : 'transparent',
                border: isActive ? '1px solid var(--gold-border)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'background 0.25s, border-color 0.25s',
              }}
            >
              <NavIcon section={id} active={isActive} />
            </button>
          </div>
        )
      })}
    </nav>
  )
}

function NavIcon({ section, active }) {
  const color = active ? 'var(--gold)' : 'var(--text-3)'
  const size = 15

  const icons = {
    home: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    projects: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    about: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    writing: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    contacts: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  }

  return icons[section] || null
}
