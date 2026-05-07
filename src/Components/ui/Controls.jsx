import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

export default function Controls() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: 'clamp(1.25rem, 4vw, 2.5rem)',
        zIndex: 9001,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
      }}
    >
      <LanguageSelector />
      <ThemeToggle />
    </div>
  )
}
