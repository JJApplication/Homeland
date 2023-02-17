import React, { useEffect, useState } from "react";
import 'highlight.js/styles/github-dark.css'
import './works.css';
import './style.css';
import Layout from "../components/Layout";
import { Button } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

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

  const [showTop, setShowTop] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowTop(window.scrollY);
    })
  }, [showTop]);
  
  
  return (
    <Layout>
      <div className="works">
        <div>
          <span className="head">{name}</span>
        </div>

        <main className="markdown-body" dangerouslySetInnerHTML={{ __html: content }}></main>
        { showTop >= 100 && <Button onClick={goTop} className="top" type="default" shape="circle" size="large" icon={<VerticalAlignTopOutlined />}/>}
      </div>
    </Layout>
  )
}