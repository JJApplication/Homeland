import Layout from './Layout'
import utilStyles from '../styles/utils.module.css'
import { QRCode, theme, Divider, Col, Row, Button, Timeline, message, Card } from 'antd';
import styles from "./layout.module.css";
import profile from "../assets/profile.jpg";
import React, { useEffect, useState } from "react";
import useTypewriter from "../lib/typer";
import TimelineSite from "../lib/timeline_site";
import TimelineWork from "../lib/timeline_work";
import './Home.css';
import { getMode, themeToken } from "../lib/theme";
import { i18n } from "../lib/18n/18n";

const { useToken } = theme;
const welcomeText = '$ 🐼 Hello, my name is Landers<br>' +
  '$ 👉 Follow me on [Github] <a href="https://github.com/landers1037">https://github.com/landers1037</a><br>' +
  '$ 👀 View my site on <a href="http://renj.io">http://renj.io</a><br>' +
  '$ 📧 Mail to me [Gmail] <a href="mailto:liaorenj@gmail.com">liaorenj@gmail.com</a>'

// 首页
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const [token, setToken] = useState(themeToken(getMode()))
  const thanks = () => {
    messageApi.info("Hello, I'm Landers!");
  }

  useEffect(() => {
    const themeOnEvent = () => {
      if (themeToken(getMode())['colorBgBanner'] !== token['colorBgBanner']) {
        setToken(themeToken(getMode()))
      }
    }
    window.addEventListener('click', themeOnEvent)

    return () => {
      window.removeEventListener('click', themeOnEvent)
    }
  }, [token])

  return (
    <Layout home>
      <header className={styles.header} style={{ backgroundColor: token.colorBgBanner }}>
        {contextHolder}
        <img
          src={profile}
          className={utilStyles.borderCircle}
          height={192}
          width={192}
          onClick={thanks}
         alt="profile"/>
        <h1 className={utilStyles.heading2Xl}>{i18n('slogan')}</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <p style={{ color: token.colorTextBanner }}>{i18n('welcome1')} 🙂<br/>
          {i18n('welcome2')} 👉 <a href="http://me.renj.io">{i18n('cv')}</a> {i18n('cv1')}
        </p>
      </section>
      <Divider />
      <Card title=">/" bordered={true} style={{ width: '100%' }}>
        <div className="shell" dangerouslySetInnerHTML={{ __html: useTypewriter(welcomeText, 50) || '.' }}></div>
      </Card>
      <Divider />
      <Row className="ant-over">
        <Col lg={4} md={6} xs={24} sm={10} style={{margin: '0.5rem'}}>
          <QRCode className="ant-over" value="https://fb.me/landers1037" color={token.colorInfoText} style={{backgroundColor: token.colorBgLayout}}/>
          <br/>
          <Button className="ant-over" style={{backgroundColor: token.colorPrimary, color: token.colorWhite, marginTop: '0.5rem'}} type="link" href="https://fb.me/landers1037">
            @Facebook
          </Button>
        </Col>
        <Col lg={4} md={6} xs={24} sm={10} style={{margin: '0.5rem'}}>
          <QRCode className="ant-over" value="https://stackoverflow.com/users/11940188/landers1037" color={token.colorWarningText} style={{backgroundColor: token.colorBgLayout}}/>
          <br/>
          <Button className="ant-over" style={{backgroundColor: token.colorWarning, color: token.colorWhite, marginTop: '0.5rem'}} type="link" href="https://stackoverflow.com/users/11940188/landers1037">
            @Stackoverflow
          </Button>
        </Col>
      </Row>
      <Divider />
      <section style={{paddingBottom: '2rem'}}>
        <Row className="ant-over">
          <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
            <h3>{i18n('timeline')}</h3>
            <Timeline
              className="ant-over"
              style={{ fontWeight: 'bold' }}
              items={TimelineSite}
            />
          </Col>
          <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
            <h3>{i18n('work')}</h3>
            <Timeline
              className="ant-over"
              style={{ fontWeight: 'bold' }}
              items={TimelineWork}
            />
          </Col>
        </Row>
      </section>
    </Layout>
  )
}