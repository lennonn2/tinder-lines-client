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
  const lines = await response.json();
  return lines;
}
const storeLines = getLines()
  .then(lines => {
    const store = configureStore(storeLines);
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
    registerServiceWorker();
  });
