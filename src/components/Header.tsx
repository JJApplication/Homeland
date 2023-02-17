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
            label: <a href="/works/mgek">Mgek APP</a>,
            key: 'mgekapp',
          },
        ],
      },
      {
        type: 'group',
        label: 'JJApplication',
        children: [
          {
            label: <a href="/works/jjapplication">JJApp</a>,
            key: 'jjapp',
          },
          {
            label: <a href="/works/fushin">Fushin</a>,
            key: '#fushin',
          },
          {
            label: <a href="/works/apollo">Apollo</a>,
            key: '#apollo',
          },
          {
            label: <a href="/works/octopus">OctopusTree</a>,
            key: '#octopus',
          },
          {
            label: <a href="/works/noengine">NoEngine</a>,
            key: '#noengine',
          },
          {
            label: <a href="/works/sandwich">Sandwich</a>,
            key: '#sandwich',
          },
        ],
      },
    ],
  },
  {
    label: '页面',
    key: 'pages',
    children: [
      {
        label: <a href="http://mgek.cc" target="_blank" rel="noopener noreferrer">Mgek Works</a>,
        key: '@http://mgek.cc',
      },
      {
        label: <a href="https://blog.renj.io" target="_blank" rel="noopener noreferrer">Blog</a>,
        key: '@https://blog.renj.io',
      },
      {
        label: <a href="http://page.renj.io" target="_blank" rel="noopener noreferrer">Site(deprecated)</a>,
        key: '@http://page.renj.io',
      },
      {
        label: <a href="http://service.renj.io" target="_blank" rel="noopener noreferrer">Apollo</a>,
        key: '@http://service.renj.io',
      },
      {
        label: <a href="http://doc.mgek.cc" target="_blank" rel="noopener noreferrer">Online Docs</a>,
        key: '@http://doc.mgek.cc',
      },
      {
        label: <a href="https://github.com/jjapplication" target="_blank" rel="noopener noreferrer">JJApp Organization</a>,
        key: '@jjapplication',
      },
      {
        label: <a href="https://github.com/geekfw" target="_blank" rel="noopener noreferrer">GeekFW Organization</a>,
        key: '@geekfw',
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