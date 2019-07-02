import React, { Component } from "react";

class Image extends Component{
    render() {
        return (
            <div>
                <img  src={this.props.url} alt="Placeholder" />

            <caption style={{textAlign: "center"}}>Placeholder</caption>
            </div>
        )
    }
}

export default Image;