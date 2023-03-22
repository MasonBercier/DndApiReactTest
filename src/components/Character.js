import React, { Component } from 'react'

export default class Character extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.strength}</h2>
        <button onClick={this.props.addOne}>Grind strength</button>
      </div>
    )
  }
}
