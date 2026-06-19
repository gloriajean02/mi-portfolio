import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './MobileNav.module.css'

export default function MobileNav() {
  const { t, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const sections = [
    { id: 'hero',      label: t.nav.home       },
    { id: 'projects',  label: t.nav.projects   },
    { id: 'about',     label: t.nav.about      },
    { id: 'skills',    label: t.nav.skills     },
    { id: 'timeline',  label: t.nav.experience },
    { id: 'education', label: t.nav.education  },
  ]

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
          className={styles.langBtn}
          onClick={toggleLang}
          aria-label={t.nav.ariaLang}
        >
          {t.nav.langToggle}
        </button>

        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={t.nav.ariaMenu}
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
