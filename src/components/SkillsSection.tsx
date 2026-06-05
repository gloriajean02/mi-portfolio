import { motion } from 'framer-motion'
import styles from './SkillsSection.module.css'

const groups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Bootstrap',             color: '#7952B3', level: 75 },
      { name: 'CSS',                   color: '#264DE4', level: 75 },
      { name: 'JavaScript',            color: '#F7DF1E', level: 55 },
      { name: 'React',                 color: '#61DAFB', level: 45 },
      { name: 'ShadCN',                color: '#94A3B8', level: 55 },
      { name: 'Tailwind',              color: '#38BDF8', level: 50 },
      { name: 'WordPress / Elementor', color: '#21759B', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java',     color: '#E76F00', level: 65 },
      { name: 'Python',   color: '#3776AB', level: 20 },
      { name: 'SQL',      color: '#4479A1', level: 65 },
      { name: 'Supabase', color: '#3ECF8E', level: 55 },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'GitHub',  color: '#E6EDF3', level: 70 },
      { name: 'SVN',     color: '#809CC9', level: 10 },
      { name: 'Vercel',  color: '#FFFFFF', level: 60 },
    ],
  },
  {
    title: 'Idiomas',
    skills: [
      { name: 'Castellano (nativo)', color: '#F59E0B', level: 100 },
      { name: 'Inglés B2',          color: '#6366F1', level: 70 },
    ],
  },
  {
    title: 'Diseño',
    skills: [
      { name: 'Figma',       color: '#F24E1E', level: 70 },
      { name: 'Illustrator', color: '#FF9A00', level: 55 },
      { name: 'Photoshop',   color: '#31A8FF', level: 75 },
      { name: 'Premiere',    color: '#9999FF', level: 40 },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skills}>
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
