import React from 'react';
import ContentEditable from 'react-wysiwyg';
import FileInput from 'react-file-input';
import Dropzone from 'react-dropzone';

import styles from './styles.css';

var escape = document.createElement('textarea')
function escapeHTML(html) {
    escape.textContent = html;
    return escape.innerHTML;
}

class ComposeBox extends React.Component {
    constructor() {
	super();
	var defaultValue = '';
	this.onChange = this.onChange.bind(this)
	this.checkCursor = this.checkCursor.bind(this)
	this.state = {
	    html: '',
	    editing: true,
	    placeholder: true,
	    maxLength: 140,
	    totalLength: defaultValue.length,
	    queryMention: false
	}
    }

    componentDidMount () {
	// Gives the window a callback to call before the next repaint.
	window.requestAnimationFrame(this.checkCursor)
    }

    checkCursor(timestamp) {
	var self = this
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

    render (){

	var isValid = (this.state.maxLength >= this.state.totalLength)
	    && (this.state.totalLength > 0)

	return (
		<div className={styles.composeBox}>
		<div aria-live='polite'>{this.state.error}</div>
		<div className={styles.profileIcon}><img src="https://pbs.twimg.com/profile_images/694099768834797568/IvPKkR0E_bigger.jpg"></img></div>
		<ContentEditable
            ref='editable'
            tagName='div'
            html={this.state.html}
            placeholder={this.state.placeholder}
            placeholderText='Compose Your Tweet'
            onKeyPress={this.onKeyPress}
            preventStyling
            noLinebreaks
            onChange={this.onChange}
            editing={this.state.editing}
	    className={styles.composeTextArea}
		/>
		<div className='controls'>
		<div id="content-length">
		{this.state.maxLength - this.state.totalLength}
            </div>

		<div className={styles.composeButtons}>
		<button className={styles.send}disabled={!isValid} onClick={this.enableEditing}>
		<i className="fa fa-pencil"></i>
		<span className="">
		Speak
	    </span>
            </button>
		</div>
		
		<div>
		<Dropzone className={styles.fileUpload}>
		<i className="fa fa-camera-retro"></i>
		</Dropzone>
		</div>
		</div>
		</div>
	);
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

    enableEditing(){
	var editing = !this.state.editing
	// set your contenteditable field into editing mode.
	this.setState({ editing: editing });
	if (editing) {
	    this.refs.editable.autofocus()
	    this.refs.editable.setCursorToEnd()
	}
    }

};

module.exports = ComposeBox;
