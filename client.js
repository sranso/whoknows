import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerActions from './redux/actions';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const appElement = document.getElementById('app');
const state = JSON.parse(document.getElementById('__state').dataset.state);

const reducers = {
  reducerActions,
  form: formReducer
}
const reducer = combineReducers(reducers);
const store = createStore(reducer, state);
const history = createBrowserHistory();

const reactElement = (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);

ReactDOM.render(reactElement, appElement);
