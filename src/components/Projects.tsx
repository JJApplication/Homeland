// @ts-nocheck
import './Projects.css';
import imghost from '../assets/projects/imghost.jpg';
import blog from '../assets/projects/blog.png';
import apollo from '../assets/projects/apollo.png';
import jjapp from '../assets/projects/jjapp.png';
import { GithubFilled, NodeIndexOutlined } from '@ant-design/icons';
import links from '../lib/links';

export default function Projects({ token }) {
  return (
    <div className={'projects-container'}>
      <div className={'projects-container-content'}>
        <div className={'row'}>
          <div className={'logo-wrapper'}>
            <img src={imghost} alt="logo" className={'logo'} />
          </div>
          <div className={'content'}>
            <p style={{ width: '100%', padding: '1rem' }}>
              <span style={{ color: token.colorTextTitle, fontSize: '22px', fontWeight: '600' }}>ImgHost</span>
              <br />
              <span style={{ display: 'block', marginTop: '0.5rem', color: token.colorText }}>
                A lightweight personal image hosting service
              </span>
            </p>
          </div>
          <div className={'link'}>
            <NodeIndexOutlined />
            <GithubFilled
              onClick={() => {
                open(links.imghost_github);
              }}
            />
          </div>
        </div>
        <div className={'row'}>
          <div className={'logo-wrapper'}>
            <img src={blog} alt="logo" className={'logo'} />
          </div>
          <div className={'content'}>
            <p style={{ width: '100%', padding: '1rem' }}>
              <span style={{ color: token.colorTextTitle, fontSize: '22px', fontWeight: '600' }}>Blog Generator</span>
              <span style={{ display: 'block', marginTop: '0.5rem', color: token.colorText }}>
                Blog generator driven by Markdown
              </span>
            </p>
          </div>
          <div className={'link'}>
            <NodeIndexOutlined
              onClick={() => {
                open(links.blog);
              }}
            />
            <GithubFilled
              onClick={() => {
                open(links.blog_github);
              }}
            />
          </div>
        </div>
        <div className={'row'}>
          <div className={'logo-wrapper'}>
            <img src={apollo} alt="logo" className={'logo'} />
          </div>
          <div className={'content'}>
            <p style={{ width: '100%', padding: '1rem' }}>
              <span style={{ color: token.colorTextTitle, fontSize: '22px', fontWeight: '600' }}>Apollo</span>
              <span style={{ display: 'block', marginTop: '0.5rem', color: token.colorText }}>
                A cloud-native modular microservice integration and deployment tool
              </span>
            </p>
          </div>
          <div className={'link'}>
            <NodeIndexOutlined
              onClick={() => {
                open(links.apollo);
              }}
            />
            <GithubFilled
              onClick={() => {
                open(links.apollo_github);
              }}
            />
          </div>
        </div>
        <div className={'row'}>
          <div className={'logo-wrapper'}>
            <img src={jjapp} alt="logo" className={'logo'} />
          </div>
          <div className={'content'}>
            <p style={{ width: '100%', padding: '1rem' }}>
              <span style={{ color: token.colorTextTitle, fontSize: '22px', fontWeight: '600' }}>JJApps</span>
              <span style={{ display: 'block', marginTop: '0.5rem', color: token.colorText }}>
                A microservice integration and deployment solution.Easily integrate any microservice and component.
              </span>
            </p>
          </div>
          <div className={'link'}>
            <NodeIndexOutlined
              onClick={() => {
                open(links.jjapps);
              }}
            />
            <GithubFilled
              onClick={() => {
                open(links.jjapps_github);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}