import React from 'react';
import { connect } from 'react-redux';

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

class Message extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.content.id !== 0 && nextProps.content.id !== this.props.content.id) {
      incrementViews(nextProps.content.id);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.content.lines.map((msg) => {
            return <p key={msg.index}>{msg.text}</p>
          })
        }
      </div>
    )
  }
}

// const Message = ({content}) => {
//   let count = 0;
//   const elements = content.lines.map((msg) => {
//    return <p key={msg.index}>{msg.text}</p>
//   });

//   return <div>{elements}</div>;
// }

const mapStateToProps = (state, { params }) => {
  return {
    content: state.message
  }
}

export default connect(mapStateToProps)(Message);