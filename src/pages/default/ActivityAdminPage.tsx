import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Skeleton, Tabs } from 'antd'
import React, { useContext } from 'react'
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
import { StyledLayoutContent } from '../../components/layout/DefaultLayout'
import ActivityBasicForm from '../../containers/activity/ActivityBasicForm'
import ActivityIntroductionForm from '../../containers/activity/ActivityIntroductionForm'
import ActivityPublishAdminBlock from '../../containers/activity/ActivityPublishAdminBlock'
import ActivitySessionsAdminBlock from '../../containers/activity/ActivitySessionsAdminBlock'
import ActivityTicketsAdminBlock from '../../containers/activity/ActivityTicketsAdminBlock'
import AppContext from '../../contexts/AppContext'
import { activityMessages, commonMessages } from '../../helpers/translation'
import { useActivityAdmin } from '../../hooks/activity'

const messages = defineMessages({
  settings: { id: 'activity.label.settings', defaultMessage: '相關設定' },
  activityIntroduction: { id: 'activity.label.activityIntroduction', defaultMessage: '活動介紹' },
  sessionAdmin: { id: 'activity.label.sessionAdmin', defaultMessage: '場次管理' },
  publishSettings: { id: 'activity.label.publishSettings', defaultMessage: '發佈設定' },
})

const ActivityAdminPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { activityId } = useParams<{ activityId: string }>()
  const { settings } = useContext(AppContext)
  const [activeKey, setActiveKey] = useQueryParam('tab', StringParam)
  const { loadingActivityAdmin, activityAdmin, refetchActivityAdmin } = useActivityAdmin(activityId)

  return (
    <>
      <AdminHeader>
        <Link to="/activities">
          <Button type="link" className="mr-3">
            <ArrowLeftOutlined />
          </Button>
        </Link>

        <AdminHeaderTitle>{activityAdmin?.title || activityId}</AdminHeaderTitle>
        <a href={`//${settings['host']}/activities/${activityId}`} target="_blank" rel="noopener noreferrer">
          <Button>{formatMessage(commonMessages.ui.preview)}</Button>
        </a>
      </AdminHeader>

      {loadingActivityAdmin ? (
        <Skeleton active />
      ) : (
        <StyledLayoutContent variant="gray">
          <Tabs
            activeKey={activeKey || 'settings'}
            onChange={key => setActiveKey(key)}
            renderTabBar={(props, DefaultTabBar) => (
              <AdminTabBarWrapper>
                <DefaultTabBar {...props} className="mb-0" />
              </AdminTabBarWrapper>
            )}
          >
            <Tabs.TabPane key="settings" tab={formatMessage(messages.settings)}>
              <div className="container py-5">
                <AdminPaneTitle>{formatMessage(messages.settings)}</AdminPaneTitle>
                <AdminBlock>
                  <AdminBlockTitle>{formatMessage(commonMessages.label.basicSettings)}</AdminBlockTitle>
                  <ActivityBasicForm activityAdmin={activityAdmin} refetch={refetchActivityAdmin} />
                </AdminBlock>
                <AdminBlock>
                  <AdminBlockTitle>{formatMessage(messages.activityIntroduction)}</AdminBlockTitle>
                  <ActivityIntroductionForm activityAdmin={activityAdmin} refetch={refetchActivityAdmin} />
                </AdminBlock>
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane key="sessions" tab={formatMessage(messages.sessionAdmin)}>
              <div className="container py-5">
                <AdminPaneTitle>{formatMessage(messages.sessionAdmin)}</AdminPaneTitle>
                <ActivitySessionsAdminBlock onChangeTab={() => setActiveKey('tickets')} />
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane key="tickets" tab={formatMessage(activityMessages.term.ticketPlan)}>
              <div className="container py-5">
                <AdminPaneTitle>{formatMessage(activityMessages.term.ticketPlan)}</AdminPaneTitle>
                <ActivityTicketsAdminBlock />
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane key="publish" tab={formatMessage(messages.publishSettings)}>
              <div className="container py-5">
                <AdminPaneTitle>{formatMessage(messages.publishSettings)}</AdminPaneTitle>
                <AdminBlock>
                  <ActivityPublishAdminBlock />
                </AdminBlock>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </StyledLayoutContent>
      )}
    </>
  )
}

export default ActivityAdminPage
