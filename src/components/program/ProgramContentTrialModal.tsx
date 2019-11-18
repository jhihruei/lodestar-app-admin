import { Modal } from 'antd'
import BraftEditor from 'braft-editor'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useProgramContent } from '../../hooks/data'
import { useAuth } from '../auth/AuthContext'
import { BraftContent } from '../common/StyledBraftEditor'
import ProgramContentPlayer from './ProgramContentPlayer'

const StyledModal = styled(Modal)`
  margin: 0;
  padding: 0;
  width: 100% !important;
  max-width: 720px;

  .ant-modal-content {
    padding-bottom: 24px;
  }

  .ant-modal-header {
    padding: 24px;
    border-bottom: none;
    font-weight: bold;
  }

  .ant-modal-title {
    font-size: 18px;
  }

  .ant-modal-body {
    max-height: 70vh;
    overflow-y: auto;
    padding: 0 24px;
  }

  .ant-modal-body > div:not(:last-child) {
    margin-bottom: 40px;
  }
`

type ProgramContentTrialModalProps = {
  render?: React.FC<{
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
  }>
  programContentId: string
}
const ProgramContentTrialModal: React.FC<ProgramContentTrialModalProps> = ({
  render,
  programContentId,
  ...modalProps
}) => {
  const { currentMemberId } = useAuth()
  const { programContent } = useProgramContent(programContentId)
  const [visible, setVisible] = useState(false)

  return (
    <>
      {render && render({ setVisible })}

      <StyledModal
        title={programContent && programContent.title}
        footer={null}
        centered
        visible={visible}
        onCancel={() => {
          setVisible(false)
        }}
        {...modalProps}
      >
        {currentMemberId && programContent && programContent.programContentBody && (
          <>
            {programContent.programContentBody.type === 'video' && (
              <ProgramContentPlayer memberId={currentMemberId} programContentBody={programContent.programContentBody} />
            )}
            {!BraftEditor.createEditorState(programContent.programContentBody.description).isEmpty() && (
              <BraftContent>{programContent.programContentBody.description}</BraftContent>
            )}
          </>
        )}
      </StyledModal>
    </>
  )
}

export default ProgramContentTrialModal
