// { id: '', defaultMessage: '' },

import { defineMessages } from 'react-intl'

export const commonMessages = {
  ui: defineMessages({
    comma: { id: 'common.ui.comma', defaultMessage: '、' },
    print: { id: 'common.ui.print', defaultMessage: '列印' },
    create: { id: 'common.ui.create', defaultMessage: '建立' },
    cancel: { id: 'common.ui.cancel', defaultMessage: '取消' },
    confirm: { id: 'common.ui.confirm', defaultMessage: '確定' },
    edit: { id: 'common.ui.edit', defaultMessage: '編輯' },
    detail: { id: 'common.ui.detail', defaultMessage: '詳情' },
    delete: { id: 'common.ui.delete', defaultMessage: '刪除' },
    login: { id: 'common.ui.login', defaultMessage: '登入' },
    register: { id: 'common.ui.register', defaultMessage: '註冊' },
    or: { id: 'common.ui.or', defaultMessage: '或' },
    registerNow: { id: 'common.ui.registerNow', defaultMessage: '立即註冊' },
    facebookLogin: { id: 'common.ui.facebookLogin', defaultMessage: 'Facebook 登入/註冊' },
    googleLogin: { id: 'common.ui.googleLogin', defaultMessage: 'Google 登入/註冊' },
  }),
  label: defineMessages({
    selectInstructor: { id: 'common.label.selectInstructor', defaultMessage: '選擇老師' },
    title: { id: 'common.label.title', defaultMessage: '名稱' },
    category: { id: 'common.label.category', defaultMessage: '類別' },
    startedAt: { id: 'common.label.startedAt', defaultMessage: '開始時間' },
    endedAt: { id: 'common.label.endedAt', defaultMessage: '結束時間' },
    listPrice: { id: 'common.label.listPrice', defaultMessage: '定價' },
    email: { id: 'common.label.email', defaultMessage: '信箱' },
    phone: { id: 'common.label.phone', defaultMessage: '手機' },
    account: { id: 'common.label.username', defaultMessage: '使用者名稱或 Email' },
    password: { id: 'common.label.password', defaultMessage: '密碼' },
    forgotPassword: { id: 'common.label.forgotPassord', defaultMessage: '忘記密碼？' },
    notMember: { id: 'common.label.notMember', defaultMessage: '還不是會員嗎？' },
    alreadyMember: { id: 'common.label.alreadyMember', defaultMessage: '已經是是會員嗎？' },
    goToLogin: { id: 'common.label.goToLogin', defaultMessage: '前往登入' },
    optional: { id: 'common.label.optional', defaultMessage: '非必填' },
    loading: { id: 'common.label.loading', defaultMessage: '載入中' },
  }),
}

export const errorMessages = {
  data: defineMessages({
    fetch: { id: 'error.data.fetch', defaultMessage: '載入失敗' },
  }),
  route: defineMessages({
    notFound: { id: 'error.route.notFound', defaultMessage: '無此路徑' },
  }),
  form: defineMessages({
    title: { id: 'error.form.title', defaultMessage: '請輸入名稱' },
    startedAt: { id: 'error.form.startedAt', defaultMessage: '請選擇開始時間' },
    endedAt: { id: 'error.form.endedAt', defaultMessage: '請選擇結束時間' },
    account: { id: 'error.form.username', defaultMessage: '請輸入使用者名稱或 Email' },
    password: { id: 'error.form.password', defaultMessage: '請輸入密碼' },
    location: { id: 'error.form.location', defaultMessage: '請輸入地址' },
    ticketPlanTitle: { id: 'error.form.ticketPlanTitle', defaultMessage: '請輸入票券名稱' },
    email: { id: 'error.form.email', defaultMessage: '請輸入 Email' },
    emailFormat: { id: 'error.form.emailFormat', defaultMessage: 'Email 格式錯誤' },
    coupontPlanTitle: { id: 'error.form.couponPlanTitle', defaultMessage: '請輸入折價方案名稱' },
    couponCodes: { id: 'error.form.codes', defaultMessage: '至少一組折扣碼' },
  }),
  event: defineMessages({
    failedFacebookLogin: { id: 'error.event.failedFacebookLogin', defaultMessage: '無法從 Facebook 登入/註冊' },
    failedGoogleLogin: { id: 'error.event.failedGoogleLogin', defaultMessage: '無法從 Google 登入/註冊' },
  }),
}

export const activityMessages = {
  term: defineMessages({
    session: { id: 'activity.term.session', defaultMessage: '場次' },
    sessionTitle: { id: 'common.label.sessionTitle', defaultMessage: '場次名稱' },
    location: { id: 'activity.term.location', defaultMessage: '地址' },
    threshold: { id: 'activity.term.threshold', defaultMessage: '最少人數' },
    includingSessions: { id: 'activity.term.includingSessions', defaultMessage: '包含場次' },
    description: { id: 'activity.term.description', defaultMessage: '備註說明' },
    sellingTime: { id: 'activity.term.sellingTime', defaultMessage: '售票時間' },
    ticketPlan: { id: 'activity.term.ticketPlan', defaultMessage: '票券方案' },
    ticketPlanTitle: { id: 'activity.term.ticketPlanTitle', defaultMessage: '票券名稱' },
  }),
  ui: defineMessages({
    threshold: { id: 'activity.ui.threshold', defaultMessage: '最少' },
    createSession: { id: 'activity.ui.createSession', defaultMessage: '建立場次' },
    addTicketPlan: { id: 'activity.ui.addTicketPlan', defaultMessage: '加入票券方案' },
    createTicketPlan: { id: 'activity.ui.createTicketPlan', defaultMessage: '建立方案' },
  }),
}

export const appointmentMessages = {
  term: defineMessages({
    period: { id: 'appointment.term.period', defaultMessage: '時段' },
    planTitle: { id: 'appointment.term.planTitle', defaultMessage: '方案名稱' },
  }),
  status: defineMessages({
    finished: { id: 'appointment.status.finished', defaultMessage: '已結束' },
  }),
}

export const promotionMessages = {
  term: defineMessages({
    couponPlanTitle: { id: 'promotion.term.couponPlanTitle', defaultMessage: '折價方案名稱' },
    couponCode: { id: 'promotion.term.couponCode', defaultMessage: '折扣代碼' },
    couponCodes: { id: 'promotion.term.couponCodes', defaultMessage: '折扣碼' },
    voucherCodes: { id: 'promotion.term.voucherCodes', defaultMessage: '兌換碼' },
    amount: { id: 'promotion.term.amount', defaultMessage: '數量' },
    discount: { id: 'promotion.term.discount', defaultMessage: '折抵額度' },
    description: { id: 'promotion.term.description', defaultMessage: '使用限制與描述' },
    priceType: { id: 'promotion.term.priceType', defaultMessage: '折扣金額' },
    ratioType: { id: 'promotion.term.ratioType', defaultMessage: '折扣比例' },
    dollar: { id: 'promotion.term.dollar', defaultMessage: '元' },
  }),
  ui: defineMessages({
    editCouponPlan: { id: 'promotion.ui.editCouponPlan', defaultMessage: '編輯折價方案' },
    random: { id: 'promotion.ui.random', defaultMessage: '隨機' },
    custom: { id: 'promotion.ui.custom', defaultMessage: '自訂' },
  }),
  label: defineMessages({
    constraintAmount: { id: 'promotion.label.constraintAmount', defaultMessage: '消費滿 {amount} 折抵' },
    withoutConstraintAmount: { id: 'promotion.label.withoutConstraintAmount', defaultMessage: '直接折抵' },
    fromNow: { id: 'promotion.label.fromNow', defaultMessage: '即日起' },
    forever: { id: 'promotion.label.forever', defaultMessage: '無使用期限' },
    price: { id: 'promotion.label.price', defaultMessage: '金額 {amount} 元' },
    ratio: { id: 'promotion.label.ratio', defaultMessage: '比例 {amount}%' },
    constraint: { id: 'promotion.label.constraint', defaultMessage: '消費需達' },
    discountHelp: { id: 'promotion.label.disountHelp', defaultMessage: '折抵方式為比例時，額度範圍為 0 - 100Ｆ' },
    availableDateRange: { id: 'promotion.label.availableDateRange', defaultMessage: '有效期限' },
    unit: { id: 'promotion.label.unit', defaultMessage: '張' },
    create: { id: 'promotion.label.create', defaultMessage: '新增' },
  }),
}

export const membershipCardMessages = {
  label: defineMessages({
    selectMembershipCard: { id: 'membershipCard.label.selectMembershipCard', defaultMessage: '選擇會員卡' },
  }),
}

// { id: '', defaultMessage: '' },
