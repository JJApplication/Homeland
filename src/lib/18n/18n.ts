import zh from './zh'
import en from './en'

const i18n = (key: string): string => {
  const language = localStorage.getItem('language') || 'en'
  switch (language) {
    case 'zh':
      // @ts-ignore
      return zh[key]
    case 'en':
      // @ts-ignore
      return en[key]
    default:
      // @ts-ignore
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