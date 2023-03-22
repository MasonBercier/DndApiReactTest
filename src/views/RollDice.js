import React, { Component } from 'react'

export default class RollDice extends Component {

  render() {
    return (
      <div>
        <button newclass="d4" onClick={this.props.rollD4}>Roll a D4!</button>
          <p>{this.props.d4rolls}</p>
        <button newclass="d6" onClick={this.props.rollD6}>Roll a D6!</button>
          <p>{this.props.d6rolls}</p>
        <button newclass="d8" onClick={this.props.rollD8}>Roll a D8!</button>
          <p>{this.props.d8rolls}</p>
        <button newclass="d10" onClick={this.props.rollD10}>Roll a D10!</button>
          <p>{this.props.d10rolls}</p>
        <button newclass="d12" onClick={this.props.rollD12}>Roll a D12!</button>
          <p>{this.props.d12rolls}</p>
        <button newclass="d20" onClick={this.props.rollD20}>Roll a D20!</button>
          <p>{this.props.d20rolls}</p>
      </div>
    )
  }
}
