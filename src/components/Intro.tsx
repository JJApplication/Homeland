import React from "react";
import Layout from './Layout'
import { Divider, List } from 'antd';
import list from "../lib/list";

export default function Intro() {
  return (
    <Layout>
      <div style={{ fontSize: '1.2rem' }}>
        <p style={{ margin: '1.5rem 0' }}>
          Hello, I'm Landers from HUST(HuaZhong University of sci&tech.)🌎
        </p>
        <p style={{ margin: '1.5rem 0' }}>
          This is a place where I record my study, relaxation, and enjoyment. Welcome!
        </p>
        <p style={{ margin: '1.5rem 0' }}>
          Graduated from School of Electronic Information and Communications, HUST.
        </p>

        <Divider/>

        <h4 style={{ color: '#83fa71' }}>update 2023</h4>

        <p style={{ margin: '1.5rem 0' }}>Work in Huawei Technologies Co., Ltd. as a developer.</p>

        <List
          className="ant-over"
          header={<h3 style={{ color: '#fff' }}>Where you can find me.</h3>}
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