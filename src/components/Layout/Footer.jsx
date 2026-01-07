import { IconSlack, IconLinkedIn, IconMail } from '../icons'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contact}>
          <span className={styles.contactLabel}>Où me contacter</span>
          <div className={styles.links}>
          <a
            href="https://www.nocode-france.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconSlack size={18} />
            Slack No Code France
          </a>
          <a
            href="https://www.linkedin.com/in/alexiskovalenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn size={18} />
            LinkedIn
          </a>
          <a href="mailto:alex@hosakka.studio">
            <IconMail size={18} />
            Email
          </a>
          </div>
        </div>
        <p className={styles.copyright}>
          {currentYear} Alexis Kovalenko
        </p>
      </div>
    </footer>
  )
}

export default Footer
