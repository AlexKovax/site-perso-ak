import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.contactLabel}>Où me contacter</p>
        <div className={styles.links}>
          <a
            href="https://www.nocode-france.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack No Code France
          </a>
          <a
            href="https://www.linkedin.com/in/alexiskovalenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:alex@hosakka.studio">Email</a>
        </div>
        <p className={styles.copyright}>
          {currentYear} Alexis Kovalenko
        </p>
      </div>
    </footer>
  )
}

export default Footer
