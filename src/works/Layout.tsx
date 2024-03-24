import React, { useEffect, useState } from "react";
import 'highlight.js/styles/github-dark.css'
import './works.css';
import './style.css';
import './style-light.css';
import Layout from "../components/Layout";
import { Button } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { getMode, ThemeMode, themeToken } from "../lib/theme";

export default function WorkLayout({name, content}: {
  name: string,
  content: string
}) {

  const goTop = () => {
    let index = window.scrollY;
    const t = setInterval(() => {
      if (index <= 0) {
        clearInterval(t)
      }
      window.scrollTo(0, index);
      index = index - 80;
    }, 10);
  }

  const getMarkdownStyle = () => {
    const mode = getMode();
    if (mode === ThemeMode.Light) {
      return 'markdown-body-light'
    }
    return 'markdown-body'
  }

  const [showTop, setShowTop] = useState(0)
  const [mode, setMode] = useState(getMode())
  const [style, setStyle] = useState(getMarkdownStyle())
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowTop(window.scrollY);
    })
  }, [showTop]);

  useEffect(() => {
    const themeOnEvent = () => {
      if (getMode() !== mode) {
        setStyle(getMarkdownStyle())
        setMode(getMode())
      }
    }
    window.addEventListener('click', themeOnEvent)
    // unmount remove listener
    return () => {
      window.removeEventListener('click', themeOnEvent)
    }
  }, [style])
  
  return (
    <Layout>
      <div className="works">
        <div>
          <span className="head">{name}</span>
        </div>

        <main className={style} dangerouslySetInnerHTML={{ __html: content }}></main>
        { showTop >= 100 && <Button onClick={goTop} className="top" type="default" shape="circle" size="large" icon={<VerticalAlignTopOutlined />}/>}
      </div>
    </Layout>
  )
}