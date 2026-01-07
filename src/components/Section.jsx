import styles from './Section.module.css'

function Section({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  ...props
}) {
  const classNames = `${styles.section} ${styles[variant]} ${className}`.trim()

  return (
    <section className={classNames} {...props}>
      <div className="container">
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
