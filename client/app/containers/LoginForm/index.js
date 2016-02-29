
import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import {Jumbotron, Input, ButtonInput } from 'react-bootstrap';


import styles from './styles.css';

class LoginForm extends React.Component {
    constructor() {
	super();

    }

    render() {
	return (
		<form onSubmit={this._onSubmit.bind(this)}>
		<Input type="text" value={this.props.data.username} placeholder="username or email" />
		<Input type="password" value={this.props.data.password} placeholder="password" />
		<ButtonInput type="submit" value="Submit Your Input" bsStyle="success" bsSize="large"/>
		</form>
	)
    }
    
    // onSubmit call the passed onSubmit function
    _onSubmit(evt) {
	evt.preventDefault();
	this.props.onSubmit(this.props.data.username, this.props.data.password);
    }

}

export default LoginForm;
