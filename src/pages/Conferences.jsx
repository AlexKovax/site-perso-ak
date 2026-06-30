import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ConferenceTable from '../components/ConferenceTable'
import styles from './Conferences.module.css'

function Conferences() {
  useSEO({
    title: 'Conférences',
    description: 'Mes interventions dans des événements tech autour du no-code, de l\'IA générative et des nouvelles façons de créer avec la technologie.'
  })

  return (
    <>
      {/* Introduction */}
      <Section>
        <div className={styles.intro}>
          <h1>Conférences</h1>
          <p className={styles.introText}>
            Depuis 2022, j'interviens dans des événements pour parler de no-code, d'IA générative et des nouvelles façons de créer avec la technologie. Mon approche : des présentations accessibles, un point de vue assumé, et si possible une touche d'originalité.
          </p>
        </div>
      </Section>

      {/* Conférence actuelle */}
      <Section title="Ma conférence actuelle" variant="alt">
        <Card className={styles.currentTalk}>
          <div className={styles.talkContent}>
            <Card.Body>
              <h3 className={styles.talkTitle}>Human After All</h3>
              <p className={styles.talkText}>
                Ma conférence actuelle interroge notre rapport à la technologie à travers le prisme de l'album <em>Human After All</em> de Daft Punk. Que signifie rester humain à l'ère des algorithmes et de l'IA ? Une réflexion sur ce que la machine révèle de nous-mêmes.
              </p>
              <div className={styles.talkActions}>
                <Button
                  href="https://human-after-all.hosakka.studio/"
                  size="sm"
                >
                  Voir la conférence
                </Button>
              </div>
            </Card.Body>
            <div className={styles.talkImageWrapper}>
              <img
                src="/cover-human.png"
                alt="Couverture de la conférence Human After All"
                className={styles.talkImage}
              />
            </div>
          </div>
        </Card>
      </Section>

      {/* Historique */}
      <Section title="Historique des replays">
        <p className={styles.historyIntro}>
          Voici les conférences dont un replay est disponible. Mais je suis intervenu dans bien d'autres événements, meetups et podcasts...
        </p>
        <ConferenceTable />
      </Section>

      {/* Disponibilité + Livre */}
      <Section variant="alt">
        <div className={styles.bottomGrid}>
          <Card variant="highlight" className={styles.inviteCard}>
            <div className={styles.inviteContent}>
              <Card.Body>
                <h2 className={styles.inviteTitle}>M'inviter</h2>
                <p className={styles.inviteText}>
                  Je suis disponible pour intervenir dans vos événements, meetups ou conférences d'entreprise. Mes sujets de prédilection : le no-code, le vibe coding, la démocratisation de la création numérique.
                </p>
                <Button href="mailto:alex@hosakka.studio" variant="secondary">
                  Me contacter
                </Button>
              </Card.Body>
              <div className={styles.inviteImageWrapper}>
                <img
                  src="/invitation.jpg"
                  alt="Alexis Kovalenko sur scène au Web2Day"
                  className={styles.inviteImage}
                />
              </div>
            </div>
          </Card>

          <Card className={styles.bookCard}>
            <div className={styles.bookContent}>
              <Card.Body>
                <h2 className={styles.bookTitle}>Découvrir mon livre</h2>
                <p className={styles.bookText}>
                  J'ai écrit un livre sur le vibe coding : comment l'IA transforme la façon de créer des logiciels, et ce que ça change pour tout le monde.
                </p>
                <Button href="https://livre.vibe-coding.tech/" variant="secondary">
                  Lire le livre
                </Button>
              </Card.Body>
              <div className={styles.bookImageWrapper}>
                <img
                  src="/cover.png"
                  alt="Couverture du livre sur le vibe coding"
                  className={styles.bookImage}
                />
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default Conferences
