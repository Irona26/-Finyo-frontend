/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useTheme } from '@mui/material/styles';

import {
  Typography, FormControl, InputLabel, Button, Box,
} from '@mui/material';

import { useFormContext } from 'react-hook-form';

import CardMedia from '@mui/material/CardMedia';

import bimg from '../../img/back12.png';

import FilterApartment from './FilterApartment';
import FilterRooms from './FilterRooms';
import FilterPrice from './FilterPrice';
import StreetSearch from './StreetSearch';

function Header() {
  const theme = useTheme();

  const { onSubmit } = useFormContext();

  return (
    <Box
      sx={{
        display: 'grid',
        width: 'auto',
        p: 4,
        gridAutoFlow: 'column',
        gap: '10px',
        gridTemplateColumns: '200px',
        gridTemplateRows: '15px, 50px',
        alignItems: 'center',
        background: theme.palette.primary.gradient,
        outline: '1px solid',
        outlineOffset: '-10px',
        outlineColor: theme.palette.primary.contrast,
      }}
    >
      <CardMedia
        component="img"
        image={bimg}
        alt="house"
        objectFit="inherit"
        sx={{
          height: 194,
          width: 150,
          gridColumn: '1',
          gridRow: '1 / 4',
        }}
      />
      <Typography variant="h4" component="p" sx={{ color: theme.palette.primary.contrast }}>
        Let&apos;s Find
      </Typography>

      <Typography component="span" sx={{ width: '400px', m: '10px 0', color: theme.palette.primary.light }}>
        Find a variety of properties that suit you very easily,
        forget all difficulties in finding a residence for you.
      </Typography>

      <form onSubmit={onSubmit}>
        <Box sx={{
          display: 'grid',
          width: '950px',
          minWidth: '930px',
          m: '10px 0',
          gridTemplateColumns: '150px 170px 150px 150px 150px 150px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.primary.background,
          borderRadius: '10px',
        }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>

            <InputLabel>Apartment</InputLabel>
            <FilterApartment />

          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>

            <StreetSearch />

          </FormControl>

          <FilterPrice />

          <FormControl sx={{ m: 1, minWidth: 120 }}>

            <InputLabel>Rooms</InputLabel>
            <FilterRooms />

          </FormControl>

          <Button
            variant="outlined"
            size="medium"
            sx={{
              m: 1,
              minWidth: 120,
              height: 56,
              color: 'rgba(0, 0, 0, 0.65)',
              border: '1px solid',
              borderColor: theme.palette.primary.contrast,
            }}
          >
            Advance Search
          </Button>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              m: 1,
              border: '1px solid inherit',
              minWidth: 120,
              height: 56,
              color: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.contrast,
            }}
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Header;
