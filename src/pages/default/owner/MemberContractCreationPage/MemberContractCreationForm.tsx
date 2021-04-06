import { CloseOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, DatePicker, Descriptions, Form, Input, InputNumber, Radio, Select, Space } from 'antd'
import { FormProps } from 'antd/lib/form/Form'
import moment from 'moment'
import { last } from 'ramda'
import React, { memo, useState } from 'react'
import styled from 'styled-components'
import { ContractInfo, FieldProps, installmentPlans, paymentMethods } from '.'
import { AdminBlockTitle } from '../../../../components/admin'
import CertificationUploader from './CertificationUploader'
import ReferralMemberSelector from './ReferralMemberSelector'

const StyledFieldLabel = styled.div`
  font-size: 14px;
`
const StyledPriceField = styled.div`
  width: 150px;
`

const MemberContractCreationForm: React.FC<
  FormProps<FieldProps> & {
    contracts: ContractInfo['contracts']
    projectPlans: ContractInfo['projectPlans']
    endedAt: Date | null
    products: ContractInfo['products']
    contractProducts: NonNullable<FieldProps['contractProducts']>
    appointmentPlanCreators: ContractInfo['appointmentPlanCreators']
    memberId: string
    isAppointmentOnly: boolean
    sales: ContractInfo['sales']
  }
> = memo(
  ({
    contracts,
    projectPlans,
    endedAt,
    products,
    contractProducts,
    appointmentPlanCreators,
    memberId,
    isAppointmentOnly,
    sales,
    ...formProps
  }) => {
    const [identity, setIdentity] = useState<'normal' | 'student'>('normal')
    const [certificationPath, setCertificationPath] = useState('')

    return (
      <Form layout="vertical" colon={false} hideRequiredMark {...formProps}>
        <Descriptions title="合約期間" column={2} bordered className="mb-5">
          <Descriptions.Item label="合約項目">
            <Form.Item className="mb-0" name="contractId" rules={[{ required: true, message: '請選擇合約' }]}>
              <Select<string> style={{ width: 150 }}>
                {contracts.map(v => (
                  <Select.Option key={v.id} value={v.id}>
                    {v.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="合約效期">
            <Form.Item
              className="mb-0"
              name="selectedProjectPlanId"
              rules={[{ required: true, message: '請選擇合約效期' }]}
            >
              <Select<string> style={{ width: 150 }}>
                {projectPlans.map(v => (
                  <Select.Option key={v.id} value={v.id}>
                    {v.periodAmount} {v.periodType}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div className="d-flex align-items-center mt-2">
              <div>加贈：</div>
              <Form.Item className="mb-0" name="selectedGiftDays">
                <Select<string> style={{ width: 100 }}>
                  {[0, 7, 14].map(value => (
                    <Select.Option key={value} value={value}>
                      {value}天
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Descriptions.Item>

          <Descriptions.Item label="服務開始日">
            <Form.Item className="mb-0" name="startedAt">
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="服務結束日">
            {endedAt ? moment(endedAt).format('YYYY-MM-DD HH:mm:ss') : ''}
          </Descriptions.Item>
        </Descriptions>

        <div className="mb-5">
          <AdminBlockTitle>合約內容</AdminBlockTitle>
          <Form.List name="contractProducts">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field, index) => {
                    const contractProduct = products.find(
                      product => contractProducts && product.id === contractProducts[index]?.id,
                    )

                    return (
                      <div key={field.key} className="d-flex align-items-center justify-content-start">
                        <Form.Item
                          name={[field.name, 'id']}
                          fieldKey={[field.fieldKey, 'id']}
                          label={index === 0 ? <StyledFieldLabel>項目名稱</StyledFieldLabel> : undefined}
                        >
                          <Select<string> className="mr-3" style={{ width: '250px' }}>
                            {products.map(product => (
                              <Select.Option key={product.id} value={product.id}>
                                {product.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>

                        <Form.Item label={index === 0 ? <StyledFieldLabel>單價</StyledFieldLabel> : undefined}>
                          <StyledPriceField>
                            {contractProduct?.name === '業師諮詢' && isAppointmentOnly
                              ? contractProduct?.price
                              : contractProduct?.addonPrice || contractProduct?.price || 0}
                          </StyledPriceField>
                        </Form.Item>

                        <Form.Item
                          name={[field.name, 'amount']}
                          fieldKey={[field.fieldKey, 'amount']}
                          label={index === 0 ? <StyledFieldLabel>數量</StyledFieldLabel> : undefined}
                        >
                          <InputNumber min={1} className="mr-3" />
                        </Form.Item>

                        <div className={index === 0 ? 'mt-2' : 'mb-4'}>
                          <CloseOutlined className="cursor-pointer" onClick={() => remove(field.name)} />
                        </div>
                      </div>
                    )
                  })}
                  <Button icon={<PlusOutlined />} onClick={() => add({ amount: 1 })}>
                    新增項目
                  </Button>
                </>
              )
            }}
          </Form.List>
        </div>

        <Descriptions column={1} bordered className="mb-5">
          <Descriptions.Item label="指定業師">
            <Form.Item noStyle name="withCreatorId">
              <Radio.Group>
                <Radio value={false}>不指定</Radio>
                <Radio value={true}>指定</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="creatorId" noStyle>
              <Select<string> style={{ width: '150px' }}>
                {appointmentPlanCreators.map(v =>
                  v.id && v.name ? (
                    <Select.Option key={v.id} value={v.id}>
                      {v.name}
                    </Select.Option>
                  ) : null,
                )}
              </Select>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="學員身份" className="m-0">
            <div className="d-flex align-items-center">
              <Form.Item name="identity" noStyle>
                <Radio.Group value={identity} onChange={e => setIdentity(e.target.value)}>
                  <Radio value="normal">一般</Radio>
                  <Radio value="student">學生</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="certification" noStyle>
                <CertificationUploader
                  memberId={memberId}
                  identity={identity}
                  onCertificationPathSet={path => setCertificationPath(path)}
                />
              </Form.Item>

              {<span className={identity === 'normal' ? 'd-none' : 'ml-3'}>{certificationPath}</span>}
            </div>
          </Descriptions.Item>

          <Descriptions.Item label="介紹人">
            <Form.Item name="referralMemberId" noStyle>
              <ReferralMemberSelector />
            </Form.Item>
          </Descriptions.Item>
          {/* <Descriptions.Item label="扣除訂金 $1000">
      <Checkbox value={hasDeposit} onChange={e => setHasDeposit(e.target.checked)} />
    </Descriptions.Item> */}
        </Descriptions>

        <Descriptions title="付款方式" bordered className="mb-5">
          <Descriptions.Item label="付款方式">
            <Form.Item className="mb-0" name="paymentMethod" rules={[{ required: true, message: '請選擇付款方式' }]}>
              <Select<string> style={{ width: 120 }}>
                {paymentMethods.map((payment: string) => (
                  <Select.Option key={payment} value={payment}>
                    {payment}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="分期期數">
            <Form.Item className="mb-0" name="installmentPlan" rules={[{ required: true, message: '請選擇分期期數' }]}>
              <Select<string> style={{ width: 120 }}>
                {installmentPlans.map(installmentPlan => (
                  <Select.Option key={installmentPlan} value={installmentPlan}>
                    {installmentPlan}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="金流編號">
            <Form.Item className="mb-0" name="paymentNumber" rules={[{ required: true, message: '請填寫金流編號' }]}>
              <Input />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="承辦人 / 分潤" span={3}>
            <Space align="center" className="d-flex mb-3">
              <Form.Item name="orderExecutorId" rules={[{ required: true, message: '請填寫承辦人' }]}>
                <Select<string> showSearch placeholder="承辦人" style={{ width: '150px' }} optionFilterProp="label">
                  {sales.map(member => (
                    <Select.Option key={member.id} value={member.id} label={`${member.id} ${member.name}`}>
                      {member.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="orderExecutorRatio">
                <InputNumber min={0.1} max={1} step={0.1} style={{ width: '60px' }} />
              </Form.Item>
            </Space>

            <Form.List name="orderExecutors">
              {(fields, { add, remove }) => (
                <div>
                  {fields.map(field => (
                    <Space key={field.key} align="center" className="d-flex mb-3">
                      <Form.Item
                        {...field}
                        name={[field.name, 'memberId']}
                        fieldKey={[field.fieldKey, 'memberId']}
                        rules={[{ required: true, message: '請填寫承辦人' }]}
                      >
                        <Select<string>
                          showSearch
                          placeholder="承辦人"
                          style={{ width: '150px' }}
                          optionFilterProp="label"
                        >
                          {sales.map(member => (
                            <Select.Option key={member.id} value={member.id} label={`${member.id} ${member.name}`}>
                              {member.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item {...field} name={[field.name, 'ratio']} fieldKey={[field.fieldKey, 'ratio']}>
                        <InputNumber min={0.1} max={1} step={0.1} style={{ width: '60px' }} />
                      </Form.Item>
                      <MinusCircleOutlined className="mb-4" onClick={() => remove(field.name)} />
                    </Space>
                  ))}

                  <Button type="dashed" onClick={() => add({ ratio: 0.1 })} block>
                    <PlusOutlined /> 加入
                  </Button>
                </div>
              )}
            </Form.List>
          </Descriptions.Item>
        </Descriptions>
      </Form>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.endedAt?.getTime() === nextProps.endedAt?.getTime() &&
      prevProps.isAppointmentOnly === nextProps.isAppointmentOnly &&
      prevProps.contractProducts.length === nextProps.contractProducts.length &&
      last(prevProps.contractProducts)?.id === last(nextProps.contractProducts)?.id
    )
  },
)

export default MemberContractCreationForm
