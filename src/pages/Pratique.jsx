import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import styles from './Pratique.module.css'

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
        variant="alt"
      >
        <div className={styles.philosophyContent}>
          <p>
            Je m'inspire du concept de "home-cooked software" de Maggie Appleton : des logiciels créés par et pour des communautés locales, comme on préparerait un repas maison. Pas de levée de fonds, pas d'ambition de scale. Juste des outils utiles, créés avec soin pour des gens qu'on connaît.
          </p>
          <p>
            Mon objectif : former des "barefoot developers", des personnes techniquement compétentes mais pas développeurs professionnels, capables de créer des solutions simples et efficaces pour leur entourage ou leur organisation.
          </p>
        </div>
      </Section>

      {/* Le Cercle des Ops */}
      <Section title="Le Cercle des Ops">
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
      <Section title="Vibe Coding" variant="alt">
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
      </Section>
    </>
  )
}

export default Pratique
