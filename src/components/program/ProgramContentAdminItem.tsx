import { Icon, message, Tag, Typography } from 'antd'
import gql from 'graphql-tag'
import React from 'react'
import { useMutation } from 'react-apollo-hooks'
import styled from 'styled-components'
import { InferType } from 'yup'
import { dateFormatter } from '../../helpers'
import { programContentSchema, programSchema } from '../../schemas/program'
import ProgramContentAdminModal from './ProgramContentAdminModal'

const StyledTitle = styled.div`
  font-size: 14px;
`
const StyledDescriptions = styled(Typography.Text)`
  font-size: 12px;
`
const StyledTag = styled(Tag)`
  && {
    border: none;
  }
`

const ProgramContentAdminItem: React.FC<{
  showPlans?: boolean
  program: InferType<typeof programSchema>
  programContent: InferType<typeof programContentSchema>
  onRefetch?: () => void
}> = ({ showPlans, programContent, program, onRefetch }) => {
  const updateProgramContent = useMutation(UPDATE_PROGRAM_CONTENT)

  return (
    <div className="d-flex align-items-center justify-content-between p-3" style={{ background: '#f7f8f8' }}>
      <div>
        <StyledTitle>{programContent.title}</StyledTitle>
        {showPlans && (
          <StyledDescriptions type="secondary">
            方案：
            {programContent.programContentPlans
              .map(programContentPlan => programContentPlan.programPlan.title)
              .join('、')}
          </StyledDescriptions>
        )}
      </div>

      <div className="d-flex align-items-center">
        {programContent.price === 0 && <StyledTag className="mr-3">試看</StyledTag>}
        {program.isSubscription ? (
          programContent.publishedAt && (
            <StyledDescriptions type="secondary" className="mr-3">
              {dateFormatter(programContent.publishedAt)}
            </StyledDescriptions>
          )
        ) : (
          <Icon
            type={programContent.publishedAt ? 'eye' : 'eye-invisible'}
            className="mr-3"
            onClick={() =>
              updateProgramContent({
                variables: {
                  programContentId: programContent.id,
                  publishedAt: programContent.publishedAt ? undefined : new Date(),
                },
              })
                .then(() => onRefetch && onRefetch())
                .catch(err => message.error(err.message))
            }
          />
        )}
        <ProgramContentAdminModal
          programId={program.id}
          programContentId={programContent.id}
          onSubmit={() => {
            onRefetch && onRefetch()
          }}
        />
      </div>
    </div>
  )
}

const UPDATE_PROGRAM_CONTENT = gql`
  mutation UPDATE_PROGRAM_CONTENT($programContentId: uuid!, $publishedAt: timestamptz) {
    update_program_content(where: { id: { _eq: $programContentId } }, _set: { published_at: $publishedAt }) {
      affected_rows
    }
  }
`

export default ProgramContentAdminItem
