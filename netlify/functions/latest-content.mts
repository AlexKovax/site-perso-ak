import type { Context } from "@netlify/functions"
import { XMLParser } from "fast-xml-parser"

const YOUTUBE_URL = "https://www.youtube.com/feeds/videos.xml?channel_id=UCm7-5hDaDYnktvIKj-_3Dsg"
const PODCAST_URL = "https://audio.hosakka.studio/rss/feed.xml"

const FETCH_TIMEOUT_MS = 8000

type LatestContent = {
  youtube: {
    title: string
    url: string
    published: string
    duration: number | null
  } | null
  podcast: {
    title: string
    url: string
    published: string
    duration: string | null
  } | null
}

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "User-Agent": "ak-site-netlify-function/1.0" },
    })
    if (!res.ok) {
      console.error(`Fetch failed for ${url}: HTTP ${res.status}`)
      return null
    }
    return await res.text()
  } catch (err) {
    console.error(`Fetch error for ${url}:`, err)
    return null
  }
}

/** "01:02:03" | "12:34" | "75" -> seconds ; null si illisible */
function itunesDurationToSeconds(raw: string): number | null {
  const parts = raw.trim().split(":").map((p) => parseInt(p, 10))
  if (parts.length === 0 || parts.some((p) => Number.isNaN(p))) return null
  return parts.reduce((acc, p) => acc * 60 + p, 0)
}

function parseYoutube(xml: string): LatestContent["youtube"] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    removeNSPrefix: true,
  })
  const feed = parser.parse(xml)
  const entry = feed?.feed?.entry?.[0] ?? feed?.feed?.entry
  if (!entry) return null

  const mediaContent = entry.media?.group?.media?.content?.[0] ?? entry.media?.group?.media?.content
  const rawDuration = mediaContent?.["@_duration"]
  // fast-xml-parser peut renvoyer un attribut numérique directement en number
  const seconds = typeof rawDuration === "number" ? rawDuration : parseInt(rawDuration, 10)

  return {
    title: entry.title ?? "",
    url: entry.link?.["@_href"] ?? "",
    published: entry.published ?? "",
    duration: seconds !== null && !Number.isNaN(seconds) ? seconds : null,
  }
}

function parsePodcast(xml: string): LatestContent["podcast"] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    removeNSPrefix: true,
  })
  const feed = parser.parse(xml)
  const channel = feed?.rss?.channel
  const items = channel?.item
  const item = Array.isArray(items) ? items[0] : items
  if (!item) return null

  const rawDuration = item.duration
  // fast-xml-parser convertit le texte numérique (ex. <itunes:duration>4240</itunes:duration>)
  // directement en number ; les formats "HH:MM:SS" restent des strings.
  const durationSeconds =
    typeof rawDuration === "number"
      ? rawDuration
      : typeof rawDuration === "string"
        ? itunesDurationToSeconds(rawDuration)
        : null

  return {
    title: item.title ?? "",
    url: item.enclosure?.["@_url"] ?? "",
    published: item.pubDate ?? "",
    duration: durationSeconds !== null ? String(durationSeconds) : null,
  }
}

export default async (req: Request, context: Context) => {
  const [youtubeXml, podcastXml] = await Promise.all([
    fetchText(YOUTUBE_URL),
    fetchText(PODCAST_URL),
  ])

  const result: LatestContent = {
    youtube: null,
    podcast: null,
  }

  try {
    if (youtubeXml) result.youtube = parseYoutube(youtubeXml)
  } catch (err) {
    console.error("Error parsing YouTube feed:", err)
  }

  try {
    if (podcastXml) result.podcast = parsePodcast(podcastXml)
  } catch (err) {
    console.error("Error parsing podcast feed:", err)
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // Cache côté CDN Netlify pour éviter de frapper les flux à chaque visite.
      // Une valeur courte garantit des contenus raisonnablement à jour.
      "Cache-Control": "public, max-age=300, s-maxage=600, stale-while-revalidate=3600",
    },
  })
}
