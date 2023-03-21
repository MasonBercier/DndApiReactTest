import './App.css';
import Nav from './Nav';
import Home from './Home'
import Dnd from './Dnd'


import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: 'Mason'
    }
  }
  render() {
    return (
      <div>
        <Nav currentUser = {this.state.currentUser}/>
        <Dnd/>
        <Home/>
      </div>
    )
  }
}

