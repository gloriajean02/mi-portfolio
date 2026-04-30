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
    company: 'Sociedad de Gestión Pública de Extremadura, Mérida',
    role: 'Full Stack Developer',
    period: '2025 — presente',
    description: 'Formación de FP Dual en desarrollo web, trabajando en proyectos reales implementando el MVC con Java, MySQL, HTML, CSS y Apache',
  },
  {
    id: 2,
    type: 'education',
    company: 'IES Albarregas, Mérida',
    role: 'Grado Superior Desarrollo de Aplicaciones Web',
    period: '2024 — 2026',
    description: 'Formación técnica en desarrollo web, aprendiendo a crear aplicaciones completas con tecnologías como Java, JavaScript, HTML, CSS y bases de datos. Mis proyectos incluyen desde páginas estáticas hasta aplicaciones dinámicas con backend y frontend.',
  },
  {
    id: 3,
    type: 'work',
    company: 'Miami Ad School, Madrid',
    role: 'Art Director & Social Media Manager',
    period: '2020 — 2024',
    description: 'Responsable de la comunicación corporativa integral: diseño y maquetación de newsletters, publicaciones y merchandising, aplicando y manteniendo la identidad visual de la escuela en todos los materiales. Gestión del ciclo completo, desde la producción hasta el envío y publicación en canales digitales.',
  },
  {
    id: 4,
    type: 'education',
    company: 'Brother Escuela de Creativos, Madrid',
    role: 'Master en Dirección de Arte y Creatividad Publicitaria',
    period: '2018 — 2019',
    description: 'Descripción de tus estudios, especialización y proyectos destacados.',
  },
  {
    id: 5,
    type: 'education',
    company: 'Universidad de Sevilla, Sevilla',
    role: 'Grado en Publicidad y Relaciones Públicas',
    period: '2013 — 2017',
    description: 'Descripción de tus estudios, especialización y proyectos destacados.',
  },
]

export default function TimelineSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId(prev => prev === id ? null : id)

  return (
    <section id="timeline" className={styles.section}>
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
