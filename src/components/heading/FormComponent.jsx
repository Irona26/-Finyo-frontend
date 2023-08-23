import { React, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import { useFormContext } from 'react-hook-form';

import {
  InputLabel, Button, Box, FormControl,
} from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import FilterApartment from './FilterApartment';
import FilterRooms from './FilterRooms';
import FilterPrice from './FilterPrice';
import StreetSearch from './StreetSearch';

import Context from '../../Context';

function FormComponent() {
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const { tabValue, setTabValue } = useContext(Context);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    if (location.pathname !== '/') {
      navigate(`/${newValue}`);
    }
  };

  const { onSubmit } = useFormContext();

  return (
    <>
      <Box
        sx={{
          gridColumn: '1/3',
          gridRow: 4,
          mt: 1,
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
                zIndex: 5,
                color: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.contrast,
              }}
            >
              Search
            </Button>
          </Box>

        </form>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridColumn: '1/3',
          gridRow: 3,
          alignItems: 'flex-start',
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            color: theme.palette.primary.light,
          }}
        >
          <Tab label="Buy" value="buy" />
          <Tab label="Rent" value="rent" />
          <Tab label="Sell" value="sell" />
        </Tabs>
      </Box>
    </>
  );
}

export default FormComponent;
