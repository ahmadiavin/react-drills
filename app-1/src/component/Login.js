import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    handleUpdateUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleUpdatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    loginUser(){
        alert('Logging in ' + this.state.username + ' with password ' + this.state.password)
    }

    render () {
        return (
            <div>
                <input 
                onChange={this.handleUpdateUsername}
                placeholder="Username"/>
               
                <input 
                onChange={this.handleUpdatePassword}
                placeholder="Password"/>
               
                <button onClick={this.loginUser}>>Login</button>
            </div>
        )
    }
}



export default Login;