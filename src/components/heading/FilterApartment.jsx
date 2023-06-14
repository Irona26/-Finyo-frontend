/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import SelectApartment from './SelectApartment';

const OPTIONS = [
  { value: 'apartment', name: 'apartment' },
  { value: 'newfound', name: 'newfound' },
  { value: 'room', name: 'room' },
  { value: 'house', name: 'house' },
  { value: 'office', name: 'office' },
  { value: 'garage', name: 'garage' },
];

function FilterApartment() {
  const { control, setValue } = useFormContext();

  const setApartment = (apartments) => {
    setValue('currentApartment', apartments);
  };

  return (
    <Controller
      name="currentApartment"
      control={control}
      render={({ field: { value } }) => (
        <SelectApartment
          label="currentApartment"
          value={value}
          onChange={setApartment}
          options={OPTIONS}
        />
      )}
    />
  );
}
export default FilterApartment;
