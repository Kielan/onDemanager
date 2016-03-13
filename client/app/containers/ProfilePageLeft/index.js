import React from 'react';
import autobind from 'react-autobind';

import styles from './styles.css';



class ProfilePageLeft extends React.Component {
  constructor() {
    super();
      autobind(this);
  }

    render() {
	return (
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
		<div className={styles.ProfileCardEditingScreenName}></div>
		<div className={styles.ProfileHeaderCardEditingBio}><input ></input></div>
		<div className={styles.ProfileHeaderCardEditingLocation}><input ></input></div>
	    </div>
	</div>
	)
    }
}


export default ProfilePageLeft;
