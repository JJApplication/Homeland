import React from "react";
import Layout from './Layout'
import { List, Divider } from 'antd';
import list from "../lib/list";

export default function Intro() {
  return (
    <Layout>
      <div style={{fontSize: '1.2rem'}}>
        <p>
          你好，我是Landers，来自HUST(华中科技大学)🌎
        </p>
        <p>
          这里是我记录学习点滴，放松身心，享受乐趣的地方，感谢你的到来！
        </p>
        <p>
          目前就读于EIC，正在努力向CS奋斗，鲁迅说过:“通向成功没有捷径只有不断努力奋斗”。热衷于自己喜爱的事业，向往的生活才会向你抛出橄榄枝，一起努力加油！
        </p>

        <Divider />

        <h4>update 2023</h4>

        目前就职于华为, 是一名web开发工程师

        <List
          className="ant-over"
          header={<h4>你还可以在这些地方找到我</h4>}
          dataSource={list}
          renderItem={(item) => {
            return <List.Item>
              <a href={item.url}>{item.title}</a>
            </List.Item>            }
          }
        >

        </List>

      </div>
    </Layout>
  )
}