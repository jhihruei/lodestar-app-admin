import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Tabs } from 'antd'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { Link, useParams } from 'react-router-dom'
import { StringParam, useQueryParam } from 'use-query-params'
import {
  AdminBlock,
  AdminBlockTitle,
  AdminHeader,
  AdminHeaderTitle,
  AdminPaneTitle,
  AdminTabBarWrapper,
} from '../../components/admin'
import AppointmentPlanBasicForm from '../../components/appointment/AppointmentPlanBasicForm'
import AppointmentPlanIntroForm from '../../components/appointment/AppointmentPlanIntroForm'
import AppointmentPlanPublishBlock from '../../components/appointment/AppointmentPlanPublishBlock'
import AppointmentPlanSaleForm from '../../components/appointment/AppointmentPlanSaleForm'
import AppointmentPlanScheduleBlock from '../../components/appointment/AppointmentPlanScheduleBlock'
import AppointmentPlanScheduleCreationModal from '../../components/appointment/AppointmentPlanScheduleCreationModal'
import { StyledLayoutContent } from '../../components/layout/DefaultLayout'
import { commonMessages } from '../../helpers/translation'
import { useAppointmentPlanAdmin } from '../../hooks/appointment'

const messages = defineMessages({
  planSettings: { id: 'appointment.label.planSettings', defaultMessage: '方案設定' },
  planDescription: { id: 'appointment.label.planDescription', defaultMessage: '方案簡介' },
  salesSettings: { id: 'appointment.label.salesSettings', defaultMessage: '銷售方案' },
  scheduleSettings: { id: 'appointment.label.scheduleSettings', defaultMessage: '時段設定' },
})

const AppointmentPlanAdminPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { appointmentPlanId } = useParams<{ appointmentPlanId: string }>()
  const [activeKey, setActiveKey] = useQueryParam('tab', StringParam)
  const { appointmentPlanAdmin, refetchAppointmentPlanAdmin } = useAppointmentPlanAdmin(appointmentPlanId)

  return (
    <>
      <AdminHeader>
        <Link to="/appointment-plans">
          <Button type="link" className="mr-3">
            <ArrowLeftOutlined />
          </Button>
        </Link>

        <AdminHeaderTitle>{appointmentPlanAdmin?.title || appointmentPlanId}</AdminHeaderTitle>
      </AdminHeader>

      <StyledLayoutContent variant="gray">
        <Tabs
          defaultActiveKey="settings"
          activeKey={activeKey || 'settings'}
          onChange={key => setActiveKey(key)}
          renderTabBar={(props, DefaultTabBar) => (
            <AdminTabBarWrapper>
              <DefaultTabBar {...props} className="mb-0" />
            </AdminTabBarWrapper>
          )}
        >
          <Tabs.TabPane tab={formatMessage(messages.planSettings)} key="settings">
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(messages.planSettings)}</AdminPaneTitle>
              <AdminBlock>
                <AdminBlockTitle>{formatMessage(commonMessages.label.basicSettings)}</AdminBlockTitle>
                <AppointmentPlanBasicForm
                  appointmentPlanAdmin={appointmentPlanAdmin}
                  onRefetch={refetchAppointmentPlanAdmin}
                />
              </AdminBlock>
              <AdminBlock>
                <AdminBlockTitle>{formatMessage(messages.planDescription)}</AdminBlockTitle>
                <AppointmentPlanIntroForm
                  appointmentPlanAdmin={appointmentPlanAdmin}
                  onRefetch={refetchAppointmentPlanAdmin}
                />
              </AdminBlock>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab={formatMessage(messages.salesSettings)} key="sale">
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(messages.salesSettings)}</AdminPaneTitle>
              <AdminBlock>
                <AppointmentPlanSaleForm
                  appointmentPlanAdmin={appointmentPlanAdmin}
                  onRefetch={refetchAppointmentPlanAdmin}
                />
              </AdminBlock>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab={formatMessage(messages.scheduleSettings)} key="schedule">
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(messages.scheduleSettings)}</AdminPaneTitle>
              <div className="mb-4">
                <AppointmentPlanScheduleCreationModal
                  appointmentPlanAdmin={appointmentPlanAdmin}
                  onRefetch={refetchAppointmentPlanAdmin}
                />
              </div>
              <AdminBlock>
                <AppointmentPlanScheduleBlock
                  appointmentPlanAdmin={appointmentPlanAdmin}
                  onRefetch={refetchAppointmentPlanAdmin}
                />
              </AdminBlock>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab={formatMessage(commonMessages.label.publishAdmin)} key="publish">
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(commonMessages.label.publishSettings)}</AdminPaneTitle>
              <AdminBlock>
                <AppointmentPlanPublishBlock
                  appointmentPlanAdmin={appointmentPlanAdmin}
                  onRefetch={refetchAppointmentPlanAdmin}
                />
              </AdminBlock>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </StyledLayoutContent>
    </>
  )
}

export default AppointmentPlanAdminPage
