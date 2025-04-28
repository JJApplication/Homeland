import { Flex, Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { i18n } from '../lib/18n/18n';
import links from '../lib/links';
import Logo from '../assets/logo_light.png';
import LogoDark from '../assets/logo_dark.png';
import './Header.css';
import { getMode, ThemeMode, themeToken } from '../lib/theme';
import { GithubOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: <a href="/">Home</a>,
    key: '/',
  },
  {
    label: i18n('project'),
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
    label: i18n('pages'),
    key: 'pages',
    children: [
      {
        label: (
          <a href="http://mgek.renj.io" target="_blank" rel="noopener noreferrer">
            Mgek Works
          </a>
        ),
        key: '@http://mgek.renj.io',
      },
      {
        label: (
          <a href="https://blog.renj.io" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        ),
        key: '@https://blog.renj.io',
      },
      {
        label: (
          <a href="http://page.renj.io" target="_blank" rel="noopener noreferrer">
            Site(deprecated)
          </a>
        ),
        key: '@http://page.renj.io',
      },
      {
        label: (
          <a href="http://service.renj.io" target="_blank" rel="noopener noreferrer">
            Apollo
          </a>
        ),
        key: '@http://service.renj.io',
      },
      {
        label: (
          <a href="http://doc.renj.io" target="_blank" rel="noopener noreferrer">
            Online Docs
          </a>
        ),
        key: '@http://doc.renj.io',
      },
      {
        label: (
          <a href={links.jjapp} target="_blank" rel="noopener noreferrer">
            JJApp Organization
          </a>
        ),
        key: '@jjapplication',
      },
      {
        label: (
          <a href={links.geekfw} target="_blank" rel="noopener noreferrer">
            GeekFW Organization
          </a>
        ),
        key: '@geekfw',
      },
    ],
  },
  {
    label: <a href="/About">{i18n('about')}</a>,
    key: 'about',
  },
  {
    label: (
      <GithubOutlined style={{ fontSize: '20px' }} onClick={() => {
        open(links.github, '_blank')
      }} />
    ),
    key: 'github',
  },
];

const styles = {
  fontSize: '1rem',
  fontWeight: 'normal',
  justifyContent: 'flex-end',
  width: '100%',
  border: 'none',
  background: 'transparent',
};

export default function Header() {
  const [mode, setMode] = useState(getMode());
  const [token, setToken] = useState(themeToken(getMode()));
  useEffect(() => {
    const themeOnEvent = () => {
      if (mode !== getMode()) {
        setMode(getMode());
      }
      if (themeToken(getMode())['colorBgBanner'] !== token['colorBgBanner']) {
        setToken(themeToken(getMode()));
      }
    };
    window.addEventListener('click', themeOnEvent);

    return () => {
      window.removeEventListener('click', themeOnEvent);
    };
  }, [mode]);

  const getLogo = () => {
    switch (mode) {
      case ThemeMode.Light: {
        return Logo;
      }
      case ThemeMode.Night: {
        return LogoDark;
      }
      default:
        return Logo;
    }
  };
  return (
    <>
      <Flex className={'flex-header'} gap="small" justify="space-between" align="center" style={{ backgroundColor: token.colorBgGlobal }}>
        <img className="logo" src={getLogo()}  alt='logo' style={{ cursor: 'pointer' }} onClick={() => {open('/', '_self')}}/>
        <Menu className="ant-over" mode="horizontal" items={items} style={styles} />
      </Flex>
    </>
  );
}
