import styles from './layout.module.css'
import { ConfigProvider, Skeleton, Button, FloatButton } from 'antd'
import React, { useEffect, useState } from 'react';
import  { SwapLeftOutlined, MoonOutlined, SunOutlined, TranslationOutlined } from '@ant-design/icons';
import Header from "./Header";
import { getMode, ThemeMode, themeToken, updateMode } from "../lib/theme";
import { updateI18n } from "../lib/18n/18n";

export default function Layout({ children, home, changeThemeCall }: {
  children: React.ReactNode
  home?: boolean
  changeThemeCall?: Function
}) {
  const [loading, setLoading] = useState(true);
  const [useTheme, switchTheme] = useState(getMode());
  const token = themeToken(useTheme);
  const [globalBg, setGlobalBg] = useState(token.colorBgGlobal);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  const renderThemeButton = () => {
    switch (useTheme) {
      case ThemeMode.Light:
        return <MoonOutlined />
      case ThemeMode.Night:
        return <SunOutlined />
      default:
        return <SunOutlined />
    }
  }

  const changeTheme = () => {
    if (useTheme === ThemeMode.Light) {
      switchTheme(ThemeMode.Night)
      changeThemeCall?.(ThemeMode.Night)
      setGlobalBg(themeToken(ThemeMode.Night).colorBgGlobal)
      updateMode(ThemeMode.Night)
    } else {
      switchTheme(ThemeMode.Light)
      changeThemeCall?.(ThemeMode.Light)
      setGlobalBg(themeToken(ThemeMode.Light).colorBgGlobal)
      updateMode(ThemeMode.Light)
    }
  }

  // 重载i18n会刷新整个页面
  const changeI18n = () => {
    updateI18n()
    window.location.reload();
  }

  return (
      // @ts-ignore
    <ConfigProvider theme={{token: themeToken(useTheme)}}>
      <div style={{ backgroundColor: globalBg, height: '100%', overflowY: 'auto' }}>
        <div style={{ paddingBottom: '2rem', maxWidth: '1024px', margin: '0 auto' }}>
          <div>
            <>
              <FloatButton data-id='themeSwitch' icon={<TranslationOutlined />} type="default" style={{ right: 32 }} onClick={changeI18n} />
              <FloatButton icon={renderThemeButton()} type="primary" style={{ right: 96 }} onClick={changeTheme}/>
            </>
          </div>
          <Header mode={useTheme} token={token} />
          { loading
              ? <Skeleton avatar active paragraph={{ rows: 20 }} style={{padding: '2rem'}}/>
              : (<div className={styles.body}>
                <main>{children}</main>
                {!home && (
                  <div className={styles.backToHome}>
                    <Button className="btn-back" type="primary" shape="circle" href="/" size="large" icon={< SwapLeftOutlined />}/>
                  </div>
                )}

                <div className={styles.footer} style={{ backgroundColor: globalBg }}>
                  <p>须知少时凌云志, 曾许人间第一流 <a href="https://renj.io">@renj.io</a></p>
                </div>
              </div>) }
        </div>
      </div>
    </ConfigProvider>
  )
}