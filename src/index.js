import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './app';  // Make sure this import is correct

ReactDOM.render(
  <React.StrictMode>
    <app />
  </React.StrictMode>,
  document.getElementById('root')
);
