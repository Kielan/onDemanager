import React from 'react';
import autobind from 'react-autobind';

import styles from './styles.css';

class FilePreviewCard extends React.Component {
    constructor() {
	super();
	autobind(this);
	this.state = { }
    }
    render() {
	return (
		<div className={styles.preview}>
		<button className={styles.previewClose}>
		<span className="fa fa-times"></span>
		</button>
		<img src={this.props.data.preview} className={styles.previewImg}></img>
	    </div>
	)
    }
}

module.exports = FilePreviewCard;
