import React from 'react';
import autobind from 'react-autobind';

import styles from './styles.css';

class ProfileCanopy extends React.Component {
  constructor() {
    super();
      autobind(this);
  }
    render() {
	return (
		<section>
		<div className={styles.Cover+ " row"}>
		<img alt="" src="https://pbs.twimg.com/profile_banners/1506367692/1454496995/1500x500" />
	    </div>
		<nav className="row">
		<div className="col-md-5 col-md-offset-3">
		<ul className={styles.profileNav}>
		<li><a><span className={styles.label}>Bits</span><span className={styles.value}>2,623</span></a></li>
		<li><a><span className={styles.label}>Following</span><span className={styles.value}>575</span></a></li>
		<li><a><span className={styles.label}>Followers</span><span className={styles.value}>263</span></a></li>
		<li><a><span className={styles.label}>Likes</span><span className={styles.value}>5,575</span></a></li>
		<li><div className={styles.editProfile}><button><span>Edit profile</span></button></div></li>
	    </ul>
	    </div>
		</nav>
		</section>
	)
    }
}

module.exports = ProfileCanopy;
