
import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import { changeForm } from 'App/actions'
import {Jumbotron, Input, ButtonInput } from 'react-bootstrap';

const assign = Object.assign || require('object.assign');

import styles from './styles.css';

class LoginForm extends React.Component {
    constructor() {
	super();
    }

    render() {
	return (
		<form onSubmit={this._onSubmit.bind(this)}>
		<Input type="text" value={this.props.data.username} placeholder="username or email" onChange={this._changeUsername.bind(this)} />
		<Input type="password" value={this.props.data.password} placeholder="password" onChange={this._changePassword.bind(this)} />
		<ButtonInput type="submit" value="Submit Your Input" bsStyle="success" bsSize="large"/>
		</form>
	)
    }

    
    // Change the username in the app state
    _changeUsername(evt) {
	var newState = this._mergeWithCurrentState({
	    username: evt.target.value
	});

	this._emitChange(newState);
    }

    // Change the password in the app state
    _changePassword(evt) {
	var newState = this._mergeWithCurrentState({
	    password: evt.target.value
	});

	this._emitChange(newState);
    }

    // Merges the current state with a change
    _mergeWithCurrentState(change) {
	return assign(this.props.data, change);
    }

//     Emits a change of the form state to the application state
    _emitChange(newState) {
	this.props.dispatch(changeForm(newState));
    }
    
    // onSubmit call the passed onSubmit function
    _onSubmit(evt) {
	evt.preventDefault();
	console.log('inlogin form', evt, this.props.data.username, this.props.data.password)
	this.props.onSubmit(this.props.data.username, this.props.data.password);
    }

}

export default LoginForm;
