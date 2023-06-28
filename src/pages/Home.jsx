import React from 'react';

import { Box, Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import Header from '../components/heading/Header';
import CardsList from '../CardsList';
import Paginationn from '../Pagination';

function Home() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Box sx={{
        display: 'grid',
        width: 'auto',
        padding: '3%',
        gridTemplateRows: '50px 50px',
        justifyContent: 'center',
        alignContent: 'baseline',
        bgcolor: theme.palette.primary.background,
      }}
      >
        <Typography variant="h5" component="p" color="#311b92" sx={{ m: 'auto' }}>
          Recent Properties
        </Typography>
        <Typography component="span" color="inherit" align="center" sx={{ m: 'auto' }}>
          Check out some of our latest properties.
        </Typography>
      </Box>

      <CardsList />
      <Paginationn />
    </>
  );
}

export default Home;
