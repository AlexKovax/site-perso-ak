import { useEffect } from 'react'

const DEFAULT_TITLE = 'Alexis Kovalenko'
const DEFAULT_DESCRIPTION = 'Créateur de contenu, conférencier et praticien du no-code et du vibe coding. Je crée du contenu, j\'écris et j\'accompagne ceux qui veulent créer des solutions numériques.'

export function useSEO({ title, description } = {}) {
  useEffect(() => {
    // Title
    document.title = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || DEFAULT_DESCRIPTION)
    }

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', title || DEFAULT_TITLE)

    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescription)
    }
    ogDescription.setAttribute('content', description || DEFAULT_DESCRIPTION)

    // Cleanup
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description])
}
