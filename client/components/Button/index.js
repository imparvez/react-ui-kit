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

	createIconSize() {
		if (this.props.size === 'isLarge') return 'isMedium';
		if (this.props.size === 'isSmall') return 'isSmall';
		return '';
	}

	renderLeftIcon() {
	    return (
	      <span>
	        <span className={[styles.icon, styles[this.createIconSize()]].join(' ')}>
	          <i className={[styles.fa, this.props.icon].join(' ')} />
	        </span>
	        <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
	          {this.props.children}
	        </span>
	      </span>
	    );
	}

	renderRightIcon() {
	    return (
	      <span>
	        <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
	          {this.props.children}
	        </span>
	        <span className={[styles.icon, styles[this.createIconSize()]].join(' ')}>
	          <i className={[styles.fa, this.props.icon].join(' ')} />
	        </span>
	      </span>
	    );
	}

	renderBody() {
	    return this.props.safeHtml
	      ? (<span dangerouslySetInnerHTML={{ __html: this.props.safeHtml }}></span>)
	      : (<span>{this.props.children}</span>);
	}

	renderIcon() {
		return this.props.isIconRight
		? this.renderRightIcon()
		: this.renderLeftIcon();
	}

	render(){
		return(
			<button
		        className={this.createClassName()}
		    >
		    {this.props.icon ? this.renderIcon() : this.renderBody()}
		    </button>
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