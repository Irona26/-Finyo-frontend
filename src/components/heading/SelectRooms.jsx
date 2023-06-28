import React from 'react';
import { PropTypes } from 'prop-types';

import { Select, MenuItem } from '@mui/material';

function SelectRooms({ options, value, onChange }) {
  return (

    <Select
      label="Rooms"
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

SelectRooms.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default SelectRooms;
