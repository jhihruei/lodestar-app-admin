import { useMutation } from '@apollo/react-hooks'
import { Button, Form, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import BraftEditor from 'braft-editor'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import styled from 'styled-components'
import types from '../../types'
import MemberAvatar from '../common/MemberAvatar'

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
          rules: [{ required: true, message: '請輸入回覆內容' }],
        })(
          <StyledEditor
            style={{ border: '1px solid #cdcdcd', borderRadius: '4px' }}
            language="zh-hant"
            placeholder="回覆..."
            controls={['bold', 'italic', 'underline', 'separator', 'media']}
          />,
        )}
      </Form.Item>
      <Form.Item style={{ textAlign: 'right' }}>
        <Button type="primary" htmlType="submit" loading={replying}>
          回覆
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
