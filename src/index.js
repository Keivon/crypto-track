import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header'
import store from './app/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Header/>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


