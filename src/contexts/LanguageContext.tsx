import moment from 'moment'
import 'moment/locale/zh-tw'
import React, { createContext, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useApp } from './AppContext'

const supportedLanguages = ['zh', 'zh-cn', 'en', 'vi', 'acsi']

type LanguageProps = {
  locale: string
  currentLanguage: string
  setCurrentLanguage?: (language: string) => void
}
const defaultLanguage: LanguageProps = {
  locale: 'zh',
  currentLanguage: 'zh',
}

const LanguageContext = createContext<LanguageProps>(defaultLanguage)

export const LanguageProvider: React.FC = ({ children }) => {
  const { enabledModules, settings, locales } = useApp()
  const [currentLanguage, setCurrentLanguage] = useState('zh')
  const [locale, setLocale] = useState('zh')
  moment.locale('zh-tw')

  useEffect(() => {
    const browserLanguage = settings['language'] || navigator.language.split('-')[0]
    const cachedLanguage = localStorage.getItem('kolable.app.language')
    setCurrentLanguage(
      enabledModules.locale
        ? typeof cachedLanguage === 'string' && supportedLanguages.includes(cachedLanguage)
          ? cachedLanguage
          : supportedLanguages.includes(browserLanguage)
          ? browserLanguage
          : 'zh'
        : 'zh',
    )
  }, [enabledModules, settings])

  useEffect(() => {
    switch (currentLanguage) {
      case 'zh':
      case 'zh-acsi':
        setLocale('zh')
        moment.locale('zh-tw')
        break
      default:
        setLocale(currentLanguage)
        moment.locale(currentLanguage)
    }
  }, [currentLanguage])

  return (
    <LanguageContext.Provider
      value={{
        locale,
        currentLanguage,
        setCurrentLanguage: (newLanguage: string) => {
          if (supportedLanguages.includes(newLanguage)) {
            localStorage.setItem('kolable.app.language', newLanguage)
            setCurrentLanguage(newLanguage)
          }
        },
      }}
    >
      <IntlProvider defaultLocale="zh" locale={locale} messages={locales[currentLanguage]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default LanguageContext
