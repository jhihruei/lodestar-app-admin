import { Input } from 'antd'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import SingleUploader from '../common/SingleUploader'
import { programMessages } from '../../helpers/translation'
import { UploadFile } from 'antd/lib/upload/interface'

const InputGroup = Input.Group

const StyleInputGroup = styled(InputGroup)`
  display: flex !important;
  .ant-input {
    width: calc(100% - 120px);
  }
  .ant-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const VideoInput: React.FC<{
  appId: string
  programId: string
  value?: string | null
  onChange?: (value: string | null) => void
}> = ({ value, onChange, appId, programId }) => {
  const { formatMessage } = useIntl()
  const [file, setFile] = useState<UploadFile | undefined>(undefined)

  return (
    <>
      <StyleInputGroup compact>
        <Input
          value={value || ''}
          placeholder={formatMessage(programMessages.text.videoPlaceholder)}
          onChange={e => {
            onChange && onChange(e.target.value)
          }}
        />
        <SingleUploader
          value={file}
          onChange={(value: any) => {
            setFile(value as UploadFile)
          }}
          accept="video/*"
          uploadText={formatMessage(programMessages.text.uploadVideo)}
          path={`program_covers/${appId}/${programId}_video`}
          showUploadList={false}
          isPublic
          onSuccess={() => {
            onChange &&
              onChange(`https://${process.env.REACT_APP_S3_BUCKET}/program_covers/${appId}/${programId}_video`)
          }}
        />
      </StyleInputGroup>
    </>
  )
}
export default VideoInput
