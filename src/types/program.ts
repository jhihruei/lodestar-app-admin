import { ProgramPlanPeriodType } from '../schemas/program'

export type ProgramPreviewProps = {
  id: string
  coverUrl: string | null
  title: string
  abstract: string | null
  instructors: {
    id: string
    avatarUrl: string | null
    name: string
  }[]
  isSubscription: boolean
  listPrice: number | null
  salePrice: number | null
  periodAmount: number | null
  periodType: ProgramPlanPeriodType | null
  enrollment: number
  isDraft: boolean
  isPrivate: boolean
}

export type ProgramType = {
  id: string
  title: string
  appId: string
  isSubscription: boolean
  soldAt: Date | null
  coverUrl: string | null
  abstract: string | null
  description: string | null
  salePrice: number | null
  listPrice: number
  coverVideoUrl: string | null
  publishedAt: Date | null
  inAdvance: boolean
  fundingId: any | null
  isSoldOut: boolean | null
  supportLocales: string[]
  contentSections: ProgramContentSectionType[]
  roles: ProgramRoleType[]
  plans: ProgramPlanType[]
  isDeleted: boolean
  isPrivate: boolean
  isIssuesOpen: boolean
  categories: {
    position: number
    category: {
      id: string
      name: string
    }
  }[]
}

export type ProgramContentSectionType = {
  id: string
  title: string
  programContents: ProgramContentType[]
}

export type ProgramContentType = {
  id: string
  title: string
  publishedAt: Date | null
  listPrice: number | null
  duration: number | null
  programContentType: {
    id: string
    type: string | null
  } | null
  programContentPlans: {
    id: any
    programPlan: {
      id: any
      title: string | null
    }
  }[]
}

export type ProgramPlanType = {
  id: string
  type: number
  title: string | null
  description: string | null
  gains: string | null
  salePrice: number
  listPrice: number
  discountDownPrice: number
  periodType: string | null
  soldAt: Date | null
}

export type ProgramRoleType = {
  id: string
  name: string
  member: {
    id: string | null
    name: string | null
    pictureUrl: string | null
  } | null
}
