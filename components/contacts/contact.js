import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.renderConversations = this.renderConversations.bind(this);
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
    const { contact } = this.props;
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
  contact: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  const { name } = props.params;
  const first = name.split('-')[0];
  const last = name.split('-')[1];
  const contact = _.find(state.contacts, contact => {
    return contact.firstName === first && contact.lastName === last;
  });
  return { contact };
}

export default connect(mapStateToProps)(Contact);
