import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Container extends Component{

  render() {
    return (
      <div>
        <div className="wholePage">
        <div className="container">
          <nav className="navBar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/LivingRoom'>Living Room</NavLink>
            <NavLink to='/Kitchen'>Kitchen</NavLink>
            <NavLink to='/Sitting'>Sitting</NavLink>
            <NavLink to='/BackYard'>Backyard</NavLink>
        </nav>
        </div>
        {this.props.children}
      </div>
      </div>
    );
  }
}
