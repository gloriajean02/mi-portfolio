import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import LangToggle from '../components/LangToggle'
import styles from './YnalaPage.module.css'

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' },
} as const

const palette = [
  { hex: '#6E43AC', text: '#fff' },
  { hex: '#D0F37E', text: '#2A3316' },
  { hex: '#FF904E', text: '#3C1900' },
  { hex: '#4A71CE', text: '#fff' },
]

// one logo per brand colour, as in the brand-voice slide
const logoVariants = [
  { bg: '#6E43AC', logo: '/images/Ynala/logo-lima.png' },
  { bg: '#FF904E', logo: '/images/Ynala/logo-violeta.png' },
  { bg: '#4A71CE', logo: '/images/Ynala/logo-lima.png' },
  { bg: '#D0F37E', logo: '/images/Ynala/logo-violeta.png' },
]

const weights = [
  { name: 'Bold', weight: 700 },
  { name: 'Medium', weight: 500 },
  { name: 'Light', weight: 300 },
]

const tools = [
  { name: 'Branding', color: '#D0F37E' },
  { name: 'Illustrator', color: '#FF9A00' },
  { name: 'Photoshop', color: '#31A8FF' },
]

// **bold** and *italic* in translation strings
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}

export default function YnalaPage() {
  const { t } = useLanguage()
  const y = t.ynala

  return (
    <div className={styles.page}>
      <a href="/#projects" className={styles.back}>{y.back}</a>
      <LangToggle className={styles.pill} />

      <section className={styles.hero}>
        <motion.img
          src="/images/Ynala/logo.png"
          alt={y.altLogo}
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {y.tagline}
        </motion.h1>
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.logoHeading}</motion.h2>
        <motion.div className={styles.logoPair} {...reveal}>
          <img src="/images/Ynala/estiramiento.jpg" alt={y.altStretch} className={styles.stretchPhoto} />
          <div className={styles.logoTile}>
            <img src="/images/Ynala/logo-lima.png" alt={y.altLogo} />
          </div>
        </motion.div>
        <motion.p className={styles.description} {...reveal}>{rich(y.logoText)}</motion.p>
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.paletteHeading}</motion.h2>
        <div className={styles.palette}>
          {palette.map((c, i) => (
            <motion.div
              key={c.hex}
              className={styles.swatch}
              style={{ background: c.hex, color: c.text }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <span className={styles.swatchName}>{y.colors[i]}</span>
              <span className={styles.swatchHex}>{c.hex}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.toneHeading}</motion.h2>
        <motion.div className={styles.variants} {...reveal}>
          {logoVariants.map((v) => (
            <div key={v.bg} className={styles.variant} style={{ background: v.bg }}>
              <img src={v.logo} alt="" />
            </div>
          ))}
        </motion.div>
        <motion.p className={styles.description} {...reveal}>{rich(y.toneText)}</motion.p>
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.typeHeading}</motion.h2>
        <motion.div className={styles.typeSpecimen} {...reveal}>
          {weights.map((w) => (
            <div key={w.name} className={styles.typeWeight} style={{ fontWeight: w.weight }}>
              <span className={styles.typeAa}>Aa</span>
              <span className={styles.typeName}>Poppins {w.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.p className={styles.description} {...reveal}>{rich(y.typeText)}</motion.p>
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.socialHeading}</motion.h2>
        <motion.img src="/images/Ynala/redes.jpg" alt={y.altSocial} className={styles.image} {...reveal} />
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.merchHeading}</motion.h2>
        <motion.img src="/images/Ynala/bolsas.jpg" alt={y.altBags} className={styles.image} {...reveal} />
        <motion.img src="/images/Ynala/pegatinas-gorra.jpg" alt={y.altStickers} className={styles.image} {...reveal} />
      </section>

      <section className={`${styles.section} ${styles.club}`}>
        <motion.img src="/images/Ynala/good-stretch-club.png" alt={y.altClubLogo} className={styles.clubLogo} {...reveal} />
        <motion.div className={styles.text} {...reveal}>
          <h2 className={styles.heading}>{y.clubHeading}</h2>
          <p className={styles.description}>{y.clubText}</p>
        </motion.div>
        <motion.img src="/images/Ynala/camisetas.jpg" alt={y.altShirts} className={styles.image} {...reveal} />
      </section>

      <section className={styles.section}>
        <motion.h2 className={styles.heading} {...reveal}>{y.spaceHeading}</motion.h2>
        <motion.img src="/images/Ynala/fachada.jpg" alt={y.altFacade} className={styles.image} {...reveal} />
        <motion.img src="/images/Ynala/estudio.jpg" alt={y.altStudio} className={styles.image} {...reveal} />
      </section>

      <motion.section className={styles.toolsSection} {...reveal}>
        <h2 className={styles.toolsHeading}><span>&gt;</span> {y.toolsHeading}</h2>
        <div className={styles.tools}>
          {tools.map((tool) => (
            <span key={tool.name} className={styles.tool}>
              <span className={styles.toolDot} style={{ background: tool.color }} />
              {tool.name}
            </span>
          ))}
        </div>
      </motion.section>

      <div className={styles.backBottom}>
        <a href="/#projects" className={styles.backBtn}>{y.backBottom}</a>
      </div>
    </div>
  )
}
