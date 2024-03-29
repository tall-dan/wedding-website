import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router><ErrorBoundary><App /></ErrorBoundary></Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
