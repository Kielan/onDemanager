import React from 'react';
import bootstrap from 'bootstrap';
import Menu from 'react-menu';
var MenuTrigger = Menu.MenuTrigger;
var MenuOptions = Menu.MenuOptions;
var MenuOption = Menu.MenuOption;

import styles from './styles.css';


class Header extends React.Component {
    render() {
	return (
		<header className="row">
		<h1 className={styles.logo +" col-md-2"}><a >SpeakEasy</a></h1>
		<div className={styles.searchNav +" col-md-8"}>
		<div className={styles.searchContainer}>
		<form className={styles.searchForm}>
		<label className="fa fa-search"></label>
		<input placeholder="SEARCH" type="text" />
		</form>
		</div>
		</div>
		<div className={styles.navRightContainer + "col-md-2"}>
		<ul className={styles.navRight}>
		<li>


		      <Menu className='myMenu'>
        <MenuTrigger>
      		<img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img>
        </MenuTrigger>
        <MenuOptions>

          <MenuOption>
            1st Option
          </MenuOption>

          <MenuOption onSelect={this.someHandler}>
            2nd Option
          </MenuOption>

          <div className='a-non-interactive-menu-item'>
            non-selectable item
          </div>

          <MenuOption disabled={true} onDisabledSelect={this.otherHanlder}>
            diabled option
          </MenuOption>

        </MenuOptions>
      </Menu>
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
