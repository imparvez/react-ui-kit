import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardFooter extends Component {

  createClassName() {
    return [
      styles.cardFooter,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <footer
        className={this.createClassName()}
      >
        {this.props.children}
      </footer>
    );
  }
}

CardFooter.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};