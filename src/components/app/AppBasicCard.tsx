import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import { FormComponentProps } from '@ant-design/compatible/lib/form'
import { Button, Input, message } from 'antd'
import { CardProps } from 'antd/lib/card'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { handleError } from '../../helpers'
import { commonMessages, errorMessages } from '../../helpers/translation'
import { useAppData, useUpdateApp } from '../../hooks/app'
import AdminCard from '../admin/AdminCard'
import { StyledForm } from '../layout'

const messages = defineMessages({
  appName: { id: 'app.label.name', defaultMessage: '網站名稱' },
  appVimeoProjectId: { id: 'app.label.vimeoProjectId', defaultMessage: 'Vimeo ID' },
})

export type AppCardProps = CardProps &
  FormComponentProps & {
    appId: string
  }
const AppBasicCard: React.FC<AppCardProps> = ({ form, appId, ...cardProps }) => {
  const { formatMessage } = useIntl()
  const { app, refetchApp, loadingApp } = useAppData(appId)
  const updateApp = useUpdateApp()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.validateFields((error, values) => {
      if (!error && app) {
        setLoading(true)
        updateApp({
          variables: {
            appId: app.id,
            name: values.name,
            title: values.title,
            description: values.description,
            vimeoProjectId: values.vimeoProjectId,
          },
        })
          .then(() => {
            setLoading(false)
            message.success(formatMessage(commonMessages.event.successfullySaved))
            refetchApp()
          })
          .catch(error => handleError(error))
      }
    })
  }

  return (
    <AdminCard {...cardProps} loading={loadingApp}>
      <StyledForm
        onSubmit={handleSubmit}
        labelCol={{ span: 24, md: { span: 4 } }}
        wrapperCol={{ span: 24, md: { span: 12 } }}
      >
        <Form.Item label={formatMessage(messages.appName)}>
          {form.getFieldDecorator('name', {
            initialValue: app && app.name,
            rules: [
              {
                required: true,
                message: formatMessage(errorMessages.form.isRequired, {
                  field: formatMessage(messages.appName),
                }),
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label={formatMessage(messages.appVimeoProjectId)}>
          {form.getFieldDecorator('vimeoProjectId', {
            initialValue: app && app.vimeoProjectId,
          })(<Input />)}
        </Form.Item>

        <Form.Item wrapperCol={{ md: { offset: 4 } }}>
          <Button className="mr-2" onClick={() => form.resetFields()}>
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            {formatMessage(commonMessages.ui.save)}
          </Button>
        </Form.Item>
      </StyledForm>
    </AdminCard>
  )
}

export default Form.create<AppCardProps>()(AppBasicCard)
