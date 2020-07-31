import Icon, { GlobalOutlined, GoldenFilled, ShoppingFilled } from '@ant-design/icons'
import { Menu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AppContext from '../../contexts/AppContext'
import { commonMessages, errorMessages } from '../../helpers/translation'
import { ReactComponent as BookIcon } from '../../images/icon/book.svg'
import { ReactComponent as CalendarAltIcon } from '../../images/icon/calendar-alt.svg'
import { ReactComponent as DiscountIcon } from '../../images/icon/discount.svg'
import { ReactComponent as MicrophoneIcon } from '../../images/icon/microphone.svg'
import { ReactComponent as MoneyCircleIcon } from '../../images/icon/money-circle.svg'
import { ReactComponent as PointIcon } from '../../images/icon/point.svg'
import { ReactComponent as ShopIcon } from '../../images/icon/shop.svg'
import { ReactComponent as UserIcon } from '../../images/icon/user.svg'
import { ReactComponent as UsersIcon } from '../../images/icon/users.svg'
import { routesProps } from '../../Routes'

const StyledMenu = styled(Menu)`
  && {
    border-right: none;
  }
`

const AdminMenu: React.FC<MenuProps> = ({ children, ...menuProps }) => {
  const { formatMessage } = useIntl()
  const history = useHistory()

  const handleClick: MenuClickEventHandler = ({ key, item }) => {
    if (typeof key === 'string' && key.startsWith('_blank')) {
      console.log(key, item)
      // window.open(item['data-href'])
    } else {
      const route = routesProps[key]
      route ? history.push(route.path) : alert(formatMessage(errorMessages.route.notFound))
    }
  }

  return (
    <StyledMenu {...menuProps} mode="inline" onClick={handleClick}>
      {children}
    </StyledMenu>
  )
}

export const OwnerAdminMenu: React.FC<MenuProps> = props => {
  const { formatMessage } = useIntl()
  const { enabledModules } = useContext(AppContext)

  return (
    <div className="d-flex flex-column flex-grow-1">
      <AdminMenu
        {...props}
        defaultOpenKeys={[
          'owner_program_admin',
          'owner_promotion_admin',
          'owner_podcast_admin',
          'owner_appointment_admin',
          'owner_activity_admin',
          'owner_merchandise_admin',
          'owner_blog_admin',
          'owner_point_admin',
        ]}
      >
        <Menu.Item key="owner_sales">
          <Icon component={() => <MoneyCircleIcon />} />
          <span>{formatMessage(commonMessages.menu.salesAdmin)}</span>
        </Menu.Item>

        <Menu.SubMenu
          key="owner_program_admin"
          title={
            <span>
              <Icon component={() => <BookIcon />} />
              <span>{formatMessage(commonMessages.menu.programAdmin)}</span>
            </span>
          }
        >
          <Menu.Item key="program_collection">{formatMessage(commonMessages.menu.programs)}</Menu.Item>
          <Menu.Item key="program_issue_collection">{formatMessage(commonMessages.menu.programIssues)}</Menu.Item>
          {enabledModules.program_package && (
            <Menu.Item key="program_package_collection">{formatMessage(commonMessages.menu.programPackage)}</Menu.Item>
          )}
          {enabledModules.learning_statistics && (
            <Menu.Item key="program_progress">{formatMessage(commonMessages.menu.programProgress)}</Menu.Item>
          )}
          {enabledModules.tempo_delivery && (
            <Menu.Item key="program_tempo_delivery">{formatMessage(commonMessages.menu.tempoDelivery)}</Menu.Item>
          )}
          <Menu.Item key="program_category">{formatMessage(commonMessages.menu.programCategory)}</Menu.Item>
        </Menu.SubMenu>

        {enabledModules.podcast && (
          <Menu.SubMenu
            key="owner_podcast_admin"
            title={
              <span>
                <Icon component={() => <MicrophoneIcon />} />
                <span>{formatMessage(commonMessages.menu.podcastAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="podcast_program_collection">{formatMessage(commonMessages.menu.podcastPrograms)}</Menu.Item>
            <Menu.Item key="podcast_plan">{formatMessage(commonMessages.menu.podcastPlans)}</Menu.Item>
            <Menu.Item key="podcast_program_category">{formatMessage(commonMessages.menu.podcastCategory)}</Menu.Item>
          </Menu.SubMenu>
        )}

        {enabledModules.appointment && (
          <Menu.SubMenu
            key="owner_appointment_admin"
            title={
              <span>
                <Icon component={() => <CalendarAltIcon />} />
                <span>{formatMessage(commonMessages.menu.appointmentAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="appointment_plan_collection">
              {formatMessage(commonMessages.menu.appointmentPlans)}
            </Menu.Item>
            <Menu.Item key="appointment_period_collection">{formatMessage(commonMessages.menu.appointments)}</Menu.Item>
          </Menu.SubMenu>
        )}

        {enabledModules.activity && (
          <Menu.SubMenu
            key="owner_activity_admin"
            title={
              <span>
                <Icon component={() => <CalendarAltIcon />} />
                <span>{formatMessage(commonMessages.menu.activityAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="activity_collection">{formatMessage(commonMessages.menu.activities)}</Menu.Item>
            <Menu.Item key="activity_category">{formatMessage(commonMessages.menu.activityCategory)}</Menu.Item>
          </Menu.SubMenu>
        )}

        {enabledModules.blog && (
          <Menu.SubMenu
            key="owner_blog_admin"
            title={
              <span>
                <ShoppingFilled />
                <span>{formatMessage(commonMessages.menu.blogAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="blog_collection">{formatMessage(commonMessages.menu.blogPosts)}</Menu.Item>
            <Menu.Item key="blog_category">{formatMessage(commonMessages.menu.blogCategory)}</Menu.Item>
          </Menu.SubMenu>
        )}

        {enabledModules.merchandise && (
          <Menu.SubMenu
            key="owner_merchandise_admin"
            title={
              <span>
                <Icon component={() => <ShopIcon />} />
                <span>{formatMessage(commonMessages.menu.merchandiseAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="merchandise_collection">{formatMessage(commonMessages.menu.merchandises)}</Menu.Item>
            <Menu.Item key="merchandise_shop_collection">
              {formatMessage(commonMessages.menu.merchandiseShop)}
            </Menu.Item>
            <Menu.Item key="merchandise_category">{formatMessage(commonMessages.menu.merchandiseCategory)}</Menu.Item>
          </Menu.SubMenu>
        )}

        {(enabledModules.merchandise || enabledModules.project) && (
          <Menu.Item key="shipping">
            <GoldenFilled />
            {formatMessage(commonMessages.menu.shipping)}
          </Menu.Item>
        )}

        <Menu.SubMenu
          key="owner_promotion_admin"
          title={
            <span>
              <Icon component={() => <DiscountIcon />} />
              <span>{formatMessage(commonMessages.menu.promotionAdmin)}</span>
            </span>
          }
        >
          <Menu.Item key="owner_coupon_plans">{formatMessage(commonMessages.menu.coupons)}</Menu.Item>
          {enabledModules.voucher && (
            <Menu.Item key="owner_voucher_plans">{formatMessage(commonMessages.menu.vouchers)}</Menu.Item>
          )}
        </Menu.SubMenu>

        {enabledModules.point && (
          <Menu.SubMenu
            key="owner_point_admin"
            title={
              <span>
                <Icon component={() => <PointIcon />} />
                <span>{formatMessage(commonMessages.menu.pointAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="owner_point_history">{formatMessage(commonMessages.menu.pointHistory)}</Menu.Item>
          </Menu.SubMenu>
        )}

        <Menu.Item key="owner_members">
          <Icon component={() => <UsersIcon />} />
          <span>{formatMessage(commonMessages.menu.members)}</span>
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon component={() => <UserIcon />} />
          <span>{formatMessage(commonMessages.menu.ownerSettings)}</span>
        </Menu.Item>
        <Menu.Item key="app_admin">
          <GlobalOutlined />
          <span>{formatMessage(commonMessages.menu.appAdmin)}</span>
        </Menu.Item>
      </AdminMenu>
    </div>
  )
}

export const CreatorAdminMenu: React.FC<MenuProps> = (props: MenuProps) => {
  const { formatMessage } = useIntl()
  const { enabledModules } = useContext(AppContext)

  return (
    <div className="d-flex flex-column flex-grow-1">
      <AdminMenu
        {...props}
        defaultOpenKeys={['creator_program_admin', 'creator_appointment_admin', 'creator_activity_admin']}
      >
        <Menu.Item key="creator_sales">
          <Icon component={() => <MoneyCircleIcon />} />
          <span>{formatMessage(commonMessages.menu.salesAdmin)}</span>
        </Menu.Item>

        <Menu.SubMenu
          key="creator_program_admin"
          title={
            <span>
              <Icon component={() => <BookIcon />} />
              <span>{formatMessage(commonMessages.menu.programAdmin)}</span>
            </span>
          }
        >
          <Menu.Item key="program_collection">{formatMessage(commonMessages.menu.programs)}</Menu.Item>
          <Menu.Item key="program_issue_collection">{formatMessage(commonMessages.menu.programIssues)}</Menu.Item>
        </Menu.SubMenu>

        {enabledModules.appointment && (
          <Menu.SubMenu
            key="creator_appointment_admin"
            title={
              <span>
                <Icon component={() => <CalendarAltIcon />} />
                <span>{formatMessage(commonMessages.menu.appointmentAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="appointment_plan_collection">
              {formatMessage(commonMessages.menu.appointmentPlans)}
            </Menu.Item>
            <Menu.Item key="appointment_period_collection">{formatMessage(commonMessages.menu.appointments)}</Menu.Item>
          </Menu.SubMenu>
        )}

        {enabledModules.activity && (
          <Menu.SubMenu
            key="creator_activity_admin"
            title={
              <span>
                <Icon component={() => <CalendarAltIcon />} />
                <span>{formatMessage(commonMessages.menu.activityAdmin)}</span>
              </span>
            }
          >
            <Menu.Item key="activity_collection">{formatMessage(commonMessages.menu.activities)}</Menu.Item>
          </Menu.SubMenu>
        )}
        <Menu.Item key="settings">
          <Icon component={() => <UserIcon />} />
          <span>{formatMessage(commonMessages.menu.creatorSettings)}</span>
        </Menu.Item>
      </AdminMenu>
    </div>
  )
}
