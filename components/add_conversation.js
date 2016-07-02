import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

class AddConversation extends Component {
  constructor(props) {
    super(props);
    this.saveConversation = this.saveConversation.bind(this);
  }

  saveConversation(fields) {
    const { firstName, lastName, methodOfCommunication, date } = fields;
    const { actions: { addConversation } } = this.props;
    const data = {
      firstName,
      lastName,
      methodOfCommunication,
      date
    };

    return addConversation(data);
  }

  render() {
    const { fields, handleSubmit } = this.props;
    const { firstName, lastName, methodOfCommunication, date } = fields;
    return (
      <div>
        <h4>Record a conversation</h4>
        <form
          onSubmit={handleSubmit(this.saveConversation)}
          className="add-conversation">
          <fieldset>
            <label htmlFor="first-name">
              Contact's First Name
              <input
                className="first-name"
                aria-label="first-name"
                type="text"
                placeholder="Emma"
                {...firstName} />
            </label>

            <label htmlFor="last-name">
              Contact's Last Name
              <input
                className="last-name"
                aria-label="last-name"
                type="text"
                placeholder="Thorne"
                {...lastName} />
            </label>

            <label htmlFor="method">
              Method
              <input
                className="method"
                aria-label="method-of-communication"
                type="text"
                placeholder="E.g. call, text, gchat"
                {...methodOfCommunication} />
            </label>

            <label htmlFor="date">
              Date
              <input
                className="date"
                aria-label="date"
                type="text"
                maxLength={10}
                placeholder="MM/DD/YYYY"
                {...date} />
            </label>
            <button onClick={handleSubmit(this.saveConversation)}>Add</button>
          </fieldset>

        </form>
      </div>
    );
  }
};

AddConversation.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default reduxForm({
  form: 'add-conversation',
  fields: ['firstName', 'lastName', 'methodOfCommunication', 'date']
}, mapStateToProps, mapDispatchToProps)(AddConversation);
