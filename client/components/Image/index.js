import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class Image extends Component {

  createClassName() {
    return [
      styles.image,
      styles[this.props.size],
      styles[this.props.ratio],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <figure
        className={this.createClassName()}
      >
        <img src={this.props.src} alt={this.props.alt} />
      </figure>
    );
  }
}

Image.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf([
    'is16X16',
    'is24X24',
    'is32X32',
    'is48X48',
    'is64X64',
    'is96X96',
    'is128X128',
  ]),
  ratio: PropTypes.oneOf([
    'isSquare',
    'is1By1',
    'is4By3',
    'is3By2',
    'is16By9',
    'is2By1',
  ]),
};