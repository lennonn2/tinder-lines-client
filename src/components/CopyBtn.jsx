import React from 'react'
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

import { copyMessage, showCopiedToast, hideCopiedToast } from '../actions';
import CopyIcon from './copy-icon';
import './CopyBtn.css';

const mapStateToProps = ({toastOpen}) => {
  return {
    toastOpen
  }
};

const copyText = text => {
  const tmpEl = document.createElement('input');
  document.body.appendChild(tmpEl);
  tmpEl.value = text;
  tmpEl.select();
  document.execCommand("copy");
  tmpEl.remove();
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    copyMessage: () => {
      copyText(props.copyText)
      dispatch(showCopiedToast());
      setTimeout(() => {dispatch(hideCopiedToast())}, 2000)
    }
  }
}

const CopyBtn = ({onClick, copyText, copyMessage, toastOpen}) => 
  <div onClick={copyMessage} className='copy-btn'>
    <CopyIcon />
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={toastOpen}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">Copied!</span>}
    />
  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(CopyBtn);