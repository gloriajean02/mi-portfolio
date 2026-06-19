import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './SideNav.module.css'


export default function SideNav() {
  const { t } = useLanguage()
  const [active, setActive] = useState('hero')

  const sections = [
    { id: 'hero',      label: t.nav.home       },
    { id: 'projects',  label: t.nav.projects   },
    { id: 'about',     label: t.nav.about      },
    { id: 'skills',    label: t.nav.skills     },
    { id: 'timeline',  label: t.nav.experience },
    { id: 'education', label: t.nav.education  },
  ]

  useEffect(() => {
    const handleScroll = () => {
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
  }, [t])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={styles.nav} aria-label={t.nav.ariaNav}>
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
