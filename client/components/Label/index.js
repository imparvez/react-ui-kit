import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class Label extends Component{

	createClassName() {
    return [
      styles.label,
      this.props.className,
    ].join(' ').trim();
  }


	render(){
		return(
		  <label {...this.props} className={this.createClassName()}>
        {this.props.children}
      </label>
		)
	}
}

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};