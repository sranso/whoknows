'use strict';

import express from 'express';
import renderHTML from './server/render_html';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));
app.get('*', renderHTML);

app.listen(PORT, (e) => {
  if (e) {
    console.error(e);
  } else {
    console.log(`Listening on port ${PORT}.`);
  }
});
