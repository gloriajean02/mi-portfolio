import { TypeAnimation } from 'react-type-animation'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import TimelineSection from '../components/TimelineSection'
import ContactSection from '../components/ContactSection'
import SideNav from '../components/SideNav'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <>
      <SideNav />
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
      <ContactSection />
    </>
  )
}
