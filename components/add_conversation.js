import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AddConversation extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputKey = this.handleInputKey.bind(this);
  }

  handleSubmit() {
    console.log('submitted');
  }

  handleInputKey(e) {
    console.log('input key');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Record a conversation</h4>
          <div className="row">
            <label htmlFor="first-name">Contact First Name</label>
            <input
              className="first-name"
              type="text"
              onChange={this.handleInputKey}
              placeholder="Emma" />
          </div>

          <div className="row">
            <label htmlFor="last-name">Contact Last Name</label>
            <input
              className="last-name"
              type="text"
              onChange={this.handleInputKey}
              placeholder="Thorne" />
          </div>

          <div className="row">
            <label htmlFor="method">Method</label>
            <input
              className="method"
              type="text"
              onChange={this.handleInputKey}
              placeholder="E.g. call, text, gchat" />
          </div>

          <div className="row">
            <label htmlFor="date">Date</label>
            <input
              className="date"
              type="text"
              maxLength={10}
              onChange={this.handleInputKey}
              placeholder="MM/DD/YYYY" />
          </div>

          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
};

AddConversation.propTypes = {
  pendingConvo: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    pendingConvo: state.pendingConvo
  }
}

export default connect(mapStateToProps)(AddConversation);
