import React from 'react';
import { connect } from 'react-redux';

import { updateMessage } from '../actions';

const Button = ({ updateMessage, categories }) => {
    return <button onClick={updateMessage}>Click Me</button>;
}

export default connect(null, {updateMessage})(Button);