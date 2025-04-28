// @ts-nocheck
import zh from './zh'
import en from './en'

const i18n = (key: string): string => {
  const language = localStorage.getItem('language') || 'en'
  const i18nSplit = key.includes('.')
  const i18nSplits = key.split('.')
  switch (language) {
    case 'zh':
        if (i18nSplit) {
          return zh[i18nSplits[0]][i18nSplits[1]]
        }
      return zh[key]
    case 'en':
      if (i18nSplit) {
        return en[i18nSplits[0]][i18nSplits[1]]
      }
      return en[key]
    default:
      if (i18nSplit) {
        return en[i18nSplits[0]][i18nSplits[1]]
      }
      return en[key]
  }
}

const getI18n = () => {
  return localStorage.getItem('language') || 'en'
}

const updateI18n = () => {
  const mode = localStorage.getItem('language') || 'en'
  if (mode !== 'en') {
    localStorage.setItem('language', 'en')
    return
  }

  localStorage.setItem('language', 'zh')
  return
}

export {i18n, getI18n, updateI18n}