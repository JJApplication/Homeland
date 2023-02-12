import styles from './layout.module.css'
import { ConfigProvider, theme, Skeleton, Button } from 'antd'
import React, { useEffect, useState } from 'react';
import  { SwapLeftOutlined } from '@ant-design/icons';
import Header from "./Header";

const name = 'Landers'
export const siteTitle = 'The Renj'

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
      algorithm: theme.defaultAlgorithm,
    }}>
      <div>
        <Header />
        { loading
          ? <Skeleton  avatar active paragraph={{ rows: 10 }} style={{padding: '2rem'}}/>
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