import React from 'react'
import styled from 'styled-components'
import { InferType } from 'yup'
import { StyledCategories, StyledReactPlayer, StyledTitle, StyledVideoWrapper } from '.'
import { programSchema } from '../../../schemas/program'
import MemberAvatar from '../../common/MemberAvatar'
import { BREAK_POINT } from '../../common/Responsive'

const StyledWrapper = styled.div`
  background: #f7f8f8;

  ${StyledCategories} {
    color: #9b9b9b;
  }
  ${StyledTitle} {
    margin-bottom: 2rem;
  }

  @media (min-width: ${BREAK_POINT}px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
const StyledMediaBlock = styled.div`
  @media (min-width: ${BREAK_POINT}px) {
    order: 1;
    width: ${(700 / 12).toFixed(6)}%;
  }
`
const StyledTitleBlock = styled.div`
  width: 100%;
  padding: 1.5rem;

  @media (min-width: ${BREAK_POINT}px) {
    max-width: 520px;
  }
`
const StyledTag = styled.span`
  padding: 2px 8px;
  border: 1px solid #cdcdcd;
  border-radius: 12px;
  font-size: 12px;
`

const SubscriptionProgramBanner: React.FC<{
  program: InferType<typeof programSchema>
}> = ({ program }) => {
  const instructorId = program.roles.filter(role => role.name === 'instructor').map(role => role.memberId)[0]

  return (
    <StyledWrapper id="program-banner">
      <StyledMediaBlock>
        <StyledVideoWrapper backgroundImage={program.coverUrl || ''}>
          {program.coverVideoUrl && <StyledReactPlayer url={program.coverVideoUrl} width="100%" height="100%" />}
        </StyledVideoWrapper>
      </StyledMediaBlock>

      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <StyledTitleBlock>
          <StyledCategories>
            <StyledTag className="mr-2">訂閱</StyledTag>
            {program.programCategories.map(programCategory => (
              <span key={programCategory.category.id} className="mr-2">
                #{programCategory.category.name}
              </span>
            ))}
          </StyledCategories>
          <StyledTitle>{program.title}</StyledTitle>
          <MemberAvatar memberId={instructorId} withName={true} />
        </StyledTitleBlock>
      </div>
    </StyledWrapper>
  )
}

export default SubscriptionProgramBanner
