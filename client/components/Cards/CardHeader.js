import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardHeader extends Component{
	createClassName() {
		return [
			styles.cardHeader,
			this.props.className,
		].join(' ').trim();
	}

	render(){
		return(
			<header
				className={this.createClassName()}
			>
				{this.props.children}
			</header>
		)
	}
}

CardHeader.propTypes = {
	style: PropTypes.object,
	children: PropTypes.any,
	className: PropTypes.string,
};