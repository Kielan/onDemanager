import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'react-autobind';

import ContentEditable from 'react-wysiwyg';
import FileInput from 'react-file-input';
import Dropzone from 'react-dropzone';

import FilePreviewCardList from 'filePreviewCardList';

import styles from './styles.css';

var escape = document.createElement('textarea')
function escapeHTML(html) {
    escape.textContent = html;
    return escape.innerHTML;
}

class ComposeBox extends React.Component {
    constructor() {
	super();
	autobind(this);
	var defaultValue = '';
	this.state = {
	    html: 'Whats on your mind?',
	    editing: false,
	    placeholder: true,
	    maxLength: 140,
	    totalLength: defaultValue.length,
	    queryMention: false,
	    synthFocusDisplay: false,
	    synthUnfocusDisplay: true,
	    showFiles: false,
	    files: []
	}
    }

    componentDidMount () {
	// Gives the window a callback to call before the next repaint.
	window.requestAnimationFrame(this.checkCursor)
	window.addEventListener('upload', this.handleOndrop)
	window.addEventListener('click', this.handleEditableContainerClick)
	window.addEventListener('click', this.handleCloseClick)
    }

    componentWillUnmount () {
	window.removeEventListener('click', this.handleEditableContainerClick)
	window.removeEventListener('click', this.handleCloseClick)
    }
    
    checkCursor(timestamp) {
	var self = this;
	var selection = window.getSelection()

	if (this.state.editing && selection.focusNode) {

	    var node = selection
		.getRangeAt(0)
		.commonAncestorContainer
		.parentNode

	    if (node.className === 'show-dropdown') {
		// you could use the node to determine its position,
		// and show the dropdown inline, too.
		this.setState({ queryMention : node.textContent })
	    } else if (this.state.queryMention) {
		this.setState({ queryMention: false })
	    }

	} else if (this.state.queryMention) {
	    this.setState({ queryMention: false })
	}

	window.requestAnimationFrame(self.checkCursor)
    }

    handleRemoveFile () {
	this.setState({
	    showFiles: false,
	    files: []
	})
    }
    
    handleEditableContainerClick = (e) => {
	const area = this.refs.ContentEditableContainer;

	if (!area.contains(e.target) && !this.state.showFiles) {
	    this.setState({synthFocusDisplay: null, synthUnfocusDisplay: true})
	} else {
	    this.setState({synthFocusDisplay: true, synthUnfocusDisplay: null})
	    this.enableEditing()
	}
    };

    handleCloseClick = (e) => {
	const area = document.getElementById('closeBtn');
	console.log('myaa', area)
	if (area.contains(e.target)) {
	    this.setState({showFiles: false, files: []})
	}
	
    };

    onDrop (files) {
	console.log(files)
	this.setState({showFiles: true, files: files, synthFocusDisplay: true})
	this.enableEditing()

	console.log('showfiles: ', this.state.showFiles, 'files: ', this.state.files)
    }
    
    render (){

	var isValid = (this.state.maxLength >= this.state.totalLength)
	    && (this.state.totalLength > 0)

	var toggleDisplayFocus = function(stateVal) {
	    var displayOrNo = stateVal ? "block" : "none";
	    
	    return {
		display: displayOrNo
	    }
	}

	var toggleImagePreview = function(file) {
	    var displayOrNo = file ? file : null;
	    if (displayOrNo) {
		return displayOrNo
	    }
	}.bind(this)

	return (
		<div className={styles.composeBox}>
		<div aria-live='polite'>{this.state.error}</div>
		<div className={styles.profileIcon}><img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img></div>
		<div ref="quickUpload" style={toggleDisplayFocus(this.state.synthUnfocusDisplay)}>
		<Dropzone ref="dropButton" onDrop={this.onDrop} className={styles.quickUpload+" "}>
		<i className="fa fa-camera-retro"></i>
		</Dropzone>
		</div>
		<div ref="ContentEditableContainer" >
		<ContentEditable
            ref='editable'
            tagName='div'
            html={this.state.html}
            placeholder={this.state.placeholder}
            placeholderText=''
            onKeyPress={this.onKeyPress}
            preventStyling
            noLinebreaks
            onChange={this.onChange}
            editing={this.state.editing}
	    className={styles.composeTextArea + (this.state.synthFocusDisplay ? (" "+styles.expand) : "") + (this.state.showFiles ? (" "+styles.expandPreview) : "")}
	    handleFocus={this.handleFocus}
		/>
	        <FilePreviewCardList onClick={this.handleCloseClick.bind(this)} files={this.state.files}/>

	    </div>

		<div ref="controls" className={styles.controls} style={toggleDisplayFocus(this.state.synthFocusDisplay)}>

		<div className={styles.composeButtons}>
		<div>
		<Dropzone onDrop={this.onDrop} className={styles.fileUpload}>
		<i className="fa fa-camera-retro"></i>
		<span>Media</span>
		</Dropzone>
		</div>
		<div className={styles.composeButtons, styles.disabled}>
		<i className="fa fa-map-marker"></i>
		Location disabled
	    </div>
		<div className={styles.sendStat}>
	    <div id="content-length">
		{this.state.maxLength - this.state.totalLength}
            </div>
		<button className={styles.send}>
		<i className="fa fa-keyboard-o"></i>
		</button>
		</div>
		
		</div>
		</div>
		</div>
	);
    }

    enableEditing() {
	var editing = !this.state.editing;
	
	this.setState({editing: editing});
	if (editing) {
	    this.refs.editable.autofocus()
	    this.refs.editable.setCursorToEnd()
	}
    }

    autofocus () {
	if (this.state.editing) {
	    this.refs.editable.autofocus()
	}
    }

    onChange(text, setPlaceholder) {
	// in order to render the updated html,
	// you need to pass it as a prop to contentEditable.
	// This gives you increased flexibility.
	if (setPlaceholder) {
	    this.setState({
		placeholder: true,
		html: '',
		totalLength: 0
	    })
	} else {

	    var copy = text.slice(0, this.state.maxLength)

	    // mutations
	    // @name
	    var regex = /(^|[^@\w])@(\w{1,15})\b/g
	    var replace = '$1<a class="show-dropdown" href="http://twitter.com/$2">@$2</a>'
	    var output = copy.replace(regex, replace)

	    // #hash
	    output = output.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span class="show-dropdown" style="color: #aaa;">$2</span>')

	    // text overflow
	    if (text.length > this.state.maxLength) {
		var overflow = '<span style="color: #bbb; background-color: #eee; text-decoration: line-through;">' +
		    text.slice(this.state.maxLength) +
		    '</span>'
		output = output + overflow
	    }
	    this.setState({
		placeholder: false,
		html: output,
		totalLength: text.length
	    })
	}

    }


};

module.exports = ComposeBox;
