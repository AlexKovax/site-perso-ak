import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLatestContent } from '../hooks/useLatestContent'
import Card from './ui/Card'
import Button from './ui/Button'
import styles from './LatestContent.module.css'

const PODCAST_THUMBNAIL = 'https://audio.hosakka.studio/assets/podcast-sd.png'

function formatDuration(seconds) {
  const secs = parseInt(seconds, 10)
  const hours = Math.floor(secs / 3600)
  const minutes = Math.floor((secs % 3600) / 60)
  const remainingSeconds = secs % 60

  if (hours > 0) {
    return `${hours}h${minutes.toString().padStart(2, '0')}min`
  }
  return `${minutes}min${remainingSeconds.toString().padStart(2, '0')}s`
}

function getYouTubeId(url) {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : null
}

function getYouTubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

function MediaOverlay({ type, youtubeId, podcastUrl, title, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        {type === 'youtube' && youtubeId && (
          <div className={styles.overlayEmbed}>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.overlayIframe}
            />
          </div>
        )}
        {type === 'podcast' && podcastUrl && (
          <div className={styles.overlayPlayer}>
            <img src={PODCAST_THUMBNAIL} alt={title} className={styles.overlayPodcastImage} />
            <h3 className={styles.overlayTitle}>{title}</h3>
            <audio
              src={podcastUrl}
              controls
              autoPlay
              className={styles.overlayAudio}
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

function LatestContent() {
  const { data, loading, error } = useLatestContent()
  const [activeMedia, setActiveMedia] = useState(null)

  if (loading) {
    return (
      <div className={styles.grid}>
        <div className={styles.skeleton}>Chargement...</div>
        <div className={styles.skeleton}>Chargement...</div>
      </div>
    )
  }

  if (error) {
    return (
      <p className={styles.error}>
        Impossible de charger les derniers contenus.
      </p>
    )
  }

  const youtubeId = data?.youtube?.url ? getYouTubeId(data.youtube.url) : null

  return (
    <>
      <div className={styles.grid}>
        {data?.youtube && youtubeId && (
          <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
              <button
                type="button"
                className={styles.playButton}
                onClick={() => setActiveMedia({ type: 'youtube', youtubeId, title: data.youtube.title })}
              >
                <img
                  src={getYouTubeThumbnail(youtubeId)}
                  alt={data.youtube.title}
                  className={styles.thumbnail}
                />
                <div className={styles.playOverlay}>
                  <span className={styles.playIcon}>▶</span>
                </div>
              </button>

              <div className={styles.info}>
                <span className={styles.label}>Dernière vidéo</span>
                <h3 className={styles.title}>{data.youtube.title}</h3>
                {data.youtube.duration && (
                  <span className={styles.duration}>{formatDuration(data.youtube.duration)}</span>
                )}
                <div className={styles.links}>
                  <Button
                    href={data.youtube.url}
                    size="sm"
                    variant="secondary"
                  >
                    Voir sur YouTube
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        )}

        {data?.podcast && (
          <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
              <button
                type="button"
                className={styles.playButton}
                onClick={() => setActiveMedia({ type: 'podcast', podcastUrl: data.podcast.url, title: data.podcast.title })}
              >
                <img
                  src={PODCAST_THUMBNAIL}
                  alt={data.podcast.title}
                  className={styles.thumbnail}
                />
                <div className={styles.playOverlay}>
                  <span className={styles.playIcon}>▶</span>
                </div>
              </button>

              <div className={styles.info}>
                <span className={styles.label}>
                  Dernier podcast
                  {data.podcast.duration && (
                    <span className={styles.labelDuration}> ({formatDuration(data.podcast.duration)})</span>
                  )}
                </span>
                <h3 className={styles.title}>{data.podcast.title}</h3>
                <div className={styles.links}>
                  <Button
                    href="https://audio.hosakka.studio/podcast/"
                    size="sm"
                    variant="secondary"
                  >
                    Voir tous les épisodes
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>

      {activeMedia && (
        <MediaOverlay
          type={activeMedia.type}
          youtubeId={activeMedia.youtubeId}
          podcastUrl={activeMedia.podcastUrl}
          title={activeMedia.title}
          onClose={() => setActiveMedia(null)}
        />
      )}
    </>
  )
}

export default LatestContent
