import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../contexts/LangContext'
import { formatText } from '../utils/formatText'

// ── Easter egg 2: basketball half-court outline (5/10 visibility) ─────
function BasketballCourt() {
  return (
    <svg
      viewBox="0 0 500 470"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        right: '-3%',
        width: '62%',
        maxWidth: 560,
        color: 'var(--gold)',
        opacity: 0.09,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {/* Court outline */}
      <rect x="2" y="2" width="496" height="466" strokeWidth="2.4" />
      {/* Center half-circle at midcourt */}
      <path d="M188 2 A62 62 0 0 0 312 2" strokeWidth="1.6" />
      {/* Key / paint area */}
      <rect x="170" y="268" width="160" height="200" strokeWidth="1.8" />
      {/* Free throw circle (top arc, outside lane) */}
      <path d="M170 268 A80 80 0 0 0 330 268" strokeWidth="1.5" />
      {/* Free throw circle (bottom arc, inside lane) */}
      <path d="M170 268 A80 80 0 0 1 330 268" strokeWidth="1.5" strokeDasharray="7 5" />
      {/* Three-point corner straight lines */}
      <line x1="28" y1="468" x2="28"  y2="406" strokeWidth="1.5" />
      <line x1="472" y1="468" x2="472" y2="406" strokeWidth="1.5" />
      {/* Three-point arc */}
      <path d="M28 406 A228 228 0 0 1 472 406" strokeWidth="1.5" />
      {/* Restricted area arc */}
      <path d="M216 468 A34 34 0 0 1 284 468" strokeWidth="1.4" />
      {/* Basket */}
      <circle cx="250" cy="432" r="19" strokeWidth="2" />
      {/* Backboard */}
      <line x1="208" y1="460" x2="292" y2="460" strokeWidth="3" />
    </svg>
  )
}

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function About() {
  const { t }  = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="section-container"
      style={{
        padding: 'clamp(5rem, 12vh, 8rem) 0',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Basketball court easter egg */}
      <BasketballCourt />

      <div
        ref={ref}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
          position: 'relative',
          zIndex: 1,
        }}
        className="about-grid"
      >
        {/* ── Left: Story ─── */}
        <div>
          <motion.p
            custom={0} variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
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
            {t.about.section_label}
          </motion.p>

          <motion.h2
            custom={1} variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text-1)',
              marginBottom: '2rem',
            }}
          >
            {t.about.display_headline_1}<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>
              {t.about.display_headline_2}
            </span>
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {t.about.bio.map((para, i) => (
              <motion.p
                key={i}
                custom={i + 2} variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.88rem, 1.25vw, 0.98rem)',
                  color: 'var(--text-2)',
                  lineHeight: 1.75,
                  maxWidth: '58ch',
                }}
              >
                {formatText(para)}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Right: Metrics ─── */}
        <div style={{ paddingTop: 'clamp(3rem, 6vh, 5rem)' }}>
          {t.about.metrics.map((metric, i) => (
            <motion.div
              key={i}
              custom={i + 3} variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              {i > 0 && (
                <div style={{ height: 1, background: 'var(--border-strong)', margin: '0 0 2.5rem 0' }} />
              )}
              <div style={{ paddingBottom: '2.5rem' }}>
                <span className="font-display" style={{
                  display: 'block',
                  fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'var(--gold)',
                  marginBottom: '0.5rem',
                }}>
                  {metric.value}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)',
                  color: 'var(--text-2)',
                  letterSpacing: '0.02em',
                }}>
                  {metric.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
