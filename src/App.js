import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Main from './components/main.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      room:''
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main>
        </Main>
      </div>
    );
  }
}

export default App;
