import React from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import loggedInSelector from 'loggedInSelector';

import {
    showModalCompose
} from 'App/actions';

import { Link } from 'react-router';
import {Grid, Col, Row } from 'react-bootstrap';

import Dropdown from 'Dropdown';
import ComposeBitModal from 'ComposeBitModal';

import styles from './styles.css';


class Header extends React.Component {
    constructor() {
	super();
	autobind(this);

    }

    closeModalCompose() {
	this.setState({ showModalCompose: false });
    }

    openModalCompose() {
	this.setState({ showModalCompose: true });
    }
    
    render() {
	return (
		<Row className={styles.searchNav+" show-grid"}>

		<Col md={2}>
		<h1 className={styles.logo}><Link to="/">SpeakEasy</Link></h1>
		</Col>

		<Col md={8}>
		<div className={styles.searchNav}>
		<div className={styles.searchContainer}>
		<form className={styles.searchForm}>
		<label className="fa fa-search"></label>
		<input placeholder="SEARCH" type="text" />
		</form>
		</div>
		</div>
		</Col>

		<Col md={2}>
		<div className={styles.navRightContainer}>
		<ul className={styles.navRight}>
		<li>
		<Dropdown />
		</li>
		<li>
		<button onClick={this.props._onShowModalCompose}>
		<label className="fa fa-keyboard-o"></label>
		</button>
		</li>
		</ul>
		</div>
		</Col>

		<ComposeBitModal showToggle={this.openModalCompose} close={this.closeModalCompose} />
		</Row>
	)
    }
}

function mapDispatchToProps(dispatch) {
    return {
	_onShowModalCompose: () => dispatch(showModalCompose()),
	dispatch
    }
}

export default connect(createSelector(
    loggedInSelector,
    (loggedIn) => ({loggedIn})
), mapDispatchToProps)(Header);
