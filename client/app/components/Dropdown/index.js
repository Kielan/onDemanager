import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import autobind from 'react-autobind';

import { createSelector } from 'reselect';
import currentUserSelector from 'currentUserSelector';

import Menu from 'react-menu-simple';
var MenuTrigger = Menu.MenuTrigger;
var MenuOptions = Menu.MenuOptions;
var MenuOption = Menu.MenuOption;

import styles from './styles.css';

class Dropdown extends React.Component {
    constructor(props, context) {
	super();
	autobind(this);
	this.state = {

	}
    }
    render() {
	console.log('soooo', this.props.currentUser)

	const menuList = this.props.currentUser ? (
	    		
		<MenuOptions className={styles.MenuOptions}>
	    	<MenuOption className={styles.MenuOption}>
		<Link to="/profile" className={styles.toProfile}>
		<span>Kielan Lemons</span>
		<small>View Profile</small>
		</Link>
		</MenuOption>
		

		<MenuOption >
		<Link>
		<span>Settings</span>
		</Link>
		</MenuOption>

		<MenuOption className={styles.MenuOption}>
		Logout
	    </MenuOption>
		</MenuOptions>
	):(
	    		
		<MenuOptions className={styles.MenuOptions}>
	    	<MenuOption className={styles.MenuOption}>
		<Link to="/login" className={styles.toProfile}>
		<span>Login</span>
		<small>A personalized feed</small>
		</Link>
		</MenuOption>
		</MenuOptions>
	)
	
	return (
		<div>
		<Menu>
		<MenuTrigger className={styles.MenuTrigger}>
		<img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img>
		</MenuTrigger>

		{menuList}

		</Menu>
		</div>
	)
    }

}

export default connect(createSelector(
    currentUserSelector,
    (currentUser) => ({ currentUser })
))(Dropdown);
