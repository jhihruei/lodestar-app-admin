import { useMutation } from '@apollo/react-hooks'
import { Button, message, Modal, Typography } from 'antd'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import styled from 'styled-components'
import { commonMessages } from '../../helpers/translation'
import { ProgramType } from '../../types/program'
import AdminCard from '../admin/AdminCard'

const messages = defineMessages({
  deleteProgram: { id: 'program.label.deleteProgram', defaultMessage: '刪除課程' },
  deleteProgramWarning: {
    id: 'program.text.deleteProgramWarning',
    defaultMessage: '請仔細確認是否真的要刪除課程，因為一旦刪除就無法恢復。',
  },
  deleteProgramDanger: {
    id: 'program.text.deleteProgramDanger',
    defaultMessage: '*已購買者在刪除後仍可觀看。',
  },
})

const StyledDeletionModal = styled(Modal)`
  && {
    .ant-modal-body {
      padding: 32px 32px 0;
    }
    .ant-modal-footer {
      border-top: 0;
      padding: 20px;
    }
  }
`
const StyledModalTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: var(--gray-darker);
  letter-spacing: 0.8px;
`
const StyledModalParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-darker);
  letter-spacing: 0.2px;
  line-height: 1.5;
`
const StyledText = styled.span`
  color: ${props => props.theme['@primary-color']};
`

type ProgramDeletionAdminCardProps = {
  program: ProgramType | null
  onRefetch?: () => void
}
const ProgramDeletionAdminCard: React.FC<ProgramDeletionAdminCardProps> = ({ program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [isVisible, setVisible] = useState(false)

  const [archiveProgram] = useMutation(UPDATE_PROGRAM_IS_DELETED)
  const handleArchive = (programId: string) => {
    archiveProgram({
      variables: {
        programId,
      },
    }).then(() => {
      onRefetch && onRefetch()
      message.success(formatMessage(commonMessages.event.successfullyDeleted))
    })
  }

  return (
    <AdminCard loading={!program}>
      <Typography.Title level={4} className="mb-4">
        {formatMessage(messages.deleteProgram)}
      </Typography.Title>
      <StyledDeletionModal
        visible={isVisible}
        okText={formatMessage(commonMessages.ui.delete)}
        onOk={() => {
          handleArchive(program?.id || '')
          setVisible(false)
        }}
        cancelText={formatMessage(commonMessages.ui.cancel)}
        onCancel={() => setVisible(false)}
      >
        <StyledModalTitle className="mb-4">刪除課程</StyledModalTitle>
        <StyledModalParagraph>課程一經刪除即不可恢復，確定要刪除嗎？</StyledModalParagraph>
      </StyledDeletionModal>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <Typography.Text>{formatMessage(messages.deleteProgramWarning)}</Typography.Text>
          <StyledText>{formatMessage(messages.deleteProgramDanger)}</StyledText>
        </div>
        {program?.isDeleted ? (
          <Button disabled>{formatMessage(commonMessages.ui.deleted)}</Button>
        ) : (
          <Button type="primary" onClick={() => setVisible(true)}>
            {formatMessage(commonMessages.ui.deleteProgram)}
          </Button>
        )}
      </div>
    </AdminCard>
  )
}

const UPDATE_PROGRAM_IS_DELETED = gql`
  mutation MyMutation($programId: uuid) {
    update_program(where: { id: { _eq: $programId } }, _set: { is_deleted: true }) {
      affected_rows
    }
  }
`

export default ProgramDeletionAdminCard
