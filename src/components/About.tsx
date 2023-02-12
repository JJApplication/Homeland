// 关于页面
import Layout from './Layout'
import utilStyles from '../styles/utils.module.css'
import { Divider } from "antd";

// 首页
export default function About() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h3>关于</h3>
        <p>不过是个写代码的罢了..</p>
        <p>
          我的steam账户: <a href="https://steamcommunity.com/id/hotwaterman">Hotwaterman</a>
        </p>
        <p>
          我的邮箱: <a href="mailto:liaorenj@gmail.com">liaorenj@gmail.com</a>
        </p>
        <p>
          我的电报: <a href="https://t.me/Greatpipi">Telegram</a>
        </p>
        <div style={{marginTop: '2rem', fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center'}}>
          <p>
            卷帘天自高，海水摇空绿。
          </p>
          <p>
            海水梦悠悠，君愁我亦愁。
          </p>
          <p>
            南风知我意，吹梦到西洲。
          </p>
        </div>
        <Divider>
          <p>由<a href="https://cn.vitejs.dev">Vite</a> & <a href="https://ant.design">Antd</a>驱动</p>
        </Divider>
      </section>
    </Layout>
  )
}
