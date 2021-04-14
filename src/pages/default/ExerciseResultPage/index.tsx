import Icon from '@ant-design/icons'
import { useQuery } from '@apollo/react-hooks'
import { Skeleton, Tabs } from 'antd'
import gql from 'graphql-tag'
import { sum } from 'ramda'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { AdminPageTitle } from '../../../components/admin'
import AdminLayout from '../../../components/layout/AdminLayout'
import { useAuth } from '../../../contexts/AuthContext'
import hasura from '../../../hasura'
import { commonMessages, errorMessages } from '../../../helpers/translation'
import { ReactComponent as BookIcon } from '../../../images/icon/book.svg'
import { QuestionProps } from '../../../types/program'
import ExerciseDisplayTable, { ExerciseDisplayProps } from './ExerciseDisplayTable'
import ExerciseSummaryBlock from './ExerciseSummaryBlock'
import ProgramExerciseSelector, { FilterProps } from './ProgramExerciseSelector'
import QuestionChartsBlock from './QuestionChartsBlock'

const messages = defineMessages({
  exerciseStatistics: { id: 'program.label.exerciseStatistics', defaultMessage: '答題狀況' },
  individualExercise: { id: 'program.label.individualExercise', defaultMessage: '個別表現' },
  noExercise: { id: 'program.label.noExercise', defaultMessage: '目前尚無任何測驗成果' },
})

const ExerciseResultPage: React.VFC = () => {
  const { formatMessage } = useIntl()
  const { currentUserRole, currentMemberId } = useAuth()

  const [filter, setFilter] = useState<FilterProps>({})

  return (
    <AdminLayout>
      <AdminPageTitle className="mb-4">
        <Icon component={() => <BookIcon />} className="mr-3" />
        <span>{formatMessage(commonMessages.menu.exerciseResult)}</span>
      </AdminPageTitle>

      <div className="mb-4">
        <ProgramExerciseSelector
          creatorId={currentUserRole === 'content-creator' ? currentMemberId || '' : undefined}
          value={filter}
          onChange={value => setFilter(value)}
        />
      </div>

      {filter.contentId && <ExerciseResultBlock programContentId={filter.contentId} />}
    </AdminLayout>
  )
}

const ExerciseResultBlock: React.VFC<{
  programContentId: string
}> = ({ programContentId }) => {
  const { formatMessage } = useIntl()
  const { loadingExercises, errorExercises, programContent, exercises } = useExerciseCollection(programContentId)
  const [tab, setTab] = useState('')

  if (loadingExercises) {
    return <Skeleton active />
  }

  if (errorExercises || !programContent) {
    return <>{formatMessage(errorMessages.data.fetch)}</>
  }

  if (exercises.length === 0) {
    return <>{formatMessage(messages.noExercise)}</>
  }

  const totalPoints = sum(programContent.questions.map(question => question.points))

  return (
    <>
      <ExerciseSummaryBlock
        totalPoints={totalPoints}
        passingScore={programContent.passingScore}
        enrollments={programContent.enrollments}
        exercises={exercises}
      />

      <Tabs activeKey={tab || 'statistics'} onChange={key => setTab(key)}>
        <Tabs.TabPane key="statistics" tab={formatMessage(messages.exerciseStatistics)}>
          <QuestionChartsBlock questions={programContent.questions} exercises={exercises} />
        </Tabs.TabPane>
        <Tabs.TabPane key="individual" tab={`${formatMessage(messages.individualExercise)} (${exercises.length})`}>
          <ExerciseDisplayTable totalPoints={totalPoints} exercises={exercises} />
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

const useExerciseCollection = (programContentId: string) => {
  const { loading, error, data, refetch } = useQuery<
    hasura.GET_EXERCISE_COLLECTION,
    hasura.GET_EXERCISE_COLLECTIONVariables
  >(
    gql`
      query GET_EXERCISE_COLLECTION($programContentId: uuid!) {
        program_content_by_pk(id: $programContentId) {
          id
          metadata
          program_content_body {
            id
            data
          }
          enrollments_aggregate {
            aggregate {
              count
            }
          }
        }
        member: exercise(where: { program_content_id: { _eq: $programContentId } }, distinct_on: [member_id]) {
          member {
            id
            name
            username
            email
          }
        }
        exercise(where: { program_content_id: { _eq: $programContentId } }, order_by: [{ created_at: desc }]) {
          id
          member_id
          answer
          created_at
        }
      }
    `,
    { variables: { programContentId } },
  )

  const programContent: {
    id: string
    passingScore: number
    questions: QuestionProps[]
    enrollments: number
  } | null = data?.program_content_by_pk
    ? {
        id: data.program_content_by_pk.id,
        passingScore: data.program_content_by_pk.metadata?.passingScore || 0,
        questions: data.program_content_by_pk.program_content_body.data?.questions || [],
        enrollments: data.program_content_by_pk.enrollments_aggregate.aggregate?.count || 0,
      }
    : null

  const membersMap = Object.fromEntries(
    data?.member.map(
      ({ member }) =>
        [
          member.id,
          {
            name: member.name || member.username,
            email: member.email,
          },
        ] as const,
    ) || [],
  )

  const exercises: ExerciseDisplayProps[] =
    data?.exercise.map(v => {
      const score = sum(v.answer.map((answer: any) => answer.gainedPoints))
      return {
        id: v.id,
        memberId: v.member_id,
        member: {
          id: v.member_id,
          name: membersMap[v.member_id]?.name || '',
          email: membersMap[v.member_id]?.email || '',
        },
        answer: v.answer || [],
        createdAt: new Date(v.created_at),
        score,
        status: score < (programContent?.passingScore || 0) ? 'failed' : 'accepted',
      }
    }) || []

  return {
    loadingExercises: loading,
    errorExercises: error,
    programContent,
    exercises,
    refetchExercises: refetch,
  }
}

export default ExerciseResultPage
