/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

function FilterPrice() {
  const [open, setOpen] = useState(false);

  const { control, setValue } = useFormContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const minPrice = (price) => {
    setValue('fromPrice', price);
  };

  const maxPrice = (price) => {
    setValue('lastPrice', price);
  };

  const currencyItem = (curr) => {
    setValue('currency', curr);
  };

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        onClick={handleClickOpen}
        sx={{
          m: 1,
          border: '1px solid rgba(0, 0, 0, 0.25)',
          width: '134px',
          height: '56px',
          color: 'rgba(0, 0, 0, 0.65)',
        }}
      >
        Price
      </Button>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogContent sx={{ pb: 0 }}>

          <Box
            component="form"
            sx={{
              display: 'flex', flexWrap: 'nowrap', width: '500px',
            }}
          >
            <FormControl
              sx={{ m: 1, width: '250px' }}
            >
              <Controller
                name="fromPrice"
                control={control}
                render={({ field: { value } }) => (
                  <TextField
                    label="From"
                    value={value}
                    onChange={(event) => minPrice(event.target.value)}
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 10000000 } }}
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '250px' }}>
              <Controller
                name="lastPrice"
                control={control}
                render={({ field: { value } }) => (
                  <TextField
                    label="To"
                    variant="outlined"
                    value={value}
                    onChange={(event) => maxPrice(event.target.value)}
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 10000000 } }}
                  />
                )}
              />
            </FormControl>

            <FormControl variant="outlined" sx={{ m: 1, width: '150px' }}>
              <Controller
                name="currency"
                control={control}
                render={({ field: { value } }) => (
                  <TextField
                    select
                    defaultValue="BYN"
                    variant="outlined"
                    value={value}
                    onChange={(event) => currencyItem(event.target.value)}
                  >
                    <MenuItem value={1}>BYN</MenuItem>
                    <MenuItem value={2}>$</MenuItem>
                    <MenuItem value={3}>€</MenuItem>
                  </TextField>
                )}
              />
            </FormControl>
          </Box>

        </DialogContent>
        <DialogActions sx={{ p: '20px 24px', m: '0 auto' }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              m: 1, border: '1px solid #ffc107', minWidth: 100, height: 45, color: 'inherit',
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              m: 1, border: '1px solid inherit', minWidth: 100, height: 45, color: '#ffffff', backgroundColor: '#ffc107',
            }}
            onClick={handleClose}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FilterPrice;
