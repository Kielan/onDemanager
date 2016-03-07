import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import bootstrap from 'bootstrap';
import Dropdown from 'Dropdown';

import styles from './styles.css';


class Header extends React.Component {
    render() {
	return (
		<header>
		<Row>
		<Col md={2}>
		<h1 className={styles.logo}><Link to="/">SpeakEasy</Link></h1>
		</Col>
		
		<div className={styles.searchNav +" col-md-8"}>
		<div className={styles.searchContainer}>
		<form className={styles.searchForm}>
		<label className="fa fa-search"></label>
		<input placeholder="SEARCH" type="text" />
		</form>
		</div>
		</div>
		<div className={styles.navRightContainer + " col-md-2"}>
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
		</Row>
		</header>
    )
}
}

export default Header;
