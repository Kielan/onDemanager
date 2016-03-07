/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';

import Img from 'Img';
import Footer from 'Footer';
import A from 'A';
import Header from 'Header';

import styles from './styles.css';

class App extends React.Component {
    render() {
	console.log('props.children',this.props)
    return (
	    <div className={ styles.wrapper }>
	    <Header />
        { this.props.children }
      </div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default App;
