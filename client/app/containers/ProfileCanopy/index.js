import React from 'react';
import { connect } from 'react-redux';

import autobind from 'react-autobind';

import {
    editProfile,
    cancelEditProfile
} from 'App/actions';

import { createSelector } from 'reselect';

import profileEditingSelector from 'profileEditingSelector';

import styles from './styles.css';

class ProfileCanopy extends React.Component {
    constructor() {
	super();
	autobind(this);
    }

    render() {
	console.log('fucking toggles', this.props.profileEditing)
	const profileEditingButtons = this.props.profileEditing ? (
	    	<div className={styles.editButtons}>
		<div onClick={this.props._cancelEditProfile} className={styles.cancelEdit}><button><span>Cancel</span></button></div>
		<div onClick={this.props._saveEditProfile} className={styles.saveEdit}><button><span>Save Edit</span></button></div>
		</div>
	):(
	    	<div onClick={this.props._handleEditProfile} className={styles.editProfile}><button><span>Edit profile</span></button></div>
	)
	
	return (
		<section>
		<div className={styles.Cover+ " row"}>
		<img alt="" src="https://pbs.twimg.com/profile_banners/1506367692/1454496995/1500x500" />
		</div>
		<nav className="row">
		<div className="col-md-6 col-md-offset-3">
		<ul className={styles.profileNav}>
		<li><a><span className={styles.label}>Bits</span><span className={styles.value}>2,623</span></a></li>
		<li><a><span className={styles.label}>Following</span><span className={styles.value}>575</span></a></li>
		<li><a><span className={styles.label}>Followers</span><span className={styles.value}>263</span></a></li>
		<li><a><span className={styles.label}>Likes</span><span className={styles.value}>5,575</span></a></li>
		<li>{profileEditingButtons}</li>
	    </ul>
		</div>
		</nav>
		</section>
	)
    }
}

function mapDispatchToProps(dispatch) {
    return {
	_handleEditProfile: () => {
	    console.log('this far highlander!');
	    dispatch(editProfile())
	},
	_cancelEditProfile: () => {
	    dispatch(cancelEditProfile())
	},
	_saveEditProfile: () => {
	    dispatch()
	},
	dispatch,
    };
}

export default connect(createSelector(
    profileEditingSelector,
    (profileEditing) => ({profileEditing})
), mapDispatchToProps)(ProfileCanopy);
