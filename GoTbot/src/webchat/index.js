export const webchat = {}

import React from 'react';
import { Webchat } from '@botonic/react';
import './styles.css'; // Import the custom styles

const customTheme = {
    botMessage: {
      background: '#C5C5C5',
      color: '#000000',
    },
    userMessage: {
      background: '#ACC6FF',
      color: '#000000',
    },
    header: {
      background: '#79A3FE',
      title: {
        color: '#FFFFFF',
      },
    },
    background: '#F3F7FC',
};

const MyApp = () => (
    <Webchat
      theme={customTheme}
      botName='GoTbot'
    />
  );
  
  export default MyApp;