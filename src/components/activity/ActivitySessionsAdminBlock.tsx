import Icon, { FileAddOutlined, FileTextOutlined, MoreOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Dropdown, Menu, Skeleton } from 'antd'
import gql from 'graphql-tag'
import { sum } from 'ramda'
import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { dateRangeFormatter } from '../../helpers'
import { activityMessages, commonMessages } from '../../helpers/translation'
import { ReactComponent as CalendarOIcon } from '../../images/icon/calendar-alt-o.svg'
import { ReactComponent as MapOIcon } from '../../images/icon/map-o.svg'
import { ReactComponent as TicketOIcon } from '../../images/icon/ticket-o.svg'
import { ReactComponent as UserOIcon } from '../../images/icon/user-o.svg'
import types from '../../types'
import { ActivityAdminProps } from '../../types/activity'
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

const ActivitySessionsAdminBlock: React.FC<{
  activityAdmin: ActivityAdminProps | null
  refetch?: () => void
  onChangeTab?: () => void
}> = ({ activityAdmin, refetch, onChangeTab }) => {
  const { formatMessage } = useIntl()
  const [insertActivitySession] = useMutation<types.INSERT_ACTIVITY_SESSION, types.INSERT_ACTIVITY_SESSIONVariables>(
    INSERT_ACTIVITY_SESSION,
  )
  const [updateActivitySession] = useMutation<types.UPDATE_ACTIVITY_SESSION, types.UPDATE_ACTIVITY_SESSIONVariables>(
    UPDATE_ACTIVITY_SESSION,
  )

  if (!activityAdmin) {
    return <Skeleton active />
  }

  return (
    <>
      <ActivitySessionAdminModal
        renderTrigger={({ setVisible }) => (
          <Button type="primary" icon={<FileAddOutlined />} onClick={() => setVisible(true)} className="mb-5">
            {formatMessage(activityMessages.ui.createSession)}
          </Button>
        )}
        icon={<FileAddOutlined />}
        onSubmit={values =>
          insertActivitySession({
            variables: {
              activityId: activityAdmin.id,
              title: values.title,
              startedAt: values.startedAt,
              endedAt: values.endedAt,
              location: values.location,
              threshold: values.threshold,
            },
          })
        }
        refetch={refetch}
      />

      {activityAdmin.sessions.map(session => {
        const tickets = activityAdmin.tickets.filter(ticket =>
          ticket.sessions.some(ticketSession => ticketSession.id === session.id),
        )

        return (
          <StyledWrapper key={session.id}>
            <StyledTitle className="mb-3">{session.title}</StyledTitle>
            <StyledDescription>
              <Icon component={() => <CalendarOIcon />} className="mr-2" />
              <span>
                {dateRangeFormatter({
                  startedAt: session.startedAt,
                  endedAt: session.endedAt,
                  dateFormat: 'YYYY-MM-DD(dd)',
                })}
              </span>
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
                  {session.enrollmentsCount} / {sum(tickets.map(ticket => ticket.count))}
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
                        activitySession={session}
                        onSubmit={values =>
                          updateActivitySession({
                            variables: {
                              activitySessionId: session.id,
                              title: values.title,
                              startedAt: values.startedAt,
                              endedAt: values.endedAt,
                              location: values.location,
                              threshold: values.threshold,
                            },
                          })
                        }
                        refetch={refetch}
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

const INSERT_ACTIVITY_SESSION = gql`
  mutation INSERT_ACTIVITY_SESSION(
    $activityId: uuid!
    $title: String!
    $startedAt: timestamptz
    $endedAt: timestamptz
    $location: String!
    $description: String
    $threshold: numeric
  ) {
    insert_activity_session(
      objects: {
        activity_id: $activityId
        title: $title
        started_at: $startedAt
        ended_at: $endedAt
        location: $location
        description: $description
        threshold: $threshold
      }
    ) {
      affected_rows
    }
  }
`
const UPDATE_ACTIVITY_SESSION = gql`
  mutation UPDATE_ACTIVITY_SESSION(
    $activitySessionId: uuid!
    $title: String!
    $startedAt: timestamptz
    $endedAt: timestamptz
    $location: String!
    $description: String
    $threshold: numeric
  ) {
    update_activity_session(
      where: { id: { _eq: $activitySessionId } }
      _set: {
        title: $title
        started_at: $startedAt
        ended_at: $endedAt
        location: $location
        description: $description
        threshold: $threshold
      }
    ) {
      affected_rows
    }
  }
`

export default ActivitySessionsAdminBlock
