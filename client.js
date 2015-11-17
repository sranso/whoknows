import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';

const reactElement = <App />;
const appElement = document.getElementById('app');

ReactDOM.render(reactElement, appElement);
