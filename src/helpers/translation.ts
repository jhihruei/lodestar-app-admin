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
    deleteProgram: { id: 'common.ui.deleteProgram', defaultMessage: '刪除課程' },
    deletePost: { id: 'common.ui.deletePost', defaultMessage: '刪除文章' },
    deleted: { id: 'common.ui.deleted', defaultMessage: '已刪除' },
    login: { id: 'common.ui.login', defaultMessage: '登入' },
    logout: { id: 'common.ui.logout', defaultMessage: '登出' },
    loginAndRegister: { id: 'common.ui.loginAndRegister', defaultMessage: '登入 / 註冊' },
    register: { id: 'common.ui.register', defaultMessage: '註冊' },
    or: { id: 'common.ui.or', defaultMessage: '或' },
    registerNow: { id: 'common.ui.registerNow', defaultMessage: '立即註冊' },
    facebookLogin: { id: 'common.ui.facebookLogin', defaultMessage: 'Facebook 登入/註冊' },
    googleLogin: { id: 'common.ui.googleLogin', defaultMessage: 'Google 登入/註冊' },
    save: { id: 'common.ui.save', defaultMessage: '儲存' },
    reply: { id: 'common.ui.reply', defaultMessage: '回覆' },
    search: { id: 'common.ui.search', defaultMessage: '查詢' },
    reset: { id: 'common.ui.reset', defaultMessage: '重置' },
    buyNow: { id: 'common.ui.buyNow', defaultMessage: '立即購買' },
    goToCart: { id: 'common.ui.goToCart', defaultMessage: '前往購物車' },
    addToCart: { id: 'common.ui.addToCart', defaultMessage: '加入購物車' },
    trial: { id: 'common.ui.trial', defaultMessage: '試看' },
    cancelPublishing: { id: 'common.ui.cancelPublishing', defaultMessage: '取消發佈' },
    publish: { id: 'common.ui.publish', defaultMessage: '立即發佈' },
    publishConfirmation: { id: 'common.ui.publishConfirmation', defaultMessage: '確定發佈' },
    publiclyPublish: { id: 'common.ui.publiclyPublish', defaultMessage: '公開發佈' },
    privatelyPublish: { id: 'common.ui.privatelyPublish', defaultMessage: '私密發佈' },
    addInstructor: { id: 'common.ui.addInstructor', defaultMessage: '新增講師' },
    addAuthor: { id: 'common.ui.addAuthor', defaultMessage: '新增作者' },
    add: { id: 'common.ui.add', defaultMessage: '新增' },
    cancelOrder: { id: 'common.ui.cancelOrder', defaultMessage: '取消訂單' },
    retryPayment: { id: 'common.ui.retryPayment', defaultMessage: '重新付款' },
    checkInvoice: { id: 'common.ui.checkInvoice', defaultMessage: '查看收據' },
    back: { id: 'common.ui.back', defaultMessage: '返回' },
    prevPage: { id: 'common.ui.prevPage', defaultMessage: '返回上頁' },
    previewIntroduction: { id: 'common.ui.previewIntroduction', defaultMessage: '預覽簡介' },
    previewContent: { id: 'common.ui.previewContent', defaultMessage: '預覽內容' },
    preview: { id: 'common.ui.preview', defaultMessage: '預覽' },
    backToHomepage: { id: 'common.ui.backToHomepage', defaultMessage: '回首頁' },
    addCategory: { id: 'common.ui.addCategory', defaultMessage: '新增分類' },
    changePosition: { id: 'common.ui.changePosition', defaultMessage: '調整排序' },
    downloadMemberList: { id: 'common.ui.downloadMemberList', defaultMessage: '下載名單' },
    export: { id: 'common.ui.export', defaultMessage: '匯出' },
  }),
  label: defineMessages({
    selectInstructor: { id: 'common.label.selectInstructor', defaultMessage: '選擇老師' },
    selectAuthor: { id: 'common.label.selectAuthor', defaultMessage: '選擇作者' },
    notMember: { id: 'common.label.notMember', defaultMessage: '還不是會員嗎？' },
    alreadyMember: { id: 'common.label.alreadyMember', defaultMessage: '已經是是會員嗎？' },
    goToLogin: { id: 'common.label.goToLogin', defaultMessage: '前往登入' },
    optional: { id: 'common.label.optional', defaultMessage: '非必填' },
    day: { id: 'common.label.day', defaultMessage: '天' },
    week: { id: 'common.label.week', defaultMessage: '週' },
    month: { id: 'common.label.month', defaultMessage: '月' },
    year: { id: 'common.label.year', defaultMessage: '年' },
    perDay: { id: 'common.label.perDay', defaultMessage: '每日' },
    perWeek: { id: 'common.label.perWeek', defaultMessage: '每週' },
    perMonth: { id: 'common.label.perMonth', defaultMessage: '每月' },
    perYear: { id: 'common.label.perYear', defaultMessage: '每年' },
    unknownPeriod: { id: 'common.label.unknownPeriod', defaultMessage: '未知週期' },
    cannotRecover: { id: 'common.label.cannotRecover', defaultMessage: '此動作無法復原' },
    sellingStatus: { id: 'common.label.sellingStatus', defaultMessage: '販售狀態' },
    salePriceEndTime: { id: 'common.label.salePriceEndTime', defaultMessage: '優惠截止日期' },
    outdated: { id: 'common.label.outdated', defaultMessage: '已過期' },
    discountDownPrice: { id: 'common.label.discountDownPrice', defaultMessage: '首期折扣' },
    unavailableSelling: { id: 'common.label.unavailableSelling', defaultMessage: '暫不販售' },
    roleAdmin: { id: 'common.label.roleAdmin', defaultMessage: '身份管理' },
    totalPrice: { id: 'common.label.totalPrice', defaultMessage: '總金額' },
    orderLogId: { id: 'common.label.orderLogId', defaultMessage: '訂單編號' },
    orderLogDate: { id: 'common.label.orderLogDate', defaultMessage: '訂單日期' },
    orderLogPrice: { id: 'common.label.orderLogPrice', defaultMessage: '訂單金額' },
    orderLogStatus: { id: 'common.label.orderLogStatus', defaultMessage: '訂單狀態' },
    orderProductPriceTotal: { id: 'common.label.orderProductPriceTotal', defaultMessage: '項目總額' },
    orderDiscountPriceTotal: { id: 'common.label.orderDiscountPriceTotal', defaultMessage: '折扣總額' },
    orderLogPriceTotal: { id: 'common.label.orderLogPriceTotal', defaultMessage: '訂單總額' },
    orderLogMemberName: { id: 'common.label.orderLogMemberName', defaultMessage: '會員姓名' },
    orderLogMemberEmail: { id: 'common.label.orderLogMemberEmail', defaultMessage: '會員信箱' },
    invoicePhone: { id: 'common.label.invoicePhone', defaultMessage: '手機' },
    invoiceName: { id: 'common.label.invoiceName', defaultMessage: '發票姓名' },
    invoiceEmail: { id: 'common.label.invoiceEmail', defaultMessage: '發票信箱' },
    invoiceBuyerPhone: { id: 'common.label.invoiceBuyerPhone', defaultMessage: '發票電話' },
    invoiceTarget: { id: 'common.label.invoiceTarget', defaultMessage: '發票對象' },
    invoiceDonationCode: { id: 'common.label.invoiceDonationCode', defaultMessage: '發票捐贈碼' },
    invoiceCarrier: { id: 'common.label.invoiceCarrier', defaultMessage: '發票載具' },
    invoiceUniformNumber: { id: 'common.label.invoiceUniformNumber', defaultMessage: '發票統編' },
    invoiceUniformTitle: { id: 'common.label.invoiceUniformTitle', defaultMessage: '發票抬頭' },
    invoicePostCode: { id: 'common.label.invoicePostCode', defaultMessage: '發票郵遞區號' },
    invoiceAddress: { id: 'common.label.invoiceAddress', defaultMessage: '發票地址' },
    invoiceId: { id: 'common.label.invoiceId', defaultMessage: '發票編號' },
    orderProductId: { id: 'common.label.orderProductId', defaultMessage: '項目編號' },
    orderProductName: { id: 'common.label.orderProductName', defaultMessage: '項目名稱' },
    orderProductType: { id: 'common.label.orderProductType', defaultMessage: '項目種類' },
    orderProductPrice: { id: 'common.label.orderProductPrice', defaultMessage: '項目金額' },
    orderProductAutoRenew: { id: 'common.label.orderProductAutoRenew', defaultMessage: '自動續訂' },
    orderDiscountType: { id: 'common.label.orderDiscountType', defaultMessage: '折扣類別' },
    orderDiscountId: { id: 'common.label.orderDiscountId', defaultMessage: '折扣編號' },
    orderDiscountName: { id: 'common.label.orderDiscountName', defaultMessage: '折扣名稱' },
    orderDiscountPrice: { id: 'common.label.orderDiscountPrice', defaultMessage: '折扣金額' },
    allProgram: { id: 'common.label.allProgram', defaultMessage: '所有單次課程' },
    allProgramPlan: { id: 'common.label.allProgramPlan', defaultMessage: '所有訂閱方案' },
    allProgramContent: { id: 'common.label.allProgramContent', defaultMessage: '所有課程內容' },
    allMembershipCard: { id: 'common.label.allMembershipCard', defaultMessage: '所有會員卡' },
    allActivityTicket: { id: 'common.label.allActivityTicket', defaultMessage: '所有實體活動' },
    allMerchandise: { id: 'common.label.allMerchandise', defaultMessage: '所有商品' },
    publishAdmin: { id: 'common.label.publishAdmin', defaultMessage: '發佈' },
    publishSettings: { id: 'common.label.publishSettings', defaultMessage: '發佈設定' },
    all: { id: 'common.label.all', defaultMessage: '全部' },
    allProgramProgress: { id: 'common.label.programProgress', defaultMessage: '總體學習進度' },
    currentPassword: { id: 'common.label.currentPassword', defaultMessage: '目前密碼' },
    confirmPassword: { id: 'common.label.confirmPassword', defaultMessage: '確認密碼' },
    newPassword: { id: 'common.label.newPassword', defaultMessage: '新密碼' },
    resetPassword: { id: 'common.label.resetPassword', defaultMessage: '重設密碼' },
    categoryItem: { id: 'common.label.categoryItem', defaultMessage: '分類項目' },
    lastLogin: { id: 'common.label.lastLogin', defaultMessage: '上次登入' },
    holdingPoints: { id: 'common.label.holdingPoints', defaultMessage: '持有點數' },
    points: { id: 'common.label.points', defaultMessage: '{points} 點' },
    consumption: { id: 'common.label.consumption', defaultMessage: '消費金額' },
    allMembers: { id: 'common.label.allMembers', defaultMessage: '全部會員' },
    basicSettings: { id: 'common.label.basicSettings', defaultMessage: '基本設定' },
    salesPlan: { id: 'common.label.salesPlan', defaultMessage: '銷售方案' },
    dateRange: { id: 'common.label.dateRange', defaultMessage: '日期範圍' },
    name: { id: 'common.label.name', defaultMessage: '姓名' },
    phone: { id: 'common.label.phone', defaultMessage: '手機' },
    email: { id: 'common.label.email', defaultMessage: '郵件地址' },
    nameAndEmail: { id: 'common.label.nameAndEmail', defaultMessage: '姓名 / Email' },
    languages: { id: 'common.label.languages', defaultMessage: '顯示語系' },
    price: { id: 'common.label.price', defaultMessage: '價格' },
    uploading: { id: 'command.label.uploading', defaultMessage: '上傳中' },
    currentPosition: { id: 'common.label.currentPosition', defaultMessage: '目前排序：{position}' },
    roleType: { id: 'common.label.roleType', defaultMessage: '會員類型' },
    exportFields: { id: 'common.label.exportFields', defaultMessage: '匯出欄位' },
  }),
  term: defineMessages({
    instructor: { id: 'common.term.instructor', defaultMessage: '老師' },
    price: { id: 'common.term.price', defaultMessage: '售價' },
    teachingAssistant: { id: 'common.term.teachingAssistant', defaultMessage: '助教' },
    planTitle: { id: 'common.term.planTitle', defaultMessage: '方案名稱' },
    memberName: { id: 'common.term.memberName', defaultMessage: '姓名' },
    cover: { id: 'common.term.cover', defaultMessage: '封面' },
    description: { id: 'common.term.description', defaultMessage: '描述' },
    account: { id: 'common.term.account', defaultMessage: '帳號' },
    avatar: { id: 'common.term.avatar', defaultMessage: '頭像' },
    name: { id: 'common.term.name', defaultMessage: '名稱' },
    creatorTitle: { id: 'common.term.creatorTitle', defaultMessage: '稱號' },
    speciality: { id: 'common.term.speciality', defaultMessage: '專長' },
    shortDescription: { id: 'common.term.shortDescription', defaultMessage: '簡述' },
    introduction: { id: 'common.label.introduction', defaultMessage: '介紹' },
    video: { id: 'common.label.video', defaultMessage: '影片' },
    caption: { id: 'common.label.caption', defaultMessage: '字幕' },
    title: { id: 'common.term.title', defaultMessage: '名稱' },
    category: { id: 'common.term.category', defaultMessage: '類別' },
    tag: { id: 'common.term.tag', defaultMessage: '標籤' },
    startedAt: { id: 'common.term.startedAt', defaultMessage: '開始時間' },
    endedAt: { id: 'common.term.endedAt', defaultMessage: '結束時間' },
    orderStatus: { id: 'common.term.orderStatus', defaultMessage: '訂單狀態' },
    listPrice: { id: 'common.term.listPrice', defaultMessage: '定價' },
    email: { id: 'common.term.email', defaultMessage: '信箱' },
    phone: { id: 'common.term.phone', defaultMessage: '手機' },
    username: { id: 'common.term.username', defaultMessage: '使用者名稱或 Email' },
    password: { id: 'common.term.password', defaultMessage: '密碼' },
    periodType: { id: 'common.term.periodType', defaultMessage: '訂閱週期' },
    salePrice: { id: 'common.term.salePrice', defaultMessage: '優惠價' },
    planDescription: { id: 'common.term.planDescription', defaultMessage: '方案簡介' },
    anonymousUser: { id: 'common.term.anonymous', defaultMessage: '匿名使用者' },
    generalMember: { id: 'common.term.generalMember', defaultMessage: '一般會員' },
    contentCreator: { id: 'common.term.contentCreator', defaultMessage: '創作者' },
    appOwner: { id: 'common.term.appOwner', defaultMessage: '管理員' },
    unknownRole: { id: 'common.term.unknownRole', defaultMessage: '未知身份' },
    program: { id: 'common.term.program', defaultMessage: '單次課程' },
    programPlan: { id: 'common.term.programPlan', defaultMessage: '訂閱方案' },
    programContent: { id: 'common.term.programContent', defaultMessage: '課程內容' },
    card: { id: 'common.term.card', defaultMessage: '會員卡' },
    activityTicket: { id: 'common.term.activityTicket', defaultMessage: '實體活動票券' },
    merchandise: { id: 'common.term.merchandise', defaultMessage: '商品' },
    unknownProduct: { id: 'common.term.unknownProduct', defaultMessage: '未知類別' },
    currentPassword: { id: 'common.term.currentPassword', defaultMessage: '目前密碼' },
    owner: { id: 'common.term.owner', defaultMessage: '建立者' },
    author: { id: 'common.term.author', defaultMessage: '作者' },
    supportedLanguages: { id: 'common.term.supportedLanguages', defaultMessage: '選擇顯示於哪個語系' },
    tags: { id: 'common.term.tags', defaultMessage: '標籤' },
  }),
  text: defineMessages({
    shortDescriptionPlaceholder: { id: 'common.text.shortDescriptionPlaceholder', defaultMessage: '100 字以內' },
    dueDate: { id: 'common.text.dueDate', defaultMessage: '{date} 到期' },
    totalCount: { id: 'common.text.totalCount', defaultMessage: '共 {count} 筆' },
    minutes: { id: 'common.text.minutes', defaultMessage: '{minutes} 分鐘' },
    newPasswordAgain: { id: 'common.label.newPasswordAgain', defaultMessage: '再次輸入新密碼' },
    forgotPassword: { id: 'common.text.forgotPassword', defaultMessage: '忘記密碼？' },
    locale: { id: 'common.text.locale', defaultMessage: '當前台為指定語系時才會顯示，若不選擇全語系皆顯示' },
  }),
  event: defineMessages({
    successfullySaved: { id: 'common.event.successfullySaved', defaultMessage: '儲存成功' },
    successfullyUpload: { id: 'common.event.successfullyUpload', defaultMessage: '上傳成功' },
    loading: { id: 'common.event.loading', defaultMessage: '載入中' },
    successfullyCreated: { id: 'common.event.successfullyCreated', defaultMessage: '建立成功' },
    successfullyDeleted: { id: 'common.event.successfullyDeleted', defaultMessage: '刪除成功' },
  }),
  status: defineMessages({
    productExpired: { id: 'common.status.expired', defaultMessage: '到期' },
    orderSuccess: { id: 'common.status.orderSuccess', defaultMessage: '已完成' },
    orderUnpaid: { id: 'common.status.orderUnpaid', defaultMessage: '待付款' },
    orderRefund: { id: 'common.status.orderRefund', defaultMessage: '已退款' },
    orderFailed: { id: 'common.status.orderFailed', defaultMessage: '付款失敗' },
    notComplete: { id: 'common.status.notComplete', defaultMessage: '尚有未完成項目' },
    unpublished: { id: 'common.status.unpublished', defaultMessage: '尚未發佈' },
    published: { id: 'common.status.published', defaultMessage: '已發佈' },
    publiclyPublish: { id: 'common.status.publicyPublish', defaultMessage: '已公開發佈' },
    privatelyPublish: { id: 'common.status.privatelyPublish', defaultMessage: '已私密發佈' },
    draft: { id: 'common.label.draft', defaultMessage: '草稿' },
  }),
  menu: defineMessages({
    salesAdmin: { id: 'common.menu.salesAdmin', defaultMessage: '銷售管理' },
    programAdmin: { id: 'common.menu.programAdmin', defaultMessage: '線上課程' },
    programs: { id: 'common.menu.programs', defaultMessage: '課程管理' },
    programIssues: { id: 'common.menu.programIssues', defaultMessage: '課程問題' },
    programProgress: { id: 'common.menu.programProgress', defaultMessage: '學習進度' },
    tempoDelivery: { id: 'common.menu.tempoDelivery', defaultMessage: '節奏交付' },
    programCategory: { id: 'common.menu.programCategory', defaultMessage: '課程分類' },
    podcastAdmin: { id: 'common.menu.podcastAdmin', defaultMessage: '音頻廣播' },
    podcastPrograms: { id: 'common.menu.podcastPrograms', defaultMessage: '廣播管理' },
    podcastPlans: { id: 'common.menu.podcastPlans', defaultMessage: '訂閱方案' },
    podcastCategory: { id: 'common.menu.podcastCategory', defaultMessage: '廣播分類' },
    appointmentAdmin: { id: 'common.menu.appointmentAdmin', defaultMessage: '預約服務' },
    appointmentPlans: { id: 'common.menu.appointmentPlans', defaultMessage: '預約方案' },
    appointments: { id: 'common.menu.appointments', defaultMessage: '預約記錄' },
    activityAdmin: { id: 'common.menu.activityAdmin', defaultMessage: '線下實體' },
    activities: { id: 'common.menu.activities', defaultMessage: '線下實體管理' },
    activityCategory: { id: 'common.menu.activityCategory', defaultMessage: '線下實體分類' },
    merchandiseAdmin: { id: 'common.menu.merchandise', defaultMessage: '商品' },
    merchandises: { id: 'common.menu.merchandises', defaultMessage: '商品管理' },
    merchandiseShipping: { id: 'common.menu.merchandiseShipping', defaultMessage: '出貨管理' },
    merchandiseIssues: { id: 'common.menu.merchandiseIssues', defaultMessage: '問答管理' },
    merchandiseCategory: { id: 'common.menu.merchandiseCategory', defaultMessage: '商品分類' },
    blogAdmin: { id: 'common.menu.blogAdmin', defaultMessage: '媒體文章' },
    blogPosts: { id: 'common.menu.blogPosts', defaultMessage: '文章管理' },
    blogCategory: { id: 'common.menu.blogCategory', defaultMessage: '文章分類' },
    promotionAdmin: { id: 'common.menu.promotionAdmin', defaultMessage: '促銷管理' },
    coupons: { id: 'common.menu.couponPlans', defaultMessage: '折價方案' },
    vouchers: { id: 'common.menu.voucherPlans', defaultMessage: '兌換方案' },
    categories: { id: 'common.menu.categories', defaultMessage: '分類設定' },
    members: { id: 'common.menu.members', defaultMessage: '會員管理' },
    ownerSettings: { id: 'common.menu.ownerSettings', defaultMessage: '管理員設定' },
    creatorSettings: { id: 'common.menu.creatorSettings', defaultMessage: '創作者設定' },
  }),
  product: defineMessages({
    program: { id: 'common.product.program', defaultMessage: '課程' },
    programPlan: { id: 'common.product.programPlan', defaultMessage: '課程' },
    programContent: { id: 'common.product.programContent', defaultMessage: '課程' },
    programPackagePlan: { id: 'common.product.programPackagePlan', defaultMessage: '課程組合' },
    projectPlan: { id: 'common.product.projectPlan', defaultMessage: '專案方案' },
    card: { id: 'common.product.card', defaultMessage: '會員卡' },
    activityTicket: { id: 'common.product.activityTicket', defaultMessage: '實體' },
    merchandise: { id: 'common.product.merchandise', defaultMessage: '商品' },
    podcastProgram: { id: 'common.product.podcastProgram', defaultMessage: '廣播' },
    podcastPlan: { id: 'common.product.podcastPlan', defaultMessage: '廣播頻道' },
    appointmentPlan: { id: 'common.product.appointmentPlan', defaultMessage: '預約' },
    unknownType: { id: 'common.product.unknownType', defaultMessage: '未知' },
  }),
}

export const errorMessages = {
  data: defineMessages({
    fetch: { id: 'error.data.fetch', defaultMessage: '讀取錯誤' },
  }),
  route: defineMessages({
    notFound: { id: 'error.route.notFound', defaultMessage: '無此路徑' },
  }),
  form: defineMessages({
    isRequired: { id: 'error.form.isRequired', defaultMessage: '請輸入{field}' },
    accountNameOrEmail: { id: 'error.form.accountNameOrEmail', defaultMessage: '請輸入使用者名稱或 Email' },
    account: { id: 'error.form.account', defaultMessage: '請輸入使用者名稱' },
    emailFormat: { id: 'error.form.emailFormat', defaultMessage: 'Email 格式錯誤' },
    couponCodes: { id: 'error.form.codes', defaultMessage: '至少一組折扣碼' },
    issueContent: { id: 'error.form.issueContent', defaultMessage: '請輸入回覆內容' },
    selectInstructor: { id: 'error.form.selectInstructor', defaultMessage: '請輸入帳號 或 Email' },
    date: { id: 'error.form.date', defaultMessage: '請選擇日期' },
    voucherCodes: { id: 'error.form.voucherCodes', defaultMessage: '至少一組兌換碼' },
    exchangeItemsAmount: { id: 'error.form.exchangeItemsAmount', defaultMessage: '數量至少為 1' },
    exchangeItems: { id: 'error.form.exchangeItems', defaultMessage: '至少選一個兌換項目' },
    duration: { id: 'error.form.duration', defaultMessage: '請輸入時間長度' },
  }),
  event: defineMessages({
    failedFacebookLogin: { id: 'error.event.failedFacebookLogin', defaultMessage: '無法從 Facebook 登入/註冊' },
    failedGoogleLogin: { id: 'error.event.failedGoogleLogin', defaultMessage: '無法從 Google 登入/註冊' },
    checkSamePassword: { id: 'error.event.checkSamePassword', defaultMessage: '請確認密碼與新密碼相同' },
    checkSameCodeName: { id: 'error.event.checkSameCodeName', defaultMessage: '網址代碼已被使用' },
  }),
  text: defineMessages({
    forbidden: { id: 'error.text.forbidden', defaultMessage: '你沒有此頁面的讀取權限' },
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
  label: defineMessages({
    showParticipantsNumber: { id: 'activity.label.showParticipantsNumber', defaultMessage: '顯示人數' },
  }),
  status: defineMessages({
    public: { id: 'activity.status.public', defaultMessage: '公開' },
    hidden: { id: 'activity.status.hidden', defaultMessage: '不公開' },
  }),
}

export const appointmentMessages = {
  ui: defineMessages({
    createPlan: { id: 'appointment.ui.createPlan', defaultMessage: '建立方案' },
  }),
  term: defineMessages({
    period: { id: 'appointment.term.period', defaultMessage: '時段' },
    planTitle: { id: 'appointment.term.planTitle', defaultMessage: '方案名稱' },
    contactPhone: { id: 'appointment.term.contactPhone', defaultMessage: '聯絡手機' },
    startedAt: { id: 'appointment.term.startedAt', defaultMessage: '起始時間' },
    periodType: { id: 'appointment.term.periodType', defaultMessage: '重複週期' },
  }),
  label: defineMessages({
    duration: { id: 'appointment.label.duration', defaultMessage: '時間長度(分鐘)' },
    createPeriod: { id: 'appointment.label.createPeriod', defaultMessage: '建立時段' },
  }),
  status: defineMessages({
    finished: { id: 'appointment.status.finished', defaultMessage: '已結束' },
  }),
  text: defineMessages({
    durationTips: { id: 'appointment.text.durationTips', defaultMessage: '設定單次預約服務的時間長度' },
    selectStartedAt: { id: 'appointment.text.selectStartedAt', defaultMessage: '選擇起始時間' },
    timezone: { id: 'appointment.text.timezone', defaultMessage: '時間以 {city} (GMT{timezone}) 顯示' },
  }),
}

export const promotionMessages = {
  term: defineMessages({
    couponPlanTitle: { id: 'promotion.term.couponPlanTitle', defaultMessage: '折價方案名稱' },
    couponCode: { id: 'promotion.term.couponCode', defaultMessage: '折扣代碼' },
    voucherCode: { id: 'promotion.term.voucherCode', defaultMessage: '兌換代碼' },
    couponCodes: { id: 'promotion.term.couponCodes', defaultMessage: '折扣碼' },
    voucherCodes: { id: 'promotion.term.voucherCodes', defaultMessage: '兌換碼' },
    amount: { id: 'promotion.term.amount', defaultMessage: '數量' },
    discount: { id: 'promotion.term.discount', defaultMessage: '折抵額度' },
    description: { id: 'promotion.term.description', defaultMessage: '使用限制與描述' },
    priceType: { id: 'promotion.term.priceType', defaultMessage: '折扣金額' },
    ratioType: { id: 'promotion.term.ratioType', defaultMessage: '折扣比例' },
    dollar: { id: 'promotion.term.dollar', defaultMessage: '元' },
    voucherPlanTitle: { id: 'promotion.term.voucherPlanTitle', defaultMessage: '兌換方案名稱' },
  }),
  ui: defineMessages({
    editCouponPlan: { id: 'promotion.ui.editCouponPlan', defaultMessage: '編輯折價方案' },
    editVoucherPlan: { id: 'promotion.ui.editVoucherPlan', defaultMessage: '編輯兌換方案' },
    random: { id: 'promotion.ui.random', defaultMessage: '隨機' },
    custom: { id: 'promotion.ui.custom', defaultMessage: '自訂' },
    useNow: { id: 'promotion.ui.useNow', defaultMessage: '立即使用' },
    exchange: { id: 'promotion.ui.exchange', defaultMessage: '兌換' },
    addVoucher: { id: 'promotion.ui.addVoucher', defaultMessage: '新增兌換券' },
    createVoucherPlan: { id: 'promotion.ui.createVoucherPlan', defaultMessage: '建立兌換方案' },
    createCouponPlan: { id: 'promotion.ui.createCouponPlan', defaultMessage: '建立折價方案' },
  }),
  label: defineMessages({
    constraintAmount: { id: 'promotion.label.constraintAmount', defaultMessage: '消費滿 {amount} 折抵' },
    withoutConstraintAmount: { id: 'promotion.label.withoutConstraintAmount', defaultMessage: '直接折抵' },
    fromNow: { id: 'promotion.label.fromNow', defaultMessage: '即日起' },
    forever: { id: 'promotion.label.forever', defaultMessage: '無使用期限' },
    price: { id: 'promotion.label.price', defaultMessage: '金額 {amount} 元' },
    ratio: { id: 'promotion.label.ratio', defaultMessage: '比例 {amount}%' },
    constraint: { id: 'promotion.label.constraint', defaultMessage: '消費需達' },
    discountHelp: { id: 'promotion.label.discountHelp', defaultMessage: '折抵方式為比例時，額度範圍為 0 - 100Ｆ' },
    availableDateRange: { id: 'promotion.label.availableDateRange', defaultMessage: '有效期限' },
    unit: { id: 'promotion.label.unit', defaultMessage: '張' },
    create: { id: 'promotion.label.create', defaultMessage: '新增' },
  }),
  text: defineMessages({
    exchangeItemsNumber: { id: 'promotion.text.exchangeItemsNumber', defaultMessage: '可兌換 {number} 個項目' },
    exchangeNotation: {
      id: 'promotion.text.exchangeNotation',
      defaultMessage: '兌換券為一次使用後失效，請一次兌換完畢',
    },
    enterVoucherCode: { id: 'promotion.text.enterVoucherCode', defaultMessage: '輸入兌換碼' },
    exchangedCount: { id: 'promotion.text.exchangedCount', defaultMessage: '{exchanged}/{total} 張' },
  }),
  status: defineMessages({
    available: { id: 'promotion.status.available', defaultMessage: '可使用' },
    unavailable: { id: 'promotion.status.unavailable', defaultMessage: '已失效' },
  }),
}

export const membershipCardMessages = {
  label: defineMessages({
    selectMembershipCard: { id: 'membershipCard.label.selectMembershipCard', defaultMessage: '選擇會員卡' },
  }),
}

export const programMessages = {
  status: defineMessages({
    issueOpen: { id: 'program.status.issueOpen', defaultMessage: '解決中' },
    issueSolved: { id: 'program.status.issueSolved', defaultMessage: '已解決' },
    active: { id: 'program.status.active', defaultMessage: '開啟' },
    closed: { id: 'program.status.closed', defaultMessage: '關閉' },
  }),
  label: defineMessages({
    programTitle: { id: 'program.label.programTitle', defaultMessage: '課程名稱' },
    planTitle: { id: 'program.label.planTitle', defaultMessage: '方案名稱' },
    allProgram: { id: 'program.label.allProgram', defaultMessage: '全部課程' },
    programContent: { id: 'program.label.programContent', defaultMessage: '課程內容' },
    programSettings: { id: 'program.label.programSettings', defaultMessage: '課程設定' },
    programPlanType: { id: 'program.label.programPlanType', defaultMessage: '選擇課程付費方案' },
    perpetualPlanType: { id: 'program.label.perpetualPlanType', defaultMessage: '單次付費' },
    subscriptionPlanType: { id: 'program.label.subscriptionPlanType', defaultMessage: '訂閱付費' },
    isIssuesOpen: { id: 'program.label.isIssuesOpen', defaultMessage: '問題討論' },
    planField: { id: 'program.label.planField', defaultMessage: '方案：' },
    notDeliveryOnly: { id: 'program.label.notDeliveryOnly', defaultMessage: '僅顯示未交付' },
    memberList: { id: 'program.label.memberList', defaultMessage: '學員名單' },
    select: { id: 'program.label.select', defaultMessage: '選擇課程' },
    selectDeliveryAt: { id: 'program.label.selectDeliveryAt', defaultMessage: '選擇啟用日期' },
  }),
  text: defineMessages({
    enrolledSubscriptionCount: { id: 'program.text.enrolledSubscriptionCount', defaultMessage: '已訂閱 {count} 人' },
    enrolledPerpetualCount: { id: 'program.text.enrolledPerpetualCount', defaultMessage: '已售 {count} 人' },
    emptyProgramIssue: { id: 'program.text.empty', defaultMessage: '沒有課程問題' },
    noAssignedInstructor: { id: 'common.text.noAssignedInstructor', defaultMessage: '尚未指定講師' },
  }),
  ui: defineMessages({
    createProgram: { id: 'program.label.createProgram', defaultMessage: '建立課程' },
    editProgram: { id: 'program.ui.editProgram', defaultMessage: '編輯課程' },
    delivery: { id: 'program.ui.delivery', defaultMessage: '交付課程' },
    deliver: { id: 'program.ui.deliver', defaultMessage: '啟用' },
  }),
}

export const podcastMessages = {
  ui: defineMessages({
    subscribe: { id: 'podcast.ui.subscribe', defaultMessage: '訂閱頻道' },
    uploadAudioFile: { id: 'podcast.ui.uploadAudioFile', defaultMessage: '上傳音檔' },
    createPodcastPlan: { id: 'podcast.ui.createPodcastPlan', defaultMessage: '建立方案' },
  }),
  status: defineMessages({
    published: { id: 'podcast.status.published', defaultMessage: '已發佈' },
    notPublished: { id: 'podcast.status.notPublished', defaultMessage: '未發佈' },
  }),
  label: defineMessages({
    podcastProgramTitle: { id: 'podcast.label.podcastProgramTitle', defaultMessage: '廣播名稱' },
    status: { id: 'podcast.label.status', defaultMessage: '狀態' },
    salesCount: { id: 'podcast.label.salesCount', defaultMessage: '購買' },
    duration: { id: 'podcast.label.duration', defaultMessage: '內容時長（分鐘）' },
    description: { id: 'podcast.label.description', defaultMessage: '內容描述' },
    podcastContent: { id: 'podcast.label.podcastContent', defaultMessage: '廣播內容' },
    podcastSettings: { id: 'podcast.label.podcastSettings', defaultMessage: '廣播設定' },
    podcastIntroduction: { id: 'podcast.label.podcastIntroduction', defaultMessage: '廣播介紹' },
  }),
  term: defineMessages({
    podcastPlan: { id: 'podcast.term.podcastPlan', defaultMessage: '廣播頻道訂閱方案' },
    audioFile: { id: 'podcast.term.audioFile', defaultMessage: '音頻' },
    podcastCover: { id: 'podcast.term.podcastCover', defaultMessage: '廣播封面' },
    podcastAbstract: { id: 'podcast.term.podcastAbstract', defaultMessage: '廣播摘要' },
  }),
  text: defineMessages({
    audioFileTips: { id: 'podcast.text.audioFileTips', defaultMessage: '建議格式：MP3\n檔案大小限制：5MB' },
    podcastCoverTips: { id: 'podcast.text.podcastCoverTips', defaultMessage: '建議尺寸：1080*1080px' },
    abstractLimit: { id: 'podcast.text.abstractLimit', defaultMessage: '限 100 字' },
  }),
}

export const merchandiseMessages = {
  ui: defineMessages({
    createMerchandise: { id: 'merchandise.ui.createMerchandise', defaultMessage: '建立商品' },
    deleteMerchandise: { id: 'merchandise.ui.deleteMerchandise', defaultMessage: '刪除商品' },
    setCover: { id: 'merchandise.text.setCover', defaultMessage: '設為封面' },
    deleteImage: { id: 'merchandise.text.deleteImage', defaultMessage: '刪除圖片' },
  }),
  status: defineMessages({
    selling: { id: 'merchandise.status.selling', defaultMessage: '販賣中' },
    soldOut: { id: 'merchandise.status.soldOut', defaultMessage: '已售完' },
    unpublished: { id: 'merchandise.status.unpublished', defaultMessage: '未上架' },
  }),
  label: defineMessages({
    images: { id: 'merchandise.label.images', defaultMessage: '商品圖片' },
    abstract: { id: 'merchandise.label.abstract', defaultMessage: '規格說明' },
    paymentLink: { id: 'merchandise.label.paymentLink', defaultMessage: '付款連結' },
    price: { id: 'merchandise.label.price', defaultMessage: '商品售價' },
    cover: { id: 'merchandise.label.cover', defaultMessage: '封面圖片' },
    delete: { id: 'merchandise.label.delete', defaultMessage: '刪除商品' },
  }),
  text: defineMessages({
    searchMerchandise: { id: 'merchandise.text.searchMerchandise', defaultMessage: '搜尋商品名稱' },
    imageTips: { id: 'merchandise.text.imageTips', defaultMessage: '建議圖片尺寸：600*600px 以上' },
  }),
}

export const blogMessages = {
  ui: defineMessages({
    video: { id: 'blog.ui.video', defaultMessage: '影片內容' },
    contentDescription: { id: 'blog.ui.description', defaultMessage: '圖文內容' },
    postSetting: { id: 'blog.ui.postSetting', defaultMessage: '文章設定' },
    createPost: { id: 'blog.ui.createPost', defaultMessage: '建立文章' },
  }),
  label: defineMessages({
    postContent: { id: 'blog.label.postContent', defaultMessage: '文章內容' },
    postManagement: { id: 'blog.label.postManagement', defaultMessage: '文章管理' },
    codeName: { id: 'blog.label.codeName', defaultMessage: '網址代稱' },
    merchandises: { id: 'blog.label.merchandises', defaultMessage: '相關商品' },
    deletePost: { id: 'blog.label.deletePost', defaultMessage: '刪除文章' },
  }),
  term: defineMessages({
    pasteVideoUrl: { id: 'blog.term.pasteVideoUrl', defaultMessage: '貼上影片網址' },
  }),
  text: defineMessages({
    url: { id: 'blog.text.url', defaultMessage: '完整網址的最後部分，通常是因由小寫英文字母、數字或連字號組成' },
    suggestedPictureSize: { id: 'blog.text.suggestedPictureSize', defaultMessage: '建議圖片尺寸：1200*675px' },
    uploading: { id: 'blog.text.uploading', defaultMessage: '上傳中' },
    noVideoFound: { id: 'blog.text.noVideoFound', defaultMessage: '找不到影片' },
  }),
}
