import { motion } from 'framer-motion'
import styles from './SkillsSection.module.css'

const groups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React',       color: '#61DAFB', level: 90 },
      { name: 'TypeScript',  color: '#3178C6', level: 82 },
      { name: 'CSS / Sass',  color: '#CC6699', level: 88 },
      { name: 'HTML',        color: '#E34F26', level: 95 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js',  color: '#339933', level: 75 },
      { name: 'Python',   color: '#3776AB', level: 65 },
      { name: 'SQL',      color: '#4479A1', level: 70 },
    ],
  },
  {
    title: 'Diseño',
    skills: [
      { name: 'Figma',              color: '#F24E1E', level: 85 },
      { name: 'Adobe Illustrator',  color: '#FF9A00', level: 78 },
      { name: 'Photoshop',          color: '#31A8FF', level: 72 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git',    color: '#F05032', level: 88 },
      { name: 'Docker', color: '#2496ED', level: 60 },
      { name: 'Figma',  color: '#007ACC', level: 95 },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <h2 className={styles.heading}><span>&gt;</span> Skills</h2>

      <div className={styles.grid}>
        {groups.map((group, gi) => (
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
                    {/* Cuadrado de color como icono — reemplaza por <img> cuando tengas los logos */}
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
