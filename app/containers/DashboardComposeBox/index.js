import React from 'react';
import ContentEditable from 'react-wysiwyg';

class ComposeBox extends React.Component {
    constructor() {
	super();
    }

    getInitialState() {
	return {
	    html: 'default text',
	    placeholder: false,
	    editing: false
	}
    }
    render() {
	  return (    
		  <div className={styles.dashboardCompose}>
		  <ContentEditable
              tagName='div'
              onChange={this.onChange}
              html={this.state.html}
              preventStyling
              noLinebreaks
              placeholder={this.state.placeholder}
              placeholderText='Your Name'
              editing={this.state.editing}
		  />
		  <button onClick={this.enableEditing}>
		  Enable Editing
              </button>
		  </div>
	  )
      }
    onChange(textContent, setPlaceholder) {
	if (setPlaceholder) {
	    this.setState({
		placeholder: true,
		html: ''
	    })
	} else {
	    this.setState({
		placeholder: false,
		html: textContent
	    })
	}
    }
    
    enableEditing() {
	// set your contenteditable field into editing mode.
	this.setState({ editing: true });
    }
}

export default ComposeBox;
