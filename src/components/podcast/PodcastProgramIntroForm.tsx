import { QuestionCircleFilled } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form, Input, message, Skeleton, Tooltip } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { AppContext } from '../../contexts/AppContext'
import { handleError } from '../../helpers'
import { commonMessages, podcastMessages } from '../../helpers/translation'
import types from '../../types'
import { PodcastProgramAdminProps } from '../../types/podcast'
import { StyledTips } from '../admin/index'
import { CustomRatioImage } from '../common/Image'
import { StyledSingleUploader } from '../program/ProgramIntroAdminCard'

const StyledCoverBlock = styled.div`
  overflow: hidden;
  width: 120px;
  max-width: 120px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
`

const PodcastProgramIntroForm: React.FC<{
  podcastProgramAdmin: PodcastProgramAdminProps | null
  refetch?: () => Promise<any>
}> = ({ podcastProgramAdmin, refetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm()
  const { id: appId } = useContext(AppContext)
  const [loading, setLoading] = useState(false)

  const [updatePodcastProgramIntro] = useMutation<
    types.UPDATE_PODCAST_PROGRAM_INTRO,
    types.UPDATE_PODCAST_PROGRAM_INTROVariables
  >(UPDATE_PODCAST_PROGRAM_INTRO)

  if (!podcastProgramAdmin) {
    return <Skeleton active />
  }

  const handleUpload = () => {
    updatePodcastProgramIntro({
      variables: {
        updatedAt: new Date(),
        podcastProgramId: podcastProgramAdmin.id,
        coverUrl: `https://${process.env.REACT_APP_S3_BUCKET}/podcast_program_covers/${appId}/${
          podcastProgramAdmin.id
        }?t=${Date.now()}`,
      },
    })
      .then(() => {
        refetch && refetch().then(() => message.success(formatMessage(commonMessages.event.successfullyUpload)))
      })
      .catch(handleError)
  }

  const handleSubmit = (values: any) => {
    setLoading(true)
    updatePodcastProgramIntro({
      variables: {
        updatedAt: new Date(),
        podcastProgramId: podcastProgramAdmin.id,
        abstract: values.abstract,
      },
    })
      .then(() => {
        refetch && refetch().then(() => message.success(formatMessage(commonMessages.event.successfullySaved)))
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <Form
      form={form}
      colon={false}
      hideRequiredMark
      labelAlign="left"
      labelCol={{ md: { span: 4 } }}
      wrapperCol={{ md: { span: 8 } }}
      onFinish={handleSubmit}
      initialValues={{
        abstract: podcastProgramAdmin.abstract,
      }}
    >
      <Form.Item
        label={
          <span>
            <span className="mr-2">{formatMessage(podcastMessages.term.podcastCover)}</span>
            <Tooltip
              placement="top"
              title={<StyledTips>{formatMessage(podcastMessages.text.podcastCoverTips)}</StyledTips>}
            >
              <QuestionCircleFilled />
            </Tooltip>
          </span>
        }
      >
        <div className="d-flex align-items-center">
          {!!podcastProgramAdmin.coverUrl && (
            <StyledCoverBlock className="mr-4">
              <CustomRatioImage src={podcastProgramAdmin.coverUrl} width="100%" ratio={1} />
            </StyledCoverBlock>
          )}

          <StyledSingleUploader
            accept="image/*"
            listType="picture-card"
            showUploadList={false}
            path={`podcast_program_covers/${appId}/${podcastProgramAdmin.id}`}
            isPublic
            onSuccess={() => handleUpload()}
          />
        </div>
      </Form.Item>
      <Form.Item label={formatMessage(podcastMessages.term.podcastAbstract)} name="abstract">
        <Input.TextArea rows={4} maxLength={100} placeholder={formatMessage(podcastMessages.text.abstractLimit)} />
      </Form.Item>

      <Form.Item wrapperCol={{ md: { offset: 4 } }}>
        <Button onClick={() => form.resetFields()} className="mr-2">
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const UPDATE_PODCAST_PROGRAM_INTRO = gql`
  mutation UPDATE_PODCAST_PROGRAM_INTRO(
    $podcastProgramId: uuid!
    $coverUrl: String
    $abstract: String
    $updatedAt: timestamptz!
  ) {
    update_podcast_program(
      where: { id: { _eq: $podcastProgramId } }
      _set: { cover_url: $coverUrl, abstract: $abstract, updated_at: $updatedAt }
    ) {
      affected_rows
    }
  }
`

export default PodcastProgramIntroForm
