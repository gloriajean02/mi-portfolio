import { TypeAnimation } from 'react-type-animation'
import ServicesSection from '../components/ServicesSection'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <>
    <section className={styles.hero}>

      {/* Formas decorativas de fondo — aria-hidden para que los lectores de pantalla las ignoren */}
      <div className={styles.shapes} aria-hidden="true">
        <img src="/images/forma-1.png" className={styles.shape1} alt="" />
        <img src="/images/forma-2.png" className={styles.shape2} alt="" />
        <img src="/images/forma-3.png" className={styles.shape3} alt="" />
        <img src="/images/forma-4.png" className={styles.shape4} alt="" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.name}>gloria curado</h1>

        {/* TypeAnimation gestiona toda la lógica de escritura/borrado:
            - sequence: array alternando texto y pausas en ms
            - speed: velocidad de escritura (1-99, más alto = más rápido)
            - deletionSpeed: velocidad de borrado
            - repeat: Infinity para que no pare nunca */}
        <TypeAnimation
          style={{ color: '#fff' }}
          sequence={[
            'full stack developer', 1800,
            'creative designer',    1800,
          ]}
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
          className={styles.subtitle}
        />
      </div>
    </section>
    <ServicesSection />
    </>
  )
}
