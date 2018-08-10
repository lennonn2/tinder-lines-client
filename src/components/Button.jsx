import React from 'react';
import { connect } from 'react-redux';

import Logo from '../components/icon-svg';
import { updateMessage } from '../actions';

import './Button.css';

const Button = ({ updateMessage, categories }) => {
  const update = () => setTimeout(updateMessage, 300);
  return (
    <div className='buttonContainer'>
      <a className='button' onClick={update}>Generate
        <Logo />
      </a>
    </div>
  );
}

export default connect(null, {updateMessage})(Button);