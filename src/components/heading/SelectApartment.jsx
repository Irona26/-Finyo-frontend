import React from 'react';
import { PropTypes } from 'prop-types';

import { Select, MenuItem } from '@mui/material';

function SelectApartment({ options = [], value, onChange }) {
  return (

    <Select
      label="apartment"
      variant="outlined"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}

    </Select>

  );
}

SelectApartment.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default SelectApartment;
