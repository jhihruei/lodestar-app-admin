import React from 'react'
import styled from 'styled-components'
import { BREAK_POINT } from '../common/Responsive'
import { ProjectPlanProps } from './ProjectPlan'
import ProjectPlanCollection from './ProjectPlanCollection'

const StyledWrapper = styled.div`
  > * {
    width: 100%;
  }

  @media (min-width: 768px) {
    > * {
      width: 50%;
      padding: 0 1em;
    }
  }

  @media (min-width: ${BREAK_POINT}px) {
    > * {
      width: calc(100% / 3);
      padding: 0 1em;
    }
  }
`

const FundingPlansPane: React.FC<{
  projectPlans: ProjectPlanProps[]
}> = ({ projectPlans }) => {
  return (
    <div className="container" id="funding-plans">
      <div className="row">
        <div className="col-12">
          <StyledWrapper className="d-flex align-items-start justify-content-start flex-wrap">
            <ProjectPlanCollection projectPlans={projectPlans} />
          </StyledWrapper>
        </div>
      </div>
    </div>
  )
}

export default FundingPlansPane
