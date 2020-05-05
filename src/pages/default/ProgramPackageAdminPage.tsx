import { Button, Icon, Tabs } from 'antd'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { StringParam, useQueryParam } from 'use-query-params'
import useRouter from 'use-react-router'
import {
  AdminBlock,
  AdminBlockTitle,
  AdminHeader,
  AdminHeaderTitle,
  AdminPaneTitle,
  AdminTabBarWrapper,
} from '../../components/admin'
import { StyledLayoutContent } from '../../components/layout/DefaultLayout'
import ProgramPackageBasicForm from '../../components/programPackage/ProgramPackageBasicFrom'
import ProgramPackageDescriptionForm from '../../components/programPackage/ProgramPackageDescriptionForm'
import ProgramPackagePlanCollectionBlock from '../../components/programPackage/ProgramPackagePlanCollectionBlock'
import ProgramPackagePlanCreationModal from '../../components/programPackage/ProgramPackagePlanCreationModal'
import ProgramPackageProgramCollectionBlock from '../../components/programPackage/ProgramPackageProgramCollectionBlock'
import ProgramPackageProgramConnectionModal from '../../components/programPackage/ProgramPackageProgramConnectionModal'
import ProgramPackagePublishBlock from '../../components/programPackage/ProgramPackagePublishBlock'
import AppContext from '../../contexts/AppContext'
import { commonMessages, programPackageMessages } from '../../helpers/translation'
import { useGetProgramPackage } from '../../hooks/programPackage'

const ProgramPackageAdminPage: React.FC = () => {
  const {
    match: {
      params: { programPackageId: id },
    },
  } = useRouter<{ programPackageId: string }>()
  const { programPackage, refetch } = useGetProgramPackage(id)
  const { settings } = useContext(AppContext)
  const { formatMessage } = useIntl()
  const [tabkey, setTabkey] = useQueryParam('tabkey', StringParam)
  !tabkey && setTabkey('program')

  const positionCollection = programPackage?.plans.map(plan => plan.position)
  if (!positionCollection.length) positionCollection.push(0)
  const maxPosition = Math.max(...positionCollection)

  return (
    <>
      <AdminHeader>
        <Link to="/program-packages">
          <Button type="link" className="mr-3">
            <Icon type="arrow-left" />
          </Button>
        </Link>

        <AdminHeaderTitle>{programPackage.title || id}</AdminHeaderTitle>

        <a href={`//${settings['host']}/program-packages/${id}`} target="_blank" rel="noopener noreferrer">
          <Button>{formatMessage(commonMessages.ui.preview)}</Button>
        </a>
      </AdminHeader>

      <StyledLayoutContent variant="gray">
        <Tabs
          activeKey={tabkey || 'programs'}
          onChange={key => setTabkey(key)}
          renderTabBar={(props, DefaultTabBar) => (
            <AdminTabBarWrapper>
              <DefaultTabBar {...props} />
            </AdminTabBarWrapper>
          )}
        >
          <Tabs.TabPane key="programs" tab={formatMessage(programPackageMessages.label.program)}>
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(programPackageMessages.label.program)}</AdminPaneTitle>

              <ProgramPackageProgramConnectionModal
                programPackageId={id}
                programs={programPackage.programs}
                onRefetch={refetch}
              />
              <ProgramPackageProgramCollectionBlock programs={programPackage.programs} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane key="basic" tab={formatMessage(commonMessages.label.basicSettings)}>
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(commonMessages.label.basicSettings)}</AdminPaneTitle>

              <AdminBlock>
                <AdminBlockTitle>{formatMessage(programPackageMessages.label.generalSetting)}</AdminBlockTitle>
                <ProgramPackageBasicForm programPackage={{ id, ...programPackage }} onRefetch={refetch} />
              </AdminBlock>

              <AdminBlock>
                <AdminBlockTitle>{formatMessage(commonMessages.term.description)}</AdminBlockTitle>
                <ProgramPackageDescriptionForm programPackage={{ id, ...programPackage }} onRefetch={refetch} />
              </AdminBlock>

              {/* <AdminBlock>
                <AdminBlockTitle>{formatMessage(programPackageMessages.label.deleteProgramPackage)}</AdminBlockTitle>
                <ProgramPackageDeletionBlock />
              </AdminBlock> */}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane key="sales" tab={formatMessage(commonMessages.label.salesPlan)}>
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(commonMessages.label.salesPlan)}</AdminPaneTitle>

              <ProgramPackagePlanCreationModal programPackageId={id} maxPosition={maxPosition} onRefetch={refetch} />

              <ProgramPackagePlanCollectionBlock plans={programPackage.plans} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane key="publish" tab={formatMessage(commonMessages.label.publishSettings)}>
            <div className="container py-5">
              <AdminPaneTitle>{formatMessage(commonMessages.label.publishAdmin)}</AdminPaneTitle>

              <AdminBlock>
                <ProgramPackagePublishBlock programPackage={{ id, ...programPackage }} onRefetch={refetch} />
              </AdminBlock>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </StyledLayoutContent>
    </>
  )
}

export default ProgramPackageAdminPage
