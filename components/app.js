import React, { Component, PropTypes } from 'react';

import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
