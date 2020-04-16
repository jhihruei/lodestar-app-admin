import { AvatarProps } from 'antd/lib/avatar'
import React from 'react'
import styled from 'styled-components'
import { AvatarImage } from '../../components/common/Image'
import { usePublicMember } from '../../hooks/member'
import { MemberPublic } from '../../types/general'

const MemberName = styled.span`
  font-size: 14px;
  color: #9b9b9b;
`

type MemberAvatarProps = AvatarProps & {
  memberId: string
  renderAvatar?: (member: MemberPublic) => React.ReactNode
  renderText?: (member: MemberPublic) => React.ReactNode
  withName?: boolean
}
const MemberAvatar: React.FC<MemberAvatarProps> = ({ memberId, shape, size, renderAvatar, renderText, withName }) => {
  const { member } = usePublicMember(memberId)
  if (!member) {
    return null
  }

  return (
    <div className="d-flex align-items-center">
      {renderAvatar ? renderAvatar(member) : <AvatarImage src={member.pictureUrl || ''} shape={shape} size={size} />}
      {renderText && renderText(member)}
      {withName && <MemberName className="ml-3">{member.name}</MemberName>}
    </div>
  )
}

export default MemberAvatar
