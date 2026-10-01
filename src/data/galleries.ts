export interface Gallery {
  /** URL-safe identifier used in routes, e.g. /gallery/:slug */
  slug: string
  title: string
  description?: string
  /** Cover image shown on the home page gallery grid */
  cover: string
  /** Page aspect ratio as "width / height", matching the source PDF page size */
  aspectRatio: string
  /**
   * Ordered page images, generated from a source PDF via scripts/pdf-to-pages.sh.
   * A leading `null` makes the flipbook display the cover alone instead of paired
   * with the first inside page.
   */
  pages: (string | null)[]
}

function pageRange(slug: string, count: number): (string | null)[] {
  const pages = Array.from({ length: count }, (_, i) => `/galleries/${slug}/page-${String(i + 1).padStart(2, '0')}.jpg`)
  return [null, ...pages]
}

export const galleries: Gallery[] = [
  {
    slug: 'photobook-1',
    title: 'The World is Meant to Meet',
    description: 'World Cup 2026',
    cover: '/galleries/sample/page-01.jpg',
    aspectRatio: '486 / 477',
    pages: pageRange('sample', 40),
  },
]

export function getGallery(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug)
}
