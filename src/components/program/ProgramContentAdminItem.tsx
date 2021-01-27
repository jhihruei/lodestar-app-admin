import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Tag, Typography } from 'antd'
import gql from 'graphql-tag'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import styled from 'styled-components'
import { dateFormatter, handleError } from '../../helpers'
import { commonMessages } from '../../helpers/translation'
import { useProgramContentBody } from '../../hooks/program'
import types from '../../types'
import { ProgramAdminProps, ProgramContentProps } from '../../types/program'
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

const messages = defineMessages({
  programContentPlans: { id: 'program.text.programContentPlans', defaultMessage: '方案：' },
})

const ProgramContentAdminItem: React.FC<{
  program: ProgramAdminProps
  programContent: ProgramContentProps
  showPlans?: boolean | null
  onRefetch?: () => void
}> = ({ showPlans, programContent, program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [updateProgramContent] = useMutation<types.PUBLISH_PROGRAM_CONTENT, types.PUBLISH_PROGRAM_CONTENTVariables>(
    PUBLISH_PROGRAM_CONTENT,
  )
  const { loadingProgramContentBody, programContentBody, refetchProgramContentBody } = useProgramContentBody(
    programContent.id,
  )

  return (
    <div className="d-flex align-items-center justify-content-between p-3" style={{ background: '#f7f8f8' }}>
      <div>
        <StyledTitle>{programContent.title}</StyledTitle>
        {showPlans && (
          <StyledDescriptions type="secondary">
            {formatMessage(messages.programContentPlans)}
            {programContent.programPlans
              ?.map(programPlan => programPlan.title)
              .join(formatMessage(commonMessages.ui.comma))}
          </StyledDescriptions>
        )}
      </div>

      <div className="d-flex align-items-center">
        {programContent.listPrice === 0 && (
          <StyledTag className="mr-3">{formatMessage(commonMessages.ui.trial)}</StyledTag>
        )}
        {program && program.isSubscription ? (
          programContent.publishedAt && (
            <StyledDescriptions type="secondary" className="mr-3">
              {dateFormatter(programContent.publishedAt)}
            </StyledDescriptions>
          )
        ) : programContent.publishedAt ? (
          <EyeOutlined
            className="mr-3"
            onClick={() =>
              updateProgramContent({
                variables: {
                  programContentId: programContent.id,
                  publishedAt: undefined,
                },
              })
                .then(() => onRefetch?.())
                .catch(handleError)
            }
          />
        ) : (
          <EyeInvisibleOutlined
            className="mr-3"
            onClick={() =>
              updateProgramContent({
                variables: {
                  programContentId: programContent.id,
                  publishedAt: new Date(),
                },
              })
                .then(() => onRefetch?.())
                .catch(handleError)
            }
          />
        )}
        {!loadingProgramContentBody && (
          <ProgramContentAdminModal
            program={program}
            programContent={programContent}
            programContentBody={programContentBody}
            onRefetch={() => {
              refetchProgramContentBody()
              onRefetch?.()
            }}
          />
        )}
      </div>
    </div>
  )
}

const PUBLISH_PROGRAM_CONTENT = gql`
  mutation PUBLISH_PROGRAM_CONTENT($programContentId: uuid!, $publishedAt: timestamptz) {
    update_program_content(where: { id: { _eq: $programContentId } }, _set: { published_at: $publishedAt }) {
      affected_rows
    }
  }
`

export default ProgramContentAdminItem
