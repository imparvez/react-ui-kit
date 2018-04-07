import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles';

export default class Input extends Component{

	createControlClassName() {
		return [
			styles.control,
			styles[this.props.state],
			this.props.icon ? styles.hasIcon : '',
			this.props.hasIconRight ? styles.hasIconRight : styles.hasIconLeft,
			this.props.className,
		].join(' ').trim();
	}

	createInputClassName() {
	    return [
	      styles.input,
	      styles[this.props.isColor],
	      styles[this.props.size],
	      this.props.isExpanded ? styles.isExpanded : '',
	      this.props.icon ? styles.hasIcon : '',
	      this.props.className,
	    ].join(' ').trim();
	}

	renderInput() {
		return (
		  	<input 
				placeholder = {this.props.placeholder}
				value = {this.props.value}
				className={this.createInputClassName()}
				type={this.props.type}
				defaultValue={this.props.defaultValue}
				name={this.props.name}
				readOnly={this.props.readOnly}
				disabled={this.props.state === 'isDisabled'}
			/>
		);
	}

	renderHelp() {
		if (!this.props.help) return null;
		return (
			<span className={[styles.help, styles[this.props.help.color]].join(' ')}>
			{this.props.help.text}
			</span>
		);
	}

	render(){
		return(
			<p className={this.createControlClassName()}>
				{this.renderInput()}
				{this.props.icon
		          ? <i className={[styles.fa, this.props.icon].join(' ')} />
		          : null}
				{this.renderHelp()}
			</p>
		)
	}
}

Input.propTypes = {
	className: PropTypes.string,
    hasIcon: PropTypes.bool,
    hasIconRight: PropTypes.bool,
    style: PropTypes.object,
    icon: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    hasAddons: PropTypes.bool,
    readOnly: PropTypes.bool,
    isExpanded: PropTypes.bool,
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
    ]),
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
    state: PropTypes.oneOf([
      'isLoading',
      'isDisabled',
    ]),
    help: PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.oneOf([
        'isPrimary',
        'isInfo',
        'isSuccess',
        'isWarning',
        'isDanger',
      ]),
    }),
    name: PropTypes.string,
}