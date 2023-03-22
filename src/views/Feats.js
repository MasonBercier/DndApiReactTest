import React, { Component } from 'react'

export default class Feats extends Component {
    constructor() {
        super()
        this.state = {
            feats: []
        }
      }
    
      viewFeats = () => {
        return this.state.feats.map((aFeat) => {
            return (
            <div className="card" style={{ width: "max-width: 150px;" }}>
            <div className="card-body">
              <h3 className="card-title">Feat: {aFeat.name}</h3>
              <h5>{aFeat.desc}</h5>
              <h5>{aFeat.prerequisite}</h5>
            </div>
            </div>
            )
        })
      }
    
      getFeats = async () => {
        const response = await fetch('https://api.open5e.com/feats/')
          const data = await response.json()
          const feats = data['results']
        console.log(feats)
        if(data) {
          this.setState({feats: feats})
        }
      }
    
      componentDidMount = () => {
        this.viewFeats()
        this.getFeats()
      }
    
    
      render() {
        return (
          <div>{this.viewFeats()}</div>
        )
      }
    }
