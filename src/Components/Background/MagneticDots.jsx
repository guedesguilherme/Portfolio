import { useRef, useEffect } from 'react'

const SPACING     = 34
const INFLUENCE_R = 195
const ATTRACT_K   = 0.46
const RETURN_K    = 0.040
const DAMPING     = 0.82
const MAX_SPEED   = 7
const DOT_BASE    = 1.1
const DOT_MAX     = 2.2
const ELONGATION  = 5.0
const SPIKE_COUNT = 12

export default function MagneticDots() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const dotsRef   = useRef([])
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const buildGrid = () => {
      dotsRef.current = []
      const cols = Math.ceil(canvas.width  / SPACING) + 1
      const rows = Math.ceil(canvas.height / SPACING) + 1
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const bx = c * SPACING
          const by = r * SPACING
          dotsRef.current.push({ bx, by, x: bx, y: by, vx: 0, vy: 0 })
        }
      }
    }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      buildGrid()
    }

    const onMouseMove  = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const onMouseLeave = ()  => { mouseRef.current = { x: -9999, y: -9999 } }
    const onTouchMove  = (e) => {
      if (e.touches[0]) mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const mouseOnScreen = mx > -1000

      // ── Ferrofluid spikes (drawn behind particles) ────────────────
      if (mouseOnScreen) {
        const time = Date.now() / 1000
        ctx.save()
        ctx.lineCap = 'round'

        for (let i = 0; i < SPIKE_COUNT; i++) {
          const ang = (i / SPIKE_COUNT) * Math.PI * 2
          const len = 64 + Math.sin(time * 2.4 + i * 0.9) * 28
          const sx  = mx + Math.cos(ang) * 10
          const sy  = my + Math.sin(ang) * 10
          const ex  = mx + Math.cos(ang) * len
          const ey  = my + Math.sin(ang) * len

          const grad = ctx.createLinearGradient(sx, sy, ex, ey)
          const c0 = isDark ? 'rgba(196,98,42,0.52)' : 'rgba(139,62,18,0.44)'
          grad.addColorStop(0, c0)
          grad.addColorStop(1, 'rgba(0,0,0,0)')

          ctx.beginPath()
          ctx.moveTo(sx, sy)
          ctx.lineTo(ex, ey)
          ctx.strokeStyle = grad
          ctx.lineWidth   = 2
          ctx.stroke()
        }

        ctx.restore()
      }

      // ── Particles: ferrofluid attraction + elongated ellipses ─────
      for (const dot of dotsRef.current) {
        const dx   = mx - dot.x
        const dy   = my - dot.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < INFLUENCE_R && dist > 0.5) {
          const strength = 1 - dist / INFLUENCE_R
          // Pure radial attraction — no swirl (iron filing behaviour)
          dot.vx += (dx / dist) * ATTRACT_K * strength
          dot.vy += (dy / dist) * ATTRACT_K * strength
        }

        dot.vx += (dot.bx - dot.x) * RETURN_K
        dot.vy += (dot.by - dot.y) * RETURN_K
        dot.vx *= DAMPING
        dot.vy *= DAMPING

        const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)
        if (speed > MAX_SPEED) {
          dot.vx = (dot.vx / speed) * MAX_SPEED
          dot.vy = (dot.vy / speed) * MAX_SPEED
        }

        dot.x += dot.vx
        dot.y += dot.vy

        const dFromMouse = Math.sqrt((mx - dot.x) ** 2 + (my - dot.y) ** 2)
        const closeness  = Math.max(0, 1 - dFromMouse / INFLUENCE_R)
        const size       = DOT_BASE + closeness * (DOT_MAX - DOT_BASE)

        ctx.fillStyle = isDark
          ? `rgba(196,98,42,${0.16 + closeness * 0.44})`
          : `rgba(139,62,18,${0.12 + closeness * 0.36})`

        if (closeness > 0.08) {
          // Elongated ellipse pointing toward mouse — the iron-filing look
          const angle       = Math.atan2(my - dot.y, mx - dot.x)
          const elongFactor = 1 + closeness * (ELONGATION - 1)

          ctx.save()
          ctx.translate(dot.x, dot.y)
          ctx.rotate(angle)
          ctx.scale(elongFactor, 1)
          ctx.beginPath()
          ctx.arc(0, 0, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        } else {
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize',     resize)
    window.addEventListener('mousemove',  onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchmove',  onTouchMove, { passive: true })
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize',     resize)
      window.removeEventListener('mousemove',  onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove',  onTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', display: 'block' }}
    />
  )
}
