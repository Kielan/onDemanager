import React from 'react';

import Bit from 'Bit';

import styles from './styles.css';

class BitList extends React.Component {
    render() {
	console.log('is there a props.data', this.props.data)
	let content = this.props.data;
	
	var bitPosts = content ? content.map(function(bit, index) {
	    console.log('somebitbit', bit)
	    return (
		    <Bit content={bit.content} author={bit.author} date={bit.date} />
	    )
	}) : [];

	console.log('bitPosts var', bitPosts)
	return (
		<div>
		{bitPosts}
	    <span>what is happening</span>
	    </div>
	)
    }
}


export default BitList;
