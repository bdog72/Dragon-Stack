import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

render(
  <div>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById('root')
);
