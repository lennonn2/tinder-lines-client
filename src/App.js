import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message.jsx';
import Button from './components/Button.jsx';
import Checkboxes from './components/Checkboxes.jsx';

let store = {
  message: ['Initial message'],
  categories: ['funny', 'cheesy', 'risky', 'stupid', 'pickup', 'questions']
};

class App extends Component {
  updateStore(newVal, property) {
    switch (property) {
      case 'message':
        store = {
          ...store,
          message: newVal
        }
        break;
      case 'categories':
        store = {
          ...store,
          categories: newVal
        }
        break;
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <header>Header</header>
        <div class="ad1" id="ad1">Ad 1</div>
        <Message 
          className="message"
          id="message"
          content={store.message}
        />
        <Button
          className="button"
          id="button"
          updateStore={this.updateStore.bind(this)}
          categories={store.categories}
        />
        <Checkboxes
          class="checkboxes"
          id="checkboxes"
          updateStore={this.updateStore.bind(this)}
        />
        <div class="ad2" id="ad2">Ad 2</div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
