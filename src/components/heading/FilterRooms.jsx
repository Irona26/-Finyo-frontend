import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import SelectRooms from './SelectRooms';

const OPTIONS = [
  { value: '1', name: '1' },
  { value: '2', name: '2' },
  { value: '3', name: '3' },
  { value: '4', name: '4' },
  { value: '5', name: '5+' },
];

function FilterRooms() {
  const { control, setValue } = useFormContext();

  const setRoomQuantity = (rooms) => {
    setValue('currentRoomQuant', rooms);
  };

  return (
    <Controller
      name="currentRoomQuant"
      control={control}
      render={({ field: { value } }) => (
        <SelectRooms
          value={value}
          onChange={setRoomQuantity}
          options={OPTIONS}
        />
      )}
    />
  );
}
export default FilterRooms;
