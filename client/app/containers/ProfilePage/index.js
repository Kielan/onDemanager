/*
 * ProfilePage
 *
 * Mostly for vanity
 */

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import autobind from 'react-autobind';

import {
    loadBits
} from 'App/actions';

import {Col, Row } from 'react-bootstrap';
import { createSelector } from 'reselect';

import bitsSelector from 'bitsSelector';

import BitList from 'BitList';
import ComposeBox from 'ComposeBox';
import ProfileCanopy from 'ProfileCanopy';
import ProfilePageLeft from 'ProfilePageLeft';

import styles from './styles.css';

class ProfilePage extends React.Component {
  constructor() {
    super();
      autobind(this);
  }

    componentDidMount() {
//	var enbl = this.props.onInitialBits();
//	console.log('enbl', this.props.bits);
    }
    
    render() {
	var enbl = this.props.onInitialBits();
	console.log('enbl', this.props.bits);
	
	return (
	        <article >
		<div className={styles.editingOverlay}></div>
		<ProfileCanopy />
		
		<Row className={styles.profileContainer}>
		<Col md={3}>
		<ProfilePageLeft />
		</Col>
		<Col md={6}>
		<ComposeBox />
		<BitList data={this.props.bits} />
		</Col>
		</Row>
	    </article>
	)
    }
}


function mapStateToProps(state) {
  return {
    location: state.get('route').location
  };
}

function mapDispatchToProps(dispatch) {
  return {
      changeRoute: (url) => dispatch(routeActions.push(url)),
      onInitialBits: (evt) => dispatch(loadBits()),
      dispatch
  };
}

export default connect(createSelector(
    bitsSelector,
    (bits) => ({ bits })
), mapDispatchToProps)(ProfilePage);
