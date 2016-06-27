import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AddConversation from './components/add_conversation';
import Contacts from './components/contacts/contacts';
import Contact from './components/contacts/contact';

const routes = [
  <Route path="/" component={App}>
    <IndexRoute component={AddConversation} />
    <Route path="add" component={AddConversation} />
    <Route path="contacts" component={Contacts} />
    <Route path="contacts/:name" component={Contact} />
  </Route>
];

export default routes;
