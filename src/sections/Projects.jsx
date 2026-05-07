import { forwardRef, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../contexts/LangContext'

function ExternalArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function Tag({ label }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '0.06em',
        color: hov ? 'var(--gold)' : 'var(--text-3)',
        padding: '3px 9px',
        borderRadius: 3,
        border: `1px solid ${hov ? 'var(--gold-border-hov)' : 'var(--border-strong)'}`,
        background: hov ? 'var(--gold-dim)' : 'var(--bg-2)',
        transform: hov ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
      }}
    >
      {label}
    </span>
  )
}

function ProjectRow({ item, index, viewLabel }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: 1, background: 'var(--border-strong)', transformOrigin: 'left' }}
      />

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr auto',
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          padding: 'clamp(2rem, 4vw, 2.75rem) 0',
          textDecoration: 'none',
          position: 'relative',
          alignItems: 'start',
          cursor: 'pointer',
        }}
        className="project-row"
      >
        {/* Gold left accent bar */}
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: 'absolute',
            left: -24,
            top: 0,
            bottom: 0,
            width: 3,
            background: 'var(--gold)',
            transformOrigin: 'top',
            borderRadius: 2,
          }}
        />

        {/* Large background number */}
        <div style={{ position: 'relative' }}>
          <motion.span
            animate={{
              color: hovered ? 'var(--gold)' : 'transparent',
              WebkitTextStrokeColor: hovered ? 'var(--gold)' : 'var(--border-strong)',
            }}
            transition={{ duration: 0.28 }}
            className="font-display"
            style={{
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 1,
              WebkitTextStroke: '1px',
              display: 'block',
              userSelect: 'none',
              letterSpacing: '-0.04em',
            }}
          >
            {item.number}
          </motion.span>
        </div>

        {/* Content */}
        <div style={{ paddingTop: '0.5rem' }}>
          <motion.h3
            animate={{ color: hovered ? 'var(--gold)' : 'var(--text-1)' }}
            transition={{ duration: 0.22 }}
            className="font-display"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '0.5rem',
            }}
          >
            {item.name}
          </motion.h3>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.62rem, 1vw, 0.72rem)',
            color: 'var(--gold)',
            letterSpacing: '0.08em',
            marginBottom: '1rem',
            opacity: 0.8,
          }}>
            {item.tagline}
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.82rem, 1.2vw, 0.93rem)',
            color: 'var(--text-2)',
            lineHeight: 1.68,
            maxWidth: 560,
            marginBottom: '1.25rem',
          }}>
            {item.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {item.tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>
        </div>

        {/* CTA icon */}
        <motion.div
          animate={{
            x: hovered ? 5 : 0,
            y: hovered ? -5 : 0,
            color: hovered ? 'var(--gold)' : 'var(--text-3)',
          }}
          transition={{ duration: 0.2 }}
          style={{ paddingTop: '0.6rem', flexShrink: 0 }}
        >
          {item.type === 'github' ? <GitHubIcon /> : <ExternalArrow />}
        </motion.div>
      </a>
    </motion.div>
  )
}

const Projects = forwardRef(function Projects(_, ref) {
  const { t }     = useLang()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" ref={ref} className="section-container" style={{
      padding: 'clamp(5rem, 12vh, 8rem) 0',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 5rem)' }}>

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.15em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}>
            <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            {t.projects.section_label}
          </p>
        </motion.div>

        <div style={{ paddingLeft: 24 }}>
          {t.projects.items.map((item, i) => (
            <ProjectRow key={item.number} item={item} index={i} viewLabel={t.projects.view} />
          ))}
          <div style={{ height: 1, background: 'var(--border-strong)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-row { grid-template-columns: 70px 1fr !important; }
          .project-row > *:last-child { display: none; }
        }
      `}</style>
    </section>
  )
})

export default Projects
