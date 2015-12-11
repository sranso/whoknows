import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contacts from './contacts/contacts';
import Contact from './contacts/contact';

class App extends Component {
  render() {
    return (
      <div>
        <h1>who you talkin to</h1>
        <Contacts />
        <Contact />
      </div>
    );
  }
};

export default connect()(App);
