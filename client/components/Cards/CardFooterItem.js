import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardFooterItem extends Component {

  createClassName() {
    return [
      styles.cardFooterItem,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span
        className={this.createClassName()}
      >
        {this.props.children}
      </span>
    );
  }
}

CardFooterItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};