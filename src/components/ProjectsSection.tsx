import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import styles from './ProjectsSection.module.css'

const projects = [
  { id: 1, href: '#', bg: 'linear-gradient(160deg, #667eea, #764ba2)' },
  { id: 2, href: '#', bg: 'linear-gradient(160deg, #f093fb, #f5576c)' },
  { id: 3, href: '#', bg: 'linear-gradient(160deg, #4facfe, #00f2fe)' },
  { id: 4, href: '#', bg: 'linear-gradient(160deg, #43e97b, #38f9d7)' },
  { id: 5, href: '#', bg: 'linear-gradient(160deg, #fa709a, #fee140)' },
]

const rotations = [-4, 2.5, -2, 3.5, -1.5]

export default function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}><span>&gt;</span> Proyectos</h2>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={32}
          centeredSlides
          initialSlide={Math.floor(projects.length / 2)}
          grabCursor
          freeMode
          className={styles.swiper}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={p.id} className={styles.slide}>
              {/* motion.div gestiona la entrada desde arriba.
                  whileInView la dispara al entrar en el viewport.
                  once: true hace que solo ocurra una vez. */}
              <motion.div
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              >
                <a
                  href={p.href}
                  className={styles.card}
                  style={{
                    background: p.bg,
                    transform: `rotate(${rotations[i % rotations.length]}deg)`,
                  }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
