import React from "react";
import Layout from '../components/Layout'
import img404 from '../assets/404.gif';

export default function NotFound() {
  return (
    <Layout>
      <div style={{textAlign: 'center', marginTop: '5rem'}}>
        <h2>404</h2>
        <h3>Nothing Found Here.</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
          <img src={img404} alt="not found" style={{ display: 'inline-flex', borderRadius: '50%' }}/>
        </div>
      </div>
    </Layout>
  )
}