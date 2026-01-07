import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Alexis Kovalenko</h1>
          <p className={styles.subtitle}>
            Je crée du contenu, j'écris et j'accompagne ceux qui veulent créer des solutions numériques sans être développeurs.
          </p>
          <p className={styles.description}>
            Depuis 2019, j'explore les outils qui permettent à chacun de créer avec la technologie : no-code, automatisations, et maintenant génération de code par IA. Je documente ce que j'apprends, je partage un point de vue, et j'aide les autres à pratiquer.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/alex.jpg"
            alt="Alexis Kovalenko"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
