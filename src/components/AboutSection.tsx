import { useRef, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import styles from './AboutSection.module.css'

const description = 'Aquí va tu texto sobre ti. Cuéntale al mundo quién eres, qué te apasiona y qué te hace diferente como desarrolladora y diseñadora.'

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
        {/* Sustituye por <img src="/images/foto.jpg" alt="Gloria Curado" /> */}
      </div>

      <div className={styles.text}>
        <h2 className={styles.heading}>
          <span>&gt;</span> Sobre mí
        </h2>

        {/* ref para detectar cuándo entra en pantalla.
            Solo renderiza TypeAnimation cuando visible === true,
            así la animación empieza justo al hacer scroll hasta aquí. */}
        <p ref={ref} className={styles.body}>
          {visible && (
            <TypeAnimation
              sequence={[description]}
              speed={80}
              repeat={0}
              cursor={false}
            />
          )}
        </p>
      </div>
    </section>
  )
}
