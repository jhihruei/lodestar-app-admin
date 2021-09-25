import { FileAddOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Checkbox, Form, Input, message, Radio } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import BraftEditor, { EditorState } from 'braft-editor'
import gql from 'graphql-tag'
import { useApp } from 'lodestar-app-element/src/contexts/AppContext'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import hasura from '../../hasura'
import { handleError } from '../../helpers'
import { commonMessages, errorMessages, programMessages } from '../../helpers/translation'
import { PeriodType } from '../../types/general'
import { ProgramPlanProps } from '../../types/program'
import AdminModal, { AdminModalProps } from '../admin/AdminModal'
import AdminBraftEditor from '../form/AdminBraftEditor'
import CurrencyInput from '../form/CurrencyInput'
import CurrencySelector from '../form/CurrencySelector'
import PeriodSelector from '../form/PeriodSelector'
import SaleInput, { SaleProps } from '../form/SaleInput'

const StyledNotation = styled.div`
  line-height: 1.5;
  letter-spacing: 0.4px;
  font-size: 14px;
  font-weight: 500;
  color: #9b9b9b;
  white-space: pre-line;
`

const messages = defineMessages({
  isPublished: { id: 'program.label.isPublished', defaultMessage: '是否顯示方案' },
  published: { id: 'program.label.published', defaultMessage: '發售，上架後立即開賣' },
  unpublished: { id: 'program.label.unpublished', defaultMessage: '停售，此方案暫停對外銷售並隱藏' },
  subscriptionPlan: { id: 'program.label.subscriptionPlan', defaultMessage: '訂閱付費方案' },
  permissionType: { id: 'program.label.permissionType', defaultMessage: '選擇內容觀看權限' },
  availableForPastContent: { id: 'program.label.availableForPastContent', defaultMessage: '可看過去內容' },
  unavailableForPastContent: { id: 'program.label.unavailableForPastContent', defaultMessage: '不可看過去內容' },
  availableForAllContent: { id: 'program.label.availableForAllContent', defaultMessage: '可看所有內容' },
  subscriptionPeriodType: { id: 'program.label.subscriptionPeriodType', defaultMessage: '訂閱週期' },
  planDescription: { id: 'program.label.planDescription', defaultMessage: '方案描述' },
})

type FieldProps = {
  title: string
  isPublished: boolean
  period: { type: PeriodType; amount: number }
  currencyId?: string
  listPrice: number
  sale: SaleProps
  discountDownPrice?: number
  type: 1 | 2 | 3
  description: EditorState
}

const ProgramPlanAdminModal: React.FC<
  AdminModalProps & {
    programId: string
    programPlan?: ProgramPlanProps
    onRefetch?: () => void
  }
> = ({ programId, programPlan, onRefetch, ...modalProps }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm<FieldProps>()
  const { enabledModules } = useApp()
  const [upsertProgramPlan] = useMutation<hasura.UPSERT_PROGRAM_PLAN, hasura.UPSERT_PROGRAM_PLANVariables>(
    UPSERT_PROGRAM_PLAN,
  )

  const [withDiscountDownPrice, setWithDiscountDownPrice] = useState(!!programPlan?.discountDownPrice)
  const [withPeriod, setWithPeriod] = useState(!!(programPlan?.periodAmount && programPlan?.periodType))
  const [withAutoRenewed, setWithAutoRenewed] = useState(!!programPlan?.autoRenewed)
  const [currencyId, setCurrencyId] = useState(programPlan?.currencyId || '')

  const [loading, setLoading] = useState(false)

  const handleSubmit = (onSuccess: () => void) => {
    form
      .validateFields()
      .then(() => {
        setLoading(true)
        const values = form.getFieldsValue()
        upsertProgramPlan({
          variables: {
            id: programPlan ? programPlan.id : uuid(),
            programId,
            type: values.type || 1,
            title: values.title,
            description: values.description.toRAW(),
            listPrice: values.listPrice,
            salePrice: values.sale ? values.sale.price : null,
            soldAt: values.sale?.soldAt || null,
            discountDownPrice: withDiscountDownPrice ? values.discountDownPrice : 0,
            periodAmount: withPeriod ? values.period.amount : null,
            periodType: withPeriod ? values.period.type : null,
            currencyId: values.currencyId || programPlan?.currencyId || 'TWD',
            autoRenewed: withPeriod ? withAutoRenewed : false,
            publishedAt: values.isPublished ? new Date() : null,
            isCountdownTimerVisible: !!values.sale?.isTimerVisible,
          },
        })
          .then(() => {
            message.success(formatMessage(commonMessages.event.successfullySaved))
            onSuccess()
            onRefetch?.()
          })
          .catch(handleError)
          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }
  return (
    <AdminModal
      title={formatMessage(commonMessages.label.salesPlan)}
      icon={<FileAddOutlined />}
      footer={null}
      renderFooter={({ setVisible }) => (
        <>
          <Button className="mr-2" onClick={() => setVisible(false)}>
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button type="primary" loading={loading} onClick={() => handleSubmit(() => setVisible(false))}>
            {formatMessage(commonMessages.ui.confirm)}
          </Button>
        </>
      )}
      {...modalProps}
    >
      <Form
        form={form}
        layout="vertical"
        colon={false}
        hideRequiredMark
        initialValues={{
          title: programPlan?.title,
          isPublished: !!programPlan?.publishedAt,
          currencyId: programPlan?.currencyId,
          listPrice: programPlan?.listPrice,
          sale: programPlan?.soldAt
            ? {
                price: programPlan.salePrice,
                soldAt: programPlan.soldAt,
                timerVisible: !!programPlan?.isCountdownTimerVisible,
              }
            : null,
          period: { amount: programPlan?.periodAmount || 1, type: programPlan?.periodType || 'M' },
          type: programPlan?.type || 1,
          discountDownPrice: programPlan?.discountDownPrice,
          description: BraftEditor.createEditorState(programPlan ? programPlan.description : null),
        }}
      >
        <Form.Item
          label={formatMessage(programMessages.label.planTitle)}
          name="title"
          rules={[
            {
              required: true,
              message: formatMessage(errorMessages.form.isRequired, {
                field: formatMessage(programMessages.label.planTitle),
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={formatMessage(messages.isPublished)} name="isPublished">
          <Radio.Group>
            <Radio value={true} className="d-block">
              {formatMessage(messages.published)}
            </Radio>
            <Radio value={false} className="d-block">
              {formatMessage(messages.unpublished)}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <div className="mb-4">
          <Checkbox defaultChecked={withPeriod} onChange={e => setWithPeriod(e.target.checked)}>
            {formatMessage(commonMessages.label.period)}
          </Checkbox>
        </div>

        {withPeriod && (
          <Form.Item name="period">
            <PeriodSelector />
          </Form.Item>
        )}
        {withPeriod && (
          <div className="mb-4">
            <Checkbox checked={withAutoRenewed} onChange={e => setWithAutoRenewed(e.target.checked)}>
              {formatMessage(commonMessages.label.autoRenewed)}
            </Checkbox>
          </div>
        )}
        {enabledModules?.currency && (
          <Form.Item
            label={formatMessage(commonMessages.label.currency)}
            name="currencyId"
            rules={[
              {
                required: true,
                message: formatMessage(errorMessages.form.isRequired, {
                  field: formatMessage(commonMessages.label.listPrice),
                }),
              },
            ]}
          >
            <CurrencySelector onChange={value => setCurrencyId(value && value !== currencyId ? value : currencyId)} />
          </Form.Item>
        )}

        <Form.Item label={formatMessage(commonMessages.label.listPrice)} name="listPrice">
          <CurrencyInput noLabel currencyId={currencyId} />
        </Form.Item>

        <Form.Item
          name="sale"
          rules={[{ validator: (rule, value, callback) => callback(value && !value.soldAt ? '' : undefined) }]}
        >
          <SaleInput currencyId={currencyId} withTimer />
        </Form.Item>

        {withPeriod && withAutoRenewed && (
          <div className="mb-4">
            <Checkbox defaultChecked={withDiscountDownPrice} onChange={e => setWithDiscountDownPrice(e.target.checked)}>
              {formatMessage(commonMessages.label.discountDownPrice)}
            </Checkbox>
            {withDiscountDownPrice && (
              <StyledNotation>{formatMessage(commonMessages.text.discountDownNotation)}</StyledNotation>
            )}
          </div>
        )}
        {withPeriod && withAutoRenewed && withDiscountDownPrice && (
          <Form.Item name="discountDownPrice">
            <CurrencyInput noLabel currencyId={currencyId} />
          </Form.Item>
        )}
        {withPeriod && (
          <Form.Item label={formatMessage(messages.permissionType)} name="type" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value={1} className="d-block">
                {formatMessage(messages.availableForPastContent)}
              </Radio>
              <Radio value={2} className="d-block">
                {formatMessage(messages.unavailableForPastContent)}
              </Radio>
              <Radio value={3} className="d-block">
                {formatMessage(messages.availableForAllContent)}
              </Radio>
            </Radio.Group>
          </Form.Item>
        )}
        <Form.Item label={formatMessage(messages.planDescription)} name="description">
          <AdminBraftEditor variant="short" />
        </Form.Item>
      </Form>
    </AdminModal>
  )
}

const UPSERT_PROGRAM_PLAN = gql`
  mutation UPSERT_PROGRAM_PLAN(
    $programId: uuid!
    $id: uuid!
    $type: Int!
    $title: String!
    $description: String!
    $listPrice: numeric!
    $salePrice: numeric
    $soldAt: timestamptz
    $discountDownPrice: numeric!
    $periodAmount: numeric
    $periodType: String
    $currencyId: String!
    $autoRenewed: Boolean!
    $publishedAt: timestamptz
    $isCountdownTimerVisible: Boolean!
  ) {
    insert_program_plan(
      objects: {
        id: $id
        type: $type
        title: $title
        description: $description
        list_price: $listPrice
        sale_price: $salePrice
        period_amount: $periodAmount
        period_type: $periodType
        discount_down_price: $discountDownPrice
        sold_at: $soldAt
        program_id: $programId
        currency_id: $currencyId
        auto_renewed: $autoRenewed
        published_at: $publishedAt
        is_countdown_timer_visible: $isCountdownTimerVisible
      }
      on_conflict: {
        constraint: program_plan_pkey
        update_columns: [
          type
          title
          description
          list_price
          sale_price
          discount_down_price
          period_amount
          period_type
          sold_at
          currency_id
          auto_renewed
          published_at
          is_countdown_timer_visible
        ]
      }
    ) {
      affected_rows
    }
  }
`
export default ProgramPlanAdminModal
