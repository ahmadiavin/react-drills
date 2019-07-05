import React, { Component } from "react";
import Todobutton from "./Todo"

export default class Stuff extends Component {
    render() {
         let Stuff = this.props.tasks.map((element, index) => {
             return <Todobutton key={index} task={element} />;
         });
         return <div>{Stuff}</div>
    }
}