import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardImage extends Component {

  createClassName() {
    return [
      styles.cardImage,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div className={this.createClassName()}>
        {this.props.children}
      </div>
    );
  }
}

CardImage.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};