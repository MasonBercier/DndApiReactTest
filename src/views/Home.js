import React, { Component } from 'react'

export default class Home extends Component {
    constructor (){
        super()
        this.state = {
            name: 'mason',
            age: 27
        }
    }
    // define method within class
    //mount
    //promise handling and api response
    addOne = () => {
        console.log('Fight!')
    }

    render() {
        return (
        <div>
            <h2>{this.props.name}</h2>
            <h2>{this.props.name}</h2>
            <button onClick={this.addOne}>Fight!</button>
        </div>
        )
    }
}

// constructor (initial state)
// render
// mount
// re-render if state changes