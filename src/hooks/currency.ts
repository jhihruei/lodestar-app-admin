import { useContext } from 'react'
import { useApp } from '../contexts/AppContext'
import LanguageContext from '../contexts/LanguageContext'
import { Currency } from '../types/app'

export const useCurrency = (currencyId?: string) => {
  const { currencies, settings } = useApp()
  const { locale } = useContext(LanguageContext)

  const formatCurrency = (value: number) => {
    const currentCurrencyId = currencyId || settings['currency_id'] || 'TWD'
    const currency: Currency = currencies[currentCurrencyId]

    if (currentCurrencyId === 'LSC') {
      return value + ' ' + settings['coin.unit']
    }
    return (
      value.toLocaleString(locale || navigator.language, {
        style: 'currency',
        currency: currentCurrencyId,
        maximumFractionDigits: currency['minorUnits'],
        minimumFractionDigits: 0,
      }) || ''
    )
  }

  return {
    formatCurrency,
  }
}
// TODO: create useFormatter containing other formatter in helpers and replace it
