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
    colorTextTitle: '#222222',
    colorText: '#808080',
    imageBgBanner: 'linear-gradient(to right,#f6f6f6 1px,transparent 1px),linear-gradient(to bottom,#f6f6f6 1px,transparent 1px)',
  },
  'night': {
    ...getDesignToken({algorithm: theme.darkAlgorithm}),
    colorBgGlobal: '#000000',
    colorBgBanner: '#121212',
    colorTextBanner: '#FFFFFF',
    colorTextTitle: '#ffffff',
    colorText: '#808080',
    imageBgBanner: 'linear-gradient(to right,rgba(60,60,60,0.4) 1px,transparent 1px),linear-gradient(to bottom,rgba(60,60,60,0.4) 1px,transparent 1px)',
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