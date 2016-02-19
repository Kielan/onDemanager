import React from 'react';
import autobind from 'react-autobind';
import Menu, {MenuTrigger, MenuOptions, MenuOption} from 'react-menu-simple';
//var MenuTrigger = Menu.MenuTrigger;
//var MenuOptions = Menu.MenuOptions;
//var MenuOption = Menu.MenuOption;

import styles from './styles.css';

Menu.injectCSS();
class Dropdown extends React.Component {
    constructor() {
	super();
	autobind(this);
	this.state = {
	    listVisible: false,
	    display: '' 
	}
    }
    render() {
	return (
		<div>
		<Menu>
		<MenuTrigger>
		<span>listszzzz</span>
            </MenuTrigger>
		
		<MenuOptions>
		
		<MenuOption>
		1st Option
            </MenuOption>

		<MenuOption>
		2nd Option
            </MenuOption>

		<div >
		</div>

		<MenuOption >
		3rd Option
            </MenuOption>

		<MenuOption >
		4th Option
            </MenuOption>

		<MenuOption>
		disabled option
            </MenuOption>

            </MenuOptions>
		</Menu>
		</div>
	)
    }

}

export default Dropdown;
