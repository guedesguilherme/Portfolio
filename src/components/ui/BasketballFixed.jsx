import { motion, useScroll, useTransform } from 'framer-motion'

export default function BasketballFixed({ target }) {
  const scrollOptions = target
    ? { target, offset: ['start end', 'end start'] }
    : {}

  const { scrollYProgress } = useScroll(scrollOptions)

  const x       = useTransform(scrollYProgress, [0, 1], ['0vw', '-84vw'])
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.18])
  const opacity = useTransform(scrollYProgress, [0, 0.06, 0.82, 1], [0, 1, 0.88, 0])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '50%',
        right: '5vw',
        width: 'clamp(180px, 28vw, 400px)',
        height: 'clamp(180px, 28vw, 400px)',
        transform: 'translateY(-50%)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      <motion.div style={{ x, scale, opacity, width: '100%', height: '100%' }}>
        {/* Constant rotation — independent of scroll */}
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            style={{ width: '100%', height: '100%', color: 'var(--gold)', opacity: 0.11 }}
          >
            <circle cx="100" cy="100" r="97" strokeWidth="2.4" />
            <path d="M3 100 Q52 76 100 100 Q148 124 197 100" strokeWidth="1.8" />
            <path d="M100 3 Q76 52 100 100 Q124 148 100 197" strokeWidth="1.8" />
            <path d="M29 29 Q65 67 100 100 Q135 133 171 171" strokeWidth="1.4" />
            <path d="M171 29 Q135 67 100 100 Q65 133 29 171" strokeWidth="1.4" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
