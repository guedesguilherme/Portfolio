import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useLang } from '../contexts/LangContext'

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ── Easter egg 3: period → basketball ─────────────────────────
function MagicPeriod() {
  const [active, setActive] = useState(false)

  const activate = () => {
    if (active) return
    setActive(true)
    setTimeout(() => setActive(false), 1600)
  }

  return (
    <span
      onMouseEnter={activate}
      style={{ position: 'relative', display: 'inline-block', cursor: 'default' }}
    >
      <AnimatePresence mode="wait">
        {active ? (
          <motion.span
            key="ball"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 20 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{ display: 'inline-block', lineHeight: 1 }}
          >
            <BasketballMini />
          </motion.span>
        ) : (
          <motion.span
            key="dot"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15 }}
            style={{ color: 'var(--gold)' }}
          >
            .
          </motion.span>
        )}
      </AnimatePresence>

      {/* "nice catch" tooltip */}
      <AnimatePresence>
        {active && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 8px)',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'var(--gold)',
              background: 'var(--bg-2)',
              border: '1px solid var(--gold-border)',
              padding: '3px 8px',
              borderRadius: 4,
              pointerEvents: 'none',
            }}
          >
            nice catch
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

function BasketballMini() {
  return (
    <svg
      width="0.65em"
      height="0.65em"
      viewBox="0 0 200 200"
      fill="none"
      stroke="var(--gold)"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: '0.1em' }}
    >
      <circle cx="100" cy="100" r="96" strokeWidth="5" />
      <path d="M4 100 Q52 78 100 100 Q148 122 196 100" strokeWidth="4" />
      <path d="M100 4 Q78 52 100 100 Q122 148 100 196" strokeWidth="4" />
      <path d="M30 30 Q65 67 100 100 Q135 133 170 170" strokeWidth="3" />
      <path d="M170 30 Q135 67 100 100 Q65 133 30 170" strokeWidth="3" />
    </svg>
  )
}

function ContactRow({ link, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {index > 0 && <div style={{ height: 1, background: 'var(--border-strong)' }} />}
      <a
        href={link.href}
        target={link.href.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(1.25rem, 2.5vw, 1.75rem) 0',
          textDecoration: 'none',
          color: 'inherit',
          position: 'relative',
          paddingLeft: hovered ? '0.5rem' : 0,
          transition: 'padding-left 0.25s',
        }}
      >
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          style={{
            position: 'absolute',
            left: -20,
            top: 0,
            bottom: 0,
            width: 3,
            background: 'var(--gold)',
            transformOrigin: 'top',
            borderRadius: 2,
          }}
        />

        <div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.12em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.3rem',
            opacity: 0.7,
          }}>
            {link.label}
          </span>
          <span className="font-display" style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
            fontWeight: 400,
            color: hovered ? 'var(--gold)' : 'var(--text-1)',
            letterSpacing: '-0.01em',
            transition: 'color 0.22s',
          }}>
            {link.value}
          </span>
        </div>

        <motion.div
          animate={{ x: hovered ? 6 : 0, color: hovered ? 'var(--gold)' : 'var(--text-3)' }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0 }}
        >
          <ArrowRight />
        </motion.div>
      </a>
    </motion.div>
  )
}

export default function Contacts() {
  const { t }  = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contacts" className="section-container" style={{
      padding: 'clamp(5rem, 14vh, 10rem) 0 clamp(7rem, 16vh, 12rem)',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
    }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 8vw, 7rem)',
          alignItems: 'start',
        }}
        className="contacts-grid"
      >
        {/* Left: headline */}
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.15em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            {t.nav.contacts}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--text-1)',
              marginBottom: '1.5rem',
            }}
          >
            {t.contacts.headline}<MagicPeriod />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
              color: 'var(--text-2)',
              lineHeight: 1.7,
              maxWidth: '44ch',
            }}
          >
            {t.contacts.subtitle}
          </motion.p>
        </div>

        {/* Right: contact rows */}
        <div style={{ paddingTop: 'clamp(0rem, 2vw, 1rem)' }}>
          <div style={{ paddingLeft: 20 }}>
            {t.contacts.links.map((link, i) => (
              <ContactRow key={link.label} link={link} index={i} />
            ))}
            <div style={{ height: 1, background: 'var(--border-strong)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '3rem clamp(1.5rem, 6vw, 5rem) 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--text-3)' }}>
          Guilherme Guedes — {new Date().getFullYear()}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--text-3)' }}>
          AI Engineer & Fullstack Developer
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .contacts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
