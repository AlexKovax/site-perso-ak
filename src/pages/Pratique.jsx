import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import styles from './Pratique.module.css'

// Icônes SVG
const IconHome = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
)

const IconGraduation = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
)

const IconUsers = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

const IconSparkles = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path>
    <path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5L5 19z"></path>
    <path d="M19 13l.5 1.5L21 15l-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13z"></path>
  </svg>
)

function Pratique() {
  useSEO({
    title: 'Pratique',
    description: 'Ma vision de la pratique du no-code et du vibe coding. Le Cercle des Ops, le home-cooked software et les barefoot developers.'
  })

  return (
    <>
      {/* Introduction */}
      <Section>
        <div className={styles.intro}>
          <h1>Ma vision de la pratique</h1>
          <p className={styles.introText}>
            Je crois qu'on n'apprend pas vraiment en regardant des tutoriels. On apprend en faisant, en se confrontant à des problèmes réels, en voyant comment les autres s'y prennent. C'est cette conviction qui guide tout ce que je construis.
          </p>
        </div>
      </Section>

      {/* Philosophie */}
      <Section
        title="Créer des solutions utiles, pas des startups"
        icon={IconHome}
        variant="alt"
      >
        <div className={styles.philosophyContent}>
          <p>
            Je m'inspire du concept de "<a href="https://maggieappleton.com/home-cooked-software" target="_blank" rel="noopener noreferrer">home-cooked software</a>" de Maggie Appleton : des logiciels créés par et pour des communautés locales, comme on préparerait un repas maison. Pas de levée de fonds, pas d'ambition de scale. Juste des outils utiles, créés avec soin pour des gens qu'on connaît.
          </p>
          <p>
            Mon objectif : former des "barefoot developers", des personnes techniquement compétentes mais pas développeurs professionnels, capables de créer des solutions simples et efficaces pour leur entourage ou leur organisation.
          </p>
        </div>
      </Section>

      {/* Contournement - Formations */}
      <Section title="Acquérir les bases" icon={IconGraduation}>
        <Card className={styles.projectCard} variant="highlight">
          <Card.Body>
            <p className={styles.projectText}>
              Avant de pratiquer, il faut acquérir des bases solides. C'est exactement ce que propose <strong>Contournement</strong>, l'organisme de formation que j'ai co-fondé en 2019 et qui a depuis formé près de 15 000 personnes aux outils no-code.
            </p>
            <p className={styles.projectText}>
              Les formations Contournement couvrent les outils essentiels comme Airtable, Notion, Make ou Zapier, avec une approche très concrète : 80% de pratique, 20% de théorie. L'objectif est de vous rendre autonome pour automatiser vos tâches répétitives et gagner des dizaines d'heures chaque mois.
            </p>
            <p className={styles.projectTextMuted}>
              Formations éligibles CPF, OPCO et France Travail.
            </p>
            <Button href="https://contournement.io" variant="secondary">
              Découvrir les formations
            </Button>
          </Card.Body>
        </Card>
      </Section>

      {/* Le Cercle des Ops */}
      <Section title="Le Cercle des Ops" icon={IconUsers} variant="alt">
        <Card className={styles.projectCard} variant="highlight">
          <Card.Body>
            <p className={styles.projectText}>
              Une communauté de pratique pour ceux qui veulent créer des solutions numériques. Des challenges concrets, des cohortes intensives, et une approche agnostique des outils : no-code, vibe coding, peu importe. Ce qui compte, c'est de résoudre des problèmes réels.
            </p>
            <Button href="https://cercledesops.io" variant="secondary">
              Rejoindre le Cercle des Ops
            </Button>
          </Card.Body>
        </Card>
      </Section>

      {/* Vibe Coding */}
      <Section title="Vibe Coding" icon={IconSparkles}>
        <div className={styles.cardsGrid}>
          <Card className={styles.projectCard}>
            <Card.Body>
              <p className={styles.projectText}>
                Le vibe coding, c'est créer des applications en dialoguant avec l'IA. Une nouvelle façon de programmer qui prolonge naturellement le mouvement no-code. Je documente mes explorations, je teste les outils et je partage des ressources pour ceux qui veulent s'y mettre.
              </p>
              <Button href="https://vibe-coding.tech">
                Découvrir le vibe coding
              </Button>
            </Card.Body>
          </Card>

          <Card className={styles.projectCard}>
            <Card.Body>
              <p className={styles.projectText}>
                Pour bien vibe coder, maîtriser Git et GitHub est essentiel. C'est ce qui permet de versionner son code, de collaborer efficacement et de déployer ses projets. J'ai créé une formation complète pour apprendre ces outils fondamentaux.
              </p>
              <Button href="https://formation-git.fr" variant="secondary">
                Apprendre Git et GitHub
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default Pratique
