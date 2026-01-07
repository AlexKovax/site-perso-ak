import { useLatestContent } from '../hooks/useLatestContent'
import Card from './ui/Card'
import styles from './LatestContent.module.css'

function LatestContent() {
  const { data, loading, error } = useLatestContent()

  if (loading) {
    return (
      <div className={styles.grid}>
        <div className={styles.skeleton}>Chargement...</div>
        <div className={styles.skeleton}>Chargement...</div>
      </div>
    )
  }

  if (error) {
    return (
      <p className={styles.error}>
        Impossible de charger les derniers contenus.
      </p>
    )
  }

  return (
    <div className={styles.grid}>
      {data?.youtube && (
        <Card className={styles.card}>
          <Card.Body>
            <span className={styles.label}>Dernière vidéo</span>
            <a
              href={data.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contentLink}
            >
              {data.youtube.thumbnail && (
                <img
                  src={data.youtube.thumbnail}
                  alt={data.youtube.title}
                  className={styles.thumbnail}
                />
              )}
              <h3 className={styles.title}>{data.youtube.title}</h3>
            </a>
          </Card.Body>
        </Card>
      )}

      {data?.podcast && (
        <Card className={styles.card}>
          <Card.Body>
            <span className={styles.label}>Dernier podcast</span>
            <a
              href={data.podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contentLink}
            >
              {data.podcast.thumbnail && (
                <img
                  src={data.podcast.thumbnail}
                  alt={data.podcast.title}
                  className={styles.thumbnail}
                />
              )}
              <h3 className={styles.title}>{data.podcast.title}</h3>
            </a>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default LatestContent
