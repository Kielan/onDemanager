import React from 'react';
import autobind from 'react-autobind';
import Menu from 'react-menu-simple';
var MenuTrigger = Menu.MenuTrigger;
var MenuOptions = Menu.MenuOptions;
var MenuOption = Menu.MenuOption;

import styles from './styles.css';

//Menu.injectCSS();

class Dropdown extends React.Component {
    constructor(props, context) {
	super();
	autobind(this);
	this.state = {

	}
    }
    render() {
	return (
		<div>
		<Menu>
		<MenuTrigger className={styles.MenuTrigger}>
		<img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img>
		</MenuTrigger>
		
		<MenuOptions className={styles.MenuOptions}>
		
		<MenuOption className={styles.MenuOption}>
		<span>Kielan Lemons</span>
	    <small>View Profile</small>
            </MenuOption>

		<MenuOption className={styles.MenuOption}>
		Settings
            </MenuOption>

		<div >
		</div>

		<MenuOption className={styles.MenuOption}>
		Logout
            </MenuOption>
            </MenuOptions>
		</Menu>
		</div>
	)
    }

}

export default Dropdown;
