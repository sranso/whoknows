import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>contact</div>
    );
  }
};

Contact.propTypes = {
  contact: PropTypes.object //.isRequired
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(Contact);
