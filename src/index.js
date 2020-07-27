import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Employee from './Employee';
import LangDescription from './LangDescription';
import RefDemo from './RefDemo';
import Person from './Person';
import Student from './Student';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Person/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
