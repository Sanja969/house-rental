/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  inverted: 'inverted',
  logIn: 'logIn',
};

const Button = ({ children, buttonType, ...otherProps }) => (
  <button
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
