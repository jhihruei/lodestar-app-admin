import { defineMessages } from 'react-intl'

const adminMessages = {
  '*': defineMessages({}),
  AdminMenu: defineMessages({
    coupons: { id: 'admin.AdminMenu.couponPlans', defaultMessage: '折價方案' },
    learningOverviewAdmin: { id: 'admin.AdminMenu.learningOverviewAdmin', defaultMessage: '學習總覽' },
    salesAdmin: { id: 'admin.AdminMenu.salesAdmin', defaultMessage: '銷售管理' },
    mediaLibrary: { id: 'admin.AdminMenu.mediaLibrary', defaultMessage: '媒體庫' },
    programAdmin: { id: 'admin.AdminMenu.programAdmin', defaultMessage: '線上課程' },
    programs: { id: 'admin.AdminMenu.programs', defaultMessage: '課程管理' },
    programIssues: { id: 'admin.AdminMenu.programIssues', defaultMessage: '課程問題' },
    practice: { id: 'admin.AdminMenu.practice', defaultMessage: '作業管理' },
    exerciseResult: { id: 'admin.AdminMenu.exerciseResult', defaultMessage: '測驗成果' },
    programPackage: { id: 'admin.AdminMenu.programPackage', defaultMessage: '課程組合管理' },
    programProgress: { id: 'admin.AdminMenu.programProgress', defaultMessage: '學習進度' },
    tempoDelivery: { id: 'admin.AdminMenu.tempoDelivery', defaultMessage: '節奏交付' },
    programCategory: { id: 'admin.AdminMenu.programCategory', defaultMessage: '課程分類' },
    programPackageCategory: { id: 'admin.AdminMenu.programPackageCategory', defaultMessage: '課程組合分類' },
    projectAdmin: { id: 'admin.AdminMenu.projectAdmin', defaultMessage: '專案管理' },
    projectFunding: { id: 'admin.AdminMenu.projectFunding', defaultMessage: '募資專案' },
    projectPreOrder: { id: 'admin.AdminMenu.projectPreOrder', defaultMessage: '預購專案' },
    projectOnSale: { id: 'admin.AdminMenu.projectOnSale', defaultMessage: '促銷專案' },
    podcastAdmin: { id: 'admin.AdminMenu.podcastAdmin', defaultMessage: '音頻廣播' },
    podcastPrograms: { id: 'admin.AdminMenu.podcastPrograms', defaultMessage: '廣播管理' },
    podcastPlans: { id: 'admin.AdminMenu.podcastPlans', defaultMessage: '訂閱方案' },
    podcastCategory: { id: 'admin.AdminMenu.podcastCategory', defaultMessage: '廣播分類' },
    podcastAlbum: { id: 'admin.AdminMenu.podcastAlbum', defaultMessage: '音頻專輯' },
    podcastAlbumCategory: { id: 'admin.AdminMenu.podcastAlbumCategory', defaultMessage: '音頻專輯分類' },
    appointmentAdmin: { id: 'admin.AdminMenu.appointmentAdmin', defaultMessage: '預約服務' },
    appointmentPlans: { id: 'admin.AdminMenu.appointmentPlans', defaultMessage: '預約方案' },
    appointments: { id: 'admin.AdminMenu.appointments', defaultMessage: '預約紀錄' },
    creatorDisplayAdmin: { id: 'admin.AdminMenu.creatorDisplayAdmin', defaultMessage: '講師牆' },
    creatorDisplayManagement: { id: 'admin.AdminMenu.creatorDisplayManagement', defaultMessage: '講師牆管理' },
    creatorDisplayCategory: { id: 'admin.AdminMenu.creatorDisplayCategory', defaultMessage: '領域分類' },
    activityAdmin: { id: 'admin.AdminMenu.activityAdmin', defaultMessage: '活動' },
    activities: { id: 'admin.AdminMenu.activities', defaultMessage: '活動管理' },
    activityCategory: { id: 'admin.AdminMenu.activityCategory', defaultMessage: '活動分類' },
    blogAdmin: { id: 'admin.AdminMenu.blogAdmin', defaultMessage: '媒體文章' },
    blogPosts: { id: 'admin.AdminMenu.blogPosts', defaultMessage: '文章管理' },
    blogCategory: { id: 'admin.AdminMenu.blogCategory', defaultMessage: '文章分類' },
    eCommerce: { id: 'admin.AdminMenu.eCommerce', defaultMessage: '電子商務' },
    merchandiseShop: { id: 'admin.AdminMenu.merchandiseShop', defaultMessage: '商店管理' },
    merchandiseInventory: { id: 'admin.AdminMenu.merchandiseInventory', defaultMessage: '庫存管理' },
    merchandiseCategory: { id: 'admin.AdminMenu.merchandiseCategory', defaultMessage: '商品分類' },
    shipping: { id: 'admin.AdminMenu.shipping', defaultMessage: '出貨管理' },
    promotionAdmin: { id: 'admin.AdminMenu.promotionAdmin', defaultMessage: '促銷管理' },
    vouchers: { id: 'admin.AdminMenu.voucherPlans', defaultMessage: '兌換方案' },
    creditAdmin: { id: 'admin.AdminMenu.creditAdmin', defaultMessage: '紅利折抵' },
    coinHistory: { id: 'admin.AdminMenu.coinHistory', defaultMessage: '代幣紀錄' },
    memberAdmin: { id: 'admin.AdminMenu.memberAdmin', defaultMessage: '會員管理' },
    members: { id: 'admin.AdminMenu.members', defaultMessage: '會員列表' },
    permissionGroup: { id: 'admin.AdminMenu.permissionGroup', defaultMessage: '權限組' },
    memberCategory: { id: 'admin.AdminMenu.memberCategory', defaultMessage: '會員分類' },
    memberProperties: { id: 'admin.AdminMenu.memberProperties', defaultMessage: '自訂欄位' },
    noteAdmin: { id: 'admin.AdminMenu.noteAdmin', defaultMessage: '聯絡管理' },
    salesManagement: { id: 'admin.AdminMenu.salesManagement', defaultMessage: '業務專區' },
    salesPerformance: { id: 'admin.AdminMenu.salesPerformance', defaultMessage: '業績總表' },
    salesLead: { id: 'admin.AdminMenu.salesLead', defaultMessage: '名單撥打' },
    salesLeadDelivery: { id: 'admin.AdminMenu.salesLeadDelivery', defaultMessage: '名單派發' },
    taskAdmin: { id: 'admin.AdminMenu.taskAdmin', defaultMessage: '待辦管理' },
    tasks: { id: 'admin.AdminMenu.tasks', defaultMessage: '待辦清單' },
    taskCategory: { id: 'admin.AdminMenu.taskCategory', defaultMessage: '待辦分類' },
    pageAdmin: { id: 'admin.AdminMenu.pageAdmin', defaultMessage: '頁面管理' },
    pageSetup: { id: 'admin.AdminMenu.pageSetup', defaultMessage: '頁面設定' },
    ownerSettings: { id: 'admin.AdminMenu.ownerSettings', defaultMessage: '管理員設定' },
    creatorSettings: { id: 'admin.AdminMenu.creatorSettings', defaultMessage: '創作者設定' },
    memberSettings: { id: 'admin.AdminMenu.memberSettings', defaultMessage: '個人設定' },
    appAdmin: { id: 'admin.AdminMenu.appAdmin', defaultMessage: '網站管理' },
    appBasicAdmin: { id: 'admin.AdminMenu.appBasicAdmin', defaultMessage: '基本設定' },
    appSettingAdmin: { id: 'admin.AdminMenu.appSettingAdmin', defaultMessage: '參數設定' },
    appSecretAdmin: { id: 'admin.AdminMenu.appSecretAdmin', defaultMessage: '金鑰設定' },
    notFound: { id: 'admin.AdminMenu.notFound', defaultMessage: '無此路徑' },
    certificateAdmin: { id: 'admin.AdminMenu.certificate', defaultMessage: '證書管理' },
    certificateSetting: { id: 'admin.AdminMenu.certificateSetting', defaultMessage: '證書設定' },
    certificateTemplate: { id: 'admin.AdminMenu.certificateTemplate', defaultMessage: '證書模板' },
  }),
}
export default adminMessages
