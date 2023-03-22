import React, { Component } from 'react'

export default class AllClasses extends Component {
  constructor() {
    super()
    this.state = {
        classes: []
    }
  }

  viewCharacter = () => {
    return this.state.classes.map((aClass) => {
        return (
        <div className="card" style={{ width: "max-width: 150px;" }}>
        <div className="card-body">
          <h3 className="card-title">Class: {aClass.name}</h3>
          <h4 className="card-subtitle mb-2 text-muted ">HitDice: {aClass.hit_dice}</h4>
            <p className="card-text">
            {aClass.desc}
            </p>
            <h6>Armor: {aClass.prof_armor}</h6>
            <h6>Weapons:{aClass.prof_weapon}</h6>
            <h6>Tools: {aClass.prof_tools}</h6>
        </div>
        </div>
        )
    })
  }

  getClasses = async () => {
    const response = await fetch('https://api.open5e.com/classes/')
      const data = await response.json()
      const classes = data['results']
    console.log(classes)
    if(data) {
      this.setState({classes: classes})
    }
  }

  componentDidMount = () => {
    this.viewCharacter()
    this.getClasses()
  }


  render() {
    return (
      <div>{this.viewCharacter()}</div>
    )
  }
}
