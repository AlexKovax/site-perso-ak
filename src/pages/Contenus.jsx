import { useState } from 'react'
import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import BookCard from '../components/BookCard'
import LatestContent from '../components/LatestContent'
import { IconPodcast, IconTwitch, IconYouTube, IconBook } from '../components/icons'
import styles from './Contenus.module.css'

const NEWSLETTER_WEBHOOK = 'https://hosakkastudio.app.n8n.cloud/webhook/add-newsletter'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

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

  if (status === 'success') {
    return (
      <p className={styles.successMessage}>
        Merci ! Vous êtes inscrit à la newsletter.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.newsletterForm}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        required
        className={styles.emailInput}
        disabled={status === 'loading'}
      />
      <Button type="submit" size="sm" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi...' : "S'inscrire"}
      </Button>
      {status === 'error' && (
        <p className={styles.errorMessage}>Une erreur est survenue. Réessayez.</p>
      )}
    </form>
  )
}

function Contenus() {
  useSEO({
    title: 'Contenus',
    description: 'Podcast, lives Twitch, vidéos YouTube et articles autour du no-code et de l\'IA. Découvrez mes différents canaux de contenu.'
  })

  return (
    <>
      {/* Introduction */}
      <Section>
        <div className={styles.intro}>
          <h1>Mes contenus</h1>
          <p className={styles.introText}>
            Je crée du contenu depuis 2019 autour du no-code et de l'IA. Mon objectif : documenter ce que j'apprends, partager un regard critique et aider ceux qui veulent se lancer. Voici mes différents canaux et ce que vous y trouverez.
          </p>
        </div>
      </Section>

      {/* Dernières publications */}
      <Section title="Les dernières publications" variant="alt">
        <LatestContent />
      </Section>

      {/* Newsletter */}
      <Section>
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Restez informé</h2>
            <p className={styles.newsletterText}>
              Recevez ma veille hebdomadaire sur le no-code et l'IA, ainsi que les coulisses de mes projets.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>

      {/* Canaux */}
      <Section title="Mes canaux" variant="alt">
        <div className={styles.channelsGrid}>
          {/* Podcast */}
          <Card className={styles.channelCard}>
            <Card.Body>
              <h3 className={styles.channelTitle}>
                <IconPodcast size={24} className={styles.channelIcon} />
                Podcast
              </h3>
              <p className={styles.channelText}>
                Mon format principal. Des notes vocales où je commente l'actualité du no-code et de l'IA, des interviews de praticiens, et des émissions régulières comme "AI Game" avec Lucien Tavano ou "Radio Vibe Code" avec Xavier Coiffard. Un format audio pour ceux qui préfèrent écouter en marchant ou en travaillant.
              </p>
              <Button href="https://audio.hosakka.studio/podcast/" size="sm">
                Écouter le podcast
              </Button>
            </Card.Body>
          </Card>

          {/* Twitch */}
          <Card className={styles.channelCard}>
            <Card.Body>
              <h3 className={styles.channelTitle}>
                <IconTwitch size={24} className={styles.channelIcon} />
                Lives Twitch
              </h3>
              <p className={styles.channelText}>
                Chaque mardi matin à 8h30, je commente l'actualité no-code et IA en direct sur la chaîne No Code France. C'est aussi l'occasion de coder en live, de tester des outils et d'échanger avec la communauté. Le format le plus spontané et interactif.
              </p>
              <Button href="https://www.twitch.tv/alexkovax" size="sm">
                Suivre sur Twitch
              </Button>
            </Card.Body>
          </Card>

          {/* YouTube */}
          <Card className={styles.channelCard}>
            <Card.Body>
              <h3 className={styles.channelTitle}>
                <IconYouTube size={24} className={styles.channelIcon} />
                YouTube
              </h3>
              <p className={styles.channelText}>
                Les replays de mes lives, des tutoriels et parfois des vidéos plus travaillées. Un bon point d'entrée si vous préférez le format vidéo et que vous avez raté les directs.
              </p>
              <Button href="https://www.youtube.com/@alexkovax" size="sm">
                Voir la chaîne
              </Button>
            </Card.Body>
          </Card>

          {/* Articles */}
          <Card className={styles.channelCard}>
            <Card.Body>
              <h3 className={styles.channelTitle}>
                <IconBook size={24} className={styles.channelIcon} />
                Articles
              </h3>
              <p className={styles.channelText}>
                Pour ceux qui préfèrent lire. Des réflexions plus longues sur le no-code, le vibe coding et la démocratisation de la tech.
              </p>
              <Button
                href="https://www.linkedin.com/in/alexiskovalenko/recent-activity/articles/"
                size="sm"
              >
                Lire les articles
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Livres */}
      <Section title="Livres">
        <p className={styles.booksIntro}>
          J'ai écrit deux livres sur le no-code. Le premier en 2023 avec Florian Reins et Erwan Kezzar chez Eyrolles. Le second en solo en 2025, un abécédaire personnel du mouvement no-code.
        </p>
        <div className={styles.booksGrid}>
          <BookCard
            title="L'abécédaire du mouvement no-code"
            description="26 lettres, 26 mots-clés pour comprendre le mouvement no-code à travers mon regard et mon expérience."
            link="https://abc.no-code.org/"
            cover="/livre2.png"
            featured
          />
          <BookCard
            title="No-Code, une nouvelle génération d'outils numériques"
            description="Co-écrit avec Florian Reins et Erwan Kezzar, publié chez Eyrolles en 2023."
            link="https://www.editions-eyrolles.com/livre/no-code"
            cover="/livre.webp"
          />
        </div>
      </Section>
    </>
  )
}

export default Contenus
