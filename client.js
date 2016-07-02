import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './redux/reducer';
import routes from './routes';
import getState from './storage';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const appElement = document.getElementById('app');

const state = getState();

const reducers = {
  appReducer,
  form: formReducer
}
const reducer = combineReducers(reducers);
const store = createStore(reducer, state);
const history = createBrowserHistory();

let unsubscribe = store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

const reactElement = (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);

ReactDOM.render(reactElement, appElement);
