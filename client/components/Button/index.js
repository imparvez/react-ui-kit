import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class Button extends Component{

	createClassName() {
	    return [
			styles.button,
			styles[this.props.color],
			styles[this.props.size],
			styles[this.props.buttonStyle],
			styles[this.props.state],
			this.props.className
	    ].join(' ').trim();
	}

	renderBody() {
	    return this.props.safeHtml
	      ? (<span dangerouslySetInnerHTML={{ __html: this.props.safeHtml }}></span>)
	      : (<span>{this.props.children}</span>);
	}

	render(){
		return(
			<div className="button">
				<button
			        className={this.createClassName()}
			    >
			    {this.renderBody()}
			    </button>
			</div>
		)
	}
}

Button.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'isPrimary',
		'isInfo',
		'isSuccess',
		'isWarning',
		'isDanger',
		'isLink',
		'isWhite',
		'isLight',
		'isDark',
		'isBlack',
		'isLink',
	]),
	size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
    buttonStyle: PropTypes.oneOf([
      'isOutlined',
      'isInverted',
    ]),
    state: PropTypes.oneOf([
      'isLoading',
      'isActive',
      'isDisabled',
    ]),
    safeHtml: PropTypes.string,
};