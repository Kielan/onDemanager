/*
 * ProfilePage
 *
 * Mostly for vanity
 */

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import autobind from 'react-autobind';

import {
    loadBits
} from 'App/actions';

import {Col, Row } from 'react-bootstrap';
import { createSelector } from 'reselect';

import bitsSelector from 'bitsSelector';

import BitList from 'BitList';
import ComposeBox from 'ComposeBox';
import ProfileCanopy from 'ProfileCanopy';

import styles from './styles.css';

class ProfilePage extends React.Component {
  constructor() {
    super();
      autobind(this);
  }

    componentDidMount() {
//	var enbl = this.props.onInitialBits();
//	console.log('enbl', this.props.bits);
    }
    
    render() {
	var enbl = this.props.onInitialBits();
	console.log('enbl', this.props.bits);
	
	return (
	        <article >
		<div className={styles.editingOverlay}></div>
		<ProfileCanopy />
		
		<Row className={styles.profileContainer}>
		<Col md={3}>

		<div className={styles.profileSideOffset}>
		<div className={styles.ProfileAvatar}>
		<a>
		<img alt="Kielan Lemons" src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_400x400.jpg"></img>
		</a>
		</div>
		<div className="ProfileSidebar">
		<div className={styles.ProfileHeaderCard}>
		<h1><a href="/KielanLemons">Kielan Lemons</a></h1>
		<h2><a href="/KielanLemons"><span>KielanLemons</span></a></h2>
		<p className={styles.ProfileHeaderBio}>a;lksdfjla;ksdjfla;ksdjflas;kdjflaskdfjsalkdfjaslkdfjasdl;kfj</p>
		<div className="ProfileHeaderCardLocation"><i className="fa fa-map-marker"></i><span>Bangkok</span></div>
		<div className="ProfileHeaderCardJoinDate"><i className="fa fa-calendar"></i><span>Joined June 2013</span></div>
		</div>
		</div>

		<div className={styles.ProfileHeaderCardEditing}>
		<div className={styles.ProfileHeaderCardEditingName}><input ></input></div>
	    </div>
		</div>
		
		</Col>
		<Col md={6}>
		<ComposeBox />
		<BitList data={this.props.bits} />
		</Col>
		</Row>
	    </article>
	)
    }
}


function mapStateToProps(state) {
  return {
    location: state.get('route').location
  };
}

function mapDispatchToProps(dispatch) {
  return {
      changeRoute: (url) => dispatch(routeActions.push(url)),
      onInitialBits: (evt) => dispatch(loadBits()),
      dispatch
  };
}

export default connect(createSelector(
    bitsSelector,
    (bits) => ({ bits })
), mapDispatchToProps)(ProfilePage);
