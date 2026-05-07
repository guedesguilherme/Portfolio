import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 44,
        height: 24,
        borderRadius: 9999,
        border: '1px solid var(--gold-border)',
        background: 'var(--bg-2)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3px',
        cursor: 'pointer',
        position: 'relative',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        flexShrink: 0,
      }}
    >
      {/* Sun icon */}
      <motion.div
        animate={{ opacity: isDark ? 0.25 : 1, scale: isDark ? 0.7 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          left: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SunIcon />
      </motion.div>

      {/* Moon icon */}
      <motion.div
        animate={{ opacity: isDark ? 1 : 0.25, scale: isDark ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          right: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MoonIcon />
      </motion.div>

      {/* Thumb */}
      <motion.div
        layout
        animate={{ x: isDark ? 20 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'var(--gold)',
          flexShrink: 0,
          position: 'relative',
          zIndex: 1,
        }}
      />
    </button>
  )
}

function SunIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold)' }}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold)' }}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
