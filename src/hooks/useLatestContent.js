import { useState, useEffect } from 'react'

const API_URL = '/.netlify/functions/latest-content'

export function useLatestContent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des contenus')
        }
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return { data, loading, error }
}
