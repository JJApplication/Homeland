import React from "react";
import Layout from './Layout'
import { Divider, List, Typography  } from 'antd';
import list from "../lib/list";
import { i18n } from "../lib/18n/18n";

export default function Intro() {
  const { Title, Paragraph, Text, Link } = Typography;
  return (
    <Layout>
      <div style={{ fontSize: '1.2rem' }}>
        <Paragraph style={{ margin: '1rem 0', fontSize: '1.25rem' }}>
          {i18n('intro1')}
        </Paragraph>
        <Paragraph style={{ margin: '1rem 0', fontSize: '1.25rem' }}>
          {i18n('intro2')}
          <br/>
          <Text strong style={{ margin: '2rem 0', fontSize: '.85rem' }}>
            {i18n('intro3')}
          </Text>
        </Paragraph>
        <Divider/>

        <Title level={3} style={{ color: '#0f9800' }}>{i18n('update2023')}</Title>
        <Text style={{ margin: '1.5rem 0', fontSize: '1.25rem' }}>{i18n('update1')}</Text>
        <Title level={3} style={{ color: '#0f9800' }}>{i18n('update2024')}</Title>
        <Text style={{ margin: '1.5rem 0', fontSize: '1.25rem' }}>{i18n('update2')}</Text>
        <Title level={3} style={{ color: '#0f9800' }}>{i18n('update2024')}</Title>
        <Text style={{ margin: '1.5rem 0', fontSize: '1.25rem' }}>{i18n('update3')}</Text>
        <List
          className="ant-over"
          header={<Title level={3}>{i18n('find')}</Title>}
          dataSource={list}
          split
          renderItem={(item) => {
            return (
              <List.Item>
                <a href={item.url}>{item.title}</a>
              </List.Item>)}
          }
        >
        </List>
      </div>
    </Layout>
  )
}