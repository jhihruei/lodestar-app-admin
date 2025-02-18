import { Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { message } from 'antd'
import { AxiosError } from 'axios'
import { useApp } from 'lodestar-app-element/src/contexts/AppContext'
import { useAuth } from 'lodestar-app-element/src/contexts/AuthContext'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { useIntl } from 'react-intl'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { StringParam, useQueryParam } from 'use-query-params'
import { handleError } from '../../helpers'
import { codeMessages } from '../../helpers/translation'
import { AuthState } from '../../types/general'
import { AuthModalContext, StyledDivider, StyledTitle } from './AuthModal'
import { FacebookLoginButton, GoogleLoginButton, LineLoginButton, ParentingLoginButton } from './SocialLoginButton'
import authMessages from './translation'

const StyledContainer = styled.div`
  user-select: none;
`

const ForgetPassword = styled.div`
  margin-bottom: 1.5rem;
  font-size: 14px;
  text-align: right;

  a {
    color: #9b9b9b;
  }
`

const LoginSection: React.VFC<{
  noGeneralLogin?: boolean
  onAuthStateChange?: React.Dispatch<React.SetStateAction<AuthState>>
  accountLinkToken?: string
  renderTitle?: () => React.ReactNode
}> = ({ noGeneralLogin, onAuthStateChange, accountLinkToken, renderTitle }) => {
  const { settings } = useApp()
  const { formatMessage } = useIntl()
  const history = useHistory()
  const [back] = useQueryParam('back', StringParam)
  const { login } = useAuth()
  const { setVisible } = useContext(AuthModalContext)
  const [loading, setLoading] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      account: '',
      password: '',
    },
  })

  const handleLogin = handleSubmit(
    ({ account, password }) => {
      if (login === undefined) {
        return
      }

      setLoading(true)
      login({
        account: account.trim().toLowerCase(),
        password: password,
        accountLinkToken: accountLinkToken,
      })
        .then(() => {
          setVisible?.(false)
          reset()
          back && history.push(back)
        })
        .catch((error: AxiosError) => {
          if (error.isAxiosError && error.response) {
            const code = error.response.data.code as keyof typeof codeMessages
            message.error(formatMessage(codeMessages[code]))
          } else {
            message.error(error.message)
          }
        })
        .catch(handleError)
        .finally(() => setLoading(false))
    },
    error => {
      console.error(error)
    },
  )

  return (
    <StyledContainer>
      {renderTitle ? renderTitle() : <StyledTitle>{formatMessage(authMessages.LoginSection.login)}</StyledTitle>}

      {!!settings['auth.parenting.client_id'] && (
        <div className="mb-3" style={{ width: '100%' }}>
          <ParentingLoginButton accountLinkToken={accountLinkToken} />
        </div>
      )}
      {!!settings['auth.facebook_app_id'] && (
        <div className="mb-3" style={{ width: '100%' }}>
          <FacebookLoginButton accountLinkToken={accountLinkToken} />
        </div>
      )}
      {!!settings['auth.line_client_id'] && !!settings['auth.line_client_secret'] && (
        <div className="mb-3" style={{ width: '100%' }}>
          <LineLoginButton accountLinkToken={accountLinkToken} />
        </div>
      )}
      {!!settings['auth.google_client_id'] && (
        <div className="mb-3" style={{ width: '100%' }}>
          <GoogleLoginButton accountLinkToken={accountLinkToken} />
        </div>
      )}

      {!noGeneralLogin && !(settings['auth.email.disabled'] === 'true') && (
        <>
          {!!settings['auth.facebook_app_id'] ||
            !!settings['auth.google_client_id'] ||
            (!!settings['auth.line_client_id'] && !!settings['auth.line_client_secret'] && (
              <StyledDivider>{formatMessage(authMessages['*'].or)}</StyledDivider>
            ))}

          <InputGroup className="mb-3">
            <Input
              name="account"
              ref={register({ required: formatMessage(authMessages.LoginSection.usernameOrEmail) })}
              placeholder={formatMessage(authMessages.LoginSection.usernameOrEmail)}
            />
            <InputRightElement children={<Icon as={AiOutlineUser} />} />
          </InputGroup>

          <InputGroup className="mb-3">
            <Input
              type={passwordShow ? 'text' : 'password'}
              name="password"
              ref={register({ required: formatMessage(authMessages.LoginSection.password) })}
              placeholder={formatMessage(authMessages.LoginSection.password)}
            />
            <InputRightElement
              children={
                <Icon
                  className="cursor-pointer"
                  as={passwordShow ? AiOutlineEye : AiOutlineEyeInvisible}
                  onClick={() => setPasswordShow(!passwordShow)}
                />
              }
            />
          </InputGroup>

          <ForgetPassword>
            <Link to="/forgot-password">{formatMessage(authMessages.LoginSection.forgotPassword)}</Link>
          </ForgetPassword>

          <Button variant="primary" isFullWidth isLoading={loading} onClick={handleLogin}>
            {formatMessage(authMessages.LoginSection.login)}
          </Button>
        </>
      )}
    </StyledContainer>
  )
}

export default LoginSection
