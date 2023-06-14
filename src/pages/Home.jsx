import React from 'react';

import { Box, Typography } from '@mui/material';

import Header from '../components/heading/Header';
import CardsList from '../CardsList';
import Paginationn from '../Pagination';

function Home() {
  return (
    <>
      <Header />
      <Box sx={{
        display: 'grid',
        width: 'auto',
        gridTemplateRows: '50px 50px',
        padding: '3%',
        color: '#263238',
        backgroundColor: '#eceff1',
        justifyContent: 'center',
        alignContent: 'baseline',
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
