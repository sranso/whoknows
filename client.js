import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import reducer from './redux/actions';

const appElement = document.getElementById('app');
const store = createStore(reducer, window.__state);
const reactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(reactElement, appElement);
