import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
