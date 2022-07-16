import { defineMessages } from 'react-intl'

const couponMessages = {
  '*': defineMessages({
    price: { id: 'coupon.*.price', defaultMessage: '金額 {amount} 元' },
    ratio: { id: 'coupon.*.ratio', defaultMessage: '比例 {amount}%' },
    discount: { id: 'coupon.*.discount', defaultMessage: '折抵額度' },
    rules: { id: 'coupon.*.rules', defaultMessage: '使用規則' },
    couponCodes: { id: 'coupon.*.couponCodes', defaultMessage: '折扣碼' },
  }),
  CouponCard: defineMessages({
    full: { id: 'coupon.CouponCard.full', defaultMessage: '消費滿 {amount} 折抵' },
    amount: { id: 'coupon.CouponCard.amount', defaultMessage: '金額 {amount} 元' },
    proportion: { id: 'coupon.CouponCard.proportion', defaultMessage: '比例 {amount}%' },
    discountDirectly: { id: 'coupon.CouponCard.discountDirectly', defaultMessage: '直接折抵' },
    fromNow: { id: 'coupon.CouponCard.fromNow', defaultMessage: '即日起' },
    noPeriod: { id: 'coupon.CouponCard.noPeriod', defaultMessage: '無使用期限' },
  }),
  CouponPlanAdminCard: defineMessages({
    constraintAmount: { id: 'coupon.CouponPlanAdminCard.constraintAmount', defaultMessage: '消費滿 {amount} 折抵' },
    withoutConstraintAmount: { id: 'coupon.CouponPlanAdminCard.withoutConstraintAmount', defaultMessage: '直接折抵' },
    fromNow: { id: 'coupon.CouponPlanAdminCard.fromNow', defaultMessage: '即日起' },
    forever: { id: 'coupon.CouponPlanAdminCard.forever', defaultMessage: '無使用期限' },
    detail: { id: 'coupon.CouponPlanAdminCard.detail', defaultMessage: '詳情' },
  }),
  CouponPlanAdminModal: defineMessages({
    successfullySaved: { id: 'coupon.CouponPlanAdminModal.successfullySaved', defaultMessage: '儲存成功' },
    successfullyCreated: { id: 'coupon.CouponPlanAdminModal.successfullyCreated', defaultMessage: '建立成功' },
    duplicateVoucherCode: {
      id: 'coupon.CouponPlanAdminModal.duplicateVoucherCode',
      defaultMessage: '該兌換碼已被使用',
    },
    cancel: { id: 'coupon.CouponPlanAdminModal.cancel', defaultMessage: '取消' },
    confirm: { id: 'coupon.CouponPlanAdminModal.confirm', defaultMessage: '確定' },
    couponPlanTitle: { id: 'coupon.CouponPlanAdminModal.couponPlanTitle', defaultMessage: '折價方案名稱' },
    isRequired: { id: 'coupon.CouponPlanAdminModal.isRequired', defaultMessage: '請輸入{field}' },
    scope: { id: 'coupon.CouponPlanAdminModal.scope', defaultMessage: '折抵模式' },
    allProductScope: { id: 'coupon.CouponPlanAdminModal.allProductScope', defaultMessage: '全站折抵' },
    specificProductScope: { id: 'coupon.CouponPlanAdminModal.specificProductScope', defaultMessage: '指定項目折抵' },
    otherSpecificProduct: { id: 'coupon.CouponPlanAdminModal.otherSpecificProduct', defaultMessage: '其他特定項目' },
    constraint: { id: 'coupon.CouponPlanAdminModal.constraint', defaultMessage: '消費需達' },
    discountHelp: {
      id: 'coupon.CouponPlanAdminModal.discountHelp',
      defaultMessage: '折抵方式為比例時，額度範圍為 0 - 100%',
    },
    atLastOneCouponCode: { id: 'coupon.CouponPlanAdminModal.atLastOneCouponCode', defaultMessage: '至少一組折扣碼' },
    availableDateRange: { id: 'coupon.CouponPlanAdminModal.availableDateRange', defaultMessage: '有效期限' },
    startedAt: { id: 'coupon.CouponPlanAdminModal.startedAt', defaultMessage: '開始時間' },
    endedAt: { id: 'coupon.CouponPlanAdminModal.endedAt', defaultMessage: '結束時間' },
    description: { id: 'coupon.CouponPlanAdminModal.description', defaultMessage: '使用限制與描述' },
    optional: { id: 'coupon.CouponPlanAdminModal.optional', defaultMessage: '非必填' },
  }),
  CouponPlanDescriptionScopeBlock: defineMessages({
    constraints: {
      id: 'coupon.CouponPlanDescriptionScopeBlock.constraints',
      defaultMessage: '消費滿 {total} 折抵 {discount}',
    },
    directly: { id: 'coupon.CouponPlanDescriptionScopeBlock.directly', defaultMessage: '直接折抵 {discount}' },
    discountTarget: { id: 'coupon.CouponPlanDescriptionScopeBlock.discountTarget', defaultMessage: '折抵項目' },
    allScope: { id: 'coupon.CouponPlanDescriptionScopeBlock.allScope', defaultMessage: '全站折抵' },
    allProgramPlan: { id: 'coupon.CouponPlanDescriptionScopeBlock.allProgramPlan', defaultMessage: '全部課程方案' },
    allActivityTicket: { id: 'coupon.CouponPlanDescriptionScopeBlock.allActivityTicket', defaultMessage: '全部活動' },
    allPodcastProgram: { id: 'coupon.CouponPlanDescriptionScopeBlock.allPodcastProgram', defaultMessage: '全部廣播' },
    allPodcastPlan: { id: 'coupon.CouponPlanDescriptionScopeBlock.allPodcastPlan', defaultMessage: '全部廣播訂閱頻道' },
    allAppointmentPlan: { id: 'coupon.CouponPlanDescriptionScopeBlock.allAppointmentPlan', defaultMessage: '全部預約' },
    allMerchandise: { id: 'coupon.CouponPlanDescriptionScopeBlock.allMerchandise', defaultMessage: '全部商品' },
    allProjectPlan: { id: 'coupon.CouponPlanDescriptionScopeBlock.allProjectPlan', defaultMessage: '全部專案' },
    allProgramPackagePlan: {
      id: 'coupon.CouponPlanDescriptionScopeBlock.allProgramPackagePlan',
      defaultMessage: '全部課程組合',
    },
    otherSpecificProduct: {
      id: 'coupon.CouponPlanDescriptionScopeBlock.otherSpecificProduct',
      defaultMessage: '其他特定項目',
    },
  }),
  CouponPlanDescriptionTabs: defineMessages({
    used: { id: 'coupon.CouponPlanDescriptionTabs.used', defaultMessage: '已使用' },
    exportCodes: { id: 'coupon.CouponPlanDescriptionTabs.exportCodes', defaultMessage: '匯出代碼' },
    loading: { id: 'coupon.CouponPlanDescriptionTabs.loading', defaultMessage: '載入中' },
    fetchDataError: { id: 'coupon.CouponPlanDescriptionTabs.fetchDataError', defaultMessage: '讀取錯誤' },
    unit: { id: 'coupon.CouponPlanDescriptionTabs.unit', defaultMessage: '張' },
    description: { id: 'coupon.CouponPlanDescriptionTabs.description', defaultMessage: '使用限制與描述' },
    couponCode: { id: 'coupon.CouponPlanDescriptionTabs.couponCode', defaultMessage: '折扣代碼' },
    exportSuccessfully: { id: 'coupon.CouponPlanDescriptionTabs.exportSuccessfully', defaultMessage: '匯出成功' },
    exportFailed: { id: 'coupon.CouponPlanDescriptionTabs.exportFailed', defaultMessage: '匯出失敗' },
  }),
  CouponPlanDiscountSelector: defineMessages({
    priceType: { id: 'coupon.CouponPlanDiscountSelector.priceType', defaultMessage: '折扣金額' },
    ratioType: { id: 'coupon.CouponPlanDiscountSelector.ratioType', defaultMessage: '折扣比例' },
    dollar: { id: 'coupon.CouponPlanDiscountSelector.dollar', defaultMessage: '元' },
  }),
  CouponSelectionModal: defineMessages({
    chooseCoupon: { id: 'coupon.CouponSelectionModal.chooseCoupon', defaultMessage: '選擇折價券' },
    or: { id: 'coupon.CouponSelectionModal.or', defaultMessage: '或' },
    enter: { id: 'coupon.CouponSelectionModal.enter', defaultMessage: '輸入折扣碼' },
    add: { id: 'coupon.CouponSelectionModal.add', defaultMessage: '新增' },
    addSuccessfully: { id: 'coupon.CouponSelectionModal.addSuccessfully', defaultMessage: '新增成功' },
    addFailed: { id: 'coupon.CouponSelectionModal.addFailed', defaultMessage: '新增失敗' },
  }),
}
export default couponMessages
