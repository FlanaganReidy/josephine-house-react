import React, { Component } from 'react';

export default class Navbar extends Component{
  render(){
    return(
      <nav className="navbar">
        <h1 className="title">Josephine house</h1>
        <button>Living Room</button>
        <button>Kitchen</button>
        <button>Office</button>
        <button>Master Bedroom</button>
        <button>Guest Rooms</button>
        <button>Backyard</button>
      </nav>
    );
  }
}
