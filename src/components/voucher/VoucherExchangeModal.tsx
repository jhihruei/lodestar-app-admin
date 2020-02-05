import { Button, Checkbox, Divider, Modal } from 'antd'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import ProductItem from '../../containers/common/ProductItem'
import { commonMessages, promotionMessages } from '../../helpers/translation'

const StyledTitle = styled.div`
  color: var(--gray-darker);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.8px;
`
const StyledDescription = styled.div`
  color: var(--gray-darker);
  font-size: 16px;
  letter-spacing: 0.2px;
  white-space: pre-wrap;
`
const StyledNotice = styled.div`
  margin-bottom: 2rem;
  color: var(--gray-dark);
  font-size: 14px;
  letter-spacing: 0.4px;
`

type VoucherExchangeModalProps = {
  productQuantityLimit: number
  description: string | null
  productIds: string[]
  onExchange?: (
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    selectedProductIds: string[],
  ) => void
}
const VoucherExchangeModal: React.FC<VoucherExchangeModalProps> = ({
  productQuantityLimit,
  description,
  productIds,
  onExchange,
}) => {
  const { formatMessage } = useIntl()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([])

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        {formatMessage(promotionMessages.ui.useNow)}
      </Button>

      <Modal centered destroyOnClose footer={null} visible={visible} onCancel={() => setVisible(false)}>
        <StyledTitle className="mb-2">
          {formatMessage(promotionMessages.text.exchangeItemsNumber, { number: productQuantityLimit })}
        </StyledTitle>
        <StyledDescription className="mb-2">{description}</StyledDescription>
        <StyledNotice>{formatMessage(promotionMessages.text.exchangeNotation)}</StyledNotice>

        {productIds.map(productId => (
          <div key={productId}>
            <div className="d-flex justify-content-between align-items-center">
              <ProductItem id={productId} />
              <Checkbox
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedProductIds([...selectedProductIds, productId])
                  } else {
                    setSelectedProductIds(selectedProductIds.filter(id => id !== productId))
                  }
                }}
                disabled={!selectedProductIds.includes(productId) && selectedProductIds.length >= productQuantityLimit}
              />
            </div>

            <Divider className="my-4" />
          </div>
        ))}

        <div className="text-right">
          <Button className="mr-2" onClick={() => setVisible(false)}>
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button
            type="primary"
            loading={loading}
            disabled={selectedProductIds.length === 0 || selectedProductIds.length > productQuantityLimit}
            onClick={() => {
              if (onExchange) {
                onExchange(setVisible, setLoading, selectedProductIds)
              }
            }}
          >
            {formatMessage(promotionMessages.ui.exchange)}
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default VoucherExchangeModal
