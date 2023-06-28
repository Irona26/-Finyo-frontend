/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import streetList from '../../fixtures/streetList';

export default function StreetSearch() {
  const { control, setValue } = useFormContext();

  const setStreet = (street) => {
    setValue('currentStreet', street);
  };

  return (
    <Stack spacing={2} sx={{ width: 160 }}>
      <Controller
        name="currentStreet"
        control={control}
        render={({ field: { value } }) => (
          <Autocomplete
            freeSolo
            id="streets"
            disableClearable
            options={streetList.map((option) => option.name)}
            value={value}
            onChange={(event, data) => setStreet(data)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Street"
              />
            )}
          />
        )}
      />
    </Stack>
  );
}
