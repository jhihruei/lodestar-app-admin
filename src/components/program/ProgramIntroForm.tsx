import { QuestionCircleFilled } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form, Input, message, Skeleton, Tooltip } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import BraftEditor from 'braft-editor'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import AppContext from '../../contexts/AppContext'
import { handleError } from '../../helpers'
import { commonMessages, programMessages } from '../../helpers/translation'
import types from '../../types'
import { ProgramAdminProps } from '../../types/program'
import { StyledTips } from '../admin'
import AdminBraftEditor from '../admin/AdminBraftEditor'
import ImageInput from '../admin/ImageInput'
import VideoInput from '../admin/VideoInput'

const ProgramIntroForm: React.FC<{
  program: ProgramAdminProps | null
  onRefetch?: () => void
}> = ({ program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm()
  const { id: appId } = useContext(AppContext)
  const [updateProgramCover] = useMutation<types.UPDATE_PROGRAM_COVER, types.UPDATE_PROGRAM_COVERVariables>(
    UPDATE_PROGRAM_COVER,
  )
  const [updateProgramIntro] = useMutation<types.UPDATE_PROGRAM_INTRO, types.UPDATE_PROGRAM_INTROVariables>(
    UPDATE_PROGRAM_INTRO,
  )
  const [loading, setLoading] = useState(false)

  if (!program) {
    return <Skeleton active />
  }

  const handleUpdateCover = () => {
    setLoading(true)
    const uploadTime = Date.now()
    updateProgramCover({
      variables: {
        programId: program.id,
        coverUrl: `https://${process.env.REACT_APP_S3_BUCKET}/program_covers/${appId}/${program.id}?t=${uploadTime}`,
      },
    })
      .then(() => {
        onRefetch && onRefetch()
        message.success(formatMessage(commonMessages.event.successfullySaved))
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  const handleSubmit = (values: any) => {
    setLoading(true)
    updateProgramIntro({
      variables: {
        programId: program.id,
        abstract: values.abstract,
        description: values.description.toRAW(),
        coverVideoUrl: values.video
          ? `https://${process.env.REACT_APP_S3_BUCKET}/program_covers/${appId}/${program.id}_video`
          : values.coverVideoUrl,
      },
    })
      .then(() => {
        onRefetch && onRefetch()
        message.success(formatMessage(commonMessages.event.successfullySaved))
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <Form
      form={form}
      colon={false}
      labelAlign="left"
      labelCol={{ md: { span: 4 } }}
      wrapperCol={{ md: { span: 10 } }}
      initialValues={{
        coverVideoUrl: program.coverVideoUrl,
        abstract: program.abstract,
        description: BraftEditor.createEditorState(program.description),
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        label={
          <span>
            {formatMessage(programMessages.label.programCover)}
            <Tooltip placement="top" title={<StyledTips>{formatMessage(programMessages.text.imageTips)}</StyledTips>}>
              <QuestionCircleFilled className="ml-2" />
            </Tooltip>
          </span>
        }
      >
        <ImageInput
          path={`program_covers/${appId}/${program.id}`}
          image={{
            width: '160px',
            ratio: 9 / 16,
            shape: 'rounded',
          }}
          value={program.coverUrl}
          onChange={() => handleUpdateCover()}
        />
      </Form.Item>
      <Form.Item label={formatMessage(programMessages.label.introductionVideo)} name="coverVideoUrl">
        <VideoInput appId={appId} programId={program.id} />
      </Form.Item>
      <Form.Item label={formatMessage(programMessages.label.programAbstract)}>
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item label={formatMessage(programMessages.label.programDescription)} wrapperCol={{ md: { span: 20 } }}>
        <AdminBraftEditor />
      </Form.Item>

      <Form.Item wrapperCol={{ md: { offset: 4 } }}>
        <Button className="mr-2" onClick={() => form.resetFields()}>
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const UPDATE_PROGRAM_COVER = gql`
  mutation UPDATE_PROGRAM_COVER($programId: uuid!, $coverUrl: String) {
    update_program(where: { id: { _eq: $programId } }, _set: { cover_url: $coverUrl }) {
      affected_rows
    }
  }
`
const UPDATE_PROGRAM_INTRO = gql`
  mutation UPDATE_PROGRAM_INTRO($programId: uuid!, $abstract: String, $description: String, $coverVideoUrl: String) {
    update_program(
      where: { id: { _eq: $programId } }
      _set: { abstract: $abstract, description: $description, cover_video_url: $coverVideoUrl }
    ) {
      affected_rows
    }
  }
`

export default ProgramIntroForm
