import Layout from './Layout';
import utilStyles from '../styles/utils.module.css';
import { QRCode, theme, Divider, Col, Row, Button, Timeline, message, Card, List, Typography, Flex } from 'antd';
import styles from './layout.module.css';
import profile from '../assets/profile.jpg';
import React, { useEffect, useState } from 'react';
import useTypewriter from '../lib/typer';
import TimelineSite from '../lib/timeline_site';
import TimelineWork from '../lib/timeline_work';
import './Home.css';
import { getMode, themeToken } from '../lib/theme';
import { i18n } from '../lib/18n/18n';
import links from '../lib/links';
import list from '../lib/list';

const welcomeText =
  '$ 🐼 Hello, my name is Landers<br>' +
  `$ 👉 Follow me on [Github] <a href=${links.github}>${links.github}</a><br>` +
  `$ 👀 View my site on <a href=${links.page}>${links.page}</a><br>` +
  `$ 📧 Mail to me [Gmail] <a href=mailto:${links.mail}>${links.mail}</a>`;

// 首页
export default function Home() {
  const { Title, Paragraph, Text, Link } = Typography;
  const [messageApi, contextHolder] = message.useMessage();
  const [token, setToken] = useState(themeToken(getMode()));
  const thanks = () => {
    messageApi.info("Hello, I'm Landers!");
  };

  useEffect(() => {
    const themeOnEvent = () => {
      if (themeToken(getMode())['colorBgBanner'] !== token['colorBgBanner']) {
        setToken(themeToken(getMode()));
      }
    };
    window.addEventListener('click', themeOnEvent);

    return () => {
      window.removeEventListener('click', themeOnEvent);
    };
  }, [token]);

  return (
    <Layout home>
      <header className={`${styles.header} grid`} style={{ backgroundImage: token.imageBgBanner }}>
        {contextHolder}
        <div className='photo-container'>
          <div className='photo-shutter'>
            <img
              src={profile}
              // className={utilStyles.borderCircle}
              height={192}
              width={192}
              onClick={thanks}
              alt="profile"
            />
          </div>
        </div>
        <h1 className={utilStyles.heading2Xl}>{i18n('slogan')}</h1>
      </header>
      <div className={'home-content'}>
        <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: '#404040' }}>
          <span className={'title-number'}>01</span>Start
        </Title>
        <section className={utilStyles.headingMd} style={{ margin: '1rem 0' }}>
          <Paragraph className={utilStyles.font100} style={{ color: token.colorTextBanner }}>
            {i18n('welcome1')} 🙂
            <br />
            {i18n('welcome2')} 👉 <a href={links.resume}>{i18n('cv')}</a> {i18n('cv1')}
          </Paragraph>
        </section>
        <Divider />
        <Card title=">/" bordered={true} style={{ width: '100%' }}>
          <div className="shell" dangerouslySetInnerHTML={{ __html: useTypewriter(welcomeText, 35) || '.' }}></div>
        </Card>
        <Divider />
        <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: '#404040' }}>
          <span className={'title-number'}>02</span>Introduction
        </Title>
        <div>
          <Paragraph className={utilStyles.font100} style={{ margin: '1rem 0' }}>
            {i18n('intro1')}
          </Paragraph>
          <Paragraph className={utilStyles.font100} style={{ margin: '1rem 0' }}>
            {i18n('intro2')}
          </Paragraph>
          <Paragraph className={utilStyles.font100}>{i18n('intro3')}</Paragraph>
          <Paragraph>—— {i18n('intro_footer')}</Paragraph>
          <Divider />
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: '#404040' }}>
            <span className={'title-number'}>03</span>Work Experience
          </Title>
          <Paragraph className={utilStyles.font100} style={{ margin: '1rem 0' }}>
            {i18n('update1')}
            <Text style={{ color: '#8a8a8a' }}>&nbsp;——&nbsp;{i18n('update2023')}</Text>
          </Paragraph>
          <Paragraph className={utilStyles.font100}>
            {i18n('update2')}
            <Text style={{ color: '#8a8a8a' }}>&nbsp;——&nbsp;{i18n('update2024')}</Text>
          </Paragraph>
          <Paragraph className={utilStyles.font100}>
            {i18n('update3')}
            <Text style={{ color: '#8a8a8a' }}>&nbsp;——&nbsp;{i18n('update2025')}</Text>
          </Paragraph>
        </div>
        <Divider />
        <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: '#404040' }}>
          <span className={'title-number'}>04</span>Social
        </Title>
        <Row className="ant-over">
          <Col lg={4} md={6} xs={24} sm={10} style={{ margin: '0.5rem' }}>
            <QRCode
              className="ant-over"
              value={links.facebook}
              color={token.colorInfoText}
              style={{ backgroundColor: token.colorBgLayout }}
            />
            <br />
            <Button
              className="ant-over"
              style={{ backgroundColor: token.colorPrimary, color: token.colorWhite, marginTop: '0.5rem' }}
              type="link"
              href={links.facebook}
            >
              @Facebook
            </Button>
          </Col>
          <Col lg={4} md={6} xs={24} sm={10} style={{ margin: '0.5rem' }}>
            <QRCode
              className="ant-over"
              value={links.stackoverflow}
              color={token.colorWarningText}
              style={{ backgroundColor: token.colorBgLayout }}
            />
            <br />
            <Button
              className="ant-over"
              style={{ backgroundColor: token.colorWarning, color: token.colorWhite, marginTop: '0.5rem' }}
              type="link"
              href={links.stackoverflow}
            >
              @Stackoverflow
            </Button>
          </Col>
        </Row>
        <List
          bordered
          className="ant-over"
          header={<Title level={5}>🌍{i18n('find')}</Title>}
          dataSource={list}
          split
          renderItem={item => {
            return (
              <List.Item>
                <a href={item.url}>{item.title}</a>
              </List.Item>
            );
          }}
        ></List>
        <Divider />
        <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: '#404040' }}>
          <span className={'title-number'}>05</span>Timeline
        </Title>
        <section className={'timeline'}>
          <Row className="ant-over">
            <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
              <h3>{i18n('timeline')}</h3>
              <Timeline className="ant-over" style={{ fontWeight: 'bold' }} items={TimelineSite} />
            </Col>
            <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
              <h3>{i18n('work')}</h3>
              <Timeline className="ant-over" style={{ fontWeight: 'bold' }} items={TimelineWork} />
            </Col>
          </Row>
        </section>
      </div>
      <div className={'footer-content'}>
        <Flex gap={'small'} justify={'space-between'} align={'flex-start'}>
          <span style={{ fontWeight: 'bold', color: '#909090' }}>&#123; JJApplication &#125;</span>
          <span style={{ color: '#888888' }}>Copyright © 2024-2025 JJApplication & Renj.io</span>
        </Flex>
      </div>

    </Layout>
  );
}
