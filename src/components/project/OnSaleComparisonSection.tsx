import React from 'react'
import styled from 'styled-components'
import { BREAK_POINT } from '../common/Responsive'

type Feature = {
  title: string
  description: string
}

type Comparison = {
  title: string
  subtitle: string
  features: Feature[]
}

type OnSaleComparisonSectionProps = {
  comparisons: Comparison[]
}

const StyledSection = styled.section`
  position: relative;

  h3 {
    letter-spacing: 0.23px;
    margin-bottom: 4px;
    font-size: 28px;
    font-weight: bold;
    color: white;
  }
  h4 {
    height: 40px;
    letter-spacing: 0.2px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 500;
    color: white;
  }
  h5 {
    letter-spacing: 0.8px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  p {
    letter-spacing: 0.2px;
    font-size: 16px;
    font-weight: 500;
    color: white;
  }

  .background {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;

    &.red {
      background-color: #ff5760;
      left: 0;
    }
    &.black {
      background-color: #323232;
      right: 0;
    }
  }

  @media (min-width: ${BREAK_POINT}px) {
    height: 700px;
    h3 {
      font-size: 28px;
    }
    h5 {
      font-size: 16px;
    }
  }
`

const StyledWrapper = styled.div`
  padding: 60px 20px;
`

const StyledCol = styled.div`
  &:nth-child(2n + 1) {
    h3::after {
      display: block;
      position: absolute;
      top: -15px;
      right: 10px;
      content: url('https://files.kolable.com/images/xuemi/thumb.svg');
    }
    h5::after {
      display: none;
      position: absolute;
      top: -15px;
      right: -75px;
      content: url('https://files.kolable.com/images/xuemi/thumb.svg');
    }
  }

  @media (min-width: ${BREAK_POINT}px) {
    &:nth-child(2n + 1) {
      h3::after {
        display: none;
      }
      h5::after {
        display: block;
      }
    }
  }
`

const StyledContainer = styled.div`
  max-width: 300px;
  width: 100%;
  header {
    text-align: left;
    margin-bottom: 32px;
  }
  p {
    display: none;
  }
  .arrow {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid white;
  }
  @media (min-width: ${BREAK_POINT}px) {
    .arrow {
      margin: 0 auto;
    }
    header {
      text-align: center;
    }
    p {
      display: block;
    }
  }
`

const StyledIntro = styled.div`
  div {
    height: 54px;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media (min-width: ${BREAK_POINT}px) {
    div {
      height: 120px;
    }
  }
`

const StyledIntroItem = styled.header`
  position: relative;
  h5,
  p {
    text-align: left;
  }
`

const OnSaleComparisonSection: React.FC<OnSaleComparisonSectionProps> = ({ comparisons }) => {
  return (
    <StyledSection className="d-flex justify-content-center align-items-center">
      <div className="background red"></div>
      <div className="background black"></div>
      <StyledWrapper className="container">
        <div className="row justify-content-between">
          {comparisons.map(comparison => (
            <StyledCol className="col-6" key={comparison.title}>
              <StyledContainer className="container">
                <header>
                  <h3>{comparison.title}</h3>
                  <h4>{comparison.subtitle}</h4>
                  <div className="arrow"></div>
                </header>
                <StyledIntro className="d-flex flex-column justify-content-between">
                  {comparison.features.map(feature => (
                    <StyledIntroItem>
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </StyledIntroItem>
                  ))}
                </StyledIntro>
              </StyledContainer>
            </StyledCol>
          ))}
        </div>
      </StyledWrapper>
    </StyledSection>
  )
}

export default OnSaleComparisonSection
