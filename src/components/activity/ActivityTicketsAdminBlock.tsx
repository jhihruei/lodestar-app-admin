import { FileAddOutlined, FileTextOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import { ActivityAdminProps } from '../../contexts/ActivityContext'
import { activityMessages, commonMessages } from '../../helpers/translation'
import ActivityTicket from './ActivityTicket'
import ActivityTicketAdminModal from './ActivityTicketAdminModal'

const ActivityTicketsAdminBlock: React.FC<{
  activityAdmin: ActivityAdminProps
  onInsert?: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    data: {
      title: string
      sessionIds: string[]
      isPublished: boolean
      startedAt: Date
      endedAt: Date
      price: number
      count: number
      description: string | null
    },
  ) => void
  onUpdate?: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    data: {
      activityTicketId: string
      title: string
      sessionIds: string[]
      isPublished: boolean
      startedAt: Date
      endedAt: Date
      price: number
      count: number
      description: string | null
    },
  ) => void
}> = ({ activityAdmin, onInsert, onUpdate }) => {
  const { formatMessage } = useIntl()

  return (
    <>
      <ActivityTicketAdminModal
        renderTrigger={({ setVisible }) => (
          <Button type="primary" icon={<FileAddOutlined />} onClick={() => setVisible(true)} className="mb-5">
            {formatMessage(activityMessages.ui.createTicketPlan)}
          </Button>
        )}
        activitySessions={activityAdmin.activitySessions.map(session => ({
          id: session.id,
          title: session.title,
        }))}
        onSubmit={onInsert}
      />

      <div className="row">
        {activityAdmin.activityTickets.map(ticket => (
          <div key={ticket.id} className="col-12 col-md-6 mb-4">
            <ActivityTicket
              {...ticket}
              variant="admin"
              extra={
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <ActivityTicketAdminModal
                          renderTrigger={({ setVisible }) => (
                            <span onClick={() => setVisible(true)}>{formatMessage(commonMessages.ui.edit)}</span>
                          )}
                          icon={() => <FileTextOutlined />}
                          onSubmit={onUpdate}
                          activityTicket={ticket}
                          activitySessions={activityAdmin.activitySessions.map(session => ({
                            id: session.id,
                            title: session.title,
                          }))}
                        />
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <MoreOutlined />
                </Dropdown>
              }
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ActivityTicketsAdminBlock
