import React, { Component } from "react";
export default function Button(props) {
    return (
        <button onClick={props.action}>
            
            {props.children}
        </button>
    )
}