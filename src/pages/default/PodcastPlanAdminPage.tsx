import Icon, { FileAddOutlined } from '@ant-design/icons'
import { Button, Skeleton } from 'antd'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { AdminPageTitle } from '../../components/admin'
import AdminCard from '../../components/admin/AdminCard'
import AdminLayout from '../../components/layout/AdminLayout'
import PodcastPlanCollectionAdminTable from '../../containers/podcast/PodcastPlanCollectionAdminTable'
import PodcastPlanCreationModal from '../../containers/podcast/PodcastPlanCreationModal'
import { useAuth } from '../../contexts/AuthContext'
import { commonMessages, podcastMessages } from '../../helpers/translation'
import { usePodcastPlanAdminCollection } from '../../hooks/podcast'
import { ReactComponent as DiscountIcon } from '../../images/icon/discount.svg'

const PodcastPlanAdminPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { currentMemberId } = useAuth()
  const {
    loadingPodcastPlanAdminCollection,
    errorPodcastPlanAdminCollection,
    podcastPlans,
    refetchPodcastPlanAdminCollection,
  } = usePodcastPlanAdminCollection()
  const [isVisible, setVisible] = useState(false)

  return (
    <AdminLayout>
      <AdminPageTitle className="mb-4">
        <Icon component={() => <DiscountIcon />} className="mr-3" />
        <span>{formatMessage(commonMessages.menu.podcastPlans)}</span>
      </AdminPageTitle>

      {!currentMemberId ? (
        <Skeleton active />
      ) : (
        <>
          <div className="mb-5">
            <PodcastPlanCreationModal
              isVisible={isVisible}
              onVisibleSet={setVisible}
              refetch={refetchPodcastPlanAdminCollection}
            >
              <Button icon={<FileAddOutlined />} type="primary" onClick={() => setVisible(true)}>
                {formatMessage(podcastMessages.ui.createPodcastPlan)}
              </Button>
            </PodcastPlanCreationModal>
          </div>

          <AdminCard>
            <PodcastPlanCollectionAdminTable
              loading={loadingPodcastPlanAdminCollection}
              error={errorPodcastPlanAdminCollection}
              podcastPlans={podcastPlans}
              refetch={refetchPodcastPlanAdminCollection}
            />
          </AdminCard>
        </>
      )}
    </AdminLayout>
  )
}

export default PodcastPlanAdminPage
