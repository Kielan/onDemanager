import React from 'react';

import styles from './styles.css';

class Bit extends React.Component {
    render() {
	console.log('log them bitty props', this.props)
	  return (
		  <section>
		  <div className={styles.itemHeader}>
		  <a><strong>Kielan Lemons</strong>
		  <b>{this.props.author}</b>
	      </a>
		  </div>
		  <div className={styles.textContainer}>
		  <span>{this.props.date}</span>
		  <span>{this.props.content}</span>
		  </div>
		  </section>
	  )
  }
}


export default Bit;
