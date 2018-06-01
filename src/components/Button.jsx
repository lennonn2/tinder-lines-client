import React from 'react';
import { connect } from 'react-redux';

import Logo from '../components/icon-svg';
import { updateMessage } from '../actions';

import './Button.css';

const Button = ({ updateMessage, categories }) => {
  return (
    <div className='buttonContainer'>
      <button className='button' onClick={updateMessage}>Generate
        <Logo />
      </button>
    </div>
  );
}

export default connect(null, {updateMessage})(Button);