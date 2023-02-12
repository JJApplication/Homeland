import Layout from './Layout'
import utilStyles from '../styles/utils.module.css'
import { QRCode, theme, Divider, Col, Row, Button, Space, Timeline, message } from 'antd';
import styles from "./layout.module.css";
import profile from "../assets/profile.jpg";
import React from "react";
import TimelineSite from "../lib/timeline_site";
import TimelineWork from "../lib/timeline_work";

const { useToken } = theme;
// 首页
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const { token } = useToken();
  const thanks = () => {
    messageApi.info("Hello, I'm Landers!");
  }

  return (
    <Layout home>
      <header className={styles.header}>
        {contextHolder}
        <img
          src={profile}
          className={utilStyles.borderCircle}
          height={192}
          width={192}
          onClick={thanks}
         alt="profile"/>
        <h1 className={utilStyles.heading2Xl}>Landers</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <p>😍你好, 我是Landers<br/>
          这是我的个人主页, 我是一名普普通通的Coder, 请高抬贵眼👉这是我的<a href="http://me.renj.io">简历</a>
        </p>
      </section>
      <Divider />
      <Row className="ant-over">
        <Col lg={4} md={6} xs={24} sm={10} style={{margin: '0.5rem'}}>
          <QRCode className="ant-over" value="https://fb.me/landers1037" color={token.colorInfoText} style={{backgroundColor: token.colorBgLayout, display: 'inline-block'}}/>
          <br/>
          <Button className="ant-over" style={{backgroundColor: token.colorPrimary, color: token.colorWhite, marginTop: '0.5rem'}} type="ghost" href="https://fb.me/landers1037">
            @Facebook
          </Button>
        </Col>
        <Col lg={4} md={6} xs={24} sm={10} style={{margin: '0.5rem'}}>
          <QRCode className="ant-over" value="https://stackoverflow.com/users/11940188/landers1037" color={token.colorWarningText} style={{backgroundColor: token.colorBgLayout, display: 'inline-block'}}/>
          <br/>
          <Button className="ant-over" style={{backgroundColor: token.colorWarning, color: token.colorWhite, marginTop: '0.5rem'}} type="ghost" href="https://stackoverflow.com/users/11940188/landers1037">
            @Stackoverflow
          </Button>
        </Col>
      </Row>
      <Divider />
      <section style={{paddingBottom: '2rem'}}>
        <Row className="ant-over">
          <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
            <h3>时间线</h3>
            <Timeline
              className="ant-over"
              style={{ fontWeight: 'bold' }}
              items={TimelineSite}
            />
          </Col>
          <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
            <h3>工作经历</h3>
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