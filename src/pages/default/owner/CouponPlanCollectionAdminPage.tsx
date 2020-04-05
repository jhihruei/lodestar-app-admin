import { Button, Icon, Tabs, Typography } from 'antd'
import { reverse } from 'ramda'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import CouponPlanAdminCard from '../../../components/checkout/CouponPlanAdminCard'
import CouponPlanAdminModal from '../../../components/checkout/CouponPlanAdminModal'
import AdminLayout from '../../../components/layout/AdminLayout'
import OwnerAdminLayout from '../../../components/layout/OwnerAdminLayout'
import AppContext from '../../../contexts/AppContext'
import { commonMessages, promotionMessages } from '../../../helpers/translation'
import { useCouponPlanCollection } from '../../../hooks/checkout'
import { ReactComponent as DiscountIcon } from '../../../images/icon/discount.svg'
import { CouponPlanProps } from '../../../types/checkout'

const CouponPlanCollectionAdminPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { id: appId } = useContext(AppContext)
  const { loading, error, data } = useQuery<
    types.GET_COUPON_PLAN_COLLECTION,
    types.GET_COUPON_PLAN_COLLECTIONVariables
  >(GET_COUPON_PLAN_COLLECTION, {
    variables: { appId },
  })

  const couponPlans =
    loading || error || !data
      ? []
      : data.coupon_plan.map(value => {
          const [count, remaining] =
            value.coupon_codes_aggregate.aggregate && value.coupon_codes_aggregate.aggregate.sum
              ? [
                  value.coupon_codes_aggregate.aggregate.sum.count || 0,
                  value.coupon_codes_aggregate.aggregate.sum.remaining || 0,
                ]
              : [0, 0]

          return {
            id: value.id,
            title: value.title,
            amount: value.amount,
            scope: value.scope || '',
            type: value.type,
            constraint: value.constraint,
            startedAt: value.started_at && new Date(value.started_at),
            endedAt: value.ended_at && new Date(value.ended_at),
            description: value.description,
            count,
            remaining,

            available: remaining > 0 && (value.ended_at ? new Date(value.ended_at).getTime() > Date.now() : true),
          }
        })

  return (
    <AdminLayout>
      <Typography.Title level={3} className="mb-4">
        <Icon component={() => <DiscountIcon />} className="mr-3" />
        <span>{formatMessage(commonMessages.menu.coupons)}</span>
      </Typography.Title>

      <CouponPlanAdminModal
        renderTrigger={({ setVisible }) => (
          <Button type="primary" onClick={() => setVisible(true)} className="mb-4" icon="file-add">
            {formatMessage(promotionMessages.ui.createCouponPlan)}
          </Button>
        )}
        icon={<Icon type="file-add" />}
        title={formatMessage(promotionMessages.ui.createCouponPlan)}
      />

      <Tabs>
        <Tabs.TabPane key="live" tab={formatMessage(promotionMessages.status.available)}>
          <CouponCollectionBlock couponPlans={couponPlans.filter(couponPlan => couponPlan.available)} />
        </Tabs.TabPane>
        <Tabs.TabPane key="outdated" tab={formatMessage(promotionMessages.status.unavailable)}>
          <CouponCollectionBlock couponPlans={couponPlans.filter(couponPlan => !couponPlan.available)} />
        </Tabs.TabPane>
      </Tabs>
    </AdminLayout>
  )
}

const CouponCollectionBlock: React.FC<{
  couponPlans: CouponPlanProps[]
}> = ({ couponPlans }) => {
  return (
    <div className="row">
      {reverse(couponPlans).map(couponPlan => (
        <div key={couponPlan.id} className="col-12 col-md-6 mb-3">
          <CouponPlanAdminCard couponPlan={couponPlan} outdated={!couponPlan.available} />
        </div>
      ))}
    </div>
  )
}

export default CouponPlanCollectionAdminPage
