/*
 * HomePage
 * This is the first thing users see of our App
 */

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {Col, Row } from 'react-bootstrap';
import { createSelector } from 'reselect';

import usernameSelector from 'usernameSelector';
import reposSelector from 'reposSelector';
import loadingSelector from 'loadingSelector';
import errorSelector from 'errorSelector';
import loggedInSelector from 'loggedInSelector';

import {
  changeUsername,
  loadRepos
} from 'App/actions';

import Button from 'Button';
import H1 from 'H1';
import List from 'List';
import RepoListItem from 'RepoListItem';
import LoadingIndicator from 'LoadingIndicator';

import Header from 'Header';
import DashboardProfile from 'DashboardProfile';
import ComposeBox from 'ComposeBox';


import styles from './styles.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.onChangeRoute = this.onChangeRoute.bind(this);
    this.changeRouteToReadme = this.changeRouteToReadme.bind(this);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  onChangeRoute(url) {
    this.props.dispatch(routeActions.push(url));
  }

  changeRouteToReadme() {
    this.onChangeRoute('/features');
  }

    render() {
	console.log('this.props.loggedIn', this.props.loggedIn)
    return (
	    <Row className="show-grid">

	    <Col md={3}>
	    <DashboardProfile />
	    </Col>
	    
	    <Col md={6}>
	    <ComposeBox />
	
	    </Col>
          
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      evt.preventDefault();
      dispatch(loadRepos());
    },
    dispatch
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
    reposSelector,
    usernameSelector,
    loadingSelector,
    loggedInSelector,  
    errorSelector,
    (repos, username, loading, loggedIn, error) => ({ repos, username, loading, loggedIn, error })
), mapDispatchToProps)(HomePage);
