import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../contexts/LangContext'

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function GhostArticleCard({ article, delay, comingSoon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        border: '1px solid var(--border-strong)',
        borderRadius: 12,
        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
        background: 'var(--bg-3)',
        overflow: 'hidden',
      }}
    >
      {/* Lock overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(9,9,10,0.45)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          borderRadius: 12,
          zIndex: 2,
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'var(--gold)',
          opacity: 0.7,
        }}>
          <LockIcon />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            {comingSoon}
          </span>
        </div>
      </div>

      {/* Ghost content */}
      <div style={{ opacity: 0.25 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.1em',
          color: 'var(--text-3)',
          marginBottom: '0.75rem',
          display: 'flex',
          gap: '1rem',
        }}>
          <span>{article.date}</span>
          <span>{article.read_time}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          fontWeight: 500,
          color: 'var(--text-1)',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
        }}>
          {article.title}
        </h3>
        <div style={{
          marginTop: '1.25rem',
          height: 1,
          background: 'var(--border)',
        }} />
        <div style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '0.5rem',
        }}>
          {['—', '—', '—'].map((_, i) => (
            <div key={i} style={{
              height: 8,
              background: 'var(--border-strong)',
              borderRadius: 2,
              width: `${[80, 55, 35][i]}px`,
            }} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Writing() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="writing"
      className="section-container"
      style={{
        padding: 'clamp(5rem, 12vh, 8rem) 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        {/* Header */}
        <div
          ref={ref}
          style={{
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'end',
          }}
          className="writing-header"
        >
          <div>
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
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              {t.writing.section_label}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: 'var(--text-1)',
                lineHeight: 1.15,
              }}
            >
              {t.writing.display_headline_1}<br />
              <span style={{ color: 'var(--text-2)', fontStyle: 'italic', fontWeight: 300 }}>{t.writing.display_headline_2}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
              color: 'var(--text-2)',
              lineHeight: 1.7,
              maxWidth: '52ch',
            }}
          >
            {t.writing.subtitle}
          </motion.p>
        </div>

        {/* Ghost article grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="writing-grid"
        >
          {t.writing.placeholder_articles.map((article, i) => (
            <GhostArticleCard key={i} article={article} delay={0.1 + i * 0.1} comingSoon={t.writing.coming_soon} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .writing-grid { grid-template-columns: 1fr !important; }
          .writing-header { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .writing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
