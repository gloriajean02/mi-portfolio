import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
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
  const { t } = useLanguage()

  return (
    <>
      <section id="timeline" className={`${styles.section} ${styles.sectionWork}`}>
        <h2 className={styles.heading}><span>&gt;</span> {t.timeline.experienceHeading}</h2>
        <TimelineBlock entries={t.timeline.work} color="#a78bfa" icon="💼" />
      </section>

      <section id="education" className={`${styles.section} ${styles.sectionEducation}`}>
        <h2 className={styles.heading}><span>&gt;</span> {t.timeline.educationHeading}</h2>
        <TimelineBlock entries={t.timeline.education} color="#fb923c" icon="🎓" />
      </section>
    </>
  )
}
