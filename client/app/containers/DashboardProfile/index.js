import React from 'react';

import styles from './styles.css';

class DashboardProfile extends React.Component {
      render() {
	  return (
		  <div >
		  <div className={ styles.dashboardLeft}>
		  <a className={ styles.cover }></a>
		  <div>

		  <a className={styles.DashboardProfileAvatar}>
		  <img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img>
		  </a>
		  <div>
		  
		  <div><a>Kielan Lemons</a></div>
		  
		  <span>
		  <a>"@"<span>KielanLemons</span></a>
		  </span>

		  <div className={styles.stats}>
		  <a>
		  <span>Tweets</span>
		  <span>2,596</span>
		  </a>
		  <a>
		  <span>Following</span>
		  <span>2,596</span>
		  </a>
		  <a>
		  <span>Followers</span>
		  <span>200</span>
		  </a>
		  </div>
		  
		  <div>
		  <span className="locationText">Bangkok</span>
		  <span className="">Joined June 2013</span>
		  </div>
		  
		  </div>
		  </div>
		  </div>
		  </div>
	  )
      }
}

export default DashboardProfile;
