import Icon, { FileAddOutlined, FileTextOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { sum } from 'ramda'
import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { ActivityAdminProps } from '../../contexts/ActivityContext'
import { dateRangeFormatter } from '../../helpers'
import { activityMessages, commonMessages } from '../../helpers/translation'
import { ReactComponent as CalendarOIcon } from '../../images/icon/calendar-alt-o.svg'
import { ReactComponent as MapOIcon } from '../../images/icon/map-o.svg'
import { ReactComponent as TicketOIcon } from '../../images/icon/ticket-o.svg'
import { ReactComponent as UserOIcon } from '../../images/icon/user-o.svg'
import ActivitySessionAdminModal from './ActivitySessionAdminModal'

const StyledWrapper = styled.div`
  margin-bottom: 1.25rem;
  padding: 1.5rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
`
const StyledTitle = styled.div`
  color: var(--gray-darker);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2px;
`
const StyledDescription = styled.div`
  color: var(--gray-darker);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`
const StyledLinkText = styled.span`
  color: ${props => props.theme['@primary-color']};
`

export type ActivitySessionProps = {
  id: string
  title: string
  description: string | null
  location: string
  threshold: number | null
  startedAt: Date
  endedAt: Date
  participants: number
}
const ActivitySessionsAdminBlock: React.FC<{
  activityAdmin: ActivityAdminProps
  onInsert?: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    data: {
      title: string
      startedAt: Date
      endedAt: Date
      location: string
      description: string | null
      threshold: number | null
    },
  ) => void
  onUpdate?: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    data: {
      activitySessionId: string
      title: string
      startedAt: Date
      endedAt: Date
      location: string
      description: string | null
      threshold: number | null
    },
  ) => void
  onChangeTab?: () => void
}> = ({ activityAdmin, onInsert, onUpdate, onChangeTab }) => {
  const { formatMessage } = useIntl()

  return (
    <>
      <ActivitySessionAdminModal
        renderTrigger={({ setVisible }) => (
          <Button type="primary" icon={<FileAddOutlined />} onClick={() => setVisible(true)} className="mb-5">
            {formatMessage(activityMessages.ui.createSession)}
          </Button>
        )}
        icon={<FileAddOutlined />}
        onSubmit={onInsert}
      />

      {activityAdmin.activitySessions.map(session => {
        const tickets = activityAdmin.activityTickets.filter(ticket =>
          ticket.activitySessionTickets.some(sessionTicket => sessionTicket.activitySession.id === session.id),
        )

        return (
          <StyledWrapper key={session.id}>
            <StyledTitle className="mb-3">{session.title}</StyledTitle>
            <StyledDescription>
              <Icon component={() => <CalendarOIcon />} className="mr-2" />
              <span>{dateRangeFormatter({ startedAt: session.startedAt, endedAt: session.endedAt })}</span>
            </StyledDescription>
            <StyledDescription>
              <Icon component={() => <MapOIcon />} className="mr-2" />
              <span>{session.location}</span>
            </StyledDescription>
            <StyledDescription>
              <Icon component={() => <TicketOIcon />} className="mr-2" />
              <span>
                {tickets.length ? (
                  tickets.map(ticket => ticket.title).join(formatMessage(commonMessages.ui.comma))
                ) : (
                  <StyledLinkText className="cursor-pointer" onClick={() => onChangeTab && onChangeTab()}>
                    {formatMessage(activityMessages.ui.addTicketPlan)}
                  </StyledLinkText>
                )}
              </span>
            </StyledDescription>
            <StyledDescription className="d-flex align-items-center justify-content-between">
              <div>
                <Icon component={() => <UserOIcon />} className="mr-2" />
                <span className="mr-3">
                  {session.participants} / {sum(tickets.map(ticket => ticket.count))}
                </span>
                {session.threshold && (
                  <span>
                    {formatMessage(activityMessages.ui.threshold)} {session.threshold}
                  </span>
                )}
              </div>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <ActivitySessionAdminModal
                        renderTrigger={({ setVisible }) => (
                          <span onClick={() => setVisible(true)}>{formatMessage(commonMessages.ui.edit)}</span>
                        )}
                        icon={<FileTextOutlined />}
                        onSubmit={onUpdate}
                        activitySession={session}
                      />
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <MoreOutlined />
              </Dropdown>
            </StyledDescription>
          </StyledWrapper>
        )
      })}
    </>
  )
}

export default ActivitySessionsAdminBlock
