'use strict';

import React from 'react';
import HTMLDocument from 'react-html-document';
import ReactDOMServer from 'react-dom/server';
import App from '../components/app';

export default function renderHTML(req, res) {
  const scripts = ['./client.js'];
  const stylesheets = [];
  const metatags = [{}];
  const doc = (
    <HTMLDocument
      title="Whoknows"
      scripts={scripts}
      stylesheets={stylesheets}
      metatags={metatags}>

      <App />

    </HTMLDocument>
  );
  const markup = ReactDOMServer.renderToStaticMarkup(doc);

  return res.send(markup);
}
