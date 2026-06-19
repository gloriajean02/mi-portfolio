import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import styles from './ContactModal.module.css'

export default function ContactModal() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const data = new FormData(e.currentTarget)
    try {
      await fetch('https://formsubmit.co/ajax/823076f25b0fe1906e2998e9b1e839b0', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      setSent(true)
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => { setSent(false); setOpen(false) }, 2500)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <motion.button
        className={styles.fab}
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        aria-label={t.contact.ariaOpen}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label={t.contact.ariaClose}>✕</button>

              <h2 className={styles.heading}><span>&gt;</span> {t.contact.heading}</h2>

              {sent ? (
                <p className={styles.success}>{t.contact.successMessage}</p>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value={t.contact.emailSubject} />
                  <div className={styles.row}>
                    <input className={styles.input} type="text"  name="name"    placeholder={t.contact.namePlaceholder}  required />
                    <input className={styles.input} type="email" name="email"   placeholder={t.contact.emailPlaceholder}  required />
                  </div>
                  <textarea className={styles.textarea} name="message" placeholder={t.contact.messagePlaceholder} rows={5} required />
                  <button className={styles.submitBtn} type="submit" disabled={sending}>
                    {sending ? t.contact.sending : t.contact.send}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
