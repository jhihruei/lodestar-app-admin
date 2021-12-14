import { PlusOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form, Skeleton } from 'antd'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { AdminBlock, AdminBlockTitle } from '../../components/admin'
import AdminModal from '../../components/admin/AdminModal'
import RoleAdminBlock from '../../components/admin/RoleAdminBlock'
import MemberAvatar from '../../components/common/MemberAvatar'
import ContentCreatorSelector from '../../components/form/ContentCreatorSelector'
import hasura from '../../hasura'
import { handleError } from '../../helpers'
import { commonMessages, programMessages } from '../../helpers/translation'
import { ProgramAdminProps } from '../../types/program'

const ProgramRoleAdminPane: React.FC<{
  program: ProgramAdminProps | null
  onRefetch?: () => void
}> = ({ program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [insertProgramRole] = useMutation<hasura.INSERT_PROGRAM_ROLE, hasura.INSERT_PROGRAM_ROLEVariables>(
    INSERT_PROGRAM_ROLE,
  )
  const [deleteProgramRole] = useMutation<hasura.DELETE_PROGRAM_ROLE, hasura.DELETE_PROGRAM_ROLEVariables>(
    DELETE_PROGRAM_ROLE,
  )
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (!program) {
    return <Skeleton active />
  }

  const handleSubmit = (onSuccess: () => void) => {
    if (!selectedMemberId) {
      return
    }
    setLoading(true)
    insertProgramRole({
      variables: {
        programRole: [
          {
            program_id: program.id,
            member_id: selectedMemberId,
            name: 'instructor',
          },
        ],
      },
    })
      .then(() => {
        setSelectedMemberId(null)
        onSuccess()
        onRefetch?.()
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <>
      <AdminBlock>
        <AdminBlockTitle>{formatMessage(programMessages.label.programOwner)}</AdminBlockTitle>
        {program.roles
          .filter(role => role.name === 'owner')
          .map(role => (
            <MemberAvatar key={role.id} size="32px" memberId={role.member?.id || ''} withName />
          ))}
      </AdminBlock>

      <AdminBlock>
        <AdminBlockTitle>{formatMessage(commonMessages.label.instructor)}</AdminBlockTitle>
        {program.roles
          .filter(role => role.name === 'instructor')
          .map((role, index) => (
            <RoleAdminBlock
              key={role.id}
              name={role.member?.name || ''}
              pictureUrl={role.member?.pictureUrl || ''}
              onDelete={
                index === 0
                  ? undefined
                  : () => {
                      deleteProgramRole({
                        variables: {
                          programId: program.id,
                          roleId: role.id,
                        },
                      })
                        .then(() => onRefetch?.())
                        .catch(handleError)
                    }
              }
            />
          ))}

        <AdminModal
          renderTrigger={({ setVisible }) => (
            <Button type="link" icon={<PlusOutlined />} size="small" onClick={() => setVisible(true)}>
              {formatMessage(commonMessages.ui.addInstructor)}
            </Button>
          )}
          title={formatMessage(commonMessages.ui.addInstructor)}
          footer={null}
          renderFooter={({ setVisible }) => (
            <>
              <Button className="mr-2" onClick={() => setVisible(false)}>
                {formatMessage(commonMessages.ui.cancel)}
              </Button>
              <Button type="primary" loading={loading} onClick={() => handleSubmit(() => setVisible(false))}>
                {formatMessage(commonMessages.ui.add)}
              </Button>
            </>
          )}
        >
          <Form layout="vertical" colon={false} hideRequiredMark>
            <Form.Item label={formatMessage(commonMessages.label.selectInstructor)}>
              <ContentCreatorSelector value={selectedMemberId || ''} onChange={value => setSelectedMemberId(value)} />
            </Form.Item>
          </Form>
        </AdminModal>
      </AdminBlock>

      {/* <AdminBlock>
        <AdminBlockTitle>{formatMessage(commonMessages.label.teachingAssistant)}</AdminBlockTitle>
        {program.roles
          .filter(role => role.name === 'assistant')
          .map(role => (
            <MemberAvatar key={role.id} size="32px" memberId={role.member?.id || ''} withName />
          ))}
      </AdminBlock> */}
    </>
  )
}

const INSERT_PROGRAM_ROLE = gql`
  mutation INSERT_PROGRAM_ROLE($programRole: [program_role_insert_input!]!) {
    insert_program_role(objects: $programRole) {
      affected_rows
    }
  }
`
const DELETE_PROGRAM_ROLE = gql`
  mutation DELETE_PROGRAM_ROLE($programId: uuid!, $roleId: uuid!) {
    delete_program_role(where: { id: { _eq: $roleId }, program_id: { _eq: $programId }, name: { _eq: "instructor" } }) {
      affected_rows
    }
  }
`

export default ProgramRoleAdminPane
