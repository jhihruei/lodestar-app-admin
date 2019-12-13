import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'
import types from '../../types'

const ProjectPlanEnrollmentCount: React.FC<{ projectPlanId: string }> = ({ projectPlanId }) => {
  const { loading, error, data } = useQuery<
    types.GET_PROJECT_PLAN_ENROLLMENT_COUNT,
    types.GET_PROJECT_PLAN_ENROLLMENT_COUNTVariables
  >(GET_PROJECT_PLAN_ENROLLMENT_COUNT, { variables: { projectPlanId } })

  if (loading || error || !data) {
    return <span>-- 人</span>
  }

  if (!data.project_plan_enrollment_aggregate.aggregate) {
    return <span>0 人</span>
  }

  return <span>{data.project_plan_enrollment_aggregate.aggregate.count || 0} 人</span>
}

const GET_PROJECT_PLAN_ENROLLMENT_COUNT = gql`
  query GET_PROJECT_PLAN_ENROLLMENT_COUNT($projectPlanId: uuid!) {
    project_plan_enrollment_aggregate(where: { project_plan_id: { _eq: $projectPlanId } }) {
      aggregate {
        count
      }
    }
  }
`

export default ProjectPlanEnrollmentCount
