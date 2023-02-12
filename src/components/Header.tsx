import { Menu, MenuProps } from "antd";
import React from "react";

const items: MenuProps['items'] = [
  {
    label: <a href="/">Renj.io</a>,
    key: '/',
  },
  {
    label: <a href="/intro">介绍</a>,
    key: 'intro',
  },
  {
    label: '项目',
    key: 'works',
    children: [
      {
        type: 'group',
        label: 'Mgek',
        children: [
          {
            label: 'ImgHost',
            key: '#imghost',
          },
          {
            label: 'Pan',
            key: '#pan',
          },
        ],
      },
      {
        type: 'group',
        label: 'JJApplication',
        children: [
          {
            label: 'Fushin',
            key: '#fushin',
          },
          {
            label: 'Apollo',
            key: '#apollo',
          },
          {
            label: 'OctopusTree',
            key: '#octopus',
          },
          {
            label: 'NoEngine',
            key: '#noengine',
          },
          {
            label: 'Sandwich',
            key: '#sandwich',
          },
        ],
      },
      {
        type: 'group',
        label: 'GeekFW',
        children: [
          {
            label: 'Killer',
            key: '#killer',
          }
        ],
      },
    ],
  },
  {
    label: '页面',
    key: 'pages',
    children: [
      {
        label: <a href="http://mgek.cc">Mgek Works</a>,
        key: '@http://mgek.cc',
      },
      {
        label: <a href="https://blog.renj.io">Blog</a>,
        key: '@https://blog.renj.io',
      },
      {
        label: <a href="http://page.renj.io">Site(deprecated)</a>,
        key: '@http://page.renj.io',
      },
      {
        label: <a href="http://service.renj.io">Apollo</a>,
        key: '@http://service.renj.io',
      },
      {
        label: <a href="http://doc.mgek.cc">Online Docs</a>,
        key: '@http://doc.mgek.cc',
      },
    ],
  },
  {
    label: <a href="/about">关于</a>,
    key: 'about',
  },
  {
    label: (
      <a href="https://github.com/landers1037" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    ),
    key: 'github',
  },
];

const styles = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
}

export default function Header() {
  return <Menu className="ant-over" mode="horizontal" items={items} style={styles} />
}