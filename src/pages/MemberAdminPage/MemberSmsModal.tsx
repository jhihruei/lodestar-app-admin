import Icon, { MessageOutlined } from '@ant-design/icons'
import { DatePicker, message } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import axios from 'axios'
import { useAuth } from 'lodestar-app-element/src/contexts/AuthContext'
import { Moment } from 'moment'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import AdminModal from '../../components/admin/AdminModal'
import { memberMessages } from '../../helpers/translation'

const MemberSmsModel: React.VFC<{ memberId: string; phone: string, name: string }> = ({ memberId, phone, name }) => {
  const [isSending, setIsSending] = useState(false)
  const [content, setContent] = useState('')
  const [sentAt, setSentAt] = useState<Moment | null>(null)
  const { authToken } = useAuth()
  const { formatMessage } = useIntl()

  return (
    <AdminModal
      okText="寄送"
      onOk={(_e, setVisible) => {
        setIsSending(true)
        axios
          .post(
            `${process.env.REACT_APP_API_BASE_ROOT}/sys/send-sms`,
            {
              memberId,
              phone,
              content,
              sentAt: sentAt ? sentAt.toDate() : undefined,
            },
            {
              headers: {
                Authorization: `bearer ${authToken}`,
              },
            },
          )
          .then(({ data: { code, error, result } }) => {
            if (code === 'SUCCESS') {
              message.success(formatMessage(memberMessages.text.smsSucceed))
            } else {
              message.error(formatMessage(memberMessages.text.smsFailed, {
                errorMessage: error
              }))
            }
          })
          .finally(() => {
            setVisible(false)
            setIsSending(false)
          })
      }}
      renderTrigger={({ setVisible }) => (
        <Icon component={() => <MessageOutlined />} onClick={() => setVisible(true)} className="cursor-pointer" />
      )}
      confirmLoading={isSending}
    >
      <div className="mb-3">{`${name} / ${phone}`}</div>
      <TextArea
        className="mb-3"
        placeholder={formatMessage(memberMessages.placeholder.smsContent)}
        required
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <DatePicker
        style={{ width: '100%' }}
        showTime
        placeholder={formatMessage(memberMessages.placeholder.smsSchedule)}
        value={sentAt}
        onChange={date => setSentAt(date)}
      />
    </AdminModal>
  )
}

export default MemberSmsModel
