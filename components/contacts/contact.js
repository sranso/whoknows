import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.findContact = this.findContact.bind(this);
    this.renderConversations = this.renderConversations.bind(this);
  }

  findContact(contacts, name) {
    const first = name.split('-')[0];
    const last = name.split('-')[1];
    return _.find(contacts, contact => {
      return contact.firstName === first && contact.lastName === last;
    });
  }

  renderConversations(conversation, i) {
    return (
      <tr key={i}>
        <td>{conversation.date}</td>
        <td>{conversation.method}</td>
      </tr>
    );
  }

  render() {
    const { contacts } = this.props;
    const { name } = this.props.params;
    const contact = this.findContact(contacts, name);

    return (
      <div>
        <h4>{`${contact.firstName} ${contact.lastName}`}</h4>
        <h5>Conversations</h5>
        <table><tbody>{contact.conversations.map(this.renderConversations)}</tbody></table>
      </div>
    );
  }
};

Contact.propTypes = {
  contacts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(Contact);
