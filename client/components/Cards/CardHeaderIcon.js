import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class CardHeaderIcon extends Component {

  createClassName() {
    return [
      styles.cardHeaderIcon,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <a
        className={this.createClassName()}
      >
        <i
          className={[
            styles.fa,
            this.props.icon,
          ].join(' ').trim()}
        />
      </a>
    );
  }
}

CardHeaderIcon.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};