/**
 *
 * TimeInput
 *
 */

import React from 'react';
import range from 'lodash/range';
import Select from 'components/Select';
import PropTypes from 'prop-types';
import Flex from 'styled-flex-component';
// import styled from 'styled-components';

const hours = range(25);
const minutes = range(61);
function TimeInput({ value = ':', onChange }) {
  const [hourVal, minuteVal] = value
    .split(':')
    .map(v => (v ? parseInt(v, 10) : ''));

  const handleHourChange = e => {
    onChange(`${e.target.value}:${minuteVal}`);
  };
  const handleMinutesChange = e => {
    onChange(`${hourVal}:${e.target.value}`);
  };

  return (
    <Flex>
      <Select
        options={hours}
        value={hourVal}
        placeholder="HH"
        size="small"
        onChange={handleHourChange}
      />
      <Select
        options={minutes}
        value={minuteVal}
        placeholder="MM"
        size="small"
        onChange={handleMinutesChange}
      />
    </Flex>
  );
}

TimeInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TimeInput;
