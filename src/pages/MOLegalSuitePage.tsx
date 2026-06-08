import { motion } from 'framer-motion'
import CasoEstadoDemo from '../components/CasoEstadoDemo'
import styles from './MOLegalSuitePage.module.css'

const phones = [
  { src: '/images/MOLegalSuite/movil2.png', delay: 0,    cls: styles.phoneFront },
  { src: '/images/MOLegalSuite/movil3.png', delay: 0.15, cls: styles.phone      },
  { src: '/images/MOLegalSuite/movil4.png', delay: 0.3,  cls: `${styles.phone} ${styles.phoneHideMobile}` },
]

export default function MOLegalSuitePage() {
  return (
    <div className={styles.page}>
      <a href="/#projects" className={styles.back}>← volver</a>

      <section className={styles.hero}>
        <motion.img
          src="/images/MOLegalSuite/logo.png"
          alt="MO Legal Suite"
          className={styles.logo}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Tu despacho de abogados<br />en la palma de tu mano
        </motion.h1>

        <div className={styles.devicesWrapper}>
          <motion.img
            src="/images/MOLegalSuite/laptop1.png"
            alt="MO Legal Suite en laptop"
            className={styles.laptop}
            initial={{ x: 180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.45, ease: 'easeOut' }}
          />
          <motion.img
            src="/images/MOLegalSuite/movil1.png"
            alt="MO Legal Suite en móvil"
            className={styles.mobile}
            initial={{ x: -180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.65, ease: 'easeOut' }}
          />
        </div>
      </section>

      <section className={styles.section2}>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          Morán Ortiz es un despacho de abogados con sede en Sevilla que trabaja para clientes de toda España.
          Necesitaban una aplicación web para gestionar su despacho&nbsp;— y este es el resultado.
        </motion.p>

        <div className={styles.phonesWrapper}>
          {phones.map(({ src, delay, cls }) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className={cls}
              draggable={false}
              initial={{ y: 90, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay, ease: 'easeOut' }}
            />
          ))}
        </div>
      </section>

      <section className={styles.section3}>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          Al igual que Amazon te permite seguir dónde está tu paquete, MOLegalSuite le permite al cliente
          seguir su caso: fases del expediente, documentos, notificaciones y citas.
        </motion.p>

        <motion.div
          className={styles.demoWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <CasoEstadoDemo />
        </motion.div>
      </section>

      <section className={styles.section4}>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          Cada caso tiene su propio espacio: documentos adjuntos, un historial de fases por las que ha
          pasado, las notificaciones enviadas al cliente y las citas programadas. Nada se pierde, todo
          está donde toca.
        </motion.p>

        <motion.img
          src="/images/MOLegalSuite/laptop2.png"
          alt="Vista detalle de caso en MOLegalSuite"
          className={styles.laptopFull}
          draggable={false}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        />
      </section>

      <section className={styles.section5}>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          Y al igual que Amazon tiene un almacén con personas trabajando detrás, MOLegalSuite tiene
          un panel para el administrador donde ocurre toda la gestión.
        </motion.p>

        <motion.img
          src="/images/MOLegalSuite/movil5.png"
          alt="Panel de administrador en MOLegalSuite"
          className={styles.mobileTilted}
          draggable={false}
          initial={{ opacity: 0, y: 60, rotate: -30 }}
          whileInView={{ opacity: 1, y: 0, rotate: -15 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        />

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          Así es como conseguimos que todas esas llamadas, emails y whatsapps quedaran unificadas
          en un solo lugar
        </motion.p>

        <motion.p
          className={styles.finalTagline}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Un proyecto real, construido de cero.<br />Desde el diseño hasta el despliegue.
        </motion.p>
      </section>

      <div className={styles.backBottom}>
        <a href="/#projects" className={styles.backBtn}>← volver al portfolio</a>
      </div>
    </div>
  )
}
