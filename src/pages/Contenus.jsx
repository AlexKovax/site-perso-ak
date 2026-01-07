import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import LatestContent from '../components/LatestContent'
import styles from './Contenus.module.css'

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

      {/* Canaux */}
      <Section title="Mes canaux">
        <div className={styles.channelsGrid}>
          {/* Podcast */}
          <Card className={styles.channelCard}>
            <Card.Body>
              <h3 className={styles.channelTitle}>Podcast</h3>
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
              <h3 className={styles.channelTitle}>Lives Twitch</h3>
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
              <h3 className={styles.channelTitle}>YouTube</h3>
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
              <h3 className={styles.channelTitle}>Articles et newsletter</h3>
              <p className={styles.channelText}>
                Pour ceux qui préfèrent lire. Des réflexions plus longues sur le no-code, le vibe coding et la démocratisation de la tech. Et une newsletter où je partage les coulisses de mes projets et ma veille de la semaine.
              </p>
              <div className={styles.buttonGroup}>
                <Button href="https://newsletter.hosakka.studio/" size="sm">
                  Newsletter
                </Button>
                <Button
                  href="https://www.linkedin.com/in/alexiskovalenko/recent-activity/articles/"
                  size="sm"
                  variant="secondary"
                >
                  Articles
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default Contenus
