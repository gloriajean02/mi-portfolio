import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './TimelineSection.module.css'

type Entry = {
  id: number
  type: 'work' | 'education'
  company: string
  role: string
  period: string
  description: string
}

const timeline: Entry[] = [
  {
    id: 1,
    type: 'work',
    company: 'Empresa X',
    role: 'Frontend Developer',
    period: '2024 — presente',
    description: 'Descripción de tu rol, responsabilidades y logros en esta empresa.',
  },
  {
    id: 2,
    type: 'education',
    company: 'Universidad Y',
    role: 'Grado en Ingeniería Informática',
    period: '2020 — 2024',
    description: 'Descripción de tus estudios, especialización y proyectos destacados.',
  },
  {
    id: 3,
    type: 'work',
    company: 'Empresa Z',
    role: 'UI Designer',
    period: '2022 — 2023',
    description: 'Descripción de tu rol, responsabilidades y logros en esta empresa.',
  },
  {
    id: 4,
    type: 'education',
    company: 'Centro de Formación',
    role: 'Ciclo Superior DAW',
    period: '2018 — 2020',
    description: 'Descripción de tus estudios, especialización y proyectos destacados.',
  },
]

export default function TimelineSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId(prev => prev === id ? null : id)

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}><span>&gt;</span> Experiencia</h2>

      <div className={styles.timeline}>
        {/* Línea vertical continua */}
        <div className={styles.line} />

        {timeline.map((entry, i) => (
          <motion.div
            key={entry.id}
            className={styles.entry}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            {/* Punto en la línea temporal con color según tipo */}
            <div
              className={styles.dot}
              style={{ background: entry.type === 'work' ? '#a78bfa' : '#fb923c' }}
            />

            <div className={styles.card} onClick={() => toggle(entry.id)}>
              <div className={styles.cardHeader}>
                {/* Logo placeholder — reemplaza por <img src="..."> cuando tengas los logos */}
                <div
                  className={styles.logo}
                  style={{ background: entry.type === 'work' ? '#a78bfa22' : '#fb923c22' }}
                >
                  <span style={{ color: entry.type === 'work' ? '#a78bfa' : '#fb923c' }}>
                    {entry.type === 'work' ? '💼' : '🎓'}
                  </span>
                </div>

                <div className={styles.meta}>
                  <span className={styles.company}>{entry.company}</span>
                  <span className={styles.role}>{entry.role}</span>
                </div>

                <div className={styles.right}>
                  <span className={styles.period}>{entry.period}</span>
                  <motion.span
                    className={styles.chevron}
                    animate={{ rotate: openId === entry.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    ▾
                  </motion.span>
                </div>
              </div>

              {/* Descripción expandible */}
              <AnimatePresence initial={false}>
                {openId === entry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.description}
                  >
                    <p>{entry.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
