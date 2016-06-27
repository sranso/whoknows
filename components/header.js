import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <a href="/contacts">Contacts</a>
        <a href="/add">Add Conversation</a>
      </header>
    );
  }
}

export default Header;
