import React, { Component } from "react";
import "./App.css";
import Login from "./component/Login";
import Image from "./component/Image"
import List from "./component/List"
import Todobutton from "./component/Todobutton"

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      stuff: ['code', 'sleep'],
      newItem: ""
    }
    this.addToStuff = this.addToStuff.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addToStuff(item) {
    this.setState({
      stuff: this.state.stuff.concat([item])
    })
  }

  handleChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Login />

        <input value={this.state.newItem} onChange={this.handleChange} />
        <Todobutton action={this.addToStuff.bind(this, this.state.newItem)}>
          Click me to add items
        </Todobutton>


        <List title="List of Items" list={this.state.stuff} />



        <Image url={ "https://http.cat/100" } />
      </div>
    );
  }
}

export default App;
