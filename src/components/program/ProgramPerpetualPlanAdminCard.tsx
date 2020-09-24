import { useMutation } from '@apollo/react-hooks'
import { Button, Form, InputNumber, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { handleError } from '../../helpers'
import { commonMessages, errorMessages } from '../../helpers/translation'
import types from '../../types'
import { ProgramAdminProps } from '../../types/program'
import SaleInput from '../form/SaleInput'

const ProgramPerpetualPlanAdminCard: React.FC<{
  program: ProgramAdminProps
  onRefetch?: () => void
}> = ({ program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm()
  const [updateProgram] = useMutation<
    types.UPDATE_PROGRAM_PERPETUAL_PLAN,
    types.UPDATE_PROGRAM_PERPETUAL_PLANVariables
  >(UPDATE_PROGRAM_PERPETUAL_PLAN)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: any) => {
    setLoading(true)
    updateProgram({
      variables: {
        programId: program.id,
        listPrice: values.listPrice || 0,
        salePrice: values.sale?.price || null,
        soldAt: values.sale?.soldAt || null,
        isCountdownTimerVisible: values.sale?.timerVisible || false,
      },
    })
      .then(() => {
        message.success(formatMessage(commonMessages.event.successfullySaved))
        onRefetch && onRefetch()
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <Form
      form={form}
      layout="vertical"
      colon={false}
      hideRequiredMark
      initialValues={{
        listPrice: program.listPrice || 0,
        sale: program.soldAt
          ? {
              price: program.salePrice,
              soldAt: program.soldAt,
              timerVisible: program?.isCountdownTimerVisible || false,
            }
          : null,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        label={formatMessage(commonMessages.term.listPrice)}
        name="listPrice"
        rules={[
          {
            required: true,
            message: formatMessage(errorMessages.form.isRequired, {
              field: formatMessage(commonMessages.term.listPrice),
            }),
          },
        ]}
      >
        <InputNumber
          min={0}
          formatter={value => `NT$ ${value}`}
          parser={value => (value ? value.replace(/\D/g, '') : '')}
        />
      </Form.Item>

      <Form.Item
        name="sale"
        rules={[{ validator: (rule, value, callback) => callback(value && !value.soldAt ? '' : undefined) }]}
      >
        <SaleInput timer />
      </Form.Item>

      <Form.Item>
        <Button className="mr-2" onClick={() => form.resetFields()}>
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const UPDATE_PROGRAM_PERPETUAL_PLAN = gql`
  mutation UPDATE_PROGRAM_PERPETUAL_PLAN(
    $programId: uuid!
    $listPrice: numeric
    $salePrice: numeric
    $soldAt: timestamptz
    $isCountdownTimerVisible: Boolean!
  ) {
    update_program(
      where: { id: { _eq: $programId } }
      _set: {
        list_price: $listPrice
        sale_price: $salePrice
        sold_at: $soldAt
        is_countdown_timer_visible: $isCountdownTimerVisible
      }
    ) {
      affected_rows
    }
  }
`

export default ProgramPerpetualPlanAdminCard
