import { useLanguage } from '../context/LanguageContext'
import styles from './LangToggle.module.css'

export default function LangToggle() {
  const { t, toggleLang } = useLanguage()

  return (
    <button
      className={styles.btn}
      onClick={toggleLang}
      aria-label={t.nav.ariaLang}
    >
      {t.nav.langToggle}
    </button>
  )
}
