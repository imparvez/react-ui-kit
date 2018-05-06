import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

const ButtonComponent = styled.button`
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    border: 1px solid #d3d6db;
    border-radius: 3px;
    color: #222324;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 14px;
    height: 32px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    vertical-align: top;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    white-space: nowrap;

    &:hover,
    &:focus,
    &.is-active {
    	color: #222324;
    	border-color: #aeb1b5;
    }

    &[disabled],
    &.is-disabled {
		background-color: #f5f7fa;
		border-color: #d3d6db;
		cursor: not-allowed;
		pointer-events: none;
		opacity: .5;
    }


    &.is-white {
		background-color: #fff;
		border-color: transparent;
		color: #111;

		&:hover,
		&:focus,
		&.is-active {
			background-color: #e6e6e6;
			border-color: transparent;
			color: #111;
		}
    }

    &.is-light {
		background-color: #f5f7fa;
		border-color: transparent;
		color: #69707a;

		&:hover,
		&:focus,
		&.is-active {
			background-color: #d3dce9;
			border-color: transparent;
			color: #69707a;
		}
    }

    &.is-dark {
		background-color: #69707a;
		border-color: transparent;
		color: #f5f7fa;

		&:hover,
		&:focus,
		&.is-active {
			background-color: #51575f;
			border-color: transparent;
			color: #f5f7fa;
		}
    }

    &.is-black {
	    background-color: #111;
	    border-color: transparent;
	    color: #fff;

	    &:hover,
		&:focus,
		&.is-active {
			background-color: black;
			border-color: transparent;
			color: #fff;
		}
    }

    &.is-link {
		background-color: transparent;
		border-color: transparent;
		color: #222324;
		text-decoration: underline;

	    &:hover,
		&:focus,
		&.is-active {
			background-color: #d3d6db;
			color: #222324;
		}
    }

    &.is-primary {
		background-color: #1fc8db;
		border-color: transparent;
		color: white;

	    &:hover,
		&:focus,
		&.is-active {
			background-color: #199fae;
			border-color: transparent;
			color: white;
		}

		&.is-outlined {
		    background-color: transparent;
		    border-color: #1fc8db;
		    color: #1fc8db;
		}
    }

    &.is-info {
		background-color: #42afe3;
		border-color: transparent;
		color: white;


	    &:hover,
		&:focus,
		&.is-active {
			background-color: #1f99d3;
			border-color: transparent;
			color: white;
		}

		&.is-outlined {
		    background-color: transparent;
		    border-color: #42afe3;
		    color: #42afe3;
		}
    }

    &.is-success {
		background-color: #97cd76;
		border-color: transparent;
		color: white;

	    &:hover,
		&:focus,
		&.is-active {
			background-color: #7bbf51;
			border-color: transparent;
			color: white;
		}

		&.is-outlined {
		    background-color: transparent;
		    border-color: #97cd76;
		    color: #97cd76;
		}
    }

    &.is-warning {
		background-color: #fce473;
		border-color: transparent;
		color: rgba(17, 17, 17, 0.5);

	    &:hover,
		&:focus,
		&.is-active {
			background-color: #fbda41;
			border-color: transparent;
			color: rgba(17, 17, 17, 0.5);
		}

		&.is-outlined {
			background-color: transparent;
			border-color: #fce473;
			color: #fce473;
		}
    }

    &.is-danger {
		background-color: #ed6c63;
		border-color: transparent;
		color: white;

	    &:hover,
		&:focus,
		&.is-active {
			background-color: #e84135;
			border-color: transparent;
			color: white;
		}

		&.is-outlined {
		    background-color: transparent;
		    border-color: #ed6c63;
		    color: #ed6c63;
		}
    }

    &.is-small {
		border-radius: 2px;
		font-size: 11px;
		height: 24px;
		line-height: 16px;
		padding-left: 6px;
		padding-right: 6px;
    }

    &.is-medium {
	    font-size: 18px;
	    height: 40px;
	    padding-left: 14px;
	    padding-right: 14px;
	}

	&.is-large {
	    font-size: 22px;
	    height: 48px;
	    padding-left: 20px;
	    padding-right: 20px;
	}

	& .icon {
		display: inline-block;
		font-size: 21px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		vertical-align: top;
		width: 24px;

		&:first-child {
			margin-left: -2px;
			margin-right: 4px;
		}
	}
`;

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
			<ButtonComponent
		        className={this.createClassName()}
		    >
		    {this.props.icon ? this.renderIcon() : this.renderBody()}
		    </ButtonComponent>
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