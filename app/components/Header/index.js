import React from 'react';
import bootstrap from 'bootstrap';

import styles from './styles.css';


class Header extends React.Component {
    render() {
	return (
		<header className="row">
		<a className={styles.logo +" col-md-2"}>OnDemanager</a>
		<div className={styles.searchNav +" col-md-8"}>
		<div className="">
		<form className={styles.searchForm}>
		<label className="fa fa-search"></label>
		<input placeholder="SEARCH" type="text" />
		</form>
		</div>
		</div>
		<div className="col-md-2">
		<ul className={styles.navRight}>
		<li>
		<a className={styles.headerProfile}>
		<img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img>
		</a>
		</li>
		<li>
		<button>
		<label className="fa fa-keyboard-o"></label>
		</button>
		</li>
		</ul>
		</div>
		</header>
	)
    }
}

export default Header;
