import Card from './ui/Card'
import Button from './ui/Button'
import styles from './BookCard.module.css'

function BookCard({ title, description, link, featured = false }) {
  return (
    <Card variant={featured ? 'highlight' : 'default'} className={styles.card}>
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
