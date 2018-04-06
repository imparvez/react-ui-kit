import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardContent extends Component{
	createClassName() {
	    return [
	      styles.cardContent,
	      this.props.className,
	    ].join(' ').trim();
	}

	render(){
		return(
			<div
	        	className={this.createClassName()}
	      	>
	        {this.props.children}
	    	</div>
		)
	}
}

CardContent.propTypes = {
	style: PropTypes.object,
	children: PropTypes.any,
	className: PropTypes.string,
};