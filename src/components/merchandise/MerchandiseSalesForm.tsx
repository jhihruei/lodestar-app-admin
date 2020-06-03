import { useMutation } from '@apollo/react-hooks'
import { Button, Checkbox, DatePicker, Form, InputNumber, message, Row } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import gql from 'graphql-tag'
import moment from 'moment-timezone'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import styled from 'styled-components'
import { handleError } from '../../helpers'
import { commonMessages } from '../../helpers/translation'
import types from '../../types'
import { MerchandiseProps } from '../../types/merchandise'

const messages = defineMessages({
  setSalePrice: {
    id: 'merchandiseMessages.label.setSalePrice',
    defaultMessage: '設定優惠價',
  },
  setSellingTime: {
    id: 'merchandiseMessages.label.setSellingTime',
    defaultMessage: '限定販售時間',
  },
})

const StyledFormItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: var(--gray-darker);
`

type MerchandiseSalesFormProps = FormComponentProps & {
  merchandise: MerchandiseProps
  merchandiseId: string
  refetch?: () => void
}
const MerchandiseSalesForm: React.FC<MerchandiseSalesFormProps> = ({ form, merchandise, merchandiseId, refetch }) => {
  const { formatMessage } = useIntl()
  const updateMerchandiseSales = useUpdateMerchandiseSales(merchandiseId)
  const [loading, setLoading] = useState<boolean>(false)
  // const [hasSalePrice, setHasSalePrice] = useState<boolean>(Boolean(merchandise.soldAt && merchandise.salePrice))
  const [hasSellingTime, setHasSellingTime] = useState<boolean>(Boolean(merchandise.startedAt || merchandise.endedAt))

  const handleSubmit = () => {
    form.validateFields((errors, values) => {
      if (errors) {
        return
      }

      setLoading(true)
      updateMerchandiseSales({
        listPrice: values.listPrice,
        salePrice: values.salePrice || null,
        soldAt: values.soldAt || null,
        startedAt: values.startedAt || null,
        endedAt: values.endedAt || null,
      })
        .then(() => {
          refetch && refetch()
          message.success(formatMessage(commonMessages.event.successfullySaved))
        })
        .finally(() => setLoading(false))
    })
  }

  return (
    <Form
      hideRequiredMark
      labelCol={{ span: 24, md: { span: 4 } }}
      wrapperCol={{ span: 24, md: { span: 8 } }}
      onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <StyledFormItemTitle>{formatMessage(commonMessages.term.listPrice)}</StyledFormItemTitle>
      {form.getFieldDecorator('listPrice', {
        initialValue: merchandise.listPrice,
      })(
        <InputNumber
          min={0}
          formatter={value => `NT$ ${value}`}
          parser={value => (value ? value.replace(/\D/g, '') : '')}
          className="mb-4"
        />,
      )}

      {/* <Row className="mb-4">
        <Checkbox checked={hasSalePrice} onChange={e => setHasSalePrice(e.target.checked)} className="mr-1" />
        <span>{formatMessage(messages.setSalePrice)}</span>
      </Row>

      {hasSalePrice && (
        <div className="mb-3">
          {form.getFieldDecorator('salePrice', {
            initialValue: merchandise.salePrice || 1,
          })(
            <InputNumber
              min={1}
              formatter={value => `NT$ ${value}`}
              parser={value => (value ? value.replace(/\D/g, '') : '')}
              className="mr-3"
            />,
          )}
          {form.getFieldDecorator('soldAt', {
            initialValue: merchandise.soldAt && moment(merchandise.soldAt),
          })(<DatePicker showTime showToday={false} />)}
        </div>
      )} */}

      <Row className="mb-4">
        <Checkbox checked={hasSellingTime} onChange={e => setHasSellingTime(e.target.checked)} className="mr-1" />
        <span>{formatMessage(messages.setSellingTime)}</span>
      </Row>

      {hasSellingTime && (
        <>
          <StyledFormItemTitle>{formatMessage(commonMessages.term.startedAt)}</StyledFormItemTitle>
          {form.getFieldDecorator('startedAt', {
            initialValue: merchandise.startedAt && moment(merchandise.startedAt),
          })(<DatePicker showTime showToday className="mb-4" />)}

          <StyledFormItemTitle>{formatMessage(commonMessages.term.endedAt)}</StyledFormItemTitle>
          {form.getFieldDecorator('endedAt', {
            initialValue: merchandise.endedAt && moment(merchandise.endedAt),
          })(<DatePicker showTime showToday={false} className="mb-4" />)}
        </>
      )}

      <Row>
        <Button onClick={() => form.resetFields()} className="mr-2">
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Row>
    </Form>
  )
}

const useUpdateMerchandiseSales = (merchandiseId: string) => {
  const [updateSales] = useMutation<types.UPDATE_MERCHANDISE_SALES, types.UPDATE_MERCHANDISE_SALESVariables>(gql`
    mutation UPDATE_MERCHANDISE_SALES(
      $merchandiseId: uuid!
      $listPrice: numeric
      $salePrice: numeric
      $soldAt: timestamptz
      $startedAt: timestamptz
      $endedAt: timestamptz
    ) {
      update_merchandise(
        where: { id: { _eq: $merchandiseId } }
        _set: {
          list_price: $listPrice
          sale_price: $salePrice
          sold_at: $soldAt
          started_at: $startedAt
          ended_at: $endedAt
        }
      ) {
        affected_rows
      }
    }
  `)

  const updateMerchandiseSales: (data: {
    listPrice: number
    salePrice: number | null
    soldAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
  }) => Promise<void> = async ({ listPrice, salePrice, soldAt, startedAt, endedAt }) => {
    try {
      await updateSales({
        variables: {
          merchandiseId,
          listPrice,
          salePrice,
          soldAt,
          startedAt,
          endedAt,
        },
      })
    } catch (error) {
      handleError(error)
    }
  }

  return updateMerchandiseSales
}

export default Form.create<MerchandiseSalesFormProps>()(MerchandiseSalesForm)
