import React, { Component } from 'react'

export default class Dnd extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            feat: ""
        }
    }

    getFeat = async () => {
        const response = await fetch('https://api.open5e.com/feats/')
        const data = await response.json()
        const feat = data['results'][0]['name']
        console.log(feat)
    }

    getClasses = async () => {
      const response = await fetch('https://api.open5e.com/classes/')
      const data = await response.json()
      const classes = data['results']
      const className = classes[0]['name']
      console.log(className)
      this.setState({
        name: className
      })
    }

    componentDidMount = () => {
        this.getFeat()
        this.getClasses()
      
    }
    render() {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      );
  }
}
