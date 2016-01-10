import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  renderContact(contact, i) {
    return (
      <li key={i}>{`${contact.firstName} ${contact.lastName}`}</li>
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
  }
}

export default connect(mapStateToProps)(Contacts);
