import Header from './Header'
import Footer from './Footer'
import NewsletterPopup from '../NewsletterPopup'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <NewsletterPopup />
    </div>
  )
}

export default Layout
