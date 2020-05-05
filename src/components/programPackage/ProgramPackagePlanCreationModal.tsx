import { useMutation } from '@apollo/react-hooks'
import { Button, Checkbox, DatePicker, Icon, Input, InputNumber, message, Radio } from 'antd'
import Form, { FormComponentProps } from 'antd/lib/form'
import BraftEditor from 'braft-editor'
import gql from 'graphql-tag'
import moment from 'moment-timezone'
import React, { useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import styled from 'styled-components'
import { commonMessages, errorMessages, programMessages, programPackageMessages } from '../../helpers/translation'
import types from '../../types'
import { PeriodType } from '../../types/general'
import { ProgramPackagePlan } from '../../types/programPackage'
import AdminBraftEditor from '../admin/AdminBraftEditor'
import AdminModal from '../admin/AdminModal'
import ProgramPeriodTypeDropdown from '../program/ProgramPeriodTypeDropdown'

const StyledForm = styled(Form)`
  .ant-form-item-label {
    line-height: 2;
  }

  .notation {
    line-height: 1.5;
    letter-spacing: 0.4px;
    font-size: 14px;
    font-weight: 500;
    color: #9b9b9b;
    white-space: pre-line;

    span {
      display: block;
    }
  }
`
const StyledIcon = styled(Icon)`
  color: #ff7d62;
`

const messages = defineMessages({
  createPlan: { id: 'program.ui.createPlan', defaultMessage: '建立方案' },
  allowTempoDelivery: { id: 'programPackage.ui.allowTempoDelivery', defaultMessage: '啟用節奏交付' },
  isPublished: { id: 'programPackage.label.isPublished', defaultMessage: '是否開賣' },
  publish: { id: 'programPackage.ui.publish', defaultMessage: '發售，課程組合上架後立即開賣' },
  unpublish: { id: 'programPackage.ui.unpublish', defaultMessage: '停售，此方案暫停對外銷售，並從課程組合中隱藏' },
  paymentType: { id: 'programPackage.label.paymentType', defaultMessage: '付費類型' },
  perpetual: { id: 'programPackage.label.perpetual', defaultMessage: '單次' },
  subscription: { id: 'programPackage.ui.subscription', defaultMessage: '訂閱' },
  perpetualPeriod: { id: 'programPackage.label.perpetualPeriod', defaultMessage: '觀看期限' },
  subscriptionPeriod: { id: 'programPackage.lable.subscriptionPeriod', defaultMessage: '訂閱週期' },

  permissionType: { id: 'program.label.permissionType', defaultMessage: '選擇內容觀看權限' },
  availableForPastContent: { id: 'program.label.availableForPastContent', defaultMessage: '可看過去內容' },
  unavailableForPastContent: { id: 'program.label.unavailableForPastContent', defaultMessage: '不可看過去內容' },
  subscriptionPeriodType: { id: 'program.label.subscriptionPeriodType', defaultMessage: '訂閱週期' },
  salePriceNotation: {
    id: 'program.text.salePriceNotation',
    defaultMessage: '購買到優惠價的會員，往後每期皆以優惠價收款',
  },
  discountDownNotation: {
    id: 'program.text.discountDownNotation',
    defaultMessage: '定價或優惠價 - 首期折扣 = 首期支付金額\nEX：100 - 20 = 80，此欄填入 20',
  },
  planDescription: { id: 'program.label.planDescription', defaultMessage: '方案描述' },
})

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

type ProgramPackagePlanCreationModalProps = {
  programPackageId: string
  plan?: ProgramPackagePlan
  maxPosition?: number
  onRefetch?: () => void
} & FormComponentProps

const ProgramPackagePlanCreationModal: React.FC<ProgramPackagePlanCreationModalProps> = ({
  programPackageId,
  plan,
  maxPosition = 0,
  onRefetch,
  form: { validateFields, getFieldDecorator, resetFields, getFieldValue },
}) => {
  const { formatMessage } = useIntl()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isSubscription, setSubscription] = useState<boolean>(false)

  const [hasSalePrice, setHasSalePrice] = useState(plan?.salePrice ? true : false)
  const [hasDiscountDownPrice, setHasDiscountDownPrice] = useState(plan?.discountDownPrice ? true : false)
  const createProgramPackagePlan = useCreateProgramPackagePlan(programPackageId)

  const handleSubmit = (onVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    validateFields(
      (
        error,
        {
          isSubscription,
          title,
          description,
          isPublish,
          isTempoDelivery,
          periodAmount,
          periodType,
          listPrice,
          salePrice,
          soldAt,
          discountDownPrice,
        },
      ) => {
        if (error) return

        setLoading(true)

        createProgramPackagePlan({
          isSubscription,
          title,
          description: description.toRAW(),
          publishedAt: isPublish ? new Date() : null,
          isTempoDelivery,
          periodAmount,
          periodType,
          listPrice,
          salePrice,
          soldAt,
          discountDownPrice,
          position: maxPosition + 10,
        })
          .then(() => {
            onRefetch && onRefetch()
            onVisible && onVisible(false)
            resetFields()
          })
          .catch(error => message.error(error.message))
          .finally(() => setLoading(false))
      },
    )
  }

  return (
    <AdminModal
      renderTrigger={({ setVisible }) => (
        <Button type="primary" icon="file-add" onClick={() => setVisible(true)}>
          {formatMessage(messages.createPlan)}
        </Button>
      )}
      icon={<Icon type="file-add" />}
      title={formatMessage(programPackageMessages.ui.connectProgram)}
      renderFooter={({ setVisible }) => (
        <div>
          <Button
            onClick={() => {
              setVisible(false)
              resetFields()
            }}
            className="mr-2"
          >
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button type="primary" loading={isLoading} onClick={() => handleSubmit(setVisible)}>
            {formatMessage(commonMessages.ui.save)}
          </Button>
        </div>
      )}
    >
      <StyledForm hideRequiredMark>
        <Form.Item label={formatMessage(programMessages.label.planTitle)} className="mb-0">
          {getFieldDecorator('title', {
            initialValue: plan?.title ?? '',
            rules: [
              {
                required: true,
                message: formatMessage(errorMessages.form.isRequired, {
                  field: formatMessage(programMessages.label.planTitle),
                }),
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('isTempoDelivery', { initialValue: plan?.isTempoDelivery || false })(
            <Checkbox>{formatMessage(messages.allowTempoDelivery)}</Checkbox>,
          )}
        </Form.Item>

        <Form.Item label={formatMessage(messages.isPublished)}>
          {getFieldDecorator('isPublish', {
            initialValue: plan?.publishedAt,
            rules: [{ required: true }],
          })(
            <Radio.Group>
              <Radio value={true} style={radioStyle}>
                {formatMessage(messages.publish)}
              </Radio>
              <Radio value={false} style={radioStyle}>
                {formatMessage(messages.unpublish)}
              </Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label={formatMessage(messages.paymentType)}>
          {getFieldDecorator('isSubscription', {
            initialValue: !!plan?.isSubscription,
            rules: [{ required: true }],
          })(
            <Radio.Group onChange={e => setSubscription(e.target.value)}>
              <Radio value={false} style={radioStyle}>
                {formatMessage(messages.perpetual)}
              </Radio>
              <Radio value={true} style={radioStyle}>
                {formatMessage(messages.subscription)}
              </Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item
          label={isSubscription ? formatMessage(messages.subscriptionPeriod) : formatMessage(messages.perpetualPeriod)}
          className="mb-0"
        >
          <Form.Item className="d-inline-block mr-2">
            {getFieldDecorator('periodAmount', { initialValue: 1 })(
              <InputNumber min={0} parser={value => (value ? value.replace(/\D/g, '') : '')} />,
            )}
          </Form.Item>
          <Form.Item className="d-inline-block mr-2">
            {getFieldDecorator('periodType', { initialValue: 'M' })(<ProgramPeriodTypeDropdown isShortenPeriodType />)}
          </Form.Item>
        </Form.Item>

        <Form.Item label={formatMessage(commonMessages.term.listPrice)}>
          {getFieldDecorator('listPrice', { initialValue: 0 })(
            <InputNumber
              min={0}
              formatter={value => `NT$ ${value}`}
              parser={value => (value ? value.replace(/\D/g, '') : '')}
            />,
          )}
        </Form.Item>

        <div className="mb-4">
          <Checkbox defaultChecked={hasSalePrice} onChange={e => setHasSalePrice(e.target.checked)}>
            {formatMessage(commonMessages.term.salePrice)}
          </Checkbox>
        </div>
        <Form.Item className={hasSalePrice ? 'm-0' : 'd-none'}>
          <Form.Item className="d-inline-block mr-2">
            {getFieldDecorator('salePrice', { initialValue: plan?.salePrice || 0 })(
              <InputNumber
                min={0}
                formatter={value => `NT$ ${value}`}
                parser={value => (value ? value.replace(/\D/g, '') : '')}
              />,
            )}
          </Form.Item>
          <Form.Item className="d-inline-block mr-2">
            {getFieldDecorator('soldAt', {
              initialValue: plan?.soldAt ? moment(plan.soldAt) : null,
              rules: [
                {
                  required: hasSalePrice,
                  message: formatMessage(errorMessages.form.date),
                },
              ],
            })(<DatePicker placeholder={formatMessage(commonMessages.label.salePriceEndTime)} />)}
          </Form.Item>
          {getFieldValue('soldAt') && moment(getFieldValue('soldAt')).isBefore(moment()) ? (
            <div className="d-inline-block">
              <StyledIcon type="exclamation-circle" theme="filled" className="mr-1" />
              <span>{formatMessage(commonMessages.label.outdated)}</span>
            </div>
          ) : null}
        </Form.Item>

        {isSubscription && (
          <>
            <div className="mb-4">
              <Checkbox defaultChecked={hasDiscountDownPrice} onChange={e => setHasDiscountDownPrice(e.target.checked)}>
                {formatMessage(commonMessages.label.discountDownPrice)}
              </Checkbox>
            </div>

            <Form.Item className={hasDiscountDownPrice ? 'm-0' : 'd-none'}>
              <Form.Item className="d-inline-block mr-2">
                {getFieldDecorator('discountDownPrice', { initialValue: plan?.salePrice || 0 })(
                  <InputNumber
                    min={0}
                    formatter={value => `NT$ ${value}`}
                    parser={value => (value ? value.replace(/\D/g, '') : '')}
                  />,
                )}
              </Form.Item>
            </Form.Item>
          </>
        )}

        <Form.Item label={formatMessage(messages.planDescription)}>
          {getFieldDecorator('description', {
            initialValue: BraftEditor.createEditorState(plan?.description ?? null),
          })(<AdminBraftEditor variant="short" />)}
        </Form.Item>
      </StyledForm>
    </AdminModal>
  )
}

const useCreateProgramPackagePlan = (programPackageId: string) => {
  const [createProgramPackagePlanHandler] = useMutation<
    types.INSERT_PROGRAM_PACKAGE_PLAN,
    types.INSERT_PROGRAM_PACKAGE_PLANVariables
  >(gql`
    mutation INSERT_PROGRAM_PACKAGE_PLAN(
      $programPackageId: uuid!
      $isSubscription: Boolean!
      $title: String
      $description: String
      $publishedAt: timestamptz
      $periodAmount: numeric!
      $periodType: String!
      $listPrice: numeric!
      $salePrice: numeric
      $soldAt: timestamptz
      $discountDownPrice: numeric
      $position: numeric
      $isTempoDelivery: Boolean!
    ) {
      insert_program_package_plan(
        objects: {
          program_package_id: $programPackageId
          is_subscription: $isSubscription
          title: $title
          description: $description
          published_at: $publishedAt
          period_amount: $periodAmount
          period_type: $periodType
          list_price: $listPrice
          sale_price: $salePrice
          sold_at: $soldAt
          discount_down_price: $discountDownPrice
          position: $position
          is_tempo_delivery: $isTempoDelivery
        }
      ) {
        affected_rows
      }
    }
  `)

  const createProgramPackagePlan = ({
    isSubscription,
    title,
    description,
    publishedAt,
    isTempoDelivery,
    periodAmount,
    periodType,
    listPrice,
    salePrice,
    soldAt,
    discountDownPrice,
    position,
  }: {
    isSubscription: boolean
    title: string
    description: string | null
    publishedAt: Date | null
    isTempoDelivery: boolean
    periodAmount: number
    periodType: PeriodType
    listPrice: number
    salePrice: number
    soldAt: Date | null
    discountDownPrice: number
    position: number
  }) => {
    return createProgramPackagePlanHandler({
      variables: {
        isSubscription,
        title,
        description,
        publishedAt,
        programPackageId,
        isTempoDelivery,
        periodAmount,
        periodType,
        listPrice,
        salePrice,
        soldAt,
        discountDownPrice,
        position,
      },
    })
  }

  return createProgramPackagePlan
}

export default Form.create<ProgramPackagePlanCreationModalProps>()(ProgramPackagePlanCreationModal)
