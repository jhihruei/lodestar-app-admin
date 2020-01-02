import { message } from 'antd'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import useRouter from 'use-react-router'
import { useAuth } from '../../components/auth/AuthContext'
import AuthModal, { AuthModalContext } from '../../components/auth/AuthModal'
import { BREAK_POINT } from '../../components/common/Responsive'
import AppContext from '../../containers/common/AppContext'
import { ReactComponent as AdminIcon } from '../../images/default/icon-admin.svg'
import { ReactComponent as CreatorIcon } from '../../images/default/icon-creator.svg'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  background-color: white;
`
const CenteredBox = styled.div``
const StyledLogo = styled.div<{ appId: string }>`
  margin: 0 auto 2.5rem;
  width: 100%;
  height: 100%;
  max-width: 172px;
  height: 36px;
  background-image: url(https://${process.env.REACT_APP_S3_BUCKET}/images/${props => props.appId}/logo.svg),
    url(https://${process.env.REACT_APP_S3_BUCKET}/images/${props => props.appId}/logo.png),
    url(https://${process.env.REACT_APP_S3_BUCKET}/images/${props => props.appId}/logo.jpg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const StyledTitle = styled.h1`
  margin-bottom: 2.5rem;
  color: var(--gray-darker);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.23px;
`
const StyledRoleBlock = styled.div`
  padding: 2rem;
  width: 10rem;
  height: 10rem;
  background-color: white;
  color: var(--gray-darker);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.8px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;

  :first-child {
    margin-right: 1rem;
  }

  @media (min-width: ${BREAK_POINT}px) {
    width: 12.5rem;
    height: 12.5rem;

    :first-child {
      margin-right: 5rem;
    }
  }
`

const HomePage = () => {
  const { history } = useRouter()
  const app = useContext(AppContext)
  const { isAuthenticated, currentUserRole, setAuthToken } = useAuth()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isAuthenticated && currentUserRole !== 'app-owner' && currentUserRole !== 'content-creator') {
      message.error('請使用管理帳號登入')
      try {
        localStorage.removeItem(`kolable.auth.token`)
      } catch (error) {}
      setAuthToken && setAuthToken(null)
    }
  }, [isAuthenticated, currentUserRole, setAuthToken])

  return (
    <AuthModalContext.Provider value={{ visible, setVisible }}>
      <AuthModal></AuthModal>

      <StyledWrapper>
        <CenteredBox>
          <div className="container">
            <StyledLogo appId={app.id} />
            <StyledTitle>管理後台</StyledTitle>

            <div className="d-flex align-items-center justify-content-between">
              <RoleButton title="我是管理員" icon={<AdminIcon />} onAuthenticated={() => history.push('/admin')} />
              <RoleButton title="我是創作者" icon={<CreatorIcon />} onAuthenticated={() => history.push('/studio')} />
            </div>
          </div>
        </CenteredBox>
      </StyledWrapper>
    </AuthModalContext.Provider>
  )
}

const RoleButton: React.FC<{
  title: string
  icon: React.ReactNode
  onAuthenticated?: () => void
}> = ({ title, icon, onAuthenticated }) => {
  const { isAuthenticated } = useAuth()
  const { setVisible: setAuthModalVisible } = useContext(AuthModalContext)

  const handleClick = useCallback(() => {
    setAuthModalVisible && setAuthModalVisible(!isAuthenticated)
    isAuthenticated && onAuthenticated && onAuthenticated()
  }, [isAuthenticated, setAuthModalVisible, onAuthenticated])

  return (
    <StyledRoleBlock className="d-flex flex-column align-items-center justify-content-between" onClick={handleClick}>
      <div>{icon}</div>
      <div>{title}</div>
    </StyledRoleBlock>
  )
}

export default HomePage
