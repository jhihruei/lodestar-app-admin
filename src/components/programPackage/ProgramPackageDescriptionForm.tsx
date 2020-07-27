import { Form } from '@ant-design/compatible'
import { FormComponentProps } from '@ant-design/compatible/lib/form'
import { useMutation } from '@apollo/react-hooks'
import { Button, message } from 'antd'
import BraftEditor from 'braft-editor'
import gql from 'graphql-tag'
import React from 'react'
import { useIntl } from 'react-intl'
import { handleError } from '../../helpers'
import { commonMessages } from '../../helpers/translation'
import types from '../../types'
import { ProgramPackageProps } from '../../types/programPackage'
import AdminBraftEditor from '../admin/AdminBraftEditor'

type ProgramPackageDescriptionFromProps = {
  programPackage: ProgramPackageProps
  onRefetch?: () => void
} & FormComponentProps

const ProgramPackageDescriptionForm: React.FC<ProgramPackageDescriptionFromProps> = ({
  programPackage,
  onRefetch,
  form: { getFieldDecorator, resetFields, validateFields },
}) => {
  const { formatMessage } = useIntl()
  const updateProgramPackageDescription = useUpdateProgramPackageDescription(programPackage.id)
  const handleSubmit = () => {
    validateFields((err, { description }) => {
      if (!err) {
        updateProgramPackageDescription(description.toRAW())
          .then(() => {
            onRefetch && onRefetch()
            message.success(formatMessage(commonMessages.event.successfullySaved))
          })
          .catch(handleError)
      }
    })
  }

  return (
    <>
      <Form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Form.Item>
          {getFieldDecorator('description', {
            initialValue: programPackage.description && BraftEditor.createEditorState(programPackage.description),
          })(<AdminBraftEditor />)}
        </Form.Item>
        <Form.Item>
          <Button onClick={() => resetFields()}>{formatMessage(commonMessages.ui.cancel)}</Button>
          <Button className="ml-2" type="primary" htmlType="submit">
            {formatMessage(commonMessages.ui.save)}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const useUpdateProgramPackageDescription = (programPackageId: string) => {
  const [updateProgramPackageDescription] = useMutation<
    types.UPDATE_PROGRAM_PACKAGE_DESCRIPTION,
    types.UPDATE_PROGRAM_PACKAGE_DESCRIPTIONVariables
  >(gql`
    mutation UPDATE_PROGRAM_PACKAGE_DESCRIPTION($description: String, $programPackageId: uuid!) {
      update_program_package(_set: { description: $description }, where: { id: { _eq: $programPackageId } }) {
        affected_rows
      }
    }
  `)

  return (description: string) =>
    updateProgramPackageDescription({
      variables: {
        programPackageId,
        description,
      },
    })
}

export default Form.create<ProgramPackageDescriptionFromProps>()(ProgramPackageDescriptionForm)
