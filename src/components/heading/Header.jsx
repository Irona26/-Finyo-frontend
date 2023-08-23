/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';

import { useTheme } from '@mui/material/styles';

import {
  Typography, Box, Divider,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import bimg from '../../img/back12.png';

import FormComponent from './FormComponent';

function Header() {
  const theme = useTheme();

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
          objectfit="inherit"
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

        <FormComponent />

      </Box>
    </Box>
  );
}

export default Header;
