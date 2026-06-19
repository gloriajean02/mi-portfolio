import { useRef, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useLanguage } from '../context/LanguageContext'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const { lang, t } = useLanguage()
  const ref = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [lang])

  return (
    <section id="about" className={styles.about}>
      <div className={styles.image}>
        <img src="/images/gloria.jpeg" alt="Gloria Curado" />
      </div>

      <h2 className={styles.heading}>
        <span>&gt;</span> {t.about.heading}
      </h2>

      <div className={styles.body}>
        <p ref={ref} className={styles.bodyText}>
          {visible && (
            <TypeAnimation
              key={lang}
              sequence={[t.about.description]}
              speed={97}
              repeat={0}
              cursor={false}
            />
          )}
        </p>

        <div className={styles.softSkills}>
          {t.about.softSkills.map((skill) => (
            <span key={skill} className={styles.softSkill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
