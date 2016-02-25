import React from 'react';
import autobind from 'react-autobind';

import styles from './styles.css';

class FilePreviewCard extends React.Component {
    constructor() {
	super();
	autobind(this);
	this.state = { }
    }

    componentDidMount () {
	window.addEventListener('click', this.handleCloseClick)
    }

    componentWillUnmount () {
	window.removeEventListener('click', this.handleCloseClick)
    }

    handleCloseClick = (e) => {
	const area = this.refs.closeBtn;
	console.log('mmm')
	if (area.contains(e.target)) {
	    this.setState({
		
	    })
	}
    };
    
    render() {
	return (
		<div className={styles.preview}>
		<button id="closeBtn" ref="closeBtn" className={styles.previewClose} onClick={this.handleCloseClick.bind(this)}>
		<span className={"fa fa-times "}></span>
		</button>
		<img src={this.props.data.preview} className={styles.previewImg}></img>
	    </div>
	)
    }
}

module.exports = FilePreviewCard;
