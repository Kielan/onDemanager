/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import Img from 'Img';
import Footer from 'Footer';
import Header from 'Header';

import styles from './styles.css';

class App extends React.Component {
    render() {
	console.log('props.children', this.props.children)
	return (
	    	<Grid className={ styles.wrapper } fluid={true}>
		<Header />
		{ this.props.children }
		</Grid>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(App);
