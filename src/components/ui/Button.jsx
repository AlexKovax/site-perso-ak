import { Link } from 'react-router-dom'
import { IconArrow, IconExternalLink } from '../icons'
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
        <IconExternalLink className={styles.icon} />
      </a>
    )
  }

  // Lien interne (React Router)
  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {children}
        <IconArrow className={styles.icon} />
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
