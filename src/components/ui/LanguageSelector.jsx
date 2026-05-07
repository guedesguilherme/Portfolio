import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../contexts/LangContext'

const LANGS = [
  { code: 'pt', label: 'PT-BR', full: 'Português' },
  { code: 'en', label: 'EN',    full: 'English' },
  { code: 'es', label: 'ES',    full: 'Español' },
]

export default function LanguageSelector() {
  const { lang, changeLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = LANGS.find(l => l.code === lang) || LANGS[0]

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 10px',
          borderRadius: 6,
          border: '1px solid var(--gold-border)',
          background: 'transparent',
          color: 'var(--text-2)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.08em',
          cursor: 'pointer',
          transition: 'border-color 0.2s, color 0.2s',
          lineHeight: 1,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--gold-border-hov)'
          e.currentTarget.style.color = 'var(--gold)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--gold-border)'
          e.currentTarget.style.color = 'var(--text-2)'
        }}
      >
        {current.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex' }}
        >
          <ChevronDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="glass"
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              minWidth: 140,
              borderRadius: 10,
              overflow: 'hidden',
              zIndex: 9999,
            }}
          >
            {LANGS.map((l, i) => {
              const isActive = l.code === lang
              return (
                <button
                  key={l.code}
                  onClick={() => { changeLang(l.code); setOpen(false) }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    background: isActive ? 'var(--gold-dim)' : 'transparent',
                    border: 'none',
                    borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                    color: isActive ? 'var(--gold)' : 'var(--text-2)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--gold-dim)'
                      e.currentTarget.style.color = 'var(--text-1)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text-2)'
                    }
                  }}
                >
                  <span>{l.full}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.06em',
                    opacity: 0.6,
                  }}>
                    {l.label}
                  </span>
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
