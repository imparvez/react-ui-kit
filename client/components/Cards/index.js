import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class Cards extends Component {

  createClassName() {
    return [
      styles.card,
      this.props.isFullwidth ? styles.isFullwidth : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}

Cards.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  isFullwidth: PropTypes.bool,
};