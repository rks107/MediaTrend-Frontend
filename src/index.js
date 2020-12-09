import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components';
import configStore from './store';

let store = configStore();
console.log("store", store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

