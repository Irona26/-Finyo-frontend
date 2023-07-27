/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

import CurrencyData from '../../fixtures/CurrencyData';

function FilterPrice() {
  const theme = useTheme();

  const { control, setValue, getValues } = useFormContext();
  const currencyKey = CurrencyData[getValues().currency];

  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Price');
  const [buttonTextLast, setButtonTextLast] = useState(null);
  const [buttonCurrency, setButtonCurrrency] = useState(null);

  const handleClickOpen = () => {
    setButtonCurrrency(currencyKey);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dataReset = () => {
    setOpen(false);
    setButtonText('Price');
    setButtonTextLast(null);
    setButtonCurrrency(null);
  };

  const setMinPrice = (price) => {
    setValue('fromPrice', price);
    setButtonText(`${price} -`);
  };

  const setMaxPrice = (price) => {
    if (buttonText === 'Price') {
      setButtonText(null);
    }
    setValue('lastPrice', price);
    setButtonTextLast(price);
  };

  const setCurrency = (index) => {
    setValue('currency', index);
    setButtonCurrrency(CurrencyData[index]);
  };

  const inputProps = {
    min: 0,
    max: 1000000,
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
        {buttonText}
        {' '}
        {buttonTextLast}
        {' '}
        {buttonCurrency}

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
                    onChange={(event) => setMinPrice(event.target.value)}
                    type="number"
                    inputProps={inputProps}
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
                    onChange={(event) => setMaxPrice(event.target.value)}
                    type="number"
                    inputProps={inputProps}
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
                    onChange={(event) => setCurrency(event.target.value)}
                  >
                    {Object.keys(CurrencyData).map((key) => (
                      <MenuItem
                        key={key}
                        value={key}
                      >
                        {CurrencyData[key]}
                      </MenuItem>
                    ))}
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
            onClick={dataReset}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              m: 1,
              border: '1px solid inherit',
              minWidth: 100,
              height: 45,
              color: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.contrast,
              ':hover': {
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.light,
              },
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
