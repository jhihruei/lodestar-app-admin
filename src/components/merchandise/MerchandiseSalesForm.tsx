import { useMutation } from '@apollo/react-hooks'
import { Button, Checkbox, DatePicker, Form, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import moment, { Moment } from 'moment'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { handleError } from '../../helpers'
import { commonMessages } from '../../helpers/translation'
import types from '../../types'
import { MerchandiseProps } from '../../types/merchandise'
import SaleInput, { SaleProps } from '../form/SaleInput'

const messages = defineMessages({
  setSalePrice: { id: 'merchandise.label.setSalePrice', defaultMessage: '設定優惠價' },
  setSellingTime: { id: 'merchandise.label.setSellingTime', defaultMessage: '限定販售時間' },
  withSalePrice: { id: 'merchandise.label.withSalePrice', defaultMessage: '開啟優惠價' },
  showCountdownTimer: { id: 'merchandise.label.showCountdownTimer', defaultMessage: '顯示倒數計時' },
})

type FieldProps = {
  startedAt: Moment
  endedAt: Moment
  sale: SaleProps
}

const MerchandiseSalesForm: React.FC<{
  merchandise: MerchandiseProps
  merchandiseId: string
  onRefetch?: () => void
}> = ({ merchandise, merchandiseId, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm<FieldProps>()
  const [updateMerchandiseSales] = useMutation<types.UPDATE_MERCHANDISE_SALES, types.UPDATE_MERCHANDISE_SALESVariables>(
    UPDATE_MERCHANDISE_SALES,
  )
  const [loading, setLoading] = useState(false)
  const [withSellingTime, setWithSellingTime] = useState(!!merchandise.startedAt || !!merchandise.endedAt)

  const handleSubmit = (values: FieldProps) => {
    setLoading(true)
    updateMerchandiseSales({
      variables: {
        merchandiseId,
        startedAt: withSellingTime ? values.startedAt?.toDate() || null : null,
        endedAt: withSellingTime ? values.endedAt?.toDate() || null : null,
        soldAt: values.sale?.soldAt || null,
        isCountdownTimerVisible: values.sale?.isTimerVisible ?? false,
      },
    })
      .then(() => {
        message.success(formatMessage(commonMessages.event.successfullySaved))
        onRefetch?.()
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <Form
      form={form}
      hideRequiredMark
      colon={false}
      initialValues={{
        startedAt: merchandise.startedAt && moment(merchandise.startedAt),
        endedAt: merchandise.endedAt && moment(merchandise.endedAt),
        sale: merchandise.soldAt
          ? {
              price: 0,
              soldAt: merchandise.soldAt,
              isTimerVisible: merchandise.isCountdownTimerVisible,
            }
          : null,
      }}
      onFinish={handleSubmit}
    >
      <div className="mb-4">
        <Checkbox checked={withSellingTime} onChange={e => setWithSellingTime(e.target.checked)}>
          {formatMessage(messages.setSellingTime)}
        </Checkbox>
        <div className={`mt-2 pl-3 ${withSellingTime ? '' : 'd-none'}`}>
          <Form.Item name="startedAt" noStyle>
            <DatePicker
              format="YYYY-MM-DD HH:mm"
              showTime={{ format: 'HH:mm', defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              className="mr-2"
            />
          </Form.Item>

          <Form.Item name="endedAt" noStyle>
            <DatePicker
              format="YYYY-MM-DD HH:mm"
              showTime={{ format: 'HH:mm', defaultValue: moment('23:59:00', 'HH:mm:ss') }}
            />
          </Form.Item>
        </div>
      </div>

      <Form.Item name="sale">
        <SaleInput noPrice withTimer />
      </Form.Item>

      <div>
        <Button onClick={() => form.resetFields()} className="mr-2">
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </div>
    </Form>
  )
}

const UPDATE_MERCHANDISE_SALES = gql`
  mutation UPDATE_MERCHANDISE_SALES(
    $merchandiseId: uuid!
    $soldAt: timestamptz
    $startedAt: timestamptz
    $endedAt: timestamptz
    $isCountdownTimerVisible: Boolean
  ) {
    update_merchandise(
      where: { id: { _eq: $merchandiseId } }
      _set: {
        sold_at: $soldAt
        started_at: $startedAt
        ended_at: $endedAt
        is_countdown_timer_visible: $isCountdownTimerVisible
      }
    ) {
      affected_rows
    }
  }
`

export default MerchandiseSalesForm
