import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Main from './components/main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
