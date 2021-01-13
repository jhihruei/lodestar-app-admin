import { Skeleton } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import MemberAdminLayout from '../../components/layout/MemberAdminLayout'
import SaleCollectionAdminCard from '../../components/sale/SaleCollectionAdminCard'
import { useMemberAdmin } from '../../hooks/member'

const MemberProfileAdminPage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>()
  const { loadingMemberAdmin, errorMemberAdmin, memberAdmin } = useMemberAdmin(memberId)

  if (loadingMemberAdmin || errorMemberAdmin || !memberAdmin) {
    return <Skeleton active />
  }

  return (
    <MemberAdminLayout member={memberAdmin}>
      <div className="p-5">
        <SaleCollectionAdminCard memberId={memberId} />
      </div>
    </MemberAdminLayout>
  )
}

export default MemberProfileAdminPage
