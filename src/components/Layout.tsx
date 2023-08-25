import styles from './layout.module.css'
import { ConfigProvider, theme, Skeleton, Button } from 'antd'
import React, { useEffect, useState } from 'react';
import  { SwapLeftOutlined } from '@ant-design/icons';
import Header from "./Header";

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
    }}>
      <div style={{ paddingBottom: '2rem', maxWidth: '1280px', margin: '0 auto' }}>
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

            <div className={styles.footer}>
              <p>须知少时凌云志, 曾许人间第一流 <a href="http://renj.io">@renj.io</a></p>
            </div>
          </div>) }
      </div>
    </ConfigProvider>
  )
}