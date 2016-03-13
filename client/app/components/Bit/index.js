import React from 'react';

import styles from './styles.css';

class Bit extends React.Component {
    render() {
	console.log('log them bitty props', this.props)
	  return (
		  <section className={styles.bitContainer}>
		  <div className={styles.itemHeader}>
		  <a><strong>Kielan Lemons</strong>
		  <b>{this.props.author}</b>
	      </a>
		  </div>
		  <div className={styles.textContainer}>
		  <span>{this.props.date}</span>
		  <span>{this.props.content}</span>
		  </div>
		  <div className={styles.bitActions}>
		  <div className={styles.bitAction}><button><div><span className={"fa fa-reply "+styles.actionReply}></span></div></button></div>
		  <div className={styles.bitAction}><button><div><span className={"fa fa-retweet "+styles.actionRetweet}></span></div></button></div>
		  <div className={styles.bitAction}><button><div><span className={"fa fa-flash "+styles.actionFlash}></span></div></button></div>
		  <div className={styles.bitAction}><button><div><span className={"fa fa-cog "+styles.actionOther}></span></div></button></div>
		  </div>
		  </section>
	  )
  }
}


export default Bit;
