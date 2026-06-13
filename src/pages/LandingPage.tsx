import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import TimelineSection from '../components/TimelineSection'
import ContactModal from '../components/ContactModal'
import SideNav from '../components/SideNav'
import MobileNav from '../components/MobileNav'
import styles from './LandingPage.module.css'
import footerStyles from './Footer.module.css'

export default function LandingPage() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <SideNav />
      <MobileNav />
      <section id="hero" className={styles.hero}>
        <div className={styles.shapes} aria-hidden="true">
          <img src="/images/forma-1.png" className={styles.shape1} alt="" />
          <img src="/images/forma-2.png" className={styles.shape2} alt="" />
          <img src="/images/forma-3.png" className={styles.shape3} alt="" />
          <img src="/images/forma-4.png" className={styles.shape4} alt="" />
        </div>

        <div className={styles.content}>
          <h1 className={styles.name}>gloria curado</h1>
          <TypeAnimation
            style={{ color: '#fff' }}
            sequence={['full stack developer', 1800, 'creative designer', 1800]}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className={styles.subtitle}
          />
          <a
            href="/CV_Gloria_Curado_García_foto.pdf"
            download
            className={styles.cvButton}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            descargar cv
          </a>
        </div>

        <a href="#projects" className={styles.scrollArrow} aria-label="Ver proyectos">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ContactModal />

      {showTop && (
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
        >
          ^
        </button>
      )}

      <footer className={footerStyles.footer}>
        <p className={footerStyles.copy}>Hecho con React y mucha ilusión 🌸</p>
        <div className={footerStyles.links}>
          <a href="https://es.linkedin.com/in/gloria-curado-garc%C3%ADa" target="_blank" rel="noopener noreferrer" className={footerStyles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:gloriacuradogarcia@gmail.com" className={footerStyles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            gloriacuradogarcia@gmail.com
          </a>
          <a href="tel:+34674895481" className={footerStyles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
            </svg>
            674 895 481
          </a>
        </div>
      </footer>
    </>
  )
}
