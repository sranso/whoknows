'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/app';

export default function renderHTML(req, res) {
  const doctype = '<!DOCTYPE html>';
  const html = ReactDOMServer.renderToStaticMarkup(
    <body>
      <div id="root">
        <App />
      </div>
      <script src="./client.js"/>
    </body>
  );

  res.send(doctype + html);
}
