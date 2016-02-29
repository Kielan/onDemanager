import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {Grid, Col, Row } from 'react-bootstrap';

import Dropdown from 'Dropdown';

import styles from './styles.css';


class Header extends React.Component {
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
		<button>
		<label className="fa fa-keyboard-o"></label>
		</button>
		</li>
		</ul>
		</div>
		</Col>
		
		</Row>
    )
}
}

export default Header;
