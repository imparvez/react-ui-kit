import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardHeaderTitle extends Component {

  createClassName() {
    return [
      styles.cardHeaderTitle,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p
        className={this.createClassName()}
      >
        {this.props.children}
      </p>
    );
  }
}

CardHeaderTitle.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};