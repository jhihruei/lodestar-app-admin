import { FileAddOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Button, Form, message, TreeSelect } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import AppContext from '../../contexts/AppContext'
import { handleError } from '../../helpers'
import { commonMessages, programPackageMessages } from '../../helpers/translation'
import types from '../../types'
import AdminModal from '../admin/AdminModal'

const ProgramPackageProgramConnectionModal: React.FC<{
  programPackageId: string
  programs: {
    id: string
    title: string
  }[]
  onRefetch?: () => void
}> = ({ programPackageId, programs, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm()
  const { id: appId } = useContext(AppContext)
  const { availablePrograms } = useGetAvailableProgramCollection(appId)
  const [insertProgramPackageProgram] = useMutation<
    types.INSERT_PROGRAM_PACKAGE_PROGRAM,
    types.INSERT_PROGRAM_PACKAGE_PROGRAMVariables
  >(INSERT_PROGRAM_PACKAGE_PROGRAM)

  const [isLoading, setLoading] = useState<boolean>(false)

  const handleSubmit = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    form
      .validateFields()
      .then((values: any) => {
        setLoading(true)
        insertProgramPackageProgram({
          variables: {
            programs: values.programValues
              .map((value: string) => value.split('_')[0])
              .map((programId: string) => ({
                program_package_id: programPackageId,
                program_id: programId,
              })),
          },
        })
          .then(() => {
            onRefetch && onRefetch()
            setVisible(false)
            message.success(formatMessage(commonMessages.event.successfullySaved))
          })
          .catch(err => handleError(err))
          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <AdminModal
      renderTrigger={({ setVisible }) => (
        <Button type="primary" icon={<FileAddOutlined />} onClick={() => setVisible(true)}>
          {formatMessage(programPackageMessages.ui.connectProgram)}
        </Button>
      )}
      icon={<FileAddOutlined />}
      title={formatMessage(programPackageMessages.ui.connectProgram)}
      footer={null}
      destroyOnClose
      maskClosable={false}
      renderFooter={({ setVisible }) => (
        <div>
          <Button onClick={() => setVisible(false)} className="mr-2">
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button type="primary" loading={isLoading} onClick={() => handleSubmit(setVisible)}>
            {formatMessage(commonMessages.ui.save)}
          </Button>
        </div>
      )}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          programValues: programs.map(program => `${program.id}_${program.title}`),
        }}
      >
        <Form.Item name="programValues">
          <TreeSelect
            treeCheckable
            multiple
            allowClear
            showSearch
            treeData={[
              {
                key: 'allPerpetualPrograms',
                title: '所有單次課程',
                children: availablePrograms
                  .filter(program => !program.isSubscription)
                  .map(program => ({
                    key: program.id,
                    title: program.title,
                    value: `${program.id}_${program.title}`,
                  })),
              },
              {
                key: 'allSubscriptionPrograms',
                title: '所有訂閱課程',
                children: availablePrograms
                  .filter(program => program.isSubscription)
                  .map(program => ({
                    key: program.id,
                    title: program.title,
                    value: `${program.id}_${program.title}`,
                  })),
              },
            ]}
          />
        </Form.Item>
      </Form>
    </AdminModal>
  )
}

const useGetAvailableProgramCollection = (appId: string) => {
  const { loading, error, data, refetch } = useQuery<
    types.GET_AVAILABLE_PROGRAM_COLLECTION,
    types.GET_AVAILABLE_PROGRAM_COLLECTIONVariables
  >(
    gql`
      query GET_AVAILABLE_PROGRAM_COLLECTION($appId: String!) {
        program(where: { published_at: { _is_null: false }, is_deleted: { _eq: false }, app_id: { _eq: $appId } }) {
          id
          title
          is_subscription
        }
      }
    `,
    { variables: { appId } },
  )

  const availablePrograms: {
    id: string
    title: string | null
    isSubscription: boolean
  }[] =
    loading || error || !data
      ? []
      : data?.program.map(program => ({
          id: program.id,
          title: program.title,
          isSubscription: program.is_subscription,
        }))

  return {
    loading,
    error,
    availablePrograms,
    refetch,
  }
}

const INSERT_PROGRAM_PACKAGE_PROGRAM = gql`
  mutation INSERT_PROGRAM_PACKAGE_PROGRAM($programs: [program_package_program_insert_input!]!) {
    insert_program_package_program(
      objects: $programs
      on_conflict: {
        constraint: program_package_program_program_package_id_program_id_key
        update_columns: program_package_id
      }
    ) {
      affected_rows
    }
  }
`

export default ProgramPackageProgramConnectionModal
