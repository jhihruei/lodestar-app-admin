export type PodcastProgramProps = {
  id: string
  title: string
  contentType: string | null
  duration: number
  description: string | null
  categories: {
    id: string
    name: string
  }[]
  coverUrl: string | null
  abstract: string | null
  listPrice: number
  salePrice: number | null
  soldAt: Date | null
  creatorId: string
  instructors: { id: string; name: string; pictureUrl: string }[]
  publishedAt: Date | null
  supportLocales: string[]
}
