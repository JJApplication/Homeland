import { Flex } from "antd";
import React from "react";
import './Footer.css';

export function Footer() {
  return (
      <div className={'footer-content'}>
        <Flex gap={'small'} justify={'space-between'} align={'flex-start'} wrap>
          <span style={{ fontWeight: 'bold', color: '#909090' }}>&#123; JJApplication &#125;</span>
          <span style={{ color: '#888888' }}>Copyright © 2023-2025 JJApplication & Renj.io</span>
        </Flex>
      </div>
  )
}