import { theme } from "antd";
import getDesignToken from "antd/es/theme/getDesignToken";

enum ThemeMode {
  Light = 'light',
  Night = 'night'
}

const themeMap = {
  'light': {
    ...getDesignToken({algorithm: theme.defaultAlgorithm}),
    colorBgGlobal: '#FFFFFF',
    colorBgBanner: '#F5F5F5',
    colorTextBanner: '#121212',
  },
  'night': {
    ...getDesignToken({algorithm: theme.darkAlgorithm}),
    colorBgGlobal: '#000000',
    colorBgBanner: '#121212',
    colorTextBanner: '#FFFFFF',
  },
}

const themeToken = (mode: string) => {
    // @ts-ignore
  return themeMap[mode]
}

const updateMode = (mode: string) => {
  localStorage.setItem('mode', mode);
}

const getMode = () => {
  return localStorage.getItem('mode') || ThemeMode.Light
}

export {ThemeMode, themeMap, themeToken, getMode, updateMode}