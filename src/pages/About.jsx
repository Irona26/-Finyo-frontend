import React from 'react';
import {
  Typography, Box,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import { useTheme } from '@mui/material/styles';

import img from '../img/1home.png';

export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'grid',
        width: 'auto',
        pt: 5,
        p: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.primary.background,
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt="house"
        objectFit="inherit"
        sx={{
          gridColumn: '1',
          gridRow: '1/4',
          height: 300,
          width: 400,
          borderRadius: '10px',
        }}
      />
      <Typography
        variant="h3"
        sx={{
          gridColumn: '2',
          gridRow: '1',
          width: '700px',
          color: theme.palette.primary.main,
        }}
      >
        About us
      </Typography>
      <Typography
        variant="h5"
        sx={{
          gridColumn: '2',
          gridRow: '2',
        }}
      >
        Efficiency. Transparency. Control.
      </Typography>
      <Typography
        sx={{
          gridColumn: '2',
          gridRow: '3',
        }}
      >
        Our company dedicated to innovating the luxury real estate industry,
        offers absolutely new experiences through a global network of exceptional agents.
        With a network of homes for sale worldwide our website lets you search property
        listings globally, and includes a large inventory of luxury homes for sale,
        including houses, townhomes, villas and more.
      </Typography>
    </Box>
  );
}
