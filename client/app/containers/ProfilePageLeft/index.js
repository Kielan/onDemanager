import React from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import profileEditingSelector from 'profileEditingSelector';

import styles from './styles.css';



class ProfilePageLeft extends React.Component {
    constructor() {
	super();
    }

    render() {
	
	const profileLeftState = this.props.profileEditing ? (
		<div className={styles.ProfileLeftEditingContainer+" "+styles.profileSideOffset}>
		<div className={styles.ProfileAvatar}>
		<a>
		<img alt="Kielan Lemons" src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_400x400.jpg"></img>
		</a>
		</div>
		
		<div className={styles.ProfileLeftEditingContent}>
		<div className={styles.ProfileHeaderCardEditingName}><input placeholder="Name"  className={styles.ProfileInputEdit}></input></div>
		<div className={styles.ProfileCardEditingScreenName}>@<span>KielanLemons</span></div>
		<div className={styles.ProfileHeaderCardEditingBio}><input placeholder="Bio" className={styles.ProfileInputEdit}></input></div>
		<div className={styles.ProfileHeaderCardEditingLocation}><input placeholder="Location" className={styles.ProfileInputEdit}></input></div>
		<div className={styles.ProfileHeaderCardEditingLocation}><input placeholder="Website" className={styles.ProfileInputEdit}></input></div>
		</div>
		</div>
	) : (
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
		</div>
	)
	
	return (
		<section className={styles.ProfileHeaderCardEditing}>
		{profileLeftState}
	    </section>
	)
    }
}

function mapDispatchToProps(dispatch) {
    return {
	_handleBioChange: () => {
	    console.log('faggot')
	},
	dispatch,
    };
}

export default connect(createSelector(
    profileEditingSelector,
    (profileEditing) => ({ profileEditing })
), mapDispatchToProps)(ProfilePageLeft);
