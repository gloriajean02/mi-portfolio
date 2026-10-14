import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useLanguage } from '../context/LanguageContext'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import TimelineSection from '../components/TimelineSection'
import ContactModal from '../components/ContactModal'
import SideNav from '../components/SideNav'
import MobileNav from '../components/MobileNav'
import LangToggle from '../components/LangToggle'
import styles from './LandingPage.module.css'
import footerStyles from './Footer.module.css'

export default function LandingPage() {
  const { t } = useLanguage()
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
      <LangToggle />
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
            key={t.hero.typeSequence.join('')}
            style={{ color: '#fff' }}
            sequence={t.hero.typeSequence}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className={styles.subtitle}
          />
          <a
            href={t.hero.cvHref}
            download
            className={styles.cvButton}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {t.hero.downloadCv}
          </a>
        </div>

        <a href="#projects" className={styles.scrollArrow} aria-label={t.hero.scrollLabel}>
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
          aria-label={t.hero.backToTopLabel}
        >
          ^
        </button>
      )}

      <footer className={footerStyles.footer}>
        <p className={footerStyles.copy}>{t.footer.copy}</p>
        <div className={footerStyles.links}>
          <a href="https://es.linkedin.com/in/gloria-curado-garc%C3%ADa" target="_blank" rel="noopener noreferrer" className={footerStyles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/gloriajean02" target="_blank" rel="noopener noreferrer" className={footerStyles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
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
