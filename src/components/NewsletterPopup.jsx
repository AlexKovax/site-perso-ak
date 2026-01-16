import { useState, useEffect } from 'react'
import Button from './ui/Button'
import styles from './NewsletterPopup.module.css'

const NEWSLETTER_WEBHOOK = 'https://hosakkastudio.app.n8n.cloud/webhook/add-newsletter'

function NewsletterPopup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Afficher la popup après 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsExpanded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Fermer la popup 2 secondes après une inscription réussie
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const response = await fetch(NEWSLETTER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function toggleExpanded() {
    setIsExpanded(!isExpanded)
  }

  function handleClose() {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className={`${styles.popup} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <div className={styles.header}>
        <button onClick={toggleExpanded} className={styles.toggleButton} aria-label={isExpanded ? 'Réduire' : 'Développer'}>
          {isExpanded ? '−' : '✉'}
        </button>
        <button onClick={handleClose} className={styles.closeButton} aria-label="Fermer">
          ×
        </button>
      </div>

      {isExpanded && (
        <div className={styles.content}>
          <h3 className={styles.title}>Newsletter</h3>
          <p className={styles.text}>
            Soyez prévenu.e de mes nouveaux contenus
          </p>

          {status === 'success' ? (
            <p className={styles.successMessage}>
              Merci ! Vous êtes inscrit.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className={styles.input}
                disabled={status === 'loading'}
              />
              <Button type="submit" size="sm" disabled={status === 'loading'}>
                {status === 'loading' ? 'Envoi...' : "S'inscrire"}
              </Button>
              {status === 'error' && (
                <p className={styles.errorMessage}>Une erreur est survenue.</p>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  )
}

export default NewsletterPopup
