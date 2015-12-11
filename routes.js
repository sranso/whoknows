import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/app';

const routes = [
  <Router>
    <Route path="/" component={AddConversation}>
      <Route path="contacts" component={AddConversation}>
        <Route path=":name" component={Contact} />
      </Route>
      <Route path="add" component={AddConversation}>
      <Route path="*" component={AddConversation} />
    </Route>
  </Router>
];

export default routes;
