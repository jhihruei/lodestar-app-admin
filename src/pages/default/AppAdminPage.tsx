// import AppSecretCard from '../../components/app/AppSecretCard'
import { GlobalOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import AppBasicCard from '../../components/app/AppBasicCard'
import AppSettingCard from '../../components/app/AppSettingCard'
import AdminLayout from '../../components/layout/AdminLayout'
import { AppContext } from '../../contexts/AppContext'
import { commonMessages } from '../../helpers/translation'

const AppAdminPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { id: appId } = useContext(AppContext)

  return (
    <AdminLayout>
      <Typography.Title level={3} className="mb-4">
        <GlobalOutlined className="mr-3" />
        <span>{formatMessage(commonMessages.menu.appAdmin)}</span>
      </Typography.Title>

      <AppBasicCard appId={appId} title="基本資料" className="mb-3" />
      <AppSettingCard appId={appId} title="網站設定" className="mb-3" />
      {/* <AppSecretCard app={app} refetch={refetchApp} loadingApp={loadingApp} /> */}
    </AdminLayout>
  )
}

export default AppAdminPage
