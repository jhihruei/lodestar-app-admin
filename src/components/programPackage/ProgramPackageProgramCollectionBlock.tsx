import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import EmptyCover from '../../images/default/empty-cover.png'
import { ProgramPackageProgramCollection } from '../../types/programPackage'

const StyledCover = styled.div<{ src?: string | null }>`
  position: relative;
  padding-top: ${900 / 16}%;
  background-image: url(${props => props.src || EmptyCover});
  background-size: cover;
  background-position: center;
`
const StyledTitle = styled(Typography.Title)`
  && {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: var(--gray-darker);
  }
`

const ProgramPackageProgramCollectionBlock: React.FC<{
  programs: ProgramPackageProgramCollection
}> = ({ programs }) => {
  return (
    <div className="row py-5">
      {programs.map(program => (
        <div key={program.id} className="col-md-6 col-lg-4 col-12 mb-5">
          <StyledCover src={program.coverUrl} className="mb-3" />

          <StyledTitle level={3} ellipsis={{ rows: 2 }}>
            {program.title}
          </StyledTitle>
        </div>
      ))}
    </div>
  )
}

export default ProgramPackageProgramCollectionBlock
