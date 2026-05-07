import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../contexts/LangContext'

const SOCIAL = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/guilherme-ryam-guedes/',
    label: 'LinkedIn',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    key: 'github',
    href: 'https://github.com/guedesguilherme',
    label: 'GitHub',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    key: 'email',
    href: 'mailto:gryan.guedes@gmail.com',
    label: 'Email',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

function TypingEffect({ phrases }) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    if (!deleting) {
      if (charIdx < current.length) {
        const t = setTimeout(() => setCharIdx(i => i + 1), 52)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(true), 2600)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => setCharIdx(i => i - 1), 26)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
      }
    }
  }, [charIdx, deleting, phraseIdx, phrases])

  useEffect(() => {
    setDisplayed(phrases[phraseIdx].slice(0, charIdx))
  }, [charIdx, phraseIdx, phrases])

  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      color: 'var(--gold)',
      fontSize: 'clamp(0.72rem, 1.4vw, 0.88rem)',
      letterSpacing: '0.04em',
    }}>
      {displayed}
      <span className="cursor-blink" />
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
}
const itemVariants = {
  hidden:   { opacity: 0, y: 26 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Home() {
  const { t } = useLang()
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, 70])

  return (
    <section id="home" className="section-container"
      style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      <div style={{
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(6rem, 10vh, 9rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'clamp(2rem, 5vw, 4rem)',
        alignItems: 'center',
      }}>

        {/* ── Left: Hero Content ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: heroY, maxWidth: 700 }}
        >
          <motion.p variants={itemVariants} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.65rem, 1.1vw, 0.78rem)',
            letterSpacing: '0.16em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}>
            <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
            {t.home.role}
          </motion.p>

          <motion.h1 variants={itemVariants} className="font-display" style={{
            fontSize: 'clamp(3.5rem, 8vw, 7.8rem)',
            fontWeight: 600,
            lineHeight: 0.92,
            letterSpacing: '-0.025em',
            color: 'var(--text-1)',
            marginBottom: '2rem',
          }}>
            Guilherme<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>Guedes.</span>
          </motion.h1>

          <motion.div variants={itemVariants} style={{ marginBottom: '2.75rem', minHeight: '1.4rem' }}>
            <TypingEffect phrases={t.home.phrases} />
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
            {SOCIAL.map(link => <SocialButton key={link.key} {...link} />)}
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 'clamp(1.5rem, 6vw, 5rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.18em',
          color: 'var(--text-3)',
          textTransform: 'uppercase',
        }}
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="14" />
            <polyline points="2 10 6 14 10 10" />
          </svg>
        </motion.span>
        {t.home.scroll_hint}
      </motion.div>
    </section>
  )
}

function SocialButton({ label, href, icon }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.55rem 1.1rem',
        borderRadius: 6,
        border: `1px solid ${hov ? 'var(--gold-border-hov)' : 'var(--border-strong)'}`,
        background: hov ? 'var(--gold-dim)' : 'transparent',
        color: hov ? 'var(--gold)' : 'var(--text-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hov ? 'translateY(-1px)' : 'translateY(0)',
        letterSpacing: '0.02em',
      }}
    >
      {icon}
      {label}
    </a>
  )
}
