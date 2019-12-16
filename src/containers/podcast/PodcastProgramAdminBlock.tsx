import { useMutation, useQuery } from '@apollo/react-hooks'
import { message, Skeleton } from 'antd'
import gql from 'graphql-tag'
import React, { createContext } from 'react'
import PodcastProgramAdminBlockComponent from '../../components/podcast/PodcastProgramAdminBlock'
import { handleError } from '../../helpers'
import types from '../../types'

type PodcastProgramAdminProps = {
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
  instructorIds: string[]
  publishedAt: Date | null
}
type UpdatePodcastProgramProps = {
  onSuccess?: () => void
  onError?: (error: Error) => void
  onFinally?: () => void
  data: {
    contentType?: string | null
    duration?: number
    description?: string
    title?: string
    categoryIds?: string[]
    coverUrl?: string
    abstract?: string
    listPrice?: number
    salePrice?: number | null
    soldAt?: Date | null
    instructorIds?: string[]
    publishedAt?: Date | null
  }
}

const defaultPodcastProgramAdmin: PodcastProgramAdminProps = {
  id: '',
  title: '',
  coverUrl: null,
  contentType: null,
  duration: 0,
  description: null,
  categories: [],
  abstract: null,
  listPrice: 0,
  salePrice: null,
  soldAt: null,
  creatorId: '',
  instructorIds: [],
  publishedAt: null,
}

export const PodcastProgramAdminContext = createContext<{
  podcastProgramAdmin: PodcastProgramAdminProps
  updatePodcastProgram: (props: UpdatePodcastProgramProps) => void
}>({
  podcastProgramAdmin: defaultPodcastProgramAdmin,
  updatePodcastProgram: () => {},
})

const PodcastProgramAdminBlock: React.FC<{
  podcastProgramId: string
}> = ({ podcastProgramId }) => {
  const { loading, error, data, refetch } = useQuery<
    types.GET_PODCAST_PROGRAM_ADMIN,
    types.GET_PODCAST_PROGRAM_ADMINVariables
  >(GET_PODCAST_PROGRAM_ADMIN, {
    variables: {
      podcastProgramId: podcastProgramId,
    },
  })

  const [updatePodcastProgramUpdatedAt] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_UPDATED_AT,
    types.UPDATE_PODCAST_PROGRAM_UPDATED_ATVariables
  >(UPDATE_PODCAST_PROGRAM_UPDATED_AT)
  const [updatePodcastProgramContent] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_CONTENT,
    types.UPDATE_PODCAST_PROGRAM_CONTENTVariables
  >(UPDATE_PODCAST_PROGRAM_CONTENT)
  const [updatePodcastProgramBody] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_BODY,
    types.UPDATE_PODCAST_PROGRAM_BODYVariables
  >(UPDATE_PODCAST_PROGRAM_BODY)
  const [updatePodcastProgramBasic] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_BASIC,
    types.UPDATE_PODCAST_PROGRAM_BASICVariables
  >(UPDATE_PODCAST_PROGRAM_BASIC)
  const [updatePodcastProgramIntro] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_INTRO,
    types.UPDATE_PODCAST_PROGRAM_INTROVariables
  >(UPDATE_PODCAST_PROGRAM_INTRO)
  const [updatePodcastProgramPlan] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_PLAN,
    types.UPDATE_PODCAST_PROGRAM_PLANVariables
  >(UPDATE_PODCAST_PROGRAM_PLAN)
  const [updatePodcastProgramRole] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_ROLE,
    types.UPDATE_PODCAST_PROGRAM_ROLEVariables
  >(UPDATE_PODCAST_PROGRAM_ROLE)
  const [publishPodcastProgram] = useMutation<types.PUBLISH_PODCAST_PROGRAM, types.PUBLISH_PODCAST_PROGRAMVariables>(
    PUBLISH_PODCAST_PROGRAM,
  )

  const updatePodcastProgram: (props: UpdatePodcastProgramProps) => void = ({
    onSuccess,
    onError,
    onFinally,
    data,
  }) => {
    updatePodcastProgramUpdatedAt({
      variables: {
        podcastProgramId,
        updatedAt: new Date(),
      },
    })

    if (typeof data.contentType !== 'undefined') {
      updatePodcastProgramContent({
        variables: {
          podcastProgramId,
          contentType: data.contentType,
        },
      })
        .then(() => {
          onSuccess ? onSuccess() : message.success('儲存成功')
          refetch()
        })
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }

    if (typeof data.description !== 'undefined' || typeof data.duration !== 'undefined') {
      updatePodcastProgramBody({
        variables: {
          podcastProgramId,
          description: data.description,
          duration: data.duration,
        },
      })
        .then(() => (onSuccess ? onSuccess() : message.success('儲存成功')))
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }

    if (typeof data.title !== 'undefined' || typeof data.categoryIds !== 'undefined') {
      updatePodcastProgramBasic({
        variables: {
          podcastProgramId,
          title: data.title,
          podcastCategories: data.categoryIds
            ? data.categoryIds.map((categoryId, position) => ({
                podcast_program_id: podcastProgramId,
                category_id: categoryId,
                position,
              }))
            : podcastProgramAdmin.categories.map((category, position) => ({
                podcast_program_id: podcastProgramId,
                category_id: category.id,
                position,
              })),
        },
      })
        .then(() => (onSuccess ? onSuccess() : message.success('儲存成功')))
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }

    if (typeof data.coverUrl !== 'undefined' || typeof data.abstract !== 'undefined') {
      updatePodcastProgramIntro({
        variables: {
          podcastProgramId,
          coverUrl: data.coverUrl,
          abstract: data.abstract,
        },
      })
        .then(() => {
          onSuccess ? onSuccess() : message.success('儲存成功')
          refetch()
        })
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }

    if (
      typeof data.listPrice !== 'undefined' ||
      typeof data.salePrice !== 'undefined' ||
      typeof data.soldAt !== 'undefined'
    ) {
      updatePodcastProgramPlan({
        variables: {
          podcastProgramId,
          listPrice: data.listPrice,
          salePrice: data.salePrice,
          soldAt: data.soldAt,
        },
      })
        .then(() => (onSuccess ? onSuccess() : message.success('儲存成功')))
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }

    if (typeof data.instructorIds !== 'undefined') {
      updatePodcastProgramRole({
        variables: {
          podcastProgramId,
          podcastProgramRoles: data.instructorIds.map(instructorId => ({
            podcast_program_id: podcastProgramId,
            member_id: instructorId,
            name: 'instructor',
          })),
        },
      })
        .then(() => {
          onSuccess ? onSuccess() : message.success('儲存成功')
          refetch()
        })
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }

    if (typeof data.publishedAt !== 'undefined') {
      publishPodcastProgram({
        variables: {
          podcastProgramId,
          publishedAt: data.publishedAt,
        },
      })
        .then(() => {
          onSuccess ? onSuccess() : message.success('儲存成功')
          refetch()
        })
        .catch(error => (onError ? onError(error) : handleError(error)))
        .finally(() => onFinally && onFinally())
    }
  }

  if (loading) {
    return <Skeleton active />
  }

  if (error || !data || !data.podcast_program_by_pk) {
    return <div>讀取錯誤 {podcastProgramId}</div>
  }

  const podcastProgramAdmin = {
    id: data.podcast_program_by_pk.id,
    title: data.podcast_program_by_pk.title,
    contentType: data.podcast_program_by_pk.content_type,
    duration: data.podcast_program_by_pk.duration,
    description: data.podcast_program_by_pk.podcast_program_bodies[0]
      ? data.podcast_program_by_pk.podcast_program_bodies[0].description
      : null,
    categories: data.podcast_program_by_pk.podcast_program_categories.map(podcastProgramCategory => ({
      id: podcastProgramCategory.category.id,
      name: podcastProgramCategory.category.name,
    })),
    coverUrl: data.podcast_program_by_pk.cover_url,
    abstract: data.podcast_program_by_pk.abstract,
    listPrice: data.podcast_program_by_pk.list_price,
    salePrice: data.podcast_program_by_pk.sale_price,
    soldAt: data.podcast_program_by_pk.sold_at ? new Date(data.podcast_program_by_pk.sold_at) : null,
    creatorId: data.podcast_program_by_pk.creator_id,
    instructorIds: data.podcast_program_by_pk.podcast_program_roles.map(
      podcastProgramRole => podcastProgramRole.member_id,
    ),
    publishedAt: data.podcast_program_by_pk.published_at ? new Date(data.podcast_program_by_pk.published_at) : null,
  }

  return (
    <PodcastProgramAdminContext.Provider value={{ podcastProgramAdmin, updatePodcastProgram }}>
      <PodcastProgramAdminBlockComponent />
    </PodcastProgramAdminContext.Provider>
  )
}

const GET_PODCAST_PROGRAM_ADMIN = gql`
  query GET_PODCAST_PROGRAM_ADMIN($podcastProgramId: uuid!) {
    podcast_program_by_pk(id: $podcastProgramId) {
      id
      title
      cover_url
      abstract
      list_price
      sale_price
      sold_at
      content_type
      duration
      published_at
      creator_id
      podcast_program_bodies {
        id
        description
      }
      podcast_program_categories(order_by: { category: { position: asc } }) {
        id
        category {
          id
          name
        }
      }
      podcast_program_roles {
        id
        member_id
        name
      }
    }
  }
`

const UPDATE_PODCAST_PROGRAM_UPDATED_AT = gql`
  mutation UPDATE_PODCAST_PROGRAM_UPDATED_AT($podcastProgramId: uuid!, $updatedAt: timestamptz!) {
    update_podcast_program(where: { id: { _eq: $podcastProgramId } }, _set: { updated_at: $updatedAt }) {
      affected_rows
    }
  }
`
const UPDATE_PODCAST_PROGRAM_CONTENT = gql`
  mutation UPDATE_PODCAST_PROGRAM_CONTENT($podcastProgramId: uuid!, $contentType: String) {
    update_podcast_program(where: { id: { _eq: $podcastProgramId } }, _set: { content_type: $contentType }) {
      affected_rows
    }
  }
`
const UPDATE_PODCAST_PROGRAM_BODY = gql`
  mutation UPDATE_PODCAST_PROGRAM_BODY($podcastProgramId: uuid!, $description: String, $duration: numeric) {
    update_podcast_program(where: { id: { _eq: $podcastProgramId } }, _set: { duration: $duration }) {
      affected_rows
    }
    update_podcast_program_body(
      where: { podcast_program_id: { _eq: $podcastProgramId } }
      _set: { description: $description }
    ) {
      affected_rows
    }
  }
`
const UPDATE_PODCAST_PROGRAM_BASIC = gql`
  mutation UPDATE_PODCAST_PROGRAM_BASIC(
    $podcastProgramId: uuid!
    $title: String
    $podcastCategories: [podcast_program_category_insert_input!]!
  ) {
    update_podcast_program(where: { id: { _eq: $podcastProgramId } }, _set: { title: $title }) {
      affected_rows
    }
    delete_podcast_program_category(where: { podcast_program_id: { _eq: $podcastProgramId } }) {
      affected_rows
    }
    insert_podcast_program_category(objects: $podcastCategories) {
      affected_rows
    }
  }
`
const UPDATE_PODCAST_PROGRAM_INTRO = gql`
  mutation UPDATE_PODCAST_PROGRAM_INTRO($podcastProgramId: uuid!, $coverUrl: String, $abstract: String) {
    update_podcast_program(
      where: { id: { _eq: $podcastProgramId } }
      _set: { cover_url: $coverUrl, abstract: $abstract }
    ) {
      affected_rows
    }
  }
`
const UPDATE_PODCAST_PROGRAM_PLAN = gql`
  mutation UPDATE_PODCAST_PROGRAM_PLAN(
    $podcastProgramId: uuid!
    $listPrice: numeric
    $salePrice: numeric
    $soldAt: timestamptz
  ) {
    update_podcast_program(
      where: { id: { _eq: $podcastProgramId } }
      _set: { list_price: $listPrice, sale_price: $salePrice, sold_at: $soldAt }
    ) {
      affected_rows
    }
  }
`
const UPDATE_PODCAST_PROGRAM_ROLE = gql`
  mutation UPDATE_PODCAST_PROGRAM_ROLE(
    $podcastProgramId: uuid!
    $podcastProgramRoles: [podcast_program_role_insert_input!]!
  ) {
    delete_podcast_program_role(where: { podcast_program_id: { _eq: $podcastProgramId } }) {
      affected_rows
    }
    insert_podcast_program_role(objects: $podcastProgramRoles) {
      affected_rows
    }
  }
`
const PUBLISH_PODCAST_PROGRAM = gql`
  mutation PUBLISH_PODCAST_PROGRAM($podcastProgramId: uuid!, $publishedAt: timestamptz) {
    update_podcast_program(where: { id: { _eq: $podcastProgramId } }, _set: { published_at: $publishedAt }) {
      affected_rows
    }
  }
`

export default PodcastProgramAdminBlock
