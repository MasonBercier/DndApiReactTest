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
        console.log('button clicked')
            this.setState({
                age: this.state.age + 1
        })
    }

    render() {
        return (
        <div>
            <h1>This is my homepage</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <button onClick={this.addOne}>Happy Bday</button>
        </div>
        )
    }
}

// constructor (initial state)
// render
// mount
// re-render if state changes