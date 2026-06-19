import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import styles from './SkillsSection.module.css'

export default function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}><span>&gt;</span> {t.skills.heading}</h2>

      <div className={styles.grid}>
        {t.skills.groups.map((group, gi) => (
          <motion.div
            key={group.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.12, ease: 'easeOut' }}
          >
            <h3 className={styles.cardTitle}>{group.title}</h3>

            <ul className={styles.list}>
              {group.skills.map((skill, si) => (
                <li key={skill.name} className={styles.skill}>
                  <div className={styles.skillHeader}>
                    <span
                      className={styles.icon}
                      style={{ background: skill.color }}
                    />
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>

                  <div className={styles.bar}>
                    <motion.div
                      className={styles.barFill}
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: gi * 0.12 + si * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
