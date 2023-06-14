/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import SelectStreet from './SelectStreet';

const OPTIONS = [
  { value: 'Belyye Rosy', name: 'Belyye Rosy' },
  { value: 'Bolshaya Troitskaya', name: 'Bolshaya Troitskaya' },
  { value: 'Dovatora', name: 'Dovatora' },
  { value: 'Kabyaka', name: 'Kabyaka' },
  { value: 'Lenina', name: 'Lenina' },
  { value: 'Ozheshko', name: 'Ozheshko' },

];

function FilterStreets() {
  const { control, setValue } = useFormContext();

  const setStreet = (street) => {
    setValue('currentStreet', street);
  };

  return (
    <Controller
      name="currentStreet"
      control={control}
      render={({ field: { value } }) => (
        <SelectStreet
          label="currentStreet"
          value={value}
          onChange={setStreet}
          options={OPTIONS}
        />
      )}
    />
  );
}
export default FilterStreets;
