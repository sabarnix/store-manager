/**
 *
 * Select
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledSelect from './StyledSelect';

function Select({ options, placeholder = '--Select--', ...rest }) {
  return (
    <StyledSelect {...rest}>
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option>{option}</option>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default Select;
