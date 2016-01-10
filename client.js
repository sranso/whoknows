import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore } from 'redux';
import App from './components/app';
import reducer from './redux/actions';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const appElement = document.getElementById('app');
const store = createStore(reducer, window.__state);
const history = createBrowserHistory();

const reactElement = (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);

ReactDOM.render(reactElement, appElement);
