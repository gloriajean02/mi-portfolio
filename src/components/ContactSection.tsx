import styles from './ContactSection.module.css'

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // aquí conectas con tu backend o servicio de email (EmailJS, Formspree, etc.)
  }

  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2 className={styles.heading}><span>&gt;</span> ¿Hablamos?</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input  className={styles.input} type="text"  name="name"  placeholder="Nombre"  required />
            <input  className={styles.input} type="email" name="email" placeholder="Email"   required />
          </div>
          <textarea className={styles.textarea} name="message" placeholder="Cuéntame tu proyecto..." rows={5} required />
          <button className={styles.button} type="submit">Enviar</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Gloria Curado — Hecho con React & mucho café</p>
      </footer>
    </>
  )
}
