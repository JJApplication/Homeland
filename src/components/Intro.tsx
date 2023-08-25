import React from "react";
import Layout from './Layout'
import List from 'antd/lib/list';
import Divider from 'antd/lib/divider';
import list from "../lib/list";

export default function Intro() {
  return (
    <Layout>
      <div style={{ fontSize: '1.2rem' }}>
        <p style={{ margin: '1.5rem 0' }}>
          Hello, I'm Landers from HUST(HuaZhong University of sci&tech.)🌎
        </p>
        <p style={{ margin: '1.5rem 0' }}>
          This is where I record my learning, relax and have fun, thank you for visiting！
        </p>
        <p style={{ margin: '1.5rem 0' }}>
          Studied at the School of Electronic Information and Communication Engineering.
        </p>

        <Divider/>

        <h4 style={{ color: '#83fa71' }}>update 2023</h4>

        <p style={{ margin: '1.5rem 0' }}>Currently working at Huawei Technologies Co., Ltd. as a Coder.</p>

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