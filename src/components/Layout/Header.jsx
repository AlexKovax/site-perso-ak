import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <NavLink to="/" className={styles.logo}>
          Alexis Kovalenko
        </NavLink>
        <nav className={styles.nav}>
          <NavLink
            to="/contenus"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Contenus
          </NavLink>
          <NavLink
            to="/conferences"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Conférences
          </NavLink>
          <NavLink
            to="/pratique"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Pratique
          </NavLink>
          <NavLink
            to="/archives"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Archives
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
