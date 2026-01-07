import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import Card from '../components/ui/Card'
import styles from './Archives.module.css'

function Archives() {
  useSEO({
    title: 'Archives',
    description: 'Mes projets passés et présents : No Code France, podcasts, projets personnels et Contournement.'
  })

  return (
    <>
      {/* Introduction */}
      <Section>
        <div className={styles.intro}>
          <h1>Archives et autres projets</h1>
          <p className={styles.introText}>
            Je traîne sur internet depuis le début des années 2000. Voici une sélection de projets passés et présents, certains toujours actifs, d'autres devenus des souvenirs numériques.
          </p>
        </div>
      </Section>

      {/* Communauté No-Code France */}
      <Section title="Communauté No-Code France" variant="alt">
        <div className={styles.projectsGrid}>
          <Card className={styles.projectCard}>
            <Card.Body>
              <h3 className={styles.projectTitle}>No Code France</h3>
              <p className={styles.projectText}>
                La communauté francophone du no-code que j'ai co-fondée. Slack, meetups, événements.
              </p>
              <a
                href="https://www.nocode-france.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                nocode-france.fr →
              </a>
            </Card.Body>
          </Card>

          <Card className={styles.projectCard}>
            <Card.Body>
              <h3 className={styles.projectTitle}>No-Code Week</h3>
              <p className={styles.projectText}>
                L'événement annuel de la communauté no-code francophone.
              </p>
              <a
                href="https://nocodeweek.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                nocodeweek.io →
              </a>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Anciens podcasts */}
      <Section title="Anciens podcasts">
        <div className={styles.projectsGrid}>
          <Card className={styles.projectCard}>
            <Card.Body>
              <h3 className={styles.projectTitle}>Radio Contournement</h3>
              <p className={styles.projectText}>
                Le premier podcast francophone autour du no-code.
              </p>
              <a
                href="https://radio.contournement.io"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                radio.contournement.io →
              </a>
            </Card.Body>
          </Card>

          <Card className={styles.projectCard}>
            <Card.Body>
              <h3 className={styles.projectTitle}>No-Code World Radio International</h3>
              <p className={styles.projectText}>
                Un voyage autour du monde à la rencontre des personnalités du no-code.
              </p>
              <a
                href="https://nocodeworldradio.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                nocodeworldradio.com →
              </a>
            </Card.Body>
          </Card>

          <Card className={styles.projectCard}>
            <Card.Body>
              <h3 className={styles.projectTitle}>Les chroniques du CCC</h3>
              <p className={styles.projectText}>
                Julie & Alex vous racontent le 36e congrès du Chaos Computer Club en podcast.
              </p>
              <a
                href="https://soundcloud.com/chroniques-ccc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                SoundCloud →
              </a>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Projets personnels */}
      <Section title="Projets personnels" variant="alt">
        <div className={styles.projectsGrid}>
          <Card className={styles.projectCard}>
            <Card.Body>
              <h3 className={styles.projectTitle}>Hejorama</h3>
              <p className={styles.projectText}>
                Un site sur le voyage que j'ai créé il y a quelques années.
              </p>
              <a
                href="https://hejorama.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                hejorama.com →
              </a>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Contournement */}
      <Section title="Contournement">
        <Card className={styles.contournementCard}>
          <Card.Body>
            <p className={styles.contournementText}>
              J'ai co-fondé Contournement en 2019, un organisme de formation spécialisé dans les outils no-code. Je ne suis plus opérationnel mais je reste associé et je continue à suivre l'aventure.
            </p>
            <a
              href="https://contournement.io"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              contournement.io →
            </a>
          </Card.Body>
        </Card>
      </Section>
    </>
  )
}

export default Archives
