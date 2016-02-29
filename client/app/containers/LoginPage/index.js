/*
 * LoginPage
 * User facing auth portal
 */

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import {Jumbotron, Input, ButtonInput } from 'react-bootstrap';

import LoginForm from 'LoginForm'

import styles from './styles.css';

class LoginPage extends React.Component {
    constructor() {
	super();

    }

    render() {
	const formState = {data: {username: 'kielan', password: 'mibbit'}}
	return (
		<Jumbotron>
		<LoginForm data={formState}  onSubmit={::this._login} />
		</Jumbotron>
	)
    }

    _login(username, password) {
	this.props.dispatch(login(username, password));
    }

}

export default LoginPage;
