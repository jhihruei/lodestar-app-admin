// organize-imports-ignore
import { FileAddOutlined, SearchOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/react-hooks'
import { Button, DatePicker, Input, Select, Spin, Table } from 'antd'
import { ColumnProps } from 'antd/lib/table'
import gql from 'graphql-tag'
import moment from 'moment'
import React, { useRef, useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'
import { commonMessages, memberMessages } from '../../helpers/translation'
import types from '../../types'
import { MemberTaskProps } from '../../types/member'
import { AdminBlock, MemberTaskTag } from '../admin'
import { AvatarImage } from '../common/Image'
import MemberTaskAdminModal from './MemberTaskAdminModal'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const messages = defineMessages({
  switchCalendar: { id: 'member.ui.switchCalendar', defaultMessage: '切換月曆模式' },
  switchTable: { id: 'member.ui.switchTable', defaultMessage: '切換列表模式' },
})

const StyledTitle = styled.span`
  color: var(--gray-darker);
  font-weight: bold;
`
const StyledSubTitle = styled.span`
  color: var(--gray-dark);
  font-size: 14px;
`
const StyledName = styled.span`
  color: var(--gray-darker);
  font-size: 14px;
`

const priorityLevel: { [key in MemberTaskProps['priority']]: number } = {
  high: 1,
  medium: 2,
  low: 3,
}
const statusLevel: { [key in MemberTaskProps['status']]: number } = {
  pending: 1,
  'in-progress': 2,
  done: 3,
}

const MemberTaskAdminBlock: React.FC<{
  memberId?: string
}> = ({ memberId }) => {
  const { formatMessage } = useIntl()
  const { currentMemberId } = useAuth()
  const searchInputRef = useRef<Input | null>(null)
  const [filter, setFilter] = useState<{
    title?: string
    category?: string
    executor?: string
    dueAt?: Date[]
    status?: string
  }>({})
  const [display, setDisplay] = useState('table')
  const {
    loadingMemberTasks,
    executors,
    memberTasks,
    loadMoreMemberTasks,
    refetchMemberTasks,
  } = useMemberTaskCollection({
    memberId,
    ...filter,
    limit: display === 'table' ? 10 : undefined,
  })
  const [selectedMemberTask, setSelectedMemberTask] = useState<MemberTaskProps | null>(null)
  const [visible, setVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getColumnSearchProps: (dataIndex: keyof MemberTaskProps) => ColumnProps<MemberTaskProps> = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="p-2">
        <Input
          ref={searchInputRef}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => {
            confirm()
            setFilter(filter => ({
              ...filter,
              [dataIndex]: selectedKeys[0],
            }))
          }}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <div>
          <Button
            type="primary"
            onClick={() => {
              confirm()
              setFilter(filter => ({
                ...filter,
                [dataIndex]: selectedKeys[0],
              }))
            }}
            icon={<SearchOutlined />}
            size="small"
            className="mr-2"
            style={{ width: 90 }}
          >
            {formatMessage(commonMessages.ui.search)}
          </Button>
          <Button
            onClick={() => {
              clearFilters && clearFilters()
              setFilter(filter => ({
                ...filter,
                [dataIndex]: undefined,
              }))
            }}
            size="small"
            style={{ width: 90 }}
          >
            {formatMessage(commonMessages.ui.reset)}
          </Button>
        </div>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilterDropdownVisibleChange: visible => visible && setTimeout(() => searchInputRef.current?.select(), 100),
  })

  const columns: ColumnProps<MemberTaskProps>[] = [
    {
      dataIndex: 'title',
      title: formatMessage(memberMessages.label.taskTitle),
      render: (text, record, index) => (
        <div>
          <StyledTitle className="mr-2">{record.title}</StyledTitle>
          <StyledSubTitle>/ {record.member.name}</StyledSubTitle>
        </div>
      ),
      ...getColumnSearchProps('title'),
    },
    {
      dataIndex: 'priority',
      title: formatMessage(memberMessages.label.priority),
      render: (text, record, index) =>
        record.priority === 'high' ? (
          <MemberTaskTag variant="high">{formatMessage(memberMessages.status.priorityHigh)}</MemberTaskTag>
        ) : record.priority === 'medium' ? (
          <MemberTaskTag variant="medium">{formatMessage(memberMessages.status.priorityMedium)}</MemberTaskTag>
        ) : (
          <MemberTaskTag variant="low">{formatMessage(memberMessages.status.priorityLow)}</MemberTaskTag>
        ),
      sorter: (a, b) => priorityLevel[a.priority] - priorityLevel[b.priority],
    },
    {
      dataIndex: 'status',
      title: formatMessage(memberMessages.label.status),
      render: (text, record, index) =>
        record.status === 'pending' ? (
          <MemberTaskTag variant="pending">{formatMessage(memberMessages.status.statusPending)}</MemberTaskTag>
        ) : record.status === 'in-progress' ? (
          <MemberTaskTag variant="in-progress">{formatMessage(memberMessages.status.statusInProgress)}</MemberTaskTag>
        ) : (
          <MemberTaskTag variant="done">{formatMessage(memberMessages.status.statusDone)}</MemberTaskTag>
        ),
      sorter: (a, b) => statusLevel[a.status] - statusLevel[b.status],
    },
    {
      dataIndex: 'category',
      title: formatMessage(memberMessages.label.category),
      render: (text, record, index) => record.category?.name,
      ...getColumnSearchProps('category'),
    },
    {
      dataIndex: 'dueAt',
      title: formatMessage(memberMessages.label.dueDate),
      render: (text, record, index) => (record.dueAt ? moment(record.dueAt).format('YYYY-MM-DD HH:mm') : ''),
      sorter: (a, b) => (b.dueAt?.getTime() || 0) - (a.dueAt?.getTime() || 0),
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="p-2">
          <DatePicker.RangePicker
            className="mb-2"
            value={selectedKeys.length ? [moment(selectedKeys[0]), moment(selectedKeys[1])] : null}
            onChange={(date, dateString: [string, string]) => {
              setSelectedKeys(date ? dateString : [])
            }}
          />
          <div className="d-flex justify-content-center">
            <Button
              type="primary"
              onClick={() => {
                confirm()
                setFilter(filter => ({
                  ...filter,
                  dueAt: selectedKeys.length
                    ? [moment(selectedKeys[0]).startOf('day').toDate(), moment(selectedKeys[1]).endOf('day').toDate()]
                    : undefined,
                }))
              }}
              icon={<SearchOutlined />}
              size="small"
              className="mr-2"
              style={{ width: 90 }}
            >
              {formatMessage(commonMessages.ui.search)}
            </Button>
            <Button
              onClick={() => {
                clearFilters && clearFilters()
                setFilter(filter => ({
                  ...filter,
                  dueAt: undefined,
                }))
              }}
              size="small"
              style={{ width: 90 }}
            >
              {formatMessage(commonMessages.ui.reset)}
            </Button>
          </div>
        </div>
      ),
    },
    {
      dataIndex: 'executor',
      title: formatMessage(memberMessages.label.assign),
      render: (text, record, index) =>
        record.executor ? (
          <div className="d-flex align-items-center justify-content-start">
            <AvatarImage src={record.executor.avatarUrl} size="28px" className="mr-2" />
            <StyledName>{record.executor.name}</StyledName>
          </div>
        ) : null,
      ...getColumnSearchProps('executor'),
    },
  ]

  return (
    <>
      <div className="d-flex align-item-center justify-content-between mb-4">
        <MemberTaskAdminModal
          renderTrigger={({ setVisible }) => (
            <Button type="primary" icon={<FileAddOutlined />} onClick={() => setVisible(true)}>
              {formatMessage(memberMessages.ui.newTask)}
            </Button>
          )}
          title={formatMessage(memberMessages.ui.newTask)}
          initialMemberId={memberId}
          initialExecutorId={memberId && currentMemberId ? currentMemberId : undefined}
          onRefetch={refetchMemberTasks}
        />

        <div>
          {display === 'calendar' && (
            <>
              <Select
                allowClear
                placeholder={formatMessage(memberMessages.label.status)}
                filterOption={(input, option: any) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                className="mr-3"
                style={{ width: '150px' }}
                onSelect={(value: MemberTaskProps['status']) => {
                  setFilter(filter => ({
                    ...filter,
                    status: value,
                  }))
                  refetchMemberTasks()
                }}
                onClear={() => {
                  setFilter(filter => ({
                    ...filter,
                    status: undefined,
                  }))
                }}
              >
                <Select.Option value="pending">{formatMessage(memberMessages.status.statusPending)}</Select.Option>
                <Select.Option value="in-progress">
                  {formatMessage(memberMessages.status.statusInProgress)}
                </Select.Option>
                <Select.Option value="done">{formatMessage(memberMessages.status.statusDone)}</Select.Option>
              </Select>
              <Select
                allowClear
                showSearch
                placeholder={formatMessage(memberMessages.label.manager)}
                filterOption={(input, option: any) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                className="mr-3"
                style={{ width: '150px' }}
                onSelect={value => {
                  setFilter(filter => ({
                    ...filter,
                    executor: `${value}` || undefined,
                  }))
                }}
                onClear={() => {
                  setFilter(filter => ({
                    ...filter,
                    executor: undefined,
                  }))
                }}
              >
                {executors.map(executor => (
                  <Select.Option key={executor.id} value={executor.name}>
                    {executor.name}
                  </Select.Option>
                ))}
              </Select>
            </>
          )}

          <Button
            className="mb-3"
            onClick={() => {
              setFilter({})
              setDisplay(display === 'table' ? 'calendar' : 'table')
            }}
          >
            {display === 'table' ? formatMessage(messages.switchCalendar) : formatMessage(messages.switchTable)}
          </Button>
        </div>
      </div>

      <AdminBlock>
        {display === 'calendar' ? (
          <Spin spinning={loadingMemberTasks}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={memberTasks
                .filter(memberTask => memberTask.dueAt)
                .map(memberTask => {
                  return {
                    id: memberTask.id,
                    title: `${memberTask.title}(${memberTask.member.name})`,
                    start: moment(memberTask.dueAt).format(),
                  }
                })}
              eventClick={e => {
                setSelectedMemberTask(memberTasks.find(memberTask => memberTask.id === e.event.id) || null)
                setVisible(true)
              }}
              datesSet={dateInfo => setFilter({ dueAt: [dateInfo.start, dateInfo.end] })}
            />
          </Spin>
        ) : display === 'table' ? (
          <Table
            columns={columns}
            dataSource={memberTasks}
            rowKey="id"
            loading={loadingMemberTasks}
            showSorterTooltip={false}
            rowClassName="cursor-pointer"
            pagination={false}
            onRow={record => ({
              onClick: () => {
                setSelectedMemberTask(record)
                setVisible(true)
              },
            })}
          />
        ) : null}

        {loadMoreMemberTasks && display === 'table' && (
          <div className="text-center mt-4">
            <Button
              loading={isLoading}
              onClick={() => {
                setIsLoading(true)
                loadMoreMemberTasks().then(() => setIsLoading(false))
              }}
            >
              {formatMessage(commonMessages.ui.showMore)}
            </Button>
          </div>
        )}
      </AdminBlock>

      {selectedMemberTask && (
        <MemberTaskAdminModal
          visible={visible}
          memberTask={selectedMemberTask || undefined}
          title={formatMessage(memberMessages.ui.editTask)}
          onRefetch={() => {
            refetchMemberTasks()
            setSelectedMemberTask(null)
          }}
          onCancel={() => setSelectedMemberTask(null)}
        />
      )}
    </>
  )
}

const useMemberTaskCollection = (options?: {
  memberId?: string
  title?: string
  category?: string
  executor?: string
  dueAt?: Date[]
  status?: string
  limit?: number
}) => {
  const condition: types.GET_MEMBER_TASK_COLLECTIONVariables['condition'] = {
    member_id: { _eq: options?.memberId },
    title: options?.title ? { _ilike: options?.title } : undefined,
    category: options?.category ? { name: { _ilike: options?.category } } : undefined,
    executor: options?.executor
      ? { _or: [{ name: { _ilike: options?.executor } }, { username: { _ilike: options?.executor } }] }
      : undefined,
    due_at: options?.dueAt ? { _gte: options?.dueAt[0], _lte: options?.dueAt[1] } : undefined,
    status: options?.status ? { _ilike: options?.status } : undefined,
  }

  const { loading, error, data, refetch, fetchMore } = useQuery<
    types.GET_MEMBER_TASK_COLLECTION,
    types.GET_MEMBER_TASK_COLLECTIONVariables
  >(
    gql`
      query GET_MEMBER_TASK_COLLECTION($condition: member_task_bool_exp, $limit: Int) {
        executors: member_task(where: { executor_id: { _is_null: false } }, distinct_on: [executor_id]) {
          id
          executor {
            id
            name
          }
        }
        member_task_aggregate(where: $condition) {
          aggregate {
            count
          }
        }
        member_task(where: $condition, limit: $limit, order_by: { created_at: desc }) {
          id
          title
          description
          priority
          status
          due_at
          created_at
          category {
            id
            name
          }
          member {
            id
            name
            username
          }
          executor {
            id
            name
            username
            picture_url
          }
        }
      }
    `,
    {
      variables: {
        condition,
        limit: options?.limit,
      },
    },
  )

  const executors: {
    id: string
    name: string
  }[] =
    data?.executors.map(v => ({
      id: v.executor?.id || '',
      name: v.executor?.name || '',
    })) || []

  const memberTasks: MemberTaskProps[] =
    loading || error || !data
      ? []
      : data.member_task.map(v => ({
          id: v.id,
          title: v.title,
          priority: v.priority as MemberTaskProps['priority'],
          status: v.status as MemberTaskProps['status'],
          category: v.category
            ? {
                id: v.category.id,
                name: v.category.name,
              }
            : null,
          dueAt: v.due_at && new Date(v.due_at),
          createdAt: v.created_at && new Date(v.created_at),
          description: v.description,
          member: {
            id: v.member.id,
            name: v.member.name || v.member.username,
          },
          executor: v.executor
            ? {
                id: v.executor.id,
                name: v.executor.name || v.executor.username,
                avatarUrl: v.executor.picture_url,
              }
            : null,
        }))

  const loadMoreMemberTasks =
    (data?.member_task_aggregate.aggregate?.count || 0) > (options?.limit || 0)
      ? () =>
          fetchMore({
            variables: {
              condition: {
                ...condition,
                created_at: { _lt: data?.member_task.slice(-1)[0]?.created_at },
              },
              limit: options?.limit,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return prev
              }
              return Object.assign({}, prev, {
                member_task_aggregate: fetchMoreResult.member_task_aggregate,
                member_task: [...prev.member_task, ...fetchMoreResult.member_task],
              })
            },
          })
      : undefined

  return {
    loadingMemberTasks: loading,
    errorMemberTasks: error,
    executors,
    memberTasks,
    refetchMemberTasks: refetch,
    loadMoreMemberTasks,
  }
}

export default MemberTaskAdminBlock
