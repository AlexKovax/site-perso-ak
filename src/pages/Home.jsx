import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Button from '../components/ui/Button'
import BookCard from '../components/BookCard'
import { IconPlay, IconMic, IconCode, IconBook, IconArchive } from '../components/icons'
import styles from './Home.module.css'

function Home() {
  useSEO()

  return (
    <>
      <Hero />

      {/* Section Créateur de contenu */}
      <Section title="Créateur de contenu" icon={IconPlay}>
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            Je produis régulièrement du contenu autour du no-code, de l'IA et de la démocratisation de la création numérique. Podcast, lives Twitch, vidéos YouTube et articles : plusieurs formats pour différentes façons de consommer.
          </p>
          <Button to="/contenus">Découvrir mes contenus</Button>
        </div>
      </Section>

      {/* Section Conférencier */}
      <Section title="Conférencier" variant="alt" icon={IconMic}>
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            Depuis 2022, j'interviens dans des événements tech pour parler de no-code, d'IA générative et des nouvelles façons de créer avec la technologie. Mon angle : rendre ces sujets accessibles et questionner nos usages.
          </p>
          <Button to="/conferences">Voir mes conférences</Button>
        </div>
      </Section>

      {/* Section Praticien */}
      <Section title="Praticien du no-code et du vibe coding" icon={IconCode}>
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            Je ne fais pas que parler de ces outils, je les pratique. Et j'aide les autres à faire de même. Ma conviction : on apprend vraiment en faisant, pas en regardant des tutoriels. C'est toute la philosophie du Cercle des Ops et de mes contenus sur le vibe coding.
          </p>
          <Button to="/pratique">Découvrir ma vision</Button>
        </div>
      </Section>

      {/* Section Livres */}
      <Section title="Livres" variant="alt" icon={IconBook}>
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            J'ai écrit deux livres sur le no-code. Le premier en 2023 avec Florian Reins et Erwan Kezzar chez Eyrolles. Le second en solo en 2025, un abécédaire personnel du mouvement no-code.
          </p>
          <div className={styles.booksGrid}>
            <BookCard
              title="L'abécédaire du mouvement no-code"
              description="26 lettres, 26 mots-clés pour comprendre le mouvement no-code à travers mon regard et mon expérience."
              link="https://abc.no-code.org/"
              featured
            />
            <BookCard
              title="No-Code, une nouvelle génération d'outils numériques"
              description="Co-écrit avec Florian Reins et Erwan Kezzar, publié chez Eyrolles en 2023."
              link="https://www.editions-eyrolles.com/livre/no-code"
            />
          </div>
        </div>
      </Section>

      {/* Section Archives */}
      <Section title="Archives et autres projets" icon={IconArchive}>
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            Je fais des choses sur internet depuis le début des années 2000. Certains projets sont toujours en ligne, d'autres non. Voici une sélection de ce qui a marqué mon parcours.
          </p>
          <Button to="/archives">Explorer les archives</Button>
        </div>
      </Section>
    </>
  )
}

export default Home
