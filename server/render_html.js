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
import reducerActions from '../redux/actions';

export default function renderHTML(req, res) {
  // grab the state
  const state = {
    pendingConversation: {
      contact: {},
      conversation: {},
      isAdding: false
    },
    contacts: [
      {
        firstName: 'xavier',
        lastName: 'lopez',
        conversations: [
          { date: '12/12/15', method: 'phone' },
          { date: '09/13/15', method: 'irl' },
        ]
      },
      {
        firstName: 'ricardo',
        lastName: 'vazquez',
        conversations: [
          { date: '05/18/15', method: 'phone' },
        ]
      },
      {
        firstName: 'margo',
        lastName: 'smith',
        conversations: [
          { date: '12/02/15', method: 'gchat' },
          { date: '09/20/14', method: 'gchat' },
          { date: '10/07/15', method: 'email' },
          { date: '12/02/15', method: 'slack' },
        ]
      },
      {
        firstName: 'lindsay',
        lastName: 'levine',
        conversations: [
          { date: '10/19/15', method: 'phone' },
          { date: '02/22/13', method: 'irl' },
        ]
      },
    ],
    user: {
      firstName: 'sarah',
      lastName: 'ransohoff',
    }
  };

  // create the store
  const reducers = {
    reducerActions,
    form: formReducer
  }
  const reducer = combineReducers(reducers);
  const store = createStore(reducer, state);

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
