import React, { Component } from "react";
import "./App.css";
import List from "./List"
import Todobutton from "./Todobutton"


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
        <List title="stuff to do" list={this.state.stuff} />
        <br></br>

        <input value={this.state.newItem} onChange={this.handleChange} />
        <Todobutton action={this.addToStuff.bind(this, this.state.newItem)}>
         add stuff
        </Todobutton>


        



        
      </div>
    );
  }
}

export default App;
