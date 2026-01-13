import { useSEO } from '../hooks/useSEO'
import Section from '../components/Section'
import styles from './Mentions.module.css'

function Mentions() {
  useSEO({
    title: 'Mentions légales',
    description: 'Mentions légales et politique de confidentialité du site.'
  })

  return (
    <>
      <Section>
        <div className={styles.content}>
          <h1>Mentions légales</h1>

          <div className={styles.block}>
            <h2>Éditeur du site</h2>
            <p>
              Alexis Kovalenko<br />
              <a href="mailto:alex@hosakka.studio">alex@hosakka.studio</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>Hébergement</h2>
            <p>
              Netlify, Inc.<br />
              San Francisco, Californie
            </p>
          </div>

          <div className={styles.block}>
            <h2>Vie privée</h2>
            <p>Ce site respecte votre vie privée.</p>
            <p>Pas de cookies publicitaires. Pas de trackers tiers. Pas de données personnelles collectées.</p>
            <p>
              J'utilise uniquement <a href="https://umami.is" target="_blank" rel="noopener noreferrer">Umami</a>,
              un outil d'analyse open source et respectueux de la vie privée.
              Il collecte des statistiques anonymes (pages vues, pays d'origine, type d'appareil)
              sans jamais identifier les visiteurs individuellement :
            </p>
            <ul>
              <li>Aucun cookie déposé</li>
              <li>Aucune adresse IP stockée</li>
              <li>Aucune empreinte numérique</li>
              <li>Données agrégées uniquement</li>
            </ul>
            <p className={styles.emphasis}>
              C'est un choix délibéré. Je préfère ne rien savoir de vous plutôt que de participer à la surveillance généralisée du web.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Contenu</h2>
            <p>Les opinions exprimées sur ce site sont personnelles. Le contenu est fourni à titre informatif.</p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Mentions
