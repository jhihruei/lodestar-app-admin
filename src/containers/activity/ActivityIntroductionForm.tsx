import { QuestionCircleFilled } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form, message, Skeleton, Tooltip } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import BraftEditor from 'braft-editor'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { StyledTips } from '../../components/admin'
import AdminBraftEditor from '../../components/admin/AdminBraftEditor'
import { StyledSingleUploader } from '../../components/program/ProgramIntroAdminCard'
import AppContext from '../../contexts/AppContext'
import { handleError } from '../../helpers'
import { activityMessages, commonMessages } from '../../helpers/translation'
import types from '../../types'
import { ActivityAdminProps } from '../../types/activity'

const StyledCover = styled.div<{ src: string }>`
  width: 160px;
  height: 90px;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
`

const ActivityIntroductionForm: React.FC<{
  activityAdmin: ActivityAdminProps | null
  refetch?: () => void
}> = ({ activityAdmin, refetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm()
  const app = useContext(AppContext)
  const [updateActivityCover] = useMutation<types.UPDATE_ACTIVITY_COVER, types.UPDATE_ACTIVITY_COVERVariables>(
    UPDATE_ACTIVITY_COVER,
  )
  const [updateActivityIntroduction] = useMutation<
    types.UPDATE_ACTIVITY_INTRODUCTION,
    types.UPDATE_ACTIVITY_INTRODUCTIONVariables
  >(UPDATE_ACTIVITY_INTRODUCTION)
  const [loading, setLoading] = useState(false)

  if (!activityAdmin) {
    return <Skeleton active />
  }

  const handleUpdateCover = () => {
    setLoading(true)
    const uploadTime = Date.now()

    updateActivityCover({
      variables: {
        activityId: activityAdmin.id,
        coverUrl: `https://${process.env.REACT_APP_S3_BUCKET}/activity_covers/${app.id}/${activityAdmin.id}?t=${uploadTime}`,
      },
    })
      .then(() => {
        refetch && refetch()
        message.success(formatMessage(commonMessages.event.successfullySaved))
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values: any) => {
        setLoading(true)

        updateActivityIntroduction({
          variables: {
            activityId: activityAdmin.id,
            description: values.description.toRAW(),
          },
        })
          .then(() => {
            refetch && refetch()
            message.success(formatMessage(commonMessages.event.successfullySaved))
          })
          .catch(handleError)
          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <Form
      form={form}
      hideRequiredMark
      colon={false}
      labelAlign="left"
      labelCol={{ md: { span: 4 } }}
      wrapperCol={{ md: { span: 8 } }}
      initialValues={{
        coverImg: activityAdmin && {
          uid: '-1',
          name: activityAdmin.title,
          status: 'done',
          url: activityAdmin.coverUrl,
        },
        description: BraftEditor.createEditorState(activityAdmin.description),
      }}
    >
      <Form.Item
        label={
          <span>
            {formatMessage(commonMessages.term.cover)}
            <Tooltip placement="top" title={<StyledTips>{formatMessage(activityMessages.text.imageTips)}</StyledTips>}>
              <QuestionCircleFilled className="ml-2" />
            </Tooltip>
          </span>
        }
        name="coverImg"
      >
        <div className="d-flex align-items-center justify-content-between">
          {activityAdmin.coverUrl && <StyledCover className="flex-shrink-0 mr-3" src={activityAdmin.coverUrl} />}
          <StyledSingleUploader
            accept="image/*"
            listType="picture-card"
            showUploadList={false}
            path={`activity_covers/${app.id}/${activityAdmin.id}`}
            isPublic
            onSuccess={() => handleUpdateCover()}
          />
        </div>
      </Form.Item>
      <Form.Item
        label={formatMessage(commonMessages.term.description)}
        wrapperCol={{ md: { span: 20 } }}
        name="description"
      >
        <AdminBraftEditor />
      </Form.Item>
      <Form.Item wrapperCol={{ md: { offset: 4 } }}>
        <Button onClick={() => form.resetFields()} className="mr-2">
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" loading={loading} onClick={() => handleSubmit()}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const UPDATE_ACTIVITY_COVER = gql`
  mutation UPDATE_ACTIVITY_COVER($activityId: uuid!, $coverUrl: String) {
    update_activity(where: { id: { _eq: $activityId } }, _set: { cover_url: $coverUrl }) {
      affected_rows
    }
  }
`
const UPDATE_ACTIVITY_INTRODUCTION = gql`
  mutation UPDATE_ACTIVITY_INTRODUCTION($activityId: uuid!, $description: String) {
    update_activity(where: { id: { _eq: $activityId } }, _set: { description: $description }) {
      affected_rows
    }
  }
`

export default ActivityIntroductionForm
