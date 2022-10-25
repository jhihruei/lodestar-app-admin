import { defineMessages } from 'react-intl'

const projectMessages = {
  '*': defineMessages({
    projectTitle: { id: 'project.*.projectTitle', defaultMessage: '專案名稱' },
    sponsor: { id: 'project.*.sponsor', defaultMessage: '發起者' },
    settings: { id: 'project.*.settings', defaultMessage: '專案設定' },
    projectIntroduction: { id: 'project.*.projectIntroduction', defaultMessage: '專案介紹' },
    fundingTerm: { id: 'project.*.fundingTerm', defaultMessage: '募資條件' },
    participantsAmount: { id: 'project.*.participantsAmount', defaultMessage: '參與人數' },
    projectCountdownTimer: { id: 'project.*.projectCountdownTimer', defaultMessage: '專案倒數' },
    unnamedProject: { id: 'project.*.unnamedProject', defaultMessage: '未命名專案' },
    projectCover: { id: 'project.*.projectCover', defaultMessage: '專案封面' },
    projectAbstract: { id: 'project.*.projectAbstract', defaultMessage: '專案摘要' },
    projectContent: { id: 'project.*.projectContent', defaultMessage: '專案內容' },
    expireAt: { id: 'project.*.expireAt', defaultMessage: '截止日' },
    sortProject: { id: 'project.*.sortProject', defaultMessage: '專案排序' },
    sortProjectPlan: { id: 'project.*.sortProjectPlan', defaultMessage: '方案排序' },
    editProject: { id: 'project.*.editProject', defaultMessage: '編輯方案' },
    noProject: { id: 'project.*.noProject', defaultMessage: '尚未有任何專案' },
    soldOutProjectCount: { id: 'project.*.soldOutProjectCount', defaultMessage: '已售 {count}' },
    portfolioTitle: { id: 'project.*.portfolioTitle', defaultMessage: 'Title' },
  }),
  ProjectPlanAdminModal: defineMessages({
    deliverables: { id: 'project.ProjectPlanAdminModal.deliverables', defaultMessage: '交付項目' },
  }),
  ProjectPlanCard: defineMessages({
    onSale: { id: 'project.ProjectPlanCard.onSale', defaultMessage: '發售中' },
    notSale: { id: 'project.ProjectPlanCard.notSale', defaultMessage: '已停售' },
    sku: { id: 'project.ProjectPlanCard.sku', defaultMessage: 'SKU' },
    skuSetting: { id: 'project.ProjectPlanCard.skuSetting', defaultMessage: '設定料號' },
  }),
  ProjectPlanProductSelector: defineMessages({
    sku: { id: 'project.ProjectPlanProductSelector.sku', defaultMessage: '料號（SKU）' },
    recognizePrice: { id: 'project.ProjectPlanProductSelector.recognizePrice', defaultMessage: '認列金額' },
    addDeliverables: { id: 'project.ProjectPlanProductSelector.addDeliverables', defaultMessage: '新增項目' },
  }),
  ProjectBasicForm: defineMessages({
    tag: { id: 'project.ProjectBasicForm.tag', defaultMessage: '標籤' },
  }),
  ProjectPortfolioBasicForm: defineMessages({
    tag: { id: 'project.ProjectPortfolioBasicForm.tag', defaultMessage: 'tag' },
  }),
  ProjectPortfolioSettingsForm: defineMessages({
    cover: {
      id: 'project.ProjectPortfolioSettingsForm.cover',
      defaultMessage: 'cover',
    },
    defaultImageTips: {
      id: 'project.ProjectPortfolioSettingsForm.defaultImageTips',
      defaultMessage: 'Recommended image size: 1200*675px',
    },
    defaultVideoTips: {
      id: 'project.ProjectPortfolioSettingsForm.defaultVideoTips',
      defaultMessage: 'If video preview is not show in page, please check video url is correct',
    },
    videoUrl: {
      id: 'project.ProjectPortfolioSettingsForm.videoUrl',
      defaultMessage: 'Portfolio video url',
    },
    hasSameOriginalSource: {
      id: 'project.ProjectPortfolioSettingsForm.hasSameOriginalSource',
      defaultMessage: 'Has same original source',
    },
  }),
  ProjectPortfolioDescriptionForm: defineMessages({}),
  ProjectCollectionTable: defineMessages({
    title: { id: 'project.ProjectCollectionTable.title', defaultMessage: 'Title' },
    author: { id: 'project.ProjectCollectionTable.author', defaultMessage: 'Author' },
  }),
  ProjectPublishAdminBlock: defineMessages({
    notCompleteNotation: {
      id: 'project.ProjectPublishAdminBlock.notCompleteNotation',
      defaultMessage: 'Please fill required fields. Once completed, you can publish your project.',
    },
    notCompletePortfolioNotation: {
      id: 'project.ProjectPublishAdminBlock.notCompletePortfolioNotation',
      defaultMessage: 'Please fill required fields. Once completed, you can publish from here.',
    },
    unpublishedNotation: {
      id: 'project.ProjectPublishAdminBlock.unpublishedNotation',
      defaultMessage: 'Your project is not published, it will not show in page.',
    },
    unpublishedPortfolioNotation: {
      id: 'project.ProjectPublishAdminBlock.unpublishedPortfolioNotation',
      defaultMessage: 'Your portfolio is not published, it will not show in page.',
    },
    publishedNotation: {
      id: 'project.ProjectPublishAdminBlock.publishedNotation',
      defaultMessage: 'Your project is published now, it will show in page.',
    },
    publishedPortfolioNotation: {
      id: 'project.ProjectPublishAdminBlock.publishedPortfolioNotation',
      defaultMessage: 'Your portfolio is published now, it will show in page.',
    },
    noTitle: { id: 'project.ProjectPublishAdminBlock.noShopTitle', defaultMessage: 'Project title has not been set' },
    noFundingTerm: { id: 'project.text.noSalePlan', defaultMessage: 'Project sale plan has not been set' },
    noSalePrice: { id: 'project.text.noSalePrice', defaultMessage: 'Sale price has not been set' },
    activateProject: { id: 'project.ProjectPublishAdminBlock.activateShop', defaultMessage: 'Publish' },
    activateNow: { id: 'project.ProjectPublishAdminBlock.activateNow', defaultMessage: 'Publish' },
    closeProject: { id: 'project.ProjectPublishAdminBlock.closeShop', defaultMessage: 'Unpublish' },
    noAuthor: { id: 'project.ProjectPublishAdminBlock.noAuthor', defaultMessage: 'Author has not been set' },
    noVideoUrl: { id: 'project.ProjectPublishAdminBlock.noVideoUrl', defaultMessage: 'Video url has not been set' },
  }),
}

export default projectMessages
