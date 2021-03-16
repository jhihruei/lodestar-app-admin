import { Button, Divider, Input, message, Modal, Spin } from 'antd'
import axios from 'axios'
import { sum } from 'ramda'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { useAuth } from '../../contexts/AuthContext'
import { handleError } from '../../helpers'
import { checkoutMessages, codeMessages, commonMessages } from '../../helpers/translation'
import { useCouponCollection } from '../../hooks/data'
import { CouponProps, OrderDiscountProps, OrderProductProps } from '../../types/checkout'
import { ProductType } from '../../types/general'
import CouponCard from './CouponCard'

const CouponSelectionModal: React.FC<{
  memberId: string
  orderProducts: OrderProductProps[]
  orderDiscounts: OrderDiscountProps[]
  onSelect?: (coupon: CouponProps) => void
  render?: React.FC<{
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    selectedCoupon?: CouponProps
  }>
}> = ({ memberId, orderProducts, orderDiscounts, onSelect, render }) => {
  const { formatMessage } = useIntl()
  const { authToken, apiHost } = useAuth()
  const { coupons, loadingCoupons, refetchCoupons } = useCouponCollection(memberId)

  const [code, setCode] = useState('')
  const [visible, setVisible] = useState(false)
  const [inserting, setInserting] = useState(false)
  const [selectedCoupon, setSelectedCoupon] = useState<CouponProps>()

  const handleCouponInsert = () => {
    setInserting(true)
    axios
      .post(
        `${apiHost}/payment/exchange`,
        {
          code,
          type: 'Coupon',
        },
        {
          headers: { authorization: `Bearer ${authToken}` },
        },
      )
      .then(({ data }) => {
        if (data.code === 'SUCCESS') {
          refetchCoupons()
          setCode('')
          message.success(formatMessage(codeMessages[data.code as keyof typeof codeMessages]))
        } else {
          message.error(formatMessage(codeMessages[data.code as keyof typeof codeMessages]))
        }
      })
      .catch(handleError)
      .finally(() => setInserting(false))
  }

  return (
    <>
      {render && render({ setVisible, selectedCoupon })}

      <Modal
        title={formatMessage(checkoutMessages.title.chooseCoupon)}
        footer={null}
        onCancel={() => setVisible(false)}
        visible={visible}
      >
        {loadingCoupons ? (
          <Spin />
        ) : (
          coupons
            .filter(coupon => !coupon.status?.outdated && !coupon.status?.used)
            .map(coupon => {
              const couponPlanScope = coupon.couponCode?.couponPlan.scope
              const couponPlanProductIds = coupon.couponCode?.couponPlan.productIds || []
              const isInCouponScope = (productId: string) => {
                const [productType] = productId.split('_')
                return (
                  couponPlanScope === null ||
                  couponPlanScope?.includes(productType as ProductType) ||
                  couponPlanProductIds.includes(productId)
                )
              }

              const filteredOrderProducts = orderProducts.filter(orderProduct =>
                isInCouponScope(orderProduct.productId),
              )
              const filteredOrderDiscounts = orderDiscounts.filter(orderDiscount => orderDiscount.type === 'DownPrice')
              const price =
                sum(filteredOrderProducts.map(orderProduct => orderProduct.price)) -
                sum(filteredOrderDiscounts.map(orderDiscount => orderDiscount.price))

              return coupon.couponCode?.couponPlan.constraint || 0 <= price ? (
                <CouponCard
                  key={coupon.id}
                  coupon={coupon}
                  onClick={() => {
                    onSelect && onSelect(coupon)
                    setSelectedCoupon(coupon)
                    setVisible(false)
                  }}
                  style={{ cursor: 'pointer', marginBottom: '12px' }}
                />
              ) : (
                <CouponCard
                  key={coupon.id}
                  coupon={coupon}
                  style={{ userSelect: 'none', cursor: 'not-allowed', marginBottom: '12px', color: '#9b9b9b' }}
                />
              )
            })
        )}

        <Divider>{formatMessage(commonMessages.ui.or)}</Divider>

        <div className="d-flex">
          <div className="flex-grow-1">
            <Input
              style={{ borderRadius: '4px 0px 0px 4px' }}
              placeholder={formatMessage(checkoutMessages.form.placeholder.enter)}
              value={code}
              onChange={e => setCode(e.target.value)}
            />
          </div>
          <Button
            block
            type="primary"
            style={{ width: '72px', borderRadius: '0px 4px 4px 0px' }}
            loading={inserting}
            onClick={handleCouponInsert}
          >
            {formatMessage(commonMessages.ui.add)}
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default CouponSelectionModal
