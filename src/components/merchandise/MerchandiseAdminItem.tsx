import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { currencyFormatter } from '../../helpers'
import EmptyCover from '../../images/default/empty-cover.png'
import { MerchandisePreviewProps } from '../../types/merchandise'
import { CustomRatioImage } from '../common/Image'

const StyledWrapper = styled.div`
  margin-bottom: 0.75rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
`
const StyledTitle = styled.div`
  overflow: hidden;
  color: var(--gray-darker);
  font-weight: bold;
  letter-spacing: 0.2px;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const StyledPriceLabel = styled.div`
  width: 7rem;
  letter-spacing: 0.2px;
  color: ${props => props.theme['@primary-color']};

  &:not(:last-child) {
    color: var(--gray-dark);
    text-decoration: line-through;
  }
`

const MerchandiseAdminItem: React.FC<MerchandisePreviewProps> = ({
  id,
  coverUrl,
  title,
  listPrice,
  salePrice,
  soldAt,
}) => {
  return (
    <Link to={`/merchandises/${id}`}>
      <StyledWrapper className="d-flex align-items-center justify-content-between p-3">
        <div className="flex-grow-1 d-flex align-items-center justify-content-start">
          <CustomRatioImage width="56px" ratio={1} src={coverUrl || EmptyCover} shape="rounded" className="mr-3" />
          <StyledTitle>{title}</StyledTitle>
        </div>
        <div>
          <StyledPriceLabel className="flex-shrink-0">{currencyFormatter(listPrice)}</StyledPriceLabel>
          {soldAt && Date.now() < soldAt.getTime() && (
            <StyledPriceLabel className="flex-shrink-0">{currencyFormatter(salePrice)}</StyledPriceLabel>
          )}
        </div>
      </StyledWrapper>
    </Link>
  )
}

export default MerchandiseAdminItem
