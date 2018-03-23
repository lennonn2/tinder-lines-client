import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Header</header>
        <div class="ad1" id="ad1">Ad 1</div>
        <div class="message" id="message">Message</div>
        <div class="button" id="button">Button</div>
        <div class="checkboxes" id="checkboxes">Checkbox List</div>
        <div class="ad2" id="ad2">Ad 2</div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
