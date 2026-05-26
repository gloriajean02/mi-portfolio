import { useState, useEffect } from 'react'
import styles from './SideNav.module.css'

const sections = [
  { id: 'hero',      label: 'inicio'      },
  { id: 'projects',  label: 'proyectos'   },
  { id: 'about',     label: 'sobre mí'    },
  { id: 'skills',    label: 'skills'      },
  { id: 'timeline',  label: 'experiencia' },
  { id: 'education', label: 'formación'   },
]

export default function SideNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      // La sección activa es la última cuyo borde superior
      // haya cruzado la mitad del viewport hacia arriba.
      // Se itera en orden y se sobreescribe current con cada
      // sección que cumpla la condición, quedando la más baja visible.
      const mid = window.innerHeight * 0.5
      let current = sections[0].id

      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        if (el.getBoundingClientRect().top <= mid) current = id
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={styles.nav} aria-label="Navegación lateral">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`${styles.item} ${active === id ? styles.active : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={label}
        >
          <span className={styles.line} />
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </nav>
  )
}
