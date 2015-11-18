import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/actions';
import App from './components/app';

const store = createStore(reducer);
const reactElement = <App store={store} />;
const appElement = document.getElementById('app');

ReactDOM.render(reactElement, appElement);
