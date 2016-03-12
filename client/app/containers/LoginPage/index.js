/*
 * LoginPage
 * User facing auth portal
 */

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import { createSelector } from 'reselect';
import loggedInSelector from 'loggedInSelector';

import {Jumbotron, Input, ButtonInput } from 'react-bootstrap';

import {
    loginSubmit
} from 'App/actions';

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
	console.log('not getting form data', username, password)
	this.props.dispatch(loginSubmit(username, password));
    }

}

function mapDispatchToProps(dispatch) {
    return {
	onLogin: (evt) => dispatch(login(username, password)),
	dispatch
    };
}

export default connect(createSelector(
    loggedInSelector,
    (username) => ({username})
), mapDispatchToProps)(LoginPage);
