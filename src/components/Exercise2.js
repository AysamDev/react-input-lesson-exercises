import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

handleInput = (event) =>
{
    const target = event.target;
    let name = target.id === 'name-input'?'name':'fruit'
    let value = target.value
    this.setState(
        {
            [name]: value
        },
        function()
        {
            console.log(`${this.state.name} selected ${this.state.fruit}`)
        }
    )
}
render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.handleInput}/>
            <select id="select-input" value={this.state.fruit} onChange={this.handleInput}>
            <option value="Strawberry">Strawberry</option>
            <option value="Banana">Banana</option>
            <option value="Apple">Apple</option>
            </select>
          
        </div>
    );
}
}

export default Exercise2;