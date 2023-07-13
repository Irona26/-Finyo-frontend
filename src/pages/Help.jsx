import React from 'react';

import {
  Typography, Box, Button, TextField,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import { useTheme } from '@mui/material/styles';

import img from '../img/back12.png';

export default function Help() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          width: 'auto',
          pt: 5,
          p: 2,
          alignItems: 'center',
          justifyContent: 'space-around',
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
            height: 250,
            width: 350,
            borderRadius: '10px',
          }}
        />
        <Typography
          variant="h3"
          sx={{
            gridColumn: '2/4',
            gridRow: '1',
            width: '700px',
            color: theme.palette.primary.main,
          }}
        >
          Have Question? Get in touch!
        </Typography>
        <Typography
          sx={{
            gridColumn: '2/4',
            gridRow: '2',
          }}
        >
          A great plateform to buy, sell and rent your properties
          without any agent or commisions.
        </Typography>
        <Button sx={{
          gridColumn: '2/4',
          gridRow: '3',
          m: 1,
          ml: '25%',
          width: 140,
          border: '1px solid inherit',
          height: 45,
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.contrast,
          ':hover': {
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.light,
          },
        }}
        >
          Contact us
        </Button>
      </Box>
      <Box
        sx={{
          display: 'grid',
          width: 'auto',
          p: 4,
          m: 10,
          mt: 5,
          mb: 5,
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.palette.primary.gradient,
        }}
      >
        <Typography
          variant="h4"
          component="p"
          sx={{
            gridColumn: '1/4',
            gridRow: '1',
            color: theme.palette.primary.contrast,
          }}
        >
          Subscribe To Our Newsletter & Get News
        </Typography>
        <Typography
          component="span"
          sx={{
            gridColumn: '1/4',
            gridRow: '2',
            width: 'auto',
            m: '10px 0',
            textAlign: 'center',
            color: theme.palette.primary.light,
          }}
        >
          Get notification about product discount and new place just for you
        </Typography>
        <Box
          sx={{
            gridColumn: '2',
            gridRow: '3',
            alignItems: 'center',
          }}
        >
          <TextField
            variant="outlined"
            sx={{
              width: '350px',
              bgcolor: '#ffffff',
              border: 'none',
              borderRadius: 3,
            }}
          />
          <Button sx={{
            gridColumn: '3',
            gridRow: '3',
            m: 1,
            width: 140,
            border: '1px solid inherit',
            height: 45,
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.contrast,
            ':hover': {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.light,
            },
          }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </>
  );
}
