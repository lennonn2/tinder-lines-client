import React from 'react';
import { connect } from 'react-redux';

import Message from './Message';

import './Messages.css';

const incrementViews = id => {
  fetch('https://qvqnyun7pl.execute-api.us-east-1.amazonaws.com/prod/views', {
    body: JSON.stringify({id}), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
  });
}

class Messages extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.content.id !== 0 && nextProps.content.id !== this.props.content.id) {
      // incrementViews(nextProps.content.id);
    }
  }

  render() {
    return (
      <div className='messagesContainer'>
        {
          this.props.content.lines.map((msg) => {
            return <Message key={msg.index} isReply={msg.isReply}>{msg.text}</Message>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    content: state.message
  }
}

export default connect(mapStateToProps)(Messages);