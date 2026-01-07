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

      {/* Disponibilité */}
      <Section variant="alt">
        <Card variant="highlight" className={styles.inviteCard}>
          <Card.Body>
            <h2 className={styles.inviteTitle}>M'inviter</h2>
            <p className={styles.inviteText}>
              Je suis disponible pour intervenir dans vos événements, meetups ou conférences d'entreprise. Mes sujets de prédilection : le no-code, le vibe coding, la démocratisation de la création numérique.
            </p>
            <Button href="mailto:alex@hosakka.studio" variant="secondary">
              Me contacter
            </Button>
          </Card.Body>
        </Card>
      </Section>

      {/* Conférence actuelle */}
      <Section title="Ma conférence actuelle">
        <Card className={styles.currentTalk}>
          <Card.Body>
            <h3 className={styles.talkTitle}>Vibe Coding et Pop Art</h3>
            <p className={styles.talkText}>
              Ma conférence la plus récente explore le parallèle entre l'émergence du vibe coding et le mouvement Pop Art des années 60. Comment l'IA démocratise la création de code, comme Warhol a démocratisé l'art. Une réflexion sur ce que signifie "créer" à l'ère de l'IA.
            </p>
            <Button
              href="https://www.canva.com/design/DAG62ZhiEik/lx7PBXAssHMfc4EX_oVpnA/edit"
              size="sm"
            >
              Voir les slides
            </Button>
          </Card.Body>
        </Card>
      </Section>

      {/* Historique */}
      <Section title="Historique" variant="alt">
        <ConferenceTable />
      </Section>
    </>
  )
}

export default Conferences
