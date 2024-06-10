// 关于页面
import Layout from './Layout'
import utilStyles from '../styles/utils.module.css'
import { Divider, Image, Typography } from "antd";
import React from "react";
import { i18n } from "../lib/18n/18n";
import links from "../lib/links";
import me from '../assets/me.jpg';

const logoStyle = {width: 128, display: 'inline-block', margin: '0.5rem', borderRadius: '50%'}
// 首页
export default function About() {
  const { Title, Paragraph, Text, Link } = Typography;

  return (
    <Layout>
      <section className={utilStyles.headingMd} style={{textAlign: 'center'}}>
        <Title level={2}>{i18n('about')}</Title>
        <Paragraph style={{ fontSize: '1rem' }}>{i18n('about1')}</Paragraph>
        <Image src={me} width={480}></Image>

        <Paragraph style={{ fontSize: '1.25rem' }}>
          {i18n('steam')}: <a href={links.steam}>Hotwaterman</a>
        </Paragraph>
        <Paragraph style={{ fontSize: '1.25rem' }}>
          {i18n('email')}: <a href={`mailto:${links.mail}`}>liaorenj@gmail.com</a>
        </Paragraph>
        <Paragraph style={{ fontSize: '1.25rem' }}>
          {i18n('facebook')}: <a href={links.facebook}>Facebook</a>
        </Paragraph>
        <div className="verse" style={{marginTop: '2rem', fontWeight: 'bold', textAlign: 'center'}}>
          <Paragraph className="verse" style={{ fontSize: '1.25rem' }}>
            卷帘天自高，海水摇空绿。
          </Paragraph>
          <Paragraph className="verse" style={{ fontSize: '1.25rem' }}>
            海水梦悠悠，君愁我亦愁。
          </Paragraph>
          <Paragraph className="verse" style={{ fontSize: '1.25rem' }}>
            南风知我意，吹梦到西洲。
          </Paragraph>
        </div>
        <Divider>
          <Paragraph>Powered by <a href="https://cn.vitejs.dev">Vite</a> & <a href="https://ant.design">Antd</a></Paragraph>
        </Divider>
      </section>
    </Layout>
  )
}
