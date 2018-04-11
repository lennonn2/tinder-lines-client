import React from 'react';
import { connect } from 'react-redux';

const Message = ({content}) => {
  let count = 0;
  const elements = content.map((msg) => {
   return <p key={count++}>{msg}</p>
  });
  return <div>{elements}</div>;
}

const mapStateToProps = (state, { params }) => {
  return {
    content: state.message
  }
}

export default connect(mapStateToProps)(Message);