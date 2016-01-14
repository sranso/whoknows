'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router';
import HTMLDocument from 'react-html-document';
import ReactDOMServer from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import routes from '../routes';

import App from '../components/app';
import reducer from '../redux/actions';

export default function renderHTML(req, res) {
  const state = {
    pendingConvo: {
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
  const store = createStore(reducer, state);
  const location = createLocation(req.url);
  // this will eventually be a GET to the api

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
        state={state}>

        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>

      </HTMLDocument>
    );
    const markup = ReactDOMServer.renderToStaticMarkup(doc);

    return res.send(markup);
  });
}
