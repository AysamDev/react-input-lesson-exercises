import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    handleInput = (event) =>
    {
        const target = event.target;
        let name = target.id === 'name-input'?'name':'age'
        let value = target.value
        this.setState(
            {
                [name]: value
            }
        )
    }
    alertBar = () =>
    {
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }
    render() {
        return (
            <div>
                <input id="name-input" value={this.state.name} onChange={this.handleInput}/>
                <input id="age-input" value={this.state.age} onChange={this.handleInput}/>
                <button onClick={this.alertBar}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;