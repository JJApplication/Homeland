// @ts-nocheck
import styles from './layout.module.css'
import { ConfigProvider, Skeleton, Button, FloatButton } from 'antd'
import React, { useEffect, useState } from 'react';
import  { SwapLeftOutlined, MoonOutlined, SunOutlined, TranslationOutlined } from '@ant-design/icons';
import Header from "./Header";
import { getMode, themeMap, updateMode } from "../lib/theme";
import { updateI18n } from "../lib/18n/18n";

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  const [loading, setLoading] = useState(true);
  const [useTheme, switchTheme] = useState(getMode());

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  const renderThemeButton = () => {
    switch (useTheme) {
      case 'light':
        return <MoonOutlined />
      case 'night':
        return <SunOutlined />
      default:
        return <SunOutlined />
    }
  }

  const changeTheme = () => {
    if (useTheme === 'light') {
      switchTheme('night')
      updateMode('night')
    } else if (useTheme === 'night') {
      switchTheme('light')
      updateMode('light')
    }
  }

  // 重载i18n会刷新整个页面
  const changeI18n = () => {
    updateI18n()
    window.location.reload();
  }

  // @ts-ignore
  return (
      // @ts-ignore
    <ConfigProvider theme={{token: themeMap[useTheme]}}>
      <div style={{ backgroundColor: themeMap[useTheme].colorBgGlobal, height: '100%', overflowY: 'auto' }}>
        <div style={{ paddingBottom: '2rem', maxWidth: '1280px', margin: '0 auto' }}>
          <div>
            <>
              <FloatButton data-id='themeSwitch' icon={<TranslationOutlined />} type="default" style={{ right: 32 }} onClick={changeI18n} />
              <FloatButton icon={renderThemeButton()} type="primary" style={{ right: 96 }} onClick={changeTheme}/>
            </>
          </div>
          <Header />
          { loading
              ? <Skeleton avatar active paragraph={{ rows: 20 }} style={{padding: '2rem'}}/>
              : (<div className={styles.body}>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                      <Button className="btn-back" type="primary" shape="circle" href="/" size="large" icon={< SwapLeftOutlined />}/>
                    </div>
                )}

                <div className={styles.footer} style={{ backgroundColor: themeMap[useTheme].colorBgGlobal }}>
                  <p>须知少时凌云志, 曾许人间第一流 <a href="http://renj.io">@renj.io</a></p>
                </div>
              </div>) }
        </div>
      </div>
    </ConfigProvider>
  )
}