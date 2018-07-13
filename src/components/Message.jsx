import React from 'react';

import CopyBtn from './CopyBtn.jsx';
import './Message.css';

export default ({isReply, children}) => {
  const messageClass = isReply ? 'from-them' : 'from-me';
  const copyBtn = isReply ? null : <CopyBtn copyText={children}/>;
  return (
    <div className={messageClass}>
        <p>{children}</p>
        {copyBtn}
    </div>

  )
}