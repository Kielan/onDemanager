import React from 'react';

import styles from './styles.css';

class DashboardProfile extends React.Component {
      render() {
	  return (
		  <div >
		  <div className={ styles.dashboardLeft}>
		  <a className={ styles.cover }></a>
		  <div >

		  <a className={styles.DashboardProfileAvatar}>
		  <img className={styles.profileAvatarImage} src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img>
		  </a>

	      	  <div className={styles.DashboardProfileAvatarName}>
		  <a>Kielan Lemons</a>
		  <span className={styles.DashboardProfileAvatarID}>
		  <a>@<span>KielanLemons</span></a>
		  </span>
		  </div>
		  

		  <div className={styles.DashboardProfileContent}>
		  


		  <div className={styles.stats}>
		  <a className={styles.statsItem}>
		  <span className={styles.statsItemName}>Tweets</span>
		  <span className={styles.statsItemCount}>2,596</span>
		  </a>
		  <a className={styles.statsItem}>
		  <span className={styles.statsItemName}>Following</span>
		  <span className={styles.statsItemCount}>2,596</span>
		  </a>
		  <a className={styles.statsItem}>
		  <span className={styles.statsItemName}>Followers</span>
		  <span className={styles.statsItemCount}>200</span>
		  </a>
		  </div>

		  <div className={styles.DashboardProfileBio}>
		  <span>Imagination is its own form of courage</span>
		  </div>
	      
		  <div className={styles.DashboardProfileInfo}>
		  <i className="fa fa-globe"></i><span className="locationText">Bangkok</span>
		  </div>
		  <div className={styles.DashboardProfileInfo}>
		  <i className="fa fa-calendar"></i><span className="">Joined June 2013</span>
		  </div>
		  
		  </div>
		  </div>
		  </div>
		  </div>
	  )
      }
}

export default DashboardProfile;
