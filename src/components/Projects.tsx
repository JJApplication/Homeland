// @ts-nocheck
import './Projects.css';
import imghost from '../assets/projects/imghost.jpg';
import blog from '../assets/projects/blog.png';
import apollo from '../assets/projects/apollo.jpg';
import jjapp from '../assets/projects/jjapp.png';
import hamburger from '../assets/projects/hamburger-logo.jpg';
import { GithubFilled } from '@ant-design/icons';
import links from '../lib/links';
import { i18n } from '../lib/18n/18n';

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
                {i18n('projects.imghost_desc')}
              </span>
            </p>
          </div>
          <div className={'link'}>
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
                {i18n('projects.blog_desc')}
              </span>
            </p>
          </div>
          <div className={'link'}>
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
                {i18n('projects.apollo_desc')}
              </span>
            </p>
          </div>
          <div className={'link'}>
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
                {i18n('projects.jjapps_desc')}
              </span>
            </p>
          </div>
          <div className={'link'}>
            <GithubFilled
              onClick={() => {
                open(links.jjapps_github);
              }}
            />
          </div>
        </div>
        <div className={'row'}>
          <div className={'logo-wrapper'}>
            <img src={hamburger} alt="logo" className={'logo'} />
          </div>
          <div className={'content'}>
            <p style={{ width: '100%', padding: '1rem' }}>
              <span style={{ color: token.colorTextTitle, fontSize: '22px', fontWeight: '600' }}>Hamburger</span>
              <span style={{ display: 'block', marginTop: '0.5rem', color: token.colorText }}>
                {i18n('projects.hamburger_desc')}
              </span>
            </p>
          </div>
          <div className={'link'}>
            <GithubFilled
              onClick={() => {
                open(links.hamburger_github);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
