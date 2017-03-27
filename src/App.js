import React, { Component } from 'react';
import logo from './logo.svg';
import FilmsView from './FilmsView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        	<FilmsView height="400"></FilmsView>
        </div>
        <div>
          <p>Some bottom content</p>
        </div>
      </div>
    );
  }
}

export default App;
