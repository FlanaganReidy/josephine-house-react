import React, { Component } from 'react';

export default class Navbar extends Component{
  constructor(props){
    super(props)

    this.handleRoom = this.handleRoom.bind(this);
    this.state = {
      room:''
    };

  }
  handleRoom(e){
    this.setState({room:e.target.value});
    console.log(this.state.room);
  }
  render(){
    return(
      <nav className="navbar">
        <h1 className="title">Josephine house</h1>
        <form onClick = {this.handleRoom}>
        <input type="button" className = "navButton" id= "livingRoom" value="livingRoom"></input>
        <input type="button" className = "navButton" id= "kitchen" value="kitchen"></input>
        <input type="button" className = "navButton" id= "office" value="office"></input>
        <input type="button"className = "navButton" id= "masterBedroom" value="masterBedroom"></input>
        <input type="button" className = "navButton" id= "guestRoom" value="guestRoom"></input>
        <input type="button" className = "navButton" id= "backyard" value="backyard"></input>
        </form>
      </nav>
    );
  }
}
