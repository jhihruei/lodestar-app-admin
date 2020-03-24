import { useMutation } from '@apollo/react-hooks'
import { Button, Form, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import BraftEditor from 'braft-editor'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import MemberAvatar from '../../containers/common/MemberAvatar'
import AppContext from '../../contexts/AppContext'
import { commonMessages, errorMessages } from '../../helpers/translation'
import types from '../../types'
import { createUploadFn } from '../admin/AdminBraftEditor'

export const StyledEditor = styled(BraftEditor)`
  .bf-content {
    height: initial;
  }
`
type IssueReplyCreationBlockProps = FormComponentProps & {
  memberId: string
  issueId: string
  onRefetch?: () => void
}
const IssueReplyCreationBlock: React.FC<IssueReplyCreationBlockProps> = ({ memberId, issueId, form, onRefetch }) => {
  const { id: appId } = useContext(AppContext)
  const { formatMessage } = useIntl()
  const [insertIssueReply] = useMutation<types.INSERT_ISSUE_REPLY, types.INSERT_ISSUE_REPLYVariables>(
    INSERT_ISSUE_REPLY,
  )

  const [replying, setReplying] = useState()

  const handleSubmit = () => {
    form.validateFields((error, values) => {
      if (!error) {
        setReplying(true)
        insertIssueReply({
          variables: {
            memberId,
            issueId,
            content: values.content.toRAW(),
          },
        })
          .then(() => {
            form.resetFields()
            onRefetch && onRefetch()
          })
          .catch(err => message.error(err.message))
          .finally(() => setReplying(false))
      }
    })
  }
  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <MemberAvatar memberId={memberId} withName />
      </div>
      <Form.Item className="mb-1">
        {form.getFieldDecorator('content', {
          initialValue: BraftEditor.createEditorState(null),
          rules: [{ required: true, message: formatMessage(errorMessages.form.issueContent) }],
        })(
          <StyledEditor
            style={{ border: '1px solid #cdcdcd', borderRadius: '4px' }}
            language="zh-hant"
            controls={['bold', 'italic', 'underline', 'separator', 'media']}
            media={{ uploadFn: createUploadFn(appId) }}
          />,
        )}
      </Form.Item>
      <Form.Item style={{ textAlign: 'right' }}>
        <Button type="primary" htmlType="submit" loading={replying}>
          {formatMessage(commonMessages.ui.reply)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const INSERT_ISSUE_REPLY = gql`
  mutation INSERT_ISSUE_REPLY($memberId: String!, $issueId: uuid!, $content: String) {
    insert_issue_reply(objects: { member_id: $memberId, issue_id: $issueId, content: $content }) {
      affected_rows
    }
  }
`

export default Form.create<IssueReplyCreationBlockProps>()(IssueReplyCreationBlock)
