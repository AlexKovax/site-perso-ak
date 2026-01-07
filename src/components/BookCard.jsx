import Card from './ui/Card'
import Button from './ui/Button'
import styles from './BookCard.module.css'

function BookCard({ title, description, link, featured = false, cover }) {
  return (
    <Card variant={featured ? 'highlight' : 'default'} className={cover ? styles.cardHorizontal : styles.card}>
      {cover && (
        <div className={styles.coverWrapper}>
          <img src={cover} alt={`Couverture de ${title}`} className={styles.cover} />
        </div>
      )}
      <Card.Body>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button href={link} variant={featured ? 'secondary' : 'primary'} size="sm">
          Découvrir
        </Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard
