import React from 'react';
import autobind from 'react-autobind';

import FilePreviewCard from 'filePreviewCard';

import styles from './styles.css';

class FilePreviewCardList extends React.Component {
    constructor() {
	super();
	autobind(this);
	this.state = { }
    }
    
    render() {
	var PreviewCards = this.props.files.map(function(file) {
	    return (
		    <FilePreviewCard data={file}/>
	    )
	})
	
    	var checkPreview = function(fileProp) {
	    console.log(fileProp)
	    var displayOrNo = (fileProp != 0) ? "block" : "none";
	    
	    return {
		display: displayOrNo
	    }
	}
	    return (
		    <div style={checkPreview(this.props.files)} className={styles.thumbnailContainer}>
		    {PreviewCards}
		    </div>
	    )
	}
					      }

	module.exports = FilePreviewCardList;
