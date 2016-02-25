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
		
	    </div>
		<nav className="row">
		<div className="col-md-5 col-md-offset-4">
		<ul>
		<li><a><span>Bits</span><span>2,623</span></a></li>
		<li><a><span>Following</span><span>575</span></a></li>
		<li><a><span>Followers</span><span>263</span></a></li>
		<li><a><span>Likes</span><span>5,575</span></a></li>
	    </ul>
	    </div>
		</nav>
		</section>
	)
    }
}

module.exports = ProfileCanopy;
