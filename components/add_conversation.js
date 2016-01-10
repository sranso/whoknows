import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AddConversation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>add a convo</div>
      </div>
    );
  }
};

AddConversation.propTypes = {
  contacts: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    pendingConvo: state.pendingConvo
  }
}

export default connect(mapStateToProps)(AddConversation);
