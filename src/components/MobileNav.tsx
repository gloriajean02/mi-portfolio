import { useState, useEffect } from 'react'
import styles from './MobileNav.module.css'

const sections = [
  { id: 'hero',      label: 'inicio'      },
  { id: 'projects',  label: 'proyectos'   },
  { id: 'about',     label: 'sobre mí'    },
  { id: 'skills',    label: 'skills'      },
  { id: 'timeline',  label: 'experiencia' },
  { id: 'education', label: 'formación'   },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [open])

  return (
    <div className={styles.wrap} onClick={e => e.stopPropagation()}>
      <div className={styles.bar}>
        <span className={styles.brand}>gc</span>
        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)} className={styles.link}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
