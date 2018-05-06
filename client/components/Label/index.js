import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelComponent = styled.label`
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
`;

export default class Label extends Component{

	createClassName() {
    return [
      this.props.className,
    ].join(' ').trim();
  }


	render(){
		return(
		  <LabelComponent 
        {...this.props} 
        className={this.createClassName()}>
        {this.props.children}
      </LabelComponent>
		)
	}
}

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
