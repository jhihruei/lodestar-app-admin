import { Icon, Skeleton } from 'antd'
import React from 'react'
import styled from 'styled-components'
import AdminCard from '../../../components/admin/AdminCard'
import { useAuth } from '../../../components/auth/AuthContext'
import OwnerAdminLayout from '../../../components/layout/OwnerAdminLayout'
import PodcastPlanCollectionAdminTable from '../../../containers/podcast/PodcastPlanCollectionAdminTable'
import PodcastPlanAdminModal from '../../../containers/podcast/PodcastPlanAdminModal'
import { ReactComponent as DiscountIcon } from '../../../images/default/discount.svg'

const StyledTitle = styled.h1`
  color: var(--gray-darker);
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2px;
`
const PodcastPlanAdminPage: React.FC = () => {
  const { currentMemberId } = useAuth()

  return (
    <OwnerAdminLayout>
      <StyledTitle className="mb-4">
        <Icon component={() => <DiscountIcon />} className="mr-2" />
        <span>訂閱方案</span>
      </StyledTitle>

      {!currentMemberId ? (
        <Skeleton active />
      ) : (
        <>
          <div className="mb-5">
            <PodcastPlanAdminModal />
          </div>
          
          <AdminCard>
            <PodcastPlanCollectionAdminTable />
          </AdminCard>
        </>
      )}
    </OwnerAdminLayout>
  )
}

export default PodcastPlanAdminPage
