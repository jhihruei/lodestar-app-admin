import { Icon } from 'antd'
import React from 'react'
import { AdminPageBlock, AdminPageTitle } from '../../../components/admin'
import OwnerAdminLayout from '../../../components/layout/OwnerAdminLayout'
import AppointmentPlanCollectionTable from '../../../containers/appointment/AppointmentPlanCollectionTable'
import AppointmentPlanCreationModal from '../../../containers/appointment/AppointmentPlanCreationModal'
import { ReactComponent as CalendarAltOIcon } from '../../../images/icon/calendar-alt-o.svg'

const AppointmentPlanCollectionAdminPage: React.FC = () => {
  return (
    <OwnerAdminLayout>
      <AdminPageTitle className="mb-4">
        <Icon component={() => <CalendarAltOIcon />} className="mr-3" />
        <span>預約方案</span>
      </AdminPageTitle>

      <div className="mb-5">
        <AppointmentPlanCreationModal />
      </div>

      <AdminPageBlock>
        <AppointmentPlanCollectionTable />
      </AdminPageBlock>
    </OwnerAdminLayout>
  )
}

export default AppointmentPlanCollectionAdminPage
