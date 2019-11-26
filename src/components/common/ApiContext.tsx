import { ApolloProvider, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { useEffect } from 'react'
import { createApolloClient } from '../../helpers/apollo'
import types from '../../types'
import { useAuth } from '../auth/AuthContext'

export const ApiProvider: React.FC = ({ children }) => {
  const { currentUserRole, currentMemberId, isAuthenticated } = useAuth()
  const apolloClient = createApolloClient({ currentMemberId, currentUserRole })

  const [updateLoginedAt] = useMutation<types.UPDATE_LOGINED_AT, types.UPDATE_LOGINED_ATVariables>(UPDATE_LOGINED_AT, {
    client: apolloClient,
  })

  useEffect(() => {
    if (isAuthenticated && currentUserRole) {
      updateLoginedAt({
        variables: {
          memberId: currentMemberId || '',
          loginedAt: new Date(),
        },
      })
    }
  }, [isAuthenticated, currentUserRole, updateLoginedAt, currentMemberId])

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

const UPDATE_LOGINED_AT = gql`
  mutation UPDATE_LOGINED_AT($memberId: String!, $loginedAt: timestamptz) {
    update_member(where: { id: { _eq: $memberId } }, _set: { logined_at: $loginedAt }) {
      affected_rows
    }
  }
`
