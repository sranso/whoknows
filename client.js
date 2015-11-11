import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';

const reactElement = <App />;
const appElement = document.getElementById('root');

ReactDOM.render(reactElement, appElement);
