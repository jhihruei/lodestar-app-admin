import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { useIntl } from 'react-intl'
import { AdminPageTitle } from '../../components/admin'
import AdminLayout from '../../components/layout/AdminLayout'
import MemberTaskTable from '../../components/profile/MemberTaskTable'
import { commonMessages } from '../../helpers/translation'

const TaskCollectionPage: React.FC = () => {
  const { formatMessage } = useIntl()

  return (
    <AdminLayout>
      <AdminPageTitle className="mb-4">
        <UserOutlined className="mr-3" />
        <span>{formatMessage(commonMessages.menu.members)}</span>
      </AdminPageTitle>

      <MemberTaskTable />
    </AdminLayout>
  )
}

export default TaskCollectionPage
