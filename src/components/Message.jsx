import React from 'react';

import './Message.css';

export default ({isReply, children}) => {
  const messageClass = isReply ? 'from-them' : 'from-me';
  return (
    <div className={messageClass}>
        <p>{children}</p>
    </div>

  )
}