import React from 'react';
import { connect } from 'react-redux';

const Message = ({content}) => {
  const elements = content.map((msg) => <p>{msg}</p>);
  return <div>{elements}</div>;
}

const mapStateToProps = (state, { params }) => {
  return {
    content: state.message
  }
}

export default connect(mapStateToProps)(Message);