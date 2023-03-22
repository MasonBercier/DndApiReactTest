import React, { Component } from 'react'

export default class Races extends Component {
  constructor() {
    super()
    this.state = {
        races: []
    }
  }

  viewRaces = () => {
    return this.state.races.map((aRace) => {
        return (
        <div className="card" style={{ width: "max-width: 150px;" }}>
        <div className="card-body">
          <h3 className="card-title">Class: {aRace.name}</h3>
          <h5>{aRace.desc}</h5>
          <h5>{aRace.traits}</h5>
          <h5>{aRace.alignment}</h5>
        </div>
        </div>
        )
    })
  }

  getRaces = async () => {
    const response = await fetch('https://api.open5e.com/races/')
      const data = await response.json()
      const races = data['results']
    console.log(races)
    if(data) {
      this.setState({races: races})
    }
  }

  componentDidMount = () => {
    this.viewRaces()
    this.getRaces()
  }


  render() {
    return (
      <div>{this.viewRaces()}</div>
    )
  }
}
