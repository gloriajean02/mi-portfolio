import { useLanguage } from '../context/LanguageContext'
import styles from './LangToggle.module.css'

export default function LangToggle({ className }: { className?: string }) {
  const { t, toggleLang } = useLanguage()

  return (
    <button
      className={className ? `${styles.btn} ${className}` : styles.btn}
      onClick={toggleLang}
      aria-label={t.nav.ariaLang}
    >
      {t.nav.langToggle}
    </button>
  )
}
