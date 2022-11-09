import React from 'react';
import PropTypes from 'prop-types';
import './form-input.styles.scss';

const FORM_TYPE_CLASSES = {
  add_house: 'add_house',
  description: 'description',
};

const FormInput = ({ label, formType, ...otherProps }) => (
  <div className="group">
    <input className={`form-input ${FORM_TYPE_CLASSES[formType]}`} {...otherProps} />
    {
      label && (
      <label
        className={`${
          otherProps.value.length ? `shrink ${FORM_TYPE_CLASSES[formType]}` : `${FORM_TYPE_CLASSES[formType]}`
        } form-input-label`}
      >
        {label}
      </label>
      )
    }
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired
};

export default FormInput;
