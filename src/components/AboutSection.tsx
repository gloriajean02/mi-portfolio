import { useRef, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import styles from './AboutSection.module.css'

const description = 'Soy desarrolladora full stack con raíces en el diseño y la comunicación. Empecé mi carrera contando historias visualmente —estudiando publicidad, especializándome en dirección de arte y gestionando la identidad visual de una escuela de creativos durante cuatro años. Hace un par de años decidí aprender también el lenguaje del código. Hoy construyo productos de principio a fin: desde la arquitectura hasta el último píxel. Creo que el diseño y el desarrollo se potencian mutuamente, y esa combinación es lo que me hace diferente.'

const softSkills = [
  'Trabajo en equipo',
  'Creatividad',
  'Atención al detalle',
  'Sentido del diseño',
  'Empatía',
  'Resolución de conflictos',
  'Comunicación',
]

export default function AboutSection() {
  const ref = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={styles.about}>
      <div className={styles.image}>
        <img src="/images/gloria.jpeg" alt="Gloria Curado" />
      </div>

      <h2 className={styles.heading}>
        <span>&gt;</span> Sobre mí
      </h2>

      <div className={styles.body}>
        <p ref={ref} className={styles.bodyText}>
          {visible && (
            <TypeAnimation
              sequence={[description]}
              speed={97}
              repeat={0}
              cursor={false}
            />
          )}
        </p>

        <div className={styles.softSkills}>
          {softSkills.map((skill) => (
            <span key={skill} className={styles.softSkill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
