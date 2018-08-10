import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Messages from './components/Messages.jsx';
import Button from './components/Button.jsx';
import Checkboxes from './components/Checkboxes.jsx';
import { Provider } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component {
  render() {
    const { store } = this.props;
    const state = store.getState();
    const {
      message,
      categories,
      toastOpen,
    } = state;

    return (
      <Provider store={this.props.store}>
        <div className="App">
          <Messages
            className="messages"
            id="messages"
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
        </div>
      </Provider>
    );
  }
}

export default App;
