import React from 'react';

export default ({content}) => {
  const elements = content.map((msg) => <p>{msg}</p>);
  return <div>{elements}</div>;
}