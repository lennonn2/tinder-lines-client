import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './components/Message.jsx';
import Button from './components/Button.jsx';
import Checkboxes from './components/Checkboxes.jsx';
import { Provider } from 'react-redux';

const fetchLines = () => {
  fetch('https://qvqnyun7pl.execute-api.us-east-1.amazonaws.com/prod/lines', {
    headers: {
      categories: ['cheesy', 'funny']
    }
  })
}

class App extends Component {
  render() {
    const { store } = this.props;
    const state = store.getState();
    const {
      message,
      categories
    } = state;

    return (
      <Provider store={this.props.store}>
        <div className="App">
          <header>Header</header>
          <div className="ad1" id="ad1">Ad 1</div>
          <Message 
            className="message"
            id="message"
            content={message}
          />
          <Button
            className="button"
            id="button"
            categories={categories}
          />
          <Checkboxes
            class="checkboxes"
            id="checkboxes"
          />
          <div className="ad2" id="ad2">Ad 2</div>
          <footer>Footer</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
