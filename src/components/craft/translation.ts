import { defineMessages } from 'react-intl'

const craftMessages = {
  '*': defineMessages({
    orderSelectorEnabled: {
      id: 'craft.*.orderSelectorEnabled',
      defaultMessage: '啟用排序選擇器',
    },
    categorySelectorEnabled: { id: 'craft.*.categorySelectorEnabled', defaultMessage: '啟用分類選擇器' },
    primary: { id: 'craft.*.primary', defaultMessage: '樣式一' },
    secondary: { id: 'craft.*.secondary', defaultMessage: '樣式二' },
    variant: { id: 'craft.*.variant', defaultMessage: '元件樣式' },
    collectionVariant: { id: 'craft.*.collectionVariant', defaultMessage: '集合樣式' },
    grid: { id: 'craft.*.grid', defaultMessage: '網格' },
    carousel: { id: 'craft.*.carousel', defaultMessage: '輪播' },
    spaceStyle: { id: 'craft.*.spaceStyle', defaultMessage: '間距樣式' },
    positionStyle: { id: 'craft.*.positionStyle', defaultMessage: '位置樣式' },
    borderStyle: { id: 'craft.*.borderStyle', defaultMessage: '框線樣式' },
    title: { id: 'craft.*.title', defaultMessage: '標題' },
    titleStyle: { id: 'craft.*.titleStyle', defaultMessage: '標題樣式' },
    paragraphStyle: { id: 'craft.*.paragraphStyle', defaultMessage: '段落樣式' },
    width: { id: 'craft.*.width', defaultMessage: '寬度' },
    fontSize: { id: 'craft.*.fontSize', defaultMessage: '字級' },
    lineHeight: { id: 'craft.*.lineHeight', defaultMessage: '行高' },
    textAlign: { id: 'craft.*.textAlign', defaultMessage: '對齊' },
    left: { id: 'craft.*.left', defaultMessage: '左' },
    center: { id: 'craft.*.center', defaultMessage: '中' },
    right: { id: 'craft.*.right', defaultMessage: '右' },
    fontWeight: { id: 'craft.*.fontWeight', defaultMessage: '字重' },
    lighter: { id: 'craft.*.lighter', defaultMessage: '細' },
    normal: { id: 'craft.*.normal', defaultMessage: '中' },
    bold: { id: 'craft.*.bold', defaultMessage: '粗' },
    advancedSetting: { id: 'craft.*.advancedSetting', defaultMessage: '進階設定' },
    className: { id: 'craft.*.className', defaultMessage: '類別名稱' },
    all: { id: 'craft.*.all', defaultMessage: 'all' },
    collectionType: { id: 'craft.*.collectionType', defaultMessage: 'type' },
  }),
  ProgramCollectionSettings: defineMessages({
    programSectionId: { id: 'craft.ProgramCollectionSettings.programSectionId', defaultMessage: '課程區塊 ID' },
  }),
  ActivityCollectionSettings: defineMessages({
    activitySectionId: { id: 'craft.ActivityCollectionSettings.activitySectionId', defaultMessage: '活動區塊 ID' },
  }),
  MemberCollectionSettings: defineMessages({
    memberSectionId: { id: 'craft.MemberCollectionSettings.memberSectionId', defaultMessage: '會員區塊 ID' },
  }),
  ProgramContentCollectionSettings: defineMessages({
    programContentSectionId: {
      id: 'craft.ProgramContentCollectionSettings.programContentSectionId',
      defaultMessage: '課程內容區塊 ID',
    },
  }),
  ProgramPackageCollectionSettings: defineMessages({
    programPackageSectionId: {
      id: 'craft.ProgramPackageCollectionSettings.programPackageSectionId',
      defaultMessage: '課程組合區塊 ID',
    },
  }),
  ProjectCollectionSettings: defineMessages({
    projectSectionId: { id: 'craft.ProjectCollectionSettings.projectSectionId', defaultMessage: '專案區塊 ID' },
    fundingProject: { id: 'craft.ProjectCollectionSettings.fundingProject', defaultMessage: 'Funding Project' },
    preOrderProject: { id: 'craft.ProjectCollectionSettings.preOrderProject', defaultMessage: 'Pre Order Project' },
    portfolioProject: { id: 'craft.ProjectCollectionSettings.portfolioProject', defaultMessage: 'Portfolio Project' },
  }),
  ImageSettings: defineMessages({
    ratio: { id: 'craft.ImageSettings.ratio', defaultMessage: '比例' },
  }),
  SizeStyleInput: defineMessages({
    height: { id: 'craft.SizeStyleInput.height', defaultMessage: '高度' },
  }),
  LayoutSettings: defineMessages({
    ratio: { id: 'craft.LayoutSettings.ratio', defaultMessage: '比例' },
    gap: { id: 'craft.LayoutSettings.gap', defaultMessage: '間距' },
  }),
  SectionSettings: defineMessages({
    layout: { id: 'craft.SectionSettings.layout', defaultMessage: '排列方式' },
    horizontal: { id: 'craft.SectionSettings.horizontal', defaultMessage: '水平排列' },
    vertical: { id: 'craft.SectionSettings.vertical', defaultMessage: '垂直排列' },
    horizontalAlign: { id: 'craft.SectionSettings.horizontalAlign', defaultMessage: '水平對齊' },
    verticalAlign: { id: 'craft.SectionSettings.verticalAlign', defaultMessage: '垂直對齊' },
    left: { id: 'craft.SectionSettings.left', defaultMessage: '置左' },
    right: { id: 'craft.SectionSettings.right', defaultMessage: '置右' },
    center: { id: 'craft.SectionSettings.center', defaultMessage: '置中' },
    top: { id: 'craft.SectionSettings.top', defaultMessage: '置頂' },
    bottom: { id: 'craft.SectionSettings.bottom', defaultMessage: '置底' },
    normal: { id: 'craft.SectionSettings.normal', defaultMessage: '正常' },
    hide: { id: 'craft.SectionSettings.hide', defaultMessage: '隱藏' },
    appearAfterLogin: { id: 'craft.SectionSettings.appearAfterLogin', defaultMessage: '登入後顯示' },
    disappearAfterLogin: { id: 'craft.SectionSettings.disappearAfterLogin', defaultMessage: '登入後隱藏' },
    link: { id: 'craft.SectionSettings.link', defaultMessage: '連結' },
    openNewTab: { id: 'craft.SectionSettings.openNewTab', defaultMessage: '另開分頁' },
  }),
  TitleSettings: defineMessages({
    titleContent: { id: 'craft.TitleSettings.titleContent', defaultMessage: '標題內容' },
  }),
  ParagraphSettings: defineMessages({
    paragraphContent: { id: 'craft.ParagraphSettings.paragraphContent', defaultMessage: '段落內容' },
    content: { id: 'craft.ParagraphSettings.content', defaultMessage: '內文' },
  }),
  EmbeddedSettings: defineMessages({
    embedSetting: { id: 'craft.EmbeddedSettings.embedSettings', defaultMessage: '嵌入設定' },
    embedStyle: { id: 'craft.EmbeddedSettings.embedStyle', defaultMessage: '嵌入樣式' },
    fillIframeFormatPlz: {
      id: 'craft.EmbeddedSettings.fillIframeFormatPlz',
      defaultMessage: '請填入 iframe',
    },
  }),
  CarouselSettings: defineMessages({
    carouselStyle: { id: 'craft.CarouselSettings.carouselStyle', defaultMessage: '輪播樣式' },
    carouselSetting: { id: 'craft.CarouselSettings.carouselSetting', defaultMessage: '輪播設定' },
    currentSlide: { id: 'craft.CarouselSettings.currentSlide', defaultMessage: '目前輪播' },
    autoplay: { id: 'craft.CarouselSettings.autoplay', defaultMessage: '自動播放' },
    autoplaySpeed: { id: 'craft.CarouselSettings.autoplaySpeed', defaultMessage: '自動播放速度（毫秒）' },
    infinite: { id: 'craft.CarouselSettings.infinite', defaultMessage: '無限輪播' },
    arrows: { id: 'craft.CarouselSettings.arrows', defaultMessage: '顯示箭頭' },
    centerMode: { id: 'craft.CarouselSettings.centerMode', defaultMessage: '聚焦模式' },
    centerPadding: { id: 'craft.CarouselSettings.centerPadding', defaultMessage: '聚焦間距' },
    dots: { id: 'craft.CarouselSettings.dots', defaultMessage: '顯示圓點' },
    slideToShow: { id: 'craft.CarouselSettings.slideToShow', defaultMessage: '欄數' },
    slideToScroll: { id: 'craft.CarouselSettings.slideToScroll', defaultMessage: '捲動數量' },
    arrowsVerticalPosition: {
      id: 'craft.CarouselSettings.arrowsVerticalPosition',
      defaultMessage: '箭頭垂直位置',
    },
    arrowsLeftPosition: { id: 'craft.CarouselSettings.arrowsLeftPosition', defaultMessage: '左箭頭位置' },
    arrowsLeftSize: { id: 'craft.CarouselSettings.arrowsLeftSize', defaultMessage: '左箭頭大小' },
    arrowsRightPosition: { id: 'craft.CarouselSettings.arrowsRightPosition', defaultMessage: '右箭頭位置' },
    arrowsRightSize: { id: 'craft.CarouselSettings.arrowsRightSize', defaultMessage: '右箭頭大小' },
    dotsPosition: { id: 'craft.CarouselSettings.dotsPosition', defaultMessage: '圓點位置' },
    dotsWidth: { id: 'craft.CarouselSettings.dotsWidth', defaultMessage: '圓點寬度' },
    dotsHeight: { id: 'craft.CarouselSettings.dotsHeight', defaultMessage: '圓點高度' },
    dotsMargin: { id: 'craft.CarouselSettings.dotsMargin', defaultMessage: '圓點間距' },
    dotsRadius: { id: 'craft.CarouselSettings.dotsRadius', defaultMessage: '圓點弧度' },
    height: { id: 'craft.CarouselSettings.height', defaultMessage: '高度' },
  }),
  ButtonSettings: defineMessages({
    buttonSetting: { id: 'craft.ButtonSettings.buttonSetting', defaultMessage: '按鈕設定' },
    buttonStyle: { id: 'craft.ButtonSettings.buttonStyle', defaultMessage: '按鈕樣式' },
    size: { id: 'craft.ButtonSettings.size', defaultMessage: '尺寸' },
    large: { id: 'craft.ButtonSettings.large', defaultMessage: '大' },
    middle: { id: 'craft.ButtonSettings.middle', defaultMessage: '中' },
    small: { id: 'craft.ButtonSettings.small', defaultMessage: '小' },
    buttonBlock: { id: 'craft.ButtonSettings.buttonBlock', defaultMessage: '滿版' },
  }),
  TextStyledInput: defineMessages({
    margin: { id: 'craft.TextStyledInput.margin', defaultMessage: '外距' },
  }),
  BorderStyleInput: defineMessages({
    radius: { id: 'craft.BorderStyleInput.radius', defaultMessage: '弧度' },
  }),
  PositionStyleInput: defineMessages({
    none: { id: 'craft.PositionStyleInput.none', defaultMessage: '無框線' },
    solid: { id: 'craft.PositionStyleInput.solid', defaultMessage: '實線' },
  }),
  ColorPicker: defineMessages({
    color: { id: 'craft.ColorPicker.color', defaultMessage: '顏色' },
  }),
  BackgroundStyleInput: defineMessages({
    background: { id: 'craft.BackgroundStyleInput.background', defaultMessage: '背景' },
    none: { id: 'craft.BackgroundStyleInput.none', defaultMessage: '無' },
    solid: { id: 'craft.BackgroundStyleInput.solid', defaultMessage: '純色' },
    image: { id: 'craft.BackgroundStyleInput.image', defaultMessage: '圖片' },
  }),
  SpaceStyleInput: defineMessages({
    spacing: { id: 'craft.SpaceStyleInput.spacing', defaultMessage: 'spacing' },
    margin: { id: 'craft.SpaceStyleInput.margin', defaultMessage: 'margin' },
    padding: { id: 'craft.SpaceStyleInput.padding', defaultMessage: 'padding' },
    top: { id: 'craft.SpaceStyleInput.top', defaultMessage: 'top' },
    right: { id: 'craft.SpaceStyleInput.right', defaultMessage: 'right' },
    bottom: { id: 'craft.SpaceStyleInput.bottom', defaultMessage: 'bottom' },
    left: { id: 'craft.SpaceStyleInput.left', defaultMessage: 'left' },
  }),
}

export default craftMessages
