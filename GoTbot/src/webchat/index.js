import React from 'react';
import ReactDOM from 'react-dom';
import { Webchat } from '@botonic/react';
import App from '../index';
//import './webchat.scss'; // Import your custom styles here
export const webchat = {}

ReactDOM.render(
  <Webchat app={App} />,
  document.getElementById('root')
);