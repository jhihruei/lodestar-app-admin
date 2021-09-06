import Icon, { FileAddOutlined } from '@ant-design/icons'
import { Button, Skeleton } from 'antd'
import { useIntl } from 'react-intl'
import { AdminPageTitle, EmptyBlock } from '../../components/admin'
import AdminLayout from '../../components/layout/AdminLayout'
import PermissionGroupAdminItem from '../../components/permission/PermissionGroupAdminItem'
import PermissionGroupAdminModal from '../../components/permission/PermissionGroupAdminModal'
import { commonMessages, permissionGroupsAdminMessages } from '../../helpers/translation'
import { usePermissionGroupsCollection } from '../../hooks/permission'
import { ReactComponent as UsersIcon } from '../../images/icon/users.svg'

const PermissionGroupAdminPage: React.VFC = () => {
  const { formatMessage } = useIntl()
  const { loadingPermissionGroups, permissionGroups, refetchPermissionGroups } = usePermissionGroupsCollection()

  return (
    <AdminLayout>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <AdminPageTitle className="d-flex align-items-center mb-0">
          <Icon className="mr-3" component={() => <UsersIcon />} />
          <span>{formatMessage(commonMessages.menu.permissionGroup)}</span>
        </AdminPageTitle>
      </div>

      <div className="mb-4">
        <PermissionGroupAdminModal
          title={formatMessage(permissionGroupsAdminMessages.ui.createPermissionGroup)}
          renderTrigger={({ setVisible }) => (
            <Button type="primary" icon={<FileAddOutlined />} onClick={() => setVisible(true)}>
              {formatMessage(permissionGroupsAdminMessages.ui.createPermissionGroup)}
            </Button>
          )}
          onRefetch={refetchPermissionGroups}
        />
      </div>

      {loadingPermissionGroups && <Skeleton active />}
      {!loadingPermissionGroups && permissionGroups.length === 0 && (
        <EmptyBlock>{formatMessage(permissionGroupsAdminMessages.text.emptyPermissionGroups)}</EmptyBlock>
      )}
      {permissionGroups.map(permissionGroup => (
        <PermissionGroupAdminItem
          key={permissionGroup.id}
          id={permissionGroup.id}
          name={permissionGroup.name}
          permissionIds={permissionGroup.permissionIds}
          onRefetch={refetchPermissionGroups}
        />
      ))}
    </AdminLayout>
  )
}

export default PermissionGroupAdminPage
