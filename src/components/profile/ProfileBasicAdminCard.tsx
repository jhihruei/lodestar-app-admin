import { Button, Form, Input, message, Typography } from 'antd'
import { CardProps } from 'antd/lib/card'
import { FormComponentProps } from 'antd/lib/form'
import React from 'react'
import styled from 'styled-components'
import { useMember, useUpdateMember } from '../../hooks/member'
import AdminCard from '../admin/AdminCard'
import { AvatarImage } from '../common/Image'
import SingleUploader from '../common/SingleUploader'
import { StyledForm } from '../layout'

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-children {
    display: flex;
    align-items: center;
  }

  .ant-upload.ant-upload-select-picture-card {
    border: none;
    background: none;
  }
`

type ProfileBasicAdminCardProps = CardProps &
  FormComponentProps & {
    memberId: string
  }
const ProfileBasicAdminCard: React.FC<ProfileBasicAdminCardProps> = ({ form, memberId, ...cardProps }) => {
  const { member } = useMember(memberId)
  const updateMember = useUpdateMember()

  const handleSubmit = () => {
    form.validateFields((error, values) => {
      if (!error && member) {
        updateMember({
          variables: {
            memberId,
            email: member.email,
            username: member.username,
            name: values.name,
            pictureUrl: values.picture
              ? `https://${process.env.REACT_APP_S3_BUCKET}/avatars/${localStorage.getItem('kolable.app.id')}/${memberId}`
              : member.pictureUrl,
            description: values.description,
          },
        })
          .then(() => {
            message.success('儲存成功')
            window.location.reload(true)
          })
          .catch(err => message.error(err.message))
      }
    })
  }

  return (
    <AdminCard {...cardProps}>
      <Typography.Title className="mb-4" level={4}>
        基本資料
      </Typography.Title>
      <StyledForm
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
        labelCol={{ span: 24, md: { span: 4 } }}
        wrapperCol={{ span: 24, md: { span: 8 } }}
      >
        <StyledFormItem label="頭像">
          <div className="mr-3">
            <AvatarImage src={(member && member.pictureUrl) || ''} size={128} />
          </div>
          {form.getFieldDecorator('picture')(
            <SingleUploader
              accept="image/*"
              listType="picture-card"
              showUploadList={false}
              path={`avatars/${localStorage.getItem('kolable.app.id')}/${memberId}`}
              onSuccess={handleSubmit}
              isPublic={true}
            />,
          )}
        </StyledFormItem>
        <Form.Item label="名稱">
          {form.getFieldDecorator('name', {
            initialValue: member && member.name,
            rules: [{ required: true, message: '請輸入名稱' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="簡介">
          {form.getFieldDecorator('description', {
            initialValue: member && member.description,
          })(<Input.TextArea rows={5} />)}
        </Form.Item>
        <Form.Item wrapperCol={{ md: { offset: 4 } }}>
          <Button className="mr-2" onClick={() => form.resetFields()}>
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            儲存
          </Button>
        </Form.Item>
      </StyledForm>
    </AdminCard>
  )
}

export default Form.create<ProfileBasicAdminCardProps>()(ProfileBasicAdminCard)
