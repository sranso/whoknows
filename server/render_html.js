'use strict';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { RoutingContext, match } from 'react-router';
import HTMLDocument from 'react-html-document';
import ReactDOMServer from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import routes from '../routes';

import App from '../components/app';
import appReducer from '../redux/reducer';

export default function renderHTML(req, res) {
  // create the store
  const reducers = {
    appReducer,
    form: formReducer
  }
  const reducer = combineReducers(reducers);
  const store = createStore(reducer);

  // match the request location with route, or handle error/redirect
  const location = req.url;
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const scripts = ['/js/client.js'];
    const stylesheets = ['/stylesheets/styles.css'];
    const metatags = [{}];
    const doc = (
      <HTMLDocument
        title="Whoknows"
        scripts={scripts}
        stylesheets={stylesheets}
        metatags={metatags}
        state={store.getState()}>

        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>

      </HTMLDocument>
    );

    // return html string
    const markup = ReactDOMServer.renderToStaticMarkup(doc);
    return res.send(markup);
  });
}
