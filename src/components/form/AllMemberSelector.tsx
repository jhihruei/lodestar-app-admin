import { useQuery } from '@apollo/react-hooks'
import { Spin } from 'antd'
import { SelectProps } from 'antd/lib/select'
import gql from 'graphql-tag'
import React from 'react'
import { useIntl } from 'react-intl'
import hasura from '../../hasura'
import { errorMessages } from '../../helpers/translation'
import { MemberOptionProps } from '../../types/member'
import MemberSelector from './MemberSelector'

const AllMemberSelector: React.FC<{
  value?: string
  onChange?: (value: string | null) => void
  onSelect?: SelectProps<string[]>['onSelect']
  allowClear?: boolean
}> = ({ value, onChange, onSelect, allowClear }) => {
  const { formatMessage } = useIntl()
  const { loading, error, members } = useAllMemberCollection()

  if (loading) {
    return <Spin />
  }

  if (error || !members) {
    return <div>{formatMessage(errorMessages.data.fetch)}</div>
  }

  return (
    <MemberSelector
      members={members}
      value={value}
      onSelect={onSelect}
      onChange={value => typeof value === 'string' && onChange && onChange(value)}
      allowClear={allowClear}
    />
  )
}

const useAllMemberCollection = () => {
  const { data, loading, error } = useQuery<hasura.GET_ALL_MEMBER_COLLECTION>(
    gql`
      query GET_ALL_MEMBER_COLLECTION {
        member {
          id
          picture_url
          name
          username
          email
        }
      }
    `,
    {
      context: {
        important: true,
      },
    },
  )

  const members: MemberOptionProps[] =
    loading || error || !data
      ? []
      : data.member.map(member => ({
          id: member.id,
          avatarUrl: member.picture_url,
          name: member.name || member.username,
          username: member.username,
          email: member.email,
        }))

  return {
    loading,
    members,
    error,
  }
}

export default AllMemberSelector
