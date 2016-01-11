import React, { Component, PropTypes } from 'react';

import Contacts from './contacts/contacts';
import Contact from './contacts/contact';

class App extends Component {
  render() {
    return (
      <div>
        <h1>who you talkin to</h1>
        {this.props.children}
      </div>
    );
  }
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
