import { InputNumber } from 'antd'
import React, { useContext } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import { useCurrency } from '../../hooks/currency'

const CurrencyInput: React.FC<{
  currencyId?: string
  value?: number
  onChange?: (value?: number) => void
  noUnit?: boolean
  noLabel?: boolean
}> = ({ currencyId, value, onChange, noLabel, noUnit }) => {
  const { locale } = useContext(LanguageContext)
  const { formatCurrency } = useCurrency(currencyId)
  return (
    <InputNumber
      value={value}
      onChange={v => onChange && onChange(typeof v === 'number' ? v : undefined)}
      min={0}
      formatter={value => {
        const formattedNumber = (value ? +value : 0).toLocaleString(locale || navigator.language)
        return noUnit || noLabel ? formattedNumber : formatCurrency(value ? +value : 0)
      }}
      parser={value => (value ? value.replace(/[^\d.]/g, '') : '')}
    />
  )
}

export default CurrencyInput
