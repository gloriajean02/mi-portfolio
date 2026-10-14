import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import CasoEstadoDemo from '../components/CasoEstadoDemo'
import LangToggle from '../components/LangToggle'
import styles from './MOLegalSuitePage.module.css'

const phones = [
  { src: '/images/MOLegalSuite/movil2.png', delay: 0,    cls: (s: typeof styles) => s.phoneFront },
  { src: '/images/MOLegalSuite/movil3.png', delay: 0.15, cls: (s: typeof styles) => s.phone      },
  { src: '/images/MOLegalSuite/movil4.png', delay: 0.3,  cls: (s: typeof styles) => `${s.phone} ${s.phoneHideMobile}` },
]

const techs = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Node.js', color: '#5FA04E' },
  { name: 'Tailwind', color: '#38BDF8' },
  { name: 'ShadCN', color: '#94A3B8' },
  { name: 'Figma', color: '#F24E1E' },
]

export default function MOLegalSuitePage() {
  const { t } = useLanguage()
  const m = t.moLegalSuite

  return (
    <div className={styles.page}>
      <a href="/#projects" className={styles.back}>{m.back}</a>
      <LangToggle />

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
          {m.tagline[0]}<br />{m.tagline[1]}
        </motion.h1>

        <div className={styles.devicesWrapper}>
          <motion.img
            src="/images/MOLegalSuite/laptop1.png"
            alt={m.altLaptop}
            className={styles.laptop}
            initial={{ x: 180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.45, ease: 'easeOut' }}
          />
          <motion.img
            src="/images/MOLegalSuite/movil1.png"
            alt={m.altMobile}
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
          {m.desc1}
        </motion.p>

        <div className={styles.phonesWrapper}>
          {phones.map(({ src, delay, cls }) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className={cls(styles)}
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
          {m.desc2}
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
          {m.desc3}
        </motion.p>

        <motion.img
          src="/images/MOLegalSuite/laptop2.png"
          alt={m.altLaptopDetail}
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
          {m.desc4}
        </motion.p>

        <motion.img
          src="/images/MOLegalSuite/movil5.png"
          alt={m.altAdminPanel}
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
          {m.desc5}
        </motion.p>

        <motion.p
          className={styles.finalTagline}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {m.finalTagline[0]}<br />{m.finalTagline[1]}
        </motion.p>
      </section>

      <motion.section
        className={styles.techSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65 }}
      >
        <h2 className={styles.techHeading}><span>&gt;</span> {m.techHeading}</h2>

        <div className={styles.techBadges}>
          {techs.map((tech) => (
            <span key={tech.name} className={styles.techBadge}>
              <span className={styles.techDot} style={{ background: tech.color }} />
              {tech.name}
            </span>
          ))}
        </div>

        <a
          href="https://app.moranortiz.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.appLink}
        >
          <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span className={styles.appUrl}>app.moranortiz.com</span>
          <span className={styles.appNote}>· {m.appPrivate}</span>
        </a>
      </motion.section>

      <div className={styles.backBottom}>
        <a href="/#projects" className={styles.backBtn}>{m.backBottom}</a>
      </div>
    </div>
  )
}
