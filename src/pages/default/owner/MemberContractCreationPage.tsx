import { CloseOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  Alert,
  Button,
  Checkbox,
  DatePicker,
  Descriptions,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Select,
  Space,
  Tag,
  Upload,
} from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import moment from 'moment'
import { range, sum, uniqBy } from 'ramda'
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { AdminBlock, AdminBlockTitle } from '../../../components/admin'
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { useApp } from '../../../contexts/AppContext'
import { useAuth } from '../../../contexts/AuthContext'
import hasura from '../../../hasura'
import { currencyFormatter, handleError, notEmpty, uploadFile } from '../../../helpers'
import { PeriodType } from '../../../types/general'
import LoadingPage from '../LoadingPage'

type FieldProps = {
  contractId: string
  creatorId?: string | null
  paymentMethod: string
  installmentPlan: number
  paymentNumber: string
  orderExecutorId: string
  orderExecutorRatio: number
  orderExecutors: {
    memberId?: string
    ratio?: number
  }[]
  contractProducts: {
    id: string
    amount: number
  }[]
}
type ProductProps = {
  id: string
  name: string
  price: number
  addonPrice: number | null
  appointments: number
  coins: number
}

type OrderItem = {
  id: string
  type: 'mainProduct' | 'addonProduct' | 'referralDiscount' | 'promotionDiscount' | 'depositDiscount'
  name: string
  price: number
  appointments: number
  coins: number
  amount: number
}

const StyledFieldLabel = styled.div`
  font-size: 14px;
`
const StyledPriceField = styled.div`
  width: 150px;
`
const StyledOrder = styled.div`
  border: 1px solid var(--gray-darker);
  padding: 1rem;
`
const StyledTotal = styled.div`
  margin-bottom: 0.5rem;
  color: ${props => props.theme['@primary-color']};
  font-size: 20px;
  text-align: right;
`

const MemberContractCreationPage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>()

  const { loading: loadingMember, error: errorMember, data: dataMember } = useQuery<hasura.GET_CONTRACT_MEMBER>(
    GET_CONTRACT_MEMBER,
    { variables: { id: memberId } },
  )

  if (loadingMember) {
    return <LoadingPage />
  }

  if (errorMember || !dataMember?.member_by_pk) {
    return null
  }

  return (
    <DefaultLayout>
      <div className="container py-5">
        <AdminBlock>
          <MemberContractForm
            member={{
              id: dataMember.member_by_pk.id,
              name: dataMember.member_by_pk.name,
              email: dataMember.member_by_pk.email,
              phones: dataMember.member_by_pk.member_phones.map(v => v.phone).join(','),
              properties: dataMember.member_by_pk.member_properties.map(v => ({
                id: v.id,
                value: v.value,
                propertyId: v.property.id,
                name: v.property.name,
              })),
            }}
          />
        </AdminBlock>
      </div>
    </DefaultLayout>
  )
}

const MemberContractForm: React.FC<{
  member: {
    id: string
    name: string
    email: string
    phones: string
    properties: {
      id: string
      value: string
      propertyId: string
      name: string
    }[]
  }
}> = ({ member }) => {
  const [form] = useForm<FieldProps>()
  const { authToken, apiHost, currentMemberId } = useAuth()
  const { id: appId } = useApp()
  const { xuemiSales } = useXuemiSales()

  const { products } = useProducts(appId)
  const { data: dataProperties } = useQuery<hasura.GET_PROPERTIES>(GET_PROPERTIES)
  const { data: dataContracts } = useQuery<hasura.GET_CONTRACTS>(GET_CONTRACTS)
  const { data: dataProjectPlans } = useQuery<hasura.GET_PROJECT_PLANS>(GET_PROJECT_PLANS)
  const { data: dataCreators } = useQuery<hasura.GET_APPOINTMENT_PLAN_CREATORS>(GET_APPOINTMENT_PLAN_CREATORS)
  const [addMemberContract] = useMutation<hasura.ADD_MEMBER_CONTRACT, hasura.ADD_MEMBER_CONTRACTVariables>(
    ADD_MEMBER_CONTRACT,
  )
  const memberBlockRef = useRef<HTMLDivElement | null>(null)

  const [memberContractUrl, setMemberContractUrl] = useState('')
  const [selectedProjectPlanId, setSelectedProjectPlanId] = useState('')
  const [selectedGiftDays, setSelectedGiftDays] = useState('')
  const [startedAt, setStartedAt] = useState<Date>(moment().add(1, 'day').startOf('day').toDate())
  const [referralMemberFilter, setReferralMemberFilter] = useState('')
  const [contractProducts, setContractProducts] = useState<
    {
      id: string
      amount: number
    }[]
  >([])
  const [withCreatorId, setWithCreatorId] = useState(false)
  const [identity, setIdentity] = useState<'normal' | 'student'>('normal')
  const [certificationPath, setCertificationPath] = useState('')
  const [referralMemberId, setReferralMemberId] = useState('')
  const [uploading, setUploading] = useState(false)
  const [hasDeposit, setHasDeposit] = useState(false)

  const { data: dataReferralMembers } = useQuery<
    hasura.GET_REFERRAL_MEMBER_COLLECTION,
    hasura.GET_REFERRAL_MEMBER_COLLECTIONVariables
  >(GET_REFERRAL_MEMBER_COLLECTION, {
    variables: {
      condition: referralMemberFilter
        ? {
            _or: [
              { name: { _ilike: `%${referralMemberFilter}%` } },
              { username: { _ilike: `%${referralMemberFilter}%` } },
              { email: { _ilike: `%${referralMemberFilter}%` } },
            ],
          }
        : undefined,
    },
  })

  const selectedProjectPlan = dataProjectPlans?.project_plan.find(v => v.id === selectedProjectPlanId)
  const endedAt = selectedProjectPlan
    ? moment(startedAt)
        .add(selectedProjectPlan.period_amount, selectedProjectPlan.period_type as PeriodType)
        .add(selectedGiftDays, 'days')
        .toDate()
    : null

  // calculate order items results
  const selectedMainProducts = contractProducts.filter(contractProduct =>
    products.find(product => product.id === contractProduct.id && product.price),
  )
  const isAppointmentOnly =
    selectedMainProducts.length === 1 &&
    products.find(product => product.id === selectedMainProducts[0].id)?.name === '業師諮詢'
  const orderProducts: OrderItem[] = contractProducts
    .map(contractProduct => {
      const product = products.find(product => product.id === contractProduct.id)
      if (!product) {
        return null
      }

      const productType: 'mainProduct' | 'addonProduct' =
        product.name === '業師諮詢' && isAppointmentOnly
          ? 'mainProduct'
          : product.addonPrice
          ? 'addonProduct'
          : 'mainProduct'

      return {
        id: contractProduct.id,
        name: product.name,
        type: productType,
        price: productType === 'mainProduct' ? product.price : product.addonPrice || 0,
        appointments:
          productType === 'mainProduct' && identity === 'student' ? product.appointments / 2 : product.appointments,
        coins: product.coins,
        amount: contractProduct.amount,
      }
    })
    .filter(notEmpty)
  const mainProducts = orderProducts.filter(selectedProduct => selectedProduct.type === 'mainProduct')
  const totalAppointments = sum(orderProducts.map(product => product.appointments * product.amount))
  const totalCoins = sum(orderProducts.map(product => product.coins * product.amount))

  if (withCreatorId && totalAppointments > 0) {
    orderProducts.push({
      id: '10c7004c-e615-4ca9-90f8-29ce674e0463',
      type: 'addonProduct',
      name: '指定業師',
      price: 1000,
      appointments: 0,
      coins: 0,
      amount: totalAppointments,
    })
  }

  const orderDiscounts: OrderItem[] = []

  if (hasDeposit) {
    orderDiscounts.push({
      id: 'a2e79c69-a200-4baa-934b-7d256f129ee0',
      type: 'depositDiscount',
      name: '扣除訂金',
      price: -1000,
      appointments: 0,
      coins: 0,
      amount: 1,
    })
  }

  const referralDiscountPrice = referralMemberId ? 2000 * -1 : 0
  if (referralDiscountPrice) {
    orderDiscounts.push({
      id: 'fe09068e-5f24-4d82-b9b3-186ee498d144',
      type: 'referralDiscount',
      name: '被介紹人折抵',
      price: referralDiscountPrice,
      appointments: 0,
      coins: 0,
      amount: mainProducts.length,
    })
  }

  const studentDiscountPrice =
    identity === 'student' && certificationPath
      ? (sum(mainProducts.map(mainProduct => mainProduct.price)) + referralDiscountPrice * mainProducts.length) * -0.1
      : 0
  if (studentDiscountPrice) {
    orderDiscounts.push({
      id: '5e298545-9190-44b1-aadc-b0d43b94cbe5',
      type: 'promotionDiscount',
      name: '學生方案',
      price: studentDiscountPrice,
      appointments: 0,
      coins: 0,
      amount: 1,
    })
  }

  const groupDiscountPrice =
    (sum(mainProducts.map(mainProduct => mainProduct.price)) +
      referralDiscountPrice * mainProducts.length +
      studentDiscountPrice) *
    (mainProducts.length < 2 ? 0 : mainProducts.length === 2 ? -0.1 : mainProducts.length === 3 ? -0.15 : -0.2)
  if (Math.ceil(groupDiscountPrice)) {
    orderDiscounts.push({
      id:
        mainProducts.length === 2
          ? '47c21171-afd9-4510-aa5f-547c436125b7'
          : mainProducts.length === 3
          ? '01fa990e-ec1d-4b41-a958-5d93240a8205'
          : 'c8cfcb04-7e31-444f-8796-5800b5741019',
      type: 'promotionDiscount',
      name: mainProducts.length === 2 ? '任選兩件折抵' : mainProducts.length === 3 ? '任選三件折抵' : '任選四件折抵',
      price: Math.ceil(groupDiscountPrice),
      appointments: 0,
      coins: 0,
      amount: 1,
    })
  }
  const orderItems = [...orderProducts, ...orderDiscounts]
  const totalPrice = sum(orderItems.map(orderItem => orderItem.price * orderItem.amount))

  const handleContractAdded = async () => {
    const alert = document.getElementsByClassName('ant-alert')[0]
    if (memberBlockRef.current?.contains(alert)) {
      message.warning('學員資料請填寫完整')
      return
    }
    if (identity === 'student' && !certificationPath) {
      message.warn('需上傳證明')
      return
    }

    try {
      await form.validateFields()
    } catch (error) {
      process.env.NODE_ENV === 'development' && console.error(error)
    }

    const values = form.getFieldsValue()

    const orderExecutors: {
      member_id: string
      ratio: number
    }[] = [
      {
        member_id: values.orderExecutorId || '',
        ratio: values.orderExecutorRatio,
      },
      ...(values.orderExecutors?.map(orderExecutor => ({
        member_id: orderExecutor.memberId || '',
        ratio: orderExecutor.ratio || 0,
      })) || []),
    ].filter(v => v.member_id && v.ratio)

    if (sum(orderExecutors.map(v => v.ratio)) !== 1) {
      message.warn('承辦人分潤比例加總必須為 1')
      return
    }

    if (!window.confirm('請確認合約是否正確？')) {
      return
    }

    // generate coupons
    const couponPlanId = v4()
    const coupons = range(0, totalAppointments).map((v, index) => ({
      member_id: member.id,
      coupon_code: {
        data: {
          code: moment().format('x') + v,
          count: 1,
          remaining: 0,
          app_id: 'xuemi',
          coupon_plan_id: index !== 0 ? couponPlanId : undefined,
          coupon_plan:
            index === 0
              ? {
                  on_conflict: {
                    constraint: 'coupon_plan_pkey',
                    update_columns: ['title'],
                  },
                  data: {
                    id: couponPlanId,
                    type: 2,
                    amount: 100,
                    title: `學米諮詢券`,
                    description: `學員編號：${member.id}, 合約編號：${values.contractId}`,
                    started_at: startedAt,
                    ended_at: endedAt,
                    scope: ['AppointmentPlan'],
                  },
                }
              : undefined,
        },
      },
    }))

    let times = 0
    const orderId = moment().format('YYYYMMDDHHmmssSSS') + `${times}`.padStart(2, '0')

    addMemberContract({
      variables: {
        memberId: member.id,
        contractId: values.contractId,
        startedAt,
        endedAt,
        authorId: currentMemberId || '',
        values: {
          orderId,
          price: totalPrice,
          coupons,
          startedAt,
          endedAt,
          invoice: {
            name: member.name,
            phone: member.phones,
            email: member.email,
          },
          coinName: `${selectedProjectPlan?.title}`,
          memberId: member.id,
          paymentNo: moment().format('YYYYMMDDHHmmss'),
          coinAmount: totalCoins,
          orderProducts: [
            {
              product_id: `ProjectPlan_${selectedProjectPlanId}`,
              name: selectedProjectPlan?.title,
              price: 0,
              started_at: startedAt,
              ended_at: endedAt,
            },
            ...orderProducts.map(v => ({
              product_id: `ProjectPlan_${v.id}`,
              name: v.name,
              price: v.price,
              started_at: startedAt,
              ended_at: endedAt,
            })),
            {
              product_id: 'Card_1af57db9-1af3-4bfd-b4a1-0c8f781ffe96',
              name: '學米 VIP 會員卡',
              price: 0,
              started_at: startedAt,
              ended_at: endedAt,
            },
          ],
          orderDiscounts: orderDiscounts.map(v => ({
            name: v.name,
            price: v.price,
            type: 'Coupon',
            target: v.id,
          })),
          orderExecutors,
          paymentOptions: {
            paymentMethod: values.paymentMethod,
            installmentPlan: values.installmentPlan,
            paymentNumber: values.paymentNumber,
          },
        },
        options: {
          appointmentCreatorId: withCreatorId ? values.creatorId : null,
          studentCertification: identity === 'student' ? certificationPath : null,
          referralMemberId,
        },
      },
    })
      .then(({ data }) => {
        const contractId = data?.insert_member_contract_one?.id
        setMemberContractUrl(`https://www.xuemi.co/members/${member.id}/contracts/${contractId}`)
        message.success('成功產生合約')
      })
      .catch(err => message.error(`產生合約失敗，請確認資料是否正確。錯誤代碼：${err}`))
  }

  return (
    <Form
      form={form}
      layout="vertical"
      colon={false}
      hideRequiredMark
      initialValues={{
        contractId: dataContracts?.contract[0]?.id,
        withCreatorId: false,
        identity: 'normal',
        orderExecutorRatio: 1,
      }}
      onValuesChange={(_, values) => {
        setContractProducts(uniqBy(v => v.id, values.contractProducts || []))
      }}
    >
      <div ref={memberBlockRef}>
        <Descriptions
          title={
            <>
              <span>學生資料</span>
              <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
                {'請去學米後台 > 會員列表 > 找到學員並將資料填寫完成'}
              </div>
            </>
          }
          bordered
          className="mb-5"
        >
          <Descriptions.Item label="學員姓名">
            {member?.name || <Alert type="error" message="未設定" />}
          </Descriptions.Item>
          <Descriptions.Item label="學員信箱">
            {member?.email || <Alert type="error" message="未設定" />}
          </Descriptions.Item>
          <Descriptions.Item label="學員電話">
            {(member?.phones && member?.phones.split(',').map((v, index) => <Tag key={index}>{v}</Tag>)) || (
              <Alert type="error" message="未設定" />
            )}
          </Descriptions.Item>
          {dataProperties?.property.map(property => (
            <Descriptions.Item label={property.name} key={property.id}>
              <div className="d-flex align-items-center">
                {member.properties.find(v => v.propertyId === property.id)?.value ||
                  (property.placeholder ? <Alert type="error" message="未設定" /> : null)}
              </div>
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>

      <Descriptions title="合約期間" column={2} bordered className="mb-5">
        <Descriptions.Item label="合約項目">
          <Form.Item className="mb-0" name="contractId" rules={[{ required: true, message: '請選擇合約' }]}>
            <Select<string> style={{ width: 150 }}>
              {dataContracts?.contract.map(contract => (
                <Select.Option key={contract.id} value={contract.id}>
                  {contract.name}
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
            <Select<string>
              style={{ width: 150 }}
              value={selectedProjectPlanId}
              onChange={value => setSelectedProjectPlanId(value)}
            >
              {dataProjectPlans?.project_plan.map(projectPlan => (
                <Select.Option key={projectPlan.id} value={projectPlan.id}>
                  {projectPlan.period_amount} {projectPlan.period_type}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div className="d-flex align-items-center mt-2">
            <div>加贈：</div>
            <Form.Item className="mb-0" name="selectedGiftDays">
              <Select<string> style={{ width: 100 }} value={selectedGiftDays} onChange={setSelectedGiftDays}>
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
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            defaultValue={moment(startedAt)}
            onChange={value => value && setStartedAt(value.toDate())}
          />
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
                  const contractProduct = products.find(product => product.id === contractProducts[index]?.id)

                  return (
                    <div key={field.key} className="d-flex align-items-center justify-content-start">
                      <Form.Item
                        name={[field.name, 'id']}
                        fieldKey={[field.fieldKey, 'id']}
                        label={index === 0 ? <StyledFieldLabel>項目名稱</StyledFieldLabel> : undefined}
                      >
                        <Select<string> className="mr-3" style={{ width: '250px' }}>
                          {products?.map(product => (
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
          <div className="d-flex align-items-center">
            <Form.Item noStyle>
              <Radio.Group value={withCreatorId} onChange={e => setWithCreatorId(e.target.value)}>
                <Radio value={false}>不指定</Radio>
                <Radio value={true}>指定</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="creatorId" noStyle>
              <Select<string> style={{ width: '150px' }}>
                {dataCreators?.appointment_plan.map(v =>
                  v.creator?.id ? (
                    <Select.Option key={v.creator.id} value={v.creator.id}>
                      {v.creator.name}
                    </Select.Option>
                  ) : null,
                )}
              </Select>
            </Form.Item>
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="學員身份">
          <Form.Item className="m-0">
            <Radio.Group value={identity} onChange={e => setIdentity(e.target.value)}>
              <Radio value="normal">一般</Radio>
              <Radio value="student">學生</Radio>

              <Upload
                showUploadList={false}
                customRequest={({ file }) => {
                  setUploading(true)
                  uploadFile(`certification/${appId}/student_${member.id}`, file, authToken, apiHost)
                    .then(() => setCertificationPath(file.name))
                    .catch(handleError)
                    .finally(() => setUploading(false))
                }}
                className={identity === 'normal' ? 'd-none' : undefined}
              >
                <Button icon={<UploadOutlined />} loading={uploading}>
                  上傳證明
                </Button>
              </Upload>
            </Radio.Group>
            <span className={identity === 'normal' ? 'd-none' : 'ml-3'}>{certificationPath}</span>
          </Form.Item>
        </Descriptions.Item>
        <Descriptions.Item label="介紹人">
          <Form.Item className="m-0">
            <Select<string>
              allowClear
              showSearch
              filterOption={false}
              value={referralMemberId}
              onChange={value => setReferralMemberId(value)}
              onSearch={v => setReferralMemberFilter(v)}
              style={{ width: '150px' }}
            >
              {dataReferralMembers?.member.map(v => (
                <Select.Option key={v.name} value={v.id}>
                  {v.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Descriptions.Item>
        <Descriptions.Item label="扣除訂金 $1000">
          <Form.Item className="m-0">
            <Checkbox value={hasDeposit} onChange={e => setHasDeposit(e.target.checked)} />
          </Form.Item>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions title="付款方式" bordered className="mb-5">
        <Descriptions.Item label="付款方式">
          <Form.Item className="mb-0" name="paymentMethod" rules={[{ required: true, message: '請選擇付款方式' }]}>
            <Select<string> style={{ width: 120 }}>
              {['藍新', '歐付寶', '富比世', '新仲信', '舊仲信', '匯款', '現金', '裕富'].map((payment: string) => (
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
              {[1, 3, 6, 8, 9, 12, 18, 24, 30].map((installmentPlan: number) => (
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
                {xuemiSales?.map(member => (
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
                        {xuemiSales?.map(member => (
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

                <Form.Item>
                  <Button type="dashed" onClick={() => add({ ratio: 0.1 })} block>
                    <PlusOutlined /> 加入
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
        </Descriptions.Item>
      </Descriptions>

      <StyledOrder className="mb-5">
        {orderItems.map(orderItem => (
          <div key={orderItem.id} className="row mb-2">
            <div className="col-6 text-right">
              {orderItem.type === 'addonProduct'
                ? '【加購項目】'
                : orderItem.type === 'referralDiscount'
                ? '【介紹折抵】'
                : orderItem.type === 'promotionDiscount'
                ? '【促銷折抵】'
                : ''}
            </div>
            <div className="col-3">
              {orderItem.name}
              {orderItem.amount > 1 ? `x${orderItem.amount}` : ''}
            </div>
            <div className="col-3 text-right">{currencyFormatter(orderItem.price * orderItem.amount)}</div>
          </div>
        ))}

        <div className="row mb-2">
          <div className="col-6 text-right">
            <strong>合計</strong>
          </div>
          <div className="col-6 text-right">
            <StyledTotal>{currencyFormatter(totalPrice)}</StyledTotal>
            <StyledTotal>{totalAppointments} 次諮詢</StyledTotal>
            <StyledTotal>{totalCoins} XP</StyledTotal>
          </div>
        </div>
      </StyledOrder>

      {memberContractUrl ? (
        <Alert message="合約連結" description={memberContractUrl} type="success" showIcon />
      ) : (
        <Button size="large" block type="primary" onClick={handleContractAdded}>
          產生合約
        </Button>
      )}
    </Form>
  )
}

const useXuemiSales = () => {
  const { loading, error, data, refetch } = useQuery<hasura.GET_SALE_COLLECTION>(
    gql`
      query GET_SALE_COLLECTION {
        xuemi_sales {
          member {
            id
            name
            username
          }
        }
      }
    `,
  )

  const xuemiSales =
    data?.xuemi_sales
      ?.map(v => ({
        id: v.member?.id || '',
        name: v.member?.name || v.member?.username || '',
      }))
      .filter(v => v.id && v.name) || []

  return {
    loading,
    error,
    xuemiSales,
    refetch,
  }
}

const useProducts = (appId: string) => {
  const { data } = useQuery<hasura.GET_CONTRACT_PRODUCT>(GET_CONTRACT_PRODUCT, {
    variables: { appId },
  })
  const products: ProductProps[] =
    data?.project_plan.map(v => ({
      id: v.id,
      name: v.title,
      price: v.list_price,
      addonPrice: v.options?.addonPrice || 0,
      appointments: v.options?.appointments || 0,
      coins: v.options?.coins || 0,
    })) || []

  return { products }
}

const GET_CONTRACT_MEMBER = gql`
  query GET_CONTRACT_MEMBER($id: String!) {
    member_by_pk(id: $id) {
      id
      name
      email
      member_phones {
        phone
      }
      member_properties {
        id
        value
        property {
          id
          name
        }
      }
    }
  }
`
const GET_CONTRACTS = gql`
  query GET_CONTRACTS {
    contract(where: { published_at: { _is_null: false } }) {
      id
      name
    }
  }
`
const GET_PROJECT_PLANS = gql`
  query GET_PROJECT_PLANS {
    project_plan(where: { title: { _like: "%私塾方案%" } }, order_by: { position: asc }) {
      id
      title
      period_amount
      period_type
    }
  }
`
const GET_PROPERTIES = gql`
  query GET_PROPERTIES {
    property(where: { name: { _in: ["學生程度", "每月學習預算", "轉職意願", "上過其他課程", "特別需求"] } }) {
      id
      name
      placeholder
    }
  }
`
const GET_CONTRACT_PRODUCT = gql`
  query GET_CONTRACT_PRODUCT($appId: String!) {
    project_plan(
      where: { published_at: { _is_null: false }, project: { app_id: { _eq: $appId } } }
      order_by: [{ position: asc_nulls_last }, { title: asc }]
    ) {
      id
      title
      list_price
      options
    }
  }
`
const GET_APPOINTMENT_PLAN_CREATORS = gql`
  query GET_APPOINTMENT_PLAN_CREATORS {
    appointment_plan(distinct_on: [creator_id]) {
      id
      creator {
        id
        name
      }
    }
  }
`
const GET_REFERRAL_MEMBER_COLLECTION = gql`
  query GET_REFERRAL_MEMBER_COLLECTION($condition: member_bool_exp) {
    member(where: { _and: [{ member_contracts: {} }, $condition] }, limit: 10) {
      id
      name
      email
    }
  }
`
const ADD_MEMBER_CONTRACT = gql`
  mutation ADD_MEMBER_CONTRACT(
    $memberId: String!
    $authorId: String!
    $contractId: uuid!
    $startedAt: timestamptz!
    $endedAt: timestamptz!
    $values: jsonb!
    $options: jsonb
  ) {
    insert_member_contract_one(
      object: {
        member_id: $memberId
        contract_id: $contractId
        author_id: $authorId
        started_at: $startedAt
        ended_at: $endedAt
        values: $values
        options: $options
      }
    ) {
      id
    }
  }
`

export default MemberContractCreationPage
