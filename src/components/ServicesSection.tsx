import styles from './ServicesSection.module.css'

const services = [
  {
    icon: '< />',
    title: 'Desarrollo web',
    description: 'Aplicaciones modernas y rápidas con React, TypeScript y Node.js.',
  },
  {
    icon: '✦',
    title: 'Diseño UI/UX',
    description: 'Interfaces limpias, accesibles y centradas en la experiencia de usuario.',
  },
  {
    icon: '{ }',
    title: 'Backend & APIs',
    description: 'Arquitecturas sólidas, bases de datos y APIs RESTful bien documentadas.',
  },
]

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Lo que ofrezco</h2>
      <div className={styles.grid}>
        {services.map((s) => (
          <article key={s.title} className={styles.card}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
