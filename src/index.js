import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import cartreducer from "../src/redux/cartreducer";
import { createStore } from "redux"

const store = createStore(cartreducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter base="/">
      <App />
    </HashRouter>
  </Provider>
);