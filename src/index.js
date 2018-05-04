import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const getLines = async () => {
  const response = await fetch('https://qvqnyun7pl.execute-api.us-east-1.amazonaws.com/prod/lines', {
    headers: {
      categories: ['cheesy', 'funny', 'risky', 'stupid', 'pickup', 'question']
    }
  });
  return response.json();
}
const storeLines = getLines()
  .then(lines => {
    const store = configureStore(lines);
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
    registerServiceWorker();
  });
