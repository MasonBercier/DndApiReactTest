import './App.css';
import Nav from './components/Nav';
import Home from './views/Home'
import { Routes, Route, BrowserRouter} from 'react-router-dom'


import React, { Component } from 'react'
import AllClasses from './views/AllClasses';
import Character from './components/Character';
import Races from './views/Races'
import Feats from './views/Feats';
import RollDice from './views/RollDice';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      totals: [],
      d4rolls: [],
      d6rolls: [],
      d8rolls: [],
      d10rolls: [],
      d12rolls: [],
      d20rolls: [],
      strength: 15
      
    }
  }
    addOne = () => {
        this.setState({
          strength: this.state.strength + 0.002
        })
    }

    reRoll = () => {
      this.setState({
        d4rolls : [],
        d6rolls: [],
        d8rolls: [],
        d10rolls: [],
        d12rolls: [],
        d20rolls: [],
      })
    }

    totalRolls = () => {
      this.setState({
        totals: this.state.d4rolls.reduce((a,b)=>{return a+b})
      })
      console.log(this.state.totals)
    }

    // viewTotals = () => {
    //   return this.state.d4rolls.map((total) => {
    //       return (
    //       <ul className="list-group">
    //         <li className="list-group-item">{total}</li>
    //       </ul>
    //       )
    //   })
    // }

    rollD4 = () => {
      var roll = Math.ceil(Math.random() * 4)
      if(this.state.d4rolls.length < 5){
        this.setState({
          d4rolls: [...this.state.d4rolls , roll]
        })
    }
    }

    rollD6 = () => {
      var roll = Math.ceil(Math.random() * 6)
      if(this.state.d6rolls.length < 5){
      this.setState({
        d6rolls: [...this.state.d6rolls , roll]
      })
    }
    }
    rollD8 = () => {
      let roll = Math.ceil(Math.random() * 8)
      if(this.state.d8rolls.length < 5){
      this.setState({
        d8rolls: [...this.state.d8rolls , roll]
      })
      }
    }
    rollD10 = () => {
      let roll = Math.ceil(Math.random() * 10)
      if(this.state.d10rolls.length < 5){
      this.setState({
        d10rolls: [...this.state.d10rolls , roll]
      })
    }
    }
    rollD12 = () => {
      let roll = Math.ceil(Math.random() * 12)
      if(this.state.d12rolls.length < 5){
      this.setState({
        d12rolls: [...this.state.d12rolls , roll]
      })
    }
    }
    rollD20 = () => {
      let roll = Math.ceil(Math.random() * 20)
      if(this.state.d20rolls.length < 5){
      this.setState({
        d20rolls: [...this.state.d20rolls , roll]
      })
    }
    }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/allclasses' element={<AllClasses/>}/>
            <Route path='/character' element={<Character strength = {this.state.strength} addOne = {this.addOne}/>}/>
            <Route path='/races' element={<Races/>}/>
            <Route path='/feats' element={<Feats/>}/>
            <Route path='/rolldice' element={<RollDice
              d4rolls = {this.state.d4rolls}
              d6rolls = {this.state.d6rolls}
              d8rolls = {this.state.d8rolls}
              d10rolls = {this.state.d10rolls}
              d12rolls = {this.state.d12rolls}
              d20rolls = {this.state.d20rolls}
              reRoll = {this.reRoll}
              totalRolls = {this.totalRolls}
              // viewTotals = {this.viewTotals}
              rollD4 = {this.rollD4}
              rollD6 = {this.rollD6}
              rollD8 = {this.rollD8}
              rollD10 = {this.rollD10}
              rollD12 = {this.rollD12}
              rollD20 = {this.rollD20}
              />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

