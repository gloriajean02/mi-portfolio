import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './TimelineSection.module.css'

type Entry = {
  id: number
  company: string
  role: string
  period: string
  description: string
  logo?: string
  location?: string
}

const work: Entry[] = [
  {
    id: 1,
    company: 'Sociedad de Gestión Pública de Extremadura',
    role: 'Full Stack Developer',
    period: '2025 — presente',
    logo: '/images/gpex.png',
    location: 'Mérida',
    description: 'Desarrollo en entorno profesional real dentro del programa de FP Dual: implementación de aplicaciones con patrón MVC en Java, MySQL, HTML, CSS y Apache. Aprender haciendo, desde el primer día.',
  },
  {
    id: 2,
    company: 'Miami Ad School',
    role: 'Art Director & Social Media Manager',
    period: '2020 — 2024',
    logo: '/images/miami_ad_school.png',
    location: 'Madrid',
    description: 'Durante cuatro años, responsable de toda la comunicación visual de la escuela: newsletters, publicaciones, merchandising y redes sociales. Cuidé la identidad de marca en cada pieza y gestioné el proceso completo, desde el concepto hasta la publicación.',
  },
  {
    id: 3,
    company: 'Brother Madrid Escuela de Creativos',
    role: 'Art Director',
    period: '2019 — 2020',
    logo: '/images/brother.png',
    location: 'Madrid',
    description: 'Generación de contenido para las redes sociales de la escuela orientado a la captación de futuros estudiantes, diseño de catálogos de formación y desarrollo de campañas publicitarias para los cursos.',
  },
  {
    id: 4,
    company: 'MONO Madrid',
    role: 'Art Director',
    period: '2019',
    logo: '/images/mono.png',
    location: 'Madrid',
    description: 'Prácticas como art director en proyectos creativos para clientes de la agencia: conceptualización, diseño y producción de campañas.',
  },
  {
    id: 5,
    company: 'Groupe Renault',
    role: 'Art Director',
    period: '2017 — 2018',
    logo: '/images/renault.png',
    location: 'Sevilla',
    description: 'Prácticas como art director: diseño de cartelería para fábrica y comunicación interna de la marca, dentro del marco de campañas publicitarias y materiales corporativos.',
  },
]

const education: Entry[] = [
  {
    id: 10,
    company: 'IES Albarregas',
    role: 'Grado Superior Desarrollo de Aplicaciones Web',
    period: '2024 — 2026',
    logo: '/images/albarregas.png',
    location: 'Mérida',
    description: 'Formación técnica en desarrollo web full stack: Java, JavaScript, HTML, CSS y bases de datos. Como proyecto fin de ciclo he desarrollado MOLegalSuite, una aplicación de gestión legal construida con React y Supabase, donde aplico tanto mis habilidades técnicas como mi visión de diseño.',
  },
  {
    id: 11,
    company: 'Miami Ad School',
    role: 'Curso en Estrategia Digital',
    period: '2022',
    logo: '/images/miami_ad_school.png',
    location: 'Madrid',
    description: 'Aprendizaje de estrategia digital aplicada a la comunicación de marca: planificación, analítica y creatividad orientada a resultados online.',
  },
  {
    id: 12,
    company: 'Brother Escuela de Creativos',
    role: 'Master en Dirección de Arte y Creatividad Publicitaria',
    period: '2018 — 2019',
    logo: '/images/brother.png',
    location: 'Madrid',
    description: 'Especialización en dirección de arte y creatividad publicitaria. Aprendí a generar conceptos y a contarlos visualmente: de la idea a la ejecución. Aquí desarrollé el ojo crítico y la manera de pensar en diseño que sigo aplicando hoy al código.',
  },
  {
    id: 13,
    company: 'LAB Sevilla',
    role: 'Curso en Ilustración y Diseño Gráfico',
    period: '2017 — 2018',
    logo: '/images/lab.png',
    location: 'Sevilla',
    description: 'Formación complementaria en ilustración y diseño gráfico, ampliando el lenguaje visual con técnicas digitales y analógicas.',
  },
  {
    id: 14,
    company: 'Universidad de Sevilla',
    role: 'Grado en Publicidad y Relaciones Públicas',
    period: '2013 — 2017',
    logo: '/images/universidad_sevilla.png',
    location: 'Sevilla',
    description: 'Aquí empezó todo. Cuatro años aprendiendo a comunicar: narrativa, estructura de la información, diseño y trabajo en equipo. Una base que moldea cómo pienso cada proyecto, sea un cartel o una aplicación web.',
  },
]

function TimelineBlock({ entries, color, icon }: { entries: Entry[], color: string, icon: string }) {
  const [openId, setOpenId] = useState<number | null>(null)
  const toggle = (id: number) => setOpenId(prev => prev === id ? null : id)

  return (
    <div className={styles.timeline}>
      <div className={styles.line} />
      {entries.map((entry, i) => (
        <motion.div
          key={entry.id}
          className={styles.entry}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
        >
          <div className={styles.dot} style={{ background: color }} />

          <div className={styles.card} onClick={() => toggle(entry.id)}>
            <div className={styles.cardHeader}>
              <div className={styles.logo} style={{ background: entry.logo ? 'rgba(255,255,255,0.07)' : `${color}22` }}>
                {entry.logo
                  ? <img src={entry.logo} alt="" className={styles.logoImg} />
                  : <span style={{ color }}>{icon}</span>
                }
              </div>

              <div className={styles.meta}>
                <span className={styles.company}>{entry.company}</span>
                <span className={styles.role}>{entry.role}</span>
              </div>

              <div className={styles.right}>
                <span className={styles.period}>{entry.period}</span>
                {entry.location && (
                  <span className={styles.location}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                    {entry.location}
                  </span>
                )}
                <motion.span
                  className={styles.chevron}
                  animate={{ rotate: openId === entry.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ▾
                </motion.span>
              </div>
            </div>

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
  )
}

export default function TimelineSection() {
  return (
    <>
      <section id="timeline" className={`${styles.section} ${styles.sectionWork}`}>
        <h2 className={styles.heading}><span>&gt;</span> Experiencia</h2>
        <TimelineBlock entries={work} color="#a78bfa" icon="💼" />
      </section>

      <section id="education" className={`${styles.section} ${styles.sectionEducation}`}>
        <h2 className={styles.heading}><span>&gt;</span> Formación</h2>
        <TimelineBlock entries={education} color="#fb923c" icon="🎓" />
      </section>
    </>
  )
}
