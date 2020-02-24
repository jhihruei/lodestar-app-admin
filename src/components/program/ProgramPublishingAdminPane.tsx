import { useMutation } from '@apollo/react-hooks'
import { Button, Icon, Modal, Skeleton, Typography } from 'antd'
import { CardProps } from 'antd/lib/card'
import gql from 'graphql-tag'
import React, { useContext } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { handleError } from '../../helpers'
import { commonMessages } from '../../helpers/translation'
import { ProgramType } from '../../schemas/program'
import types from '../../types'
import AdminCard from '../admin/AdminCard'

const messages = defineMessages({
  programPublishingSettings: { id: 'program.label.programPublishingSettings', defaultMessage: '發佈設定' },
  unpublishingTitle: { id: 'program.text.unpublishingTitle', defaultMessage: '確定要取消發佈？' },
  unpublishingWarning: {
    id: 'program.text.unpublishingWarning',
    defaultMessage: '課程將下架且不會出現在課程列表，已購買的學生仍然可以看到課程內容。',
  },
  isPublishedNotation: {
    id: 'program.text.isPublishedNotation',
    defaultMessage: '現在你的課程已經發佈，此課程並會出現在頁面上，學生將能購買此課程。',
  },
  isUnpublishedNotation: {
    id: 'program.text.isUnpublishedNotation',
    defaultMessage: '因你的課程未發佈，此課程並不會顯示在頁面上，學生也不能購買此課程。',
  },
  notCompleteNotation: {
    id: 'program.text.notCompleteNotation',
    defaultMessage: '請填寫以下必填資料，填寫完畢即可由此發佈',
  },
  jumpTo: { id: 'program.ui.jumpTo', defaultMessage: '前往填寫' },
  noProgramAbstract: { id: 'program.text.noProgramAbstract', defaultMessage: '尚未填寫課程摘要' },
  noProgramDescription: { id: 'program.text.noProgramDescription', defaultMessage: '尚未填寫課程敘述' },
  noProgramContent: { id: 'program.text.noProgramContent', defaultMessage: '尚未新增任何內容' },
  noPrice: { id: 'program.text.noPrice', defaultMessage: '尚未訂定售價' },
})

type ProgramPublishingAdminPaneProps = CardProps & {
  program: ProgramType | null
  onRefetch?: () => void
}
const ProgramPublishingAdminPane: React.FC<ProgramPublishingAdminPaneProps> = ({ program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const theme = useContext(ThemeContext)

  const [publishProgram] = useMutation<types.PUBLISH_PROGRAM, types.PUBLISH_PROGRAMVariables>(PUBLISH_PROGRAM)

  if (!program) {
    return <Skeleton active />
  }

  const isPublished = (program && program.publishedAt) || false

  const errors: { message: string; to: string }[] = []
  if (!program.abstract) {
    errors.push({
      message: formatMessage(messages.noProgramAbstract),
      to: `/programs/${program.id}?active=general`,
    })
  }
  if (!program.description) {
    errors.push({
      message: formatMessage(messages.noProgramDescription),
      to: `/programs/${program.id}?active=general`,
    })
  }
  if (program.contentSections.map(v => v.programContents.length).reduce((a, b) => a + b, 0) === 0) {
    errors.push({
      message: formatMessage(messages.noProgramContent),
      to: `/programs/${program.id}?active=content`,
    })
  }
  if (program.isSubscription) {
    if (program.plans.length === 0) {
      errors.push({
        message: formatMessage(messages.noPrice),
        to: `/programs/${program.id}?active=plan`,
      })
    }
  } else {
    if (program.listPrice === null) {
      errors.push({
        message: formatMessage(messages.noPrice),
        to: `/programs/${program.id}?active=plan`,
      })
    }
  }
  const isValidate = errors.length === 0

  const handlePublish = () => {
    program &&
      publishProgram({
        variables: { programId: program.id, publishedAt: new Date() },
      })
        .then(() => onRefetch && onRefetch())
        .catch(handleError)
  }
  const handleUnPublish = () => {
    program &&
      Modal.confirm({
        title: formatMessage(messages.unpublishingTitle),
        content: formatMessage(messages.unpublishingWarning),
        onOk: () => {
          publishProgram({
            variables: { programId: program.id, publishedAt: null },
          })
            .then(() => onRefetch && onRefetch())
            .catch(handleError)
        },
        onCancel: () => {},
      })
  }

  return (
    <div className="py-3">
      <div className="container">
        <Typography.Title className="pb-3" level={3}>
          {formatMessage(messages.programPublishingSettings)}
        </Typography.Title>
        <AdminCard loading={!program}>
          {program && (
            <div className="d-flex flex-column align-items-center py-3  ">
              <div className="mb-3">
                <Icon
                  type={isPublished ? 'check-circle' : isValidate ? 'warning' : 'close-circle'}
                  style={{ fontSize: 64, color: theme['@primary-color'] }}
                />
              </div>
              <div className="mb-2">
                <Typography.Title level={4}>
                  {isPublished
                    ? formatMessage(commonMessages.status.published)
                    : isValidate
                    ? formatMessage(commonMessages.status.unpublished)
                    : formatMessage(commonMessages.status.notComplete)}
                </Typography.Title>
              </div>
              <div className="mb-3">
                <Typography.Paragraph>
                  {isPublished
                    ? formatMessage(messages.isPublishedNotation)
                    : isValidate
                    ? formatMessage(messages.isUnpublishedNotation)
                    : formatMessage(messages.notCompleteNotation)}
                </Typography.Paragraph>
              </div>
              {!isValidate && (
                <div className="px-5 py-4 mb-3" style={{ backgroundColor: '#f7f8f8', width: '100%' }}>
                  {errors.map((error, idx) => {
                    return (
                      <div key={idx} className="d-flex align-items-center mb-2">
                        <Icon type="exclamation-circle" className="mr-1" />
                        <span className="mr-1">{error.message}</span>
                        <span>
                          <Link to={error.to}>
                            {formatMessage(messages.jumpTo)} <Icon type="right" />
                          </Link>
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
              {isPublished ? (
                <Button onClick={handleUnPublish}>{formatMessage(commonMessages.ui.cancelPublishing)}</Button>
              ) : (
                <Button type="primary" disabled={!isValidate} onClick={handlePublish}>
                  {formatMessage(commonMessages.ui.publish)}
                </Button>
              )}
            </div>
          )}
        </AdminCard>
      </div>
    </div>
  )
}

const PUBLISH_PROGRAM = gql`
  mutation PUBLISH_PROGRAM($programId: uuid!, $publishedAt: timestamptz) {
    update_program(_set: { published_at: $publishedAt }, where: { id: { _eq: $programId } }) {
      affected_rows
    }
  }
`

export default ProgramPublishingAdminPane
