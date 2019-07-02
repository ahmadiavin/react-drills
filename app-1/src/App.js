import React, { Component } from "react";
import "./App.css";
import Login from "./component/Login";
import Image from "./component/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Image url={ "https://http.cat/100" } />
      </div>
    );
  }
}

export default App;
