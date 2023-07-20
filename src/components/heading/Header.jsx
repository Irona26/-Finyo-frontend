/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useTheme } from '@mui/material/styles';

import {
  Typography, InputLabel, Button, Box, Divider, FormControl,
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
      id="find"
      sx={{
        background: theme.palette.primary.gradient,
      }}
    >
      <Box sx={{
        display: 'grid',
        maxWidth: '1200px',
        m: '0 auto',
        p: 10,
        width: 'auto',
        gridAutoFlow: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
      >
        <CardMedia
          component="img"
          image={bimg}
          alt="house"
          objectFit="inherit"
          sx={{
            height: 244,
            width: 200,
            gridColumn: '1',
            gridRow: '1 / 3',
            m: 'auto',
          }}
        />
        <Typography
          variant="h2"
          component="p"
          sx={{
            p: '16px 0',
            gridColumn: '2',
            gridRow: '1',
            fontWeight: '700',
            textAlign: 'start',
            color: theme.palette.primary.contrast,
          }}
        >
          The Right Place
          <br />
          of House Finding
        </Typography>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            gridColumn: '1',
            gridRow: '2/3',
            height: '70%',
            borderColor: theme.palette.primary.light,
          }}
        />

        <Typography
          component="span"
          sx={{
            m: '10px 0',
            p: '0 16px',
            gridColumn: '2',
            gridRow: '2',
            textAlign: 'start',
            color: theme.palette.primary.light,
          }}
        >
          Find a variety of properties that suit you very easily,
          <br />
          forget all difficulties in finding a residence for you.
        </Typography>
        <Box
          sx={{
            gridColumn: '1/3',
            gridRow: '3',
            mt: 4,
          }}
        >
          <form
            onSubmit={onSubmit}
          >

            <Box sx={{
              display: 'grid',
              width: '950px',
              minWidth: '930px',
              m: '10px auto',
              gridTemplateColumns: '150px 170px 150px 150px 150px 150px',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.primary.light,
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
      </Box>
    </Box>
  );
}

export default Header;
