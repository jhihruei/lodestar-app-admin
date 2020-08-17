import { CategoryBriefProps, TagProps } from './general'

export type ProgramPlanType = 'subscribeFromNow' | 'subscribeAll' | 'unknown'
export type ProgramPlanPeriodType = 'D' | 'W' | 'M' | 'Y'
export type ProgramRoleName = 'owner' | 'instructor' | 'assistant'

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

export type ProgramProps = {
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
  isSoldOut: boolean | null
  supportLocales: string[]

  isDeleted: boolean
  isPrivate: boolean
  isIssuesOpen: boolean
}

export type ProgramUniversalProps = ProgramProps & {
  contentSections: ProgramContentSectionProps[]
  plans: ProgramPlanProps[]
  roles: ProgramRoleProps[]
  categories: ProgramCategoryProps[]
  tags: ProgramTagProps[]
}

export type ProgramContentSectionProps = {
  id: string
  title: string
  programContents: ProgramContentProps[]
}

export type ProgramContentProps = {
  id: string
  title: string
  publishedAt: Date | null
  listPrice: number | null
  duration: number | null
  programContentType: string | null
  isNotifyUpdate: boolean
  notifiedAt: Date | null
  programPlans?: {
    id: string
    title: string | null
  }[]
}

export type ProgramPlanProps = {
  id: string
  type: number
  title: string | null
  description: string | null
  gains: string | null
  salePrice: number
  listPrice: number
  discountDownPrice: number
  periodAmount: number | null
  periodType: string | null
  soldAt: Date | null
  currencyId: string
  autoRenewed: boolean
  publishedAt: Date | null
}

export type ProgramRoleProps = {
  id: string
  name: ProgramRoleName
  member: {
    id: string | null
    name: string | null
    pictureUrl: string | null
  } | null
}

export type ProgramCategoryProps = {
  position: number
  category: CategoryBriefProps
}

export type ProgramTagProps = {
  position: number
  tag: TagProps
}
