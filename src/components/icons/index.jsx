// Icônes SVG style néo-brutaliste
// Traits épais, formes géométriques simples

const iconStyle = {
  strokeWidth: 2.5,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  fill: 'none',
  stroke: 'currentColor',
}

export function IconArrow({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" style={iconStyle} />
    </svg>
  )
}

export function IconExternalLink({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M18 13v6H5V6h6M15 3h6v6M10 14L20 4" style={iconStyle} />
    </svg>
  )
}

export function IconMail({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="3" y="5" width="18" height="14" style={iconStyle} />
      <path d="M3 5l9 7 9-7" style={iconStyle} />
    </svg>
  )
}

export function IconLinkedIn({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="3" y="3" width="18" height="18" style={iconStyle} />
      <path d="M8 11v5M8 8v.01M12 16v-3.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V16" style={iconStyle} />
    </svg>
  )
}

export function IconSlack({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M6 15a2 2 0 01-2-2 2 2 0 012-2h2v2a2 2 0 01-2 2z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M6 11a2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2v2H6z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M18 9a2 2 0 012 2 2 2 0 01-2 2h-2v-2a2 2 0 012-2z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M18 13a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2v-2h2z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M9 6a2 2 0 012-2 2 2 0 012 2v2h-2a2 2 0 01-2-2z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M13 6a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2h-2V6z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M9 18a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2h2v-2H9a2 2 0 01-2-2h4v4z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
      <path d="M15 18a2 2 0 01-2 2 2 2 0 01-2-2v-2h2a2 2 0 012 2z" style={{ ...iconStyle, fill: 'currentColor', stroke: 'none' }} />
    </svg>
  )
}

export function IconBook({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M4 4h16v16H4z" style={iconStyle} />
      <path d="M8 4v16M4 8h4" style={iconStyle} />
    </svg>
  )
}

export function IconMic({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="9" y="3" width="6" height="10" style={iconStyle} />
      <path d="M5 10v1a7 7 0 0014 0v-1M12 18v3M9 21h6" style={iconStyle} />
    </svg>
  )
}

export function IconPlay({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="3" y="3" width="18" height="18" style={iconStyle} />
      <path d="M10 8l6 4-6 4V8z" style={{ ...iconStyle, fill: 'currentColor' }} />
    </svg>
  )
}

export function IconCode({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" style={iconStyle} />
    </svg>
  )
}

export function IconArchive({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="3" y="3" width="18" height="6" style={iconStyle} />
      <path d="M3 9v10h18V9M10 13h4" style={iconStyle} />
    </svg>
  )
}

export function IconStar({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M12 3l2.5 6.5H21l-5.5 4 2 6.5L12 16l-5.5 4 2-6.5L3 9.5h6.5L12 3z" style={iconStyle} />
    </svg>
  )
}

export function IconYouTube({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" style={iconStyle} />
      <path d="M10 9l5 3-5 3V9z" style={{ ...iconStyle, fill: 'currentColor' }} />
    </svg>
  )
}

export function IconTwitch({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path d="M4 3h16v14l-4 4h-4l-2 2H6v-2H4V3z" style={iconStyle} />
      <path d="M10 8v4M14 8v4" style={iconStyle} />
    </svg>
  )
}

export function IconPodcast({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="3" style={{ ...iconStyle, fill: 'currentColor' }} />
      <path d="M8 12a4 4 0 018 0" style={iconStyle} />
      <path d="M5 12a7 7 0 0114 0" style={iconStyle} />
      <path d="M12 15v5M10 20h4" style={iconStyle} />
    </svg>
  )
}

export function IconNewsletter({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <rect x="3" y="5" width="18" height="14" style={iconStyle} />
      <path d="M3 5l9 7 9-7" style={iconStyle} />
      <path d="M3 19l6-6M21 19l-6-6" style={iconStyle} />
    </svg>
  )
}
