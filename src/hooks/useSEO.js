import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://alexis-kovalenko.fr'
const DEFAULT_TITLE = 'Alexis Kovalenko'
const DEFAULT_DESCRIPTION = 'Créateur de contenu, conférencier et praticien du no-code et du vibe coding. Je crée du contenu, j\'écris et j\'accompagne ceux qui veulent créer des solutions numériques.'

function setMetaTag(selector, attribute, content) {
  let element = document.querySelector(selector)
  if (element) {
    element.setAttribute(attribute, content)
  }
}

export function useSEO({ title, description } = {}) {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE
    const fullDescription = description || DEFAULT_DESCRIPTION
    const canonicalUrl = `${BASE_URL}${location.pathname}`

    // Title
    document.title = fullTitle

    // Meta description
    setMetaTag('meta[name="description"]', 'content', fullDescription)

    // Canonical URL
    setMetaTag('link[rel="canonical"]', 'href', canonicalUrl)

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', fullTitle)
    setMetaTag('meta[property="og:description"]', 'content', fullDescription)
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl)

    // Twitter Card
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle)
    setMetaTag('meta[name="twitter:description"]', 'content', fullDescription)

    // Cleanup
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description, location.pathname])
}
