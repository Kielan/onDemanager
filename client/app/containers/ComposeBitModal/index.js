import React from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Modal, ButtonInput } from 'react-bootstrap';

import showModalComposeSelector from 'showModalComposeSelector';
import usernameSelector from 'usernameSelector';

import {
    modalBitCommitSubmit    
} from 'App/actions';

import ContentEditable from 'react-wysiwyg';
import Dropzone from 'react-dropzone';
import FilePreviewCardList from 'filePreviewCardList';

import styles from './styles.css';

class ComposeBitModal extends React.Component {
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
	    files: [],
	    formState: {
		content: ''
	    }
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

    handleRemoveFile () {
	this.setState({
	    showFiles: false,
	    files: []
	})
    }
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
	    console.log('is this the text?', copy)

	    //save in store
	    var newState = this._mergeWithCurrentState({
		content: copy
	    });
	    
	    this._emitChange(newState);
	    
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

    onModalBitCommitSubmit() {
	this.props._modalBitCommitSubmit(this.props.username, new Date(), this.state.formState.content)
    }

    render() {
	
	return (
		<Modal show={this.props.showToggle} onHide={this.props.close}>
		<Modal.Header>
		<Modal.Title className={styles.ModalTitle}>Compose new Bit</Modal.Title>
		<Modal.Body>
		<form >
		<div aria-live='polite'>{this.state.error}</div>
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

		<div ref="controls" className={styles.controls} >

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
		<ButtonInput type="submit" value="compose" className={styles.send} onClick={this.props.onModalBitCommitSubmit} />
		</div>
		
	    </div>
		</div>
		</form>
		</Modal.Body>
		</Modal.Header>
		</Modal>
	)
    }
}

function mapDispatchToProps(dispatch){
    return {
	_modalBitCommitSubmit: () => dispatch(modalBitCommitSubmit())
    }
    dispatch
}

export default connect(createSelector(
    showModalComposeSelector,
    usernameSelector,
    (showModalCompose, username) => ({ showModalCompose, username })
), mapDispatchToProps)(ComposeBitModal)
