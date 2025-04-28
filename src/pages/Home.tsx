import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { QRCode, theme, Col, Row, Button, Timeline, Card, List, Typography } from 'antd';
import styles from '../components/layout.module.css';
import profile from '../assets/profile.jpg';
import React, { useState } from 'react';
import useTypewriter from '../lib/typer';
import TimelineSite from '../lib/timeline_site';
import TimelineWork from '../lib/timeline_work';
import './Home.css';
import { i18n } from '../lib/18n/18n';
import links from '../lib/links';
import list from '../lib/list';
import { Footer } from "../components/Footer";
import Projects from "../components/Projects";
import { getMode, themeToken } from '../lib/theme';

const welcomeText =
  '$ 🐼 Hello, my name is Landers<br>' +
  `$ 👉 Follow me on [Github] <a href=${links.github}>${links.github}</a><br>` +
  `$ 👀 View my site on <a href=${links.page}>${links.page}</a><br>` +
  `$ 📧 Mail to me [Gmail] <a href=mailto:${links.mail}>${links.mail}</a>`;

// 首页
export default function Home() {
  const { Title, Paragraph, Text, Link } = Typography;
  const [token, setToken] = useState(themeToken(getMode()));

  const changeTheme = (mode: string) => {
    setToken(themeToken(mode));
  }

  return (
    <Layout home changeThemeCall={changeTheme}>
      <header className={`${styles.header} grid`} style={{ backgroundImage: token.imageBgBanner }}>
        <div className="photo-container">
          <div className="photo-shutter">
            <img src={profile} height={256} width={256} alt="profile" />
          </div>
        </div>
        <h1 className={utilStyles.heading2Xl}>{i18n('slogan')}</h1>
      </header>
      <div className={'home-content'}>
        <div className={'home-content-item'}>
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: token.colorTextTitle }}>
            <span className={'title-number'}>01</span>
            {i18n('title.start')}
          </Title>
          <section className={utilStyles.headingMd} style={{ margin: '1rem 0' }}>
            <Paragraph className={utilStyles.font100} style={{ color: token.colorTextBanner }}>
              {i18n('welcome1')} 🙂
              <br />
              {i18n('welcome2')} 👉 <a href={links.resume}>{i18n('cv')}</a> {i18n('cv1')}
            </Paragraph>
          </section>
          <Card title=">/" bordered={true} style={{ width: '100%', marginTop: '1rem' }}>
            <div className="shell" dangerouslySetInnerHTML={{ __html: useTypewriter(welcomeText, 35) || '.' }}></div>
          </Card>
        </div>
        <div className={'home-content-item'}>
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: token.colorTextTitle }}>
            <span className={'title-number'}>02</span>
            {i18n('title.introduction')}
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
          </div>
        </div>
        <div className={'home-content-item'}>
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: token.colorTextTitle }}>
            <span className={'title-number'}>03</span>
            {i18n('title.projects')}
          </Title>
          <section className={utilStyles.headingMd} style={{ margin: '1rem 0 2rem 0' }}>
            <Paragraph className={utilStyles.font100}>
              {i18n('projects.line1')}
              <br />
              {i18n('projects.line2')}
            </Paragraph>
          </section>
          <Projects token={token} />
            <section className={'dynamic'}>
              <Title className={`${utilStyles.font200} ${utilStyles.fontBold} hide1`}>
                {i18n('projects.hide1')}
              </Title>
              <Title className={`${utilStyles.font200} ${utilStyles.fontBold}`}>
                {i18n('projects.line3')}
              </Title>
              <Paragraph className={`${utilStyles.font100} hide2`}>
                {i18n('projects.hide2')}
              </Paragraph>
              <Paragraph className={utilStyles.font100}>
                {i18n('projects.line4')}
              </Paragraph>
            </section>

        </div>
        <div className={'home-content-item'}>
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: token.colorTextTitle }}>
            <span className={'title-number'}>04</span>
            {i18n('title.work')}
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
        <div className={'home-content-item'}>
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: token.colorTextTitle }}>
            <span className={'title-number'}>05</span>
            {i18n('title.social')}
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
        </div>
        <div className={'home-content-item'}>
          <Title className={`${utilStyles.font125} ${utilStyles.fontBold}`} style={{ color: token.colorTextTitle }}>
            <span className={'title-number'}>06</span>
            {i18n('title.timeline')}
          </Title>
          <section className={'timeline'}>
            <Row className="ant-over">
              <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
                <h3>{i18n('timeline')}</h3>
                <Timeline className="ant-over" items={TimelineSite} />
              </Col>
              <Col className="ant-over" span={12} md={12} xs={24} sm={24}>
                <h3>{i18n('work')}</h3>
                <Timeline className="ant-over" items={TimelineWork} />
              </Col>
            </Row>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
