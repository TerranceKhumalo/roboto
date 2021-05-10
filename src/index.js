import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { searchRobots } from "./reducers";
import App from './contaners/app';
// import reportWebVitals from './reportWebVitals';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
// reportWebVitals();
