import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// import { Redirect } from 'react-router-dom';

import signinUser from '../../data/mutations/signinUser';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const {value, name} = target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;
        this.props.mutate({
            variables: {
                email, password
            }
        }).then(({ data }) => {
            const { token } = data.signinUser;
            localStorage.setItem('token', token);
            this.props.handleSignIn();
            this.props.history.replace("/");

        }).catch((error) => {
            console.log('There was an error: ', error);
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Email Address</label>
                <input 
                    name="email"
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleInputChange} />
                <label>Password</label>
                <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange} 
                    type="password" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default graphql(signinUser)(SignIn);