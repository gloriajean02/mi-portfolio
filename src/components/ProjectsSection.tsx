import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import styles from './ProjectsSection.module.css'

const projects = [
  {
    id: 1, href: 'https://vesto-wheat.vercel.app/', img: '/images/Vesto.png', name: 'Vesto',
    techs: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'Tailwind', color: '#38BDF8' },
    ],
  },
  {
    id: 2, href: '#', img: '/images/CTRLZ.png', name: 'CTRLZ',
    techs: [
      { name: 'Java', color: '#E76F00' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'CSS', color: '#264DE4' },
      { name: 'AJAX', color: '#0769AD' },
      { name: 'Bootstrap', color: '#7952B3' },
    ],
  },
  {
    id: 3, href: 'https://www.moranortiz.com/', img: '/images/MoranOrtiz.png', name: 'MoranOrtiz',
    techs: [
      { name: 'WordPress', color: '#21759B' },
      { name: 'Elementor', color: '#FF2B54' },
    ],
  },
  {
    id: 4, href: 'https://gloriajean02.github.io/tableroKanban/', img: '/images/TableroKanban.png', name: 'TableroKanban',
    techs: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'CSS', color: '#264DE4' },
    ],
  },
  {
    id: 5, href: '#', img: '/images/MOLegalSuite.png', name: 'MOLegalSuite', disabled: true,
    techs: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'ShadCN', color: '#94A3B8' },
      { name: 'Tailwind', color: '#38BDF8' },
    ],
  },
]


const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}><span>&gt;</span> Proyectos</h2>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={32}
          centeredSlides
          initialSlide={isMobile ? 0 : Math.floor(projects.length / 2)}
          grabCursor
          freeMode
          className={styles.swiper}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={p.id} className={styles.slide}>
              <motion.div
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              >
                <a
                  href={p.disabled ? undefined : p.href}
                  target={p.disabled ? undefined : '_blank'}
                  rel={p.disabled ? undefined : 'noopener noreferrer'}
                  className={`${styles.card}${p.disabled ? ` ${styles.cardDisabled}` : ''}`}
                  onClick={p.disabled ? (e) => e.preventDefault() : undefined}
                >
                  <img src={p.img} alt={p.name} className={styles.cardImage} />
                  {p.disabled && (
                    <div className={styles.disabledOverlay}>
                      <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="11" width="14" height="10" rx="2" fill="white" fillOpacity="0.9"/>
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                        <circle cx="12" cy="16" r="1.5" fill="#0F1C2E"/>
                      </svg>
                    </div>
                  )}
                  <div className={styles.techBadges}>
                    {p.techs.map((t) => (
                      <span key={t.name} className={styles.techBadge}>
                        <span className={styles.techDot} style={{ background: t.color }} />
                        <span className={styles.techName}>{t.name}</span>
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
