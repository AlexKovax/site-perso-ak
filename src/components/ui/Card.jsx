import styles from './Card.module.css'

function Card({
  children,
  variant = 'default',
  className = '',
  as: Component = 'div',
  ...props
}) {
  const classNames = `${styles.card} ${styles[variant]} ${className}`.trim()

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  )
}

function CardHeader({ children, className = '' }) {
  return (
    <div className={`${styles.header} ${className}`.trim()}>
      {children}
    </div>
  )
}

function CardBody({ children, className = '' }) {
  return (
    <div className={`${styles.body} ${className}`.trim()}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '' }) {
  return (
    <div className={`${styles.footer} ${className}`.trim()}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
