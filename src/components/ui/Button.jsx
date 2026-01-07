import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({
  children,
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim()

  // Lien externe
  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        <span className={styles.arrow}>→</span>
      </a>
    )
  }

  // Lien interne (React Router)
  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {children}
        <span className={styles.arrow}>→</span>
      </Link>
    )
  }

  // Bouton standard
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default Button
