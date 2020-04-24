export type ProductType =
  | 'Program'
  | 'ProgramPlan'
  | 'ProgramContent'
  | 'ProgramPackagePlan'
  | 'ProjectPlan'
  | 'Card'
  | 'ActivityTicket'
  | 'Merchandise'
  | 'PodcastProgram'
  | 'PodcastPlan'
  | 'AppointmentPlan'

export type Category = {
  id: string
  name: string
  position: number
}

export type ClassType = 'program' | 'podcastProgram' | 'activity' | 'post' | 'merchandise' | 'programPackage'

export type Member = {
  id: string
  name: string
  email: string
  username: string
  pictureUrl: string | null
  description: string | null
  abstract: string | null
  title: string | null
  memberTags?: {
    id: string
    tagName: string
  }[]
  role: string
}

export type MemberPublic = {
  id: string
  name: string
  username: string
  pictureUrl: string
  description: string
  role: string
}

export type Issue = {
  id: string
  title: string
  description: string
  solvedAt: Date | null
  createdAt: Date
  memberId: string
  threadId: string
  reactedMemberIds: Array<string>
  issueRepliesCount: number
}
