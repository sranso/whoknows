import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.renderContact = this.renderContact.bind(this);
  }

  renderContact(contact, i) {
    let first = contact.firstName;
    let last = contact.lastName;
    return (
      <li key={i}>
        <a href={`/contacts/${first}-${last}`}>{`${first} ${last}`}</a>
      </li>
    );
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        <div>contacts</div>
        <ul>{contacts.map(this.renderContact)}</ul>
      </div>
    );
  }
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(mapStateToProps)(Contacts);
