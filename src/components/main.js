import React, { Component } from 'react';
import HouseRules from './houserules.js';

export default class Main extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
    <div className = 'Main'>
    {this.props.children}
    </div>
  );
  }
}
