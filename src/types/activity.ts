import { CategoryProps } from './general'

export type ActivityProps = {
  id: string
  coverUrl: string | null
  title: string
  publishedAt: Date | null
  participantsCount?: number
  startedAt?: Date | null
  endedAt?: Date | null
  description: string | null
  isParticipantsVisible: boolean
  organizerId: string
  supportLocales: string[]
}

export type ActivityTicketProps = {
  id: string
  title: string
  startedAt: Date
  endedAt: Date
  price: number
  count: number
  description: string | null
  isPublished: boolean
  enrollmentsCount?: number
}

export type ActivitySessionProps = {
  id: string
  title: string
  startedAt: Date
  endedAt: Date
  location: string | null
  onlineLink: string | null
  threshold: number | null
  description: string | null
}

export type ActivityTicketSessionProps = {
  id: string
  type: string
  title: string
  location: string | null
  onlineLink: string | null
}

export type ActivityAdminProps = ActivityProps & {
  categories: CategoryProps[]
  tickets: (ActivityTicketProps & {
    sessions: ActivityTicketSessionProps[]
  })[]
  sessions: (ActivitySessionProps & {
    maxAmount: {
      offline: number
      online: number
    }
    enrollmentsCount: {
      offline: number
      online: number
    }
  })[]
}
