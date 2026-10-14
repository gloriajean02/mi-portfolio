import { useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './ProjectsSection.module.css'

const SPEED = 0.6

const projects = [
  {
    id: 6, href: 'https://vesto-sigma.vercel.app/', img: '/images/Vesto.png', name: 'Vesto',
    techs: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'Tailwind', color: '#38BDF8' },
    ],
  },
  {
    id: 5, href: '/mo-legal-suite', img: '/images/MOLegalSuite.png', name: 'MOLegalSuite',
    techs: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'ShadCN', color: '#94A3B8' },
      { name: 'Tailwind', color: '#38BDF8' },
    ],
  },
  {
    id: 1, href: 'https://www.moranortiz.com/', img: '/images/MoranOrtiz.png', name: 'MoranOrtiz',
    techs: [
      { name: 'WordPress', color: '#21759B' },
      { name: 'Elementor', color: '#FF2B54' },
    ],
  },
  {
    id: 3, href: 'https://gloriajean02.github.io/brava-agency/', img: '/images/BravaAgency.png', name: 'BravaAgency',
    techs: [
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#264DE4' },
      { name: 'JavaScript', color: '#F7DF1E' },
    ],
  },
  {
    id: 2, href: 'https://gloriajean02.github.io/superMiau-Bros/', img: '/images/SuperMiauBros.png', name: 'SuperMiauBros', hidden: true,
    techs: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'CSS', color: '#264DE4' },
    ],
  },
  {
    id: 4, href: 'https://gloriajean02.github.io/tableroKanban/', img: '/images/TableroKanban.png', name: 'TableroKanban', hidden: true,
    techs: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'CSS', color: '#264DE4' },
    ],
  },
  {
    id: 7, href: '#', img: '/images/CTRLZ.png', name: 'CTRLZ', disabled: true, hidden: true,
    techs: [
      { name: 'Java', color: '#E76F00' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'CSS', color: '#264DE4' },
      { name: 'AJAX', color: '#0769AD' },
      { name: 'Bootstrap', color: '#7952B3' },
    ],
  },
]

const visible = projects.filter(p => !p.hidden)
const track = [...visible, ...visible]

function Card({ p }: { p: typeof projects[0] }) {
  return (
    <a
      href={p.disabled ? undefined : p.href}
      target={p.disabled ? undefined : p.href.startsWith('/') ? undefined : '_blank'}
      rel={p.disabled ? undefined : p.href.startsWith('/') ? undefined : 'noopener noreferrer'}
      className={`${styles.card}${p.disabled ? ` ${styles.cardDisabled}` : ''}`}
      onClick={p.disabled ? (e) => e.preventDefault() : undefined}
      draggable={false}
    >
      <img src={p.img} alt={p.name} className={styles.cardImage} draggable={false} />
      {p.disabled && (
        <div className={styles.disabledOverlay}>
          <span className={styles.inProgress}>
            in progress<span className={styles.dots}><span>.</span><span>.</span><span>.</span></span>
          </span>
        </div>
      )}
      <div className={styles.techBadges}>
        {p.techs.map((t) => (
          <span key={t.name} className={styles.techBadge}>
            <span className={styles.techDot} style={{ background: t.color }} />
            <span className={styles.techName}>{t.name}</span>
          </span>
        ))}
      </div>
    </a>
  )
}

export default function ProjectsSection() {
  const { t } = useLanguage()
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const offsetRef = useRef(0)
  const halfWidthRef = useRef(0)
  const hoveredRef = useRef(false)
  const isDragging = useRef(false)
  const didDrag = useRef(false)
  const startX = useRef(0)
  const startOffset = useRef(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const tick = () => {
      if (halfWidthRef.current === 0) halfWidthRef.current = el.scrollWidth / 2

      if (!hoveredRef.current && !isDragging.current && halfWidthRef.current > 0) {
        offsetRef.current += SPEED
        if (offsetRef.current >= halfWidthRef.current) offsetRef.current -= halfWidthRef.current
        el.style.transform = `translateX(${-offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const startDrag = (x: number) => {
      isDragging.current = true
      didDrag.current = false
      startX.current = x
      startOffset.current = offsetRef.current
      document.body.style.userSelect = 'none'
    }

    const moveDrag = (x: number) => {
      if (!isDragging.current) return
      const dx = x - startX.current
      if (Math.abs(dx) > 4) didDrag.current = true
      const hw = halfWidthRef.current || el.scrollWidth / 2
      let next = startOffset.current - dx
      next = ((next % hw) + hw) % hw
      offsetRef.current = next
      el.style.transform = `translateX(${-next}px)`
    }

    const endDrag = () => {
      if (!isDragging.current) return
      isDragging.current = false
      el.style.cursor = ''
      document.body.style.userSelect = ''
    }

    const onMouseDown = (e: MouseEvent) => { startDrag(e.clientX); el.style.cursor = 'grabbing' }
    const onMouseMove = (e: MouseEvent) => moveDrag(e.clientX)
    const onMouseUp   = () => endDrag()

    const onTouchStart = (e: TouchEvent) => startDrag(e.touches[0].clientX)
    const onTouchMove  = (e: TouchEvent) => { moveDrag(e.touches[0].clientX); if (didDrag.current) e.preventDefault() }
    const onTouchEnd   = () => endDrag()

    const onClick = (e: MouseEvent) => {
      if (didDrag.current) {
        e.preventDefault()
        e.stopPropagation()
        didDrag.current = false
      }
    }

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('click', onClick, true)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('click', onClick, true)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}><span>&gt;</span> {t.projects.heading}</h2>

      <div
        className={styles.carousel}
        onMouseEnter={() => { hoveredRef.current = true }}
        onMouseLeave={() => { hoveredRef.current = false; isDragging.current = false }}
      >
        <div className={styles.track} ref={trackRef}>
          {track.map((p, i) => (
            <div key={`${p.id}-${i}`} className={styles.slide}>
              <Card p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
