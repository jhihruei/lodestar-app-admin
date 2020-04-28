import { useMutation } from '@apollo/react-hooks'
import { Button, Form, Input, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { ExecutionResult } from 'graphql'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import AppContext from '../../contexts/AppContext'
import { handleError } from '../../helpers'
import { commonMessages, errorMessages } from '../../helpers/translation'
import types from '../../types'
import { ProgramPackageProps } from '../../types/programPackage'
import { CustomRatioImage } from '../common/Image'
import { CoverBlock, StyledSingleUploader } from '../program/ProgramIntroAdminCard'

type ProgramPackageBasicFormProps = ProgramPackageProps & FormComponentProps

const ProgramPackageBasicForm: React.FC<ProgramPackageBasicFormProps> = ({
  programPackage,
  onRefetch,
  form: { getFieldDecorator, resetFields, validateFields },
}) => {
  const { formatMessage } = useIntl()
  const { id: appId } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const updateProgramPackageBasic = useUpdateProgramPackageBasic(programPackage.id)

  const handleUpload = () => {
    validateFields((error, { title }) => {
      if (!error) {
        setLoading(true)

        const uploadTime = Date.now()
        const coverUrl = `https://${process.env.REACT_APP_S3_BUCKET}/program_package_covers/${appId}/${programPackage.id}?t=${uploadTime}`

        updateProgramPackageBasic(title, coverUrl)
          .then(() => {
            onRefetch && onRefetch()
            message.success(formatMessage(commonMessages.event.successfullySaved))
          })
          .catch(err => handleError(err))
          .finally(() => setLoading(false))
      }
    })
  }

  return (
    <Form
      hideRequiredMark
      labelCol={{ span: 24, md: { span: 4 } }}
      wrapperCol={{ span: 24, md: { span: 8 } }}
      onSubmit={e => {
        e.preventDefault()
        handleUpload()
      }}
    >
      <Form.Item label={formatMessage(commonMessages.term.title)}>
        {getFieldDecorator('title', {
          initialValue: programPackage.title,
          rules: [
            {
              required: true,
              message: formatMessage(errorMessages.form.isRequired, {
                field: formatMessage(commonMessages.term.title),
              }),
            },
          ],
        })(<Input />)}
      </Form.Item>

      <Form.Item label={formatMessage(commonMessages.term.cover)}>
        <div className="d-flex align-items-center">
          {programPackage.coverUrl && (
            <CoverBlock>
              <CustomRatioImage src={programPackage.coverUrl} width="100%" ratio={9 / 16} />
            </CoverBlock>
          )}
          {getFieldDecorator('programPackageCover')(
            <StyledSingleUploader
              accept="image/*"
              listType="picture-card"
              path={`program_package_covers/${appId}/${programPackage.id}`}
              showUploadList={false}
              onSuccess={() => handleUpload()}
              isPublic
            />,
          )}
        </div>
      </Form.Item>

      <Form.Item wrapperCol={{ md: { offset: 4 } }}>
        <Button onClick={() => resetFields()}>{formatMessage(commonMessages.ui.cancel)}</Button>
        <Button htmlType="submit" type="primary" className="ml-2" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const useUpdateProgramPackageBasic: (
  programPackageId: string,
) => (
  title: string,
  coverUrl: string,
) => Promise<ExecutionResult<types.UPDATE_PROGRAM_PACKAGE_BASIC>> = programPackageId => {
  const [updateProgramPackageBasicHandler] = useMutation<
    types.UPDATE_PROGRAM_PACKAGE_BASIC,
    types.UPDATE_PROGRAM_PACKAGE_BASICVariables
  >(gql`
    mutation UPDATE_PROGRAM_PACKAGE_BASIC($programPackageId: uuid!, $title: String, $coverUrl: String) {
      update_program_package(_set: { title: $title, cover_url: $coverUrl }, where: { id: { _eq: $programPackageId } }) {
        affected_rows
      }
    }
  `)

  const updateProgramPackageBasic = (title: string, coverUrl: string) => {
    return updateProgramPackageBasicHandler({
      variables: {
        programPackageId,
        title,
        coverUrl,
      },
    })
  }

  return updateProgramPackageBasic
}

export default Form.create<ProgramPackageBasicFormProps>()(ProgramPackageBasicForm)
