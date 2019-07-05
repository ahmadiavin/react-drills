import React, { Component } from "react";
import "./App.css";
import List from "./Stuff"
import Todo from "./Todo"
import NewTask from "./NewTask"


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      stuff: [],
     
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({stuff: [...this.state.stuff, task]})
  }

  
  
  render() {
    return (
      <div className="App">
        <h1>Stuff to do</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.stuff} />
        



        
      </div>
    );
  }
}

export default App;
