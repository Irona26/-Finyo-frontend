import { React, useEffect, useContext } from 'react';

import {
  Box, Typography,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import rent from '../fixtures/rent';
import FormComponent from '../components/heading/FormComponent';
import CardsList from '../CardsList';
import Paginationn from '../Pagination';
import Context from '../Context';

function Sell() {
  const theme = useTheme();

  const { setCardsPerPage } = useContext(Context);

  useEffect(() => {
    setCardsPerPage(10);
  });
  return (
    <>
      <Box sx={{
        display: 'grid',
        width: 'auto',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        justifyContent: 'center',
        alignContent: 'center',
        background: theme.palette.primary.gradient,
      }}
      >
        <FormComponent />
      </Box>
      <Typography sx={{
        visibility: 'hidden',
      }}
      >
        No results
      </Typography>
      <CardsList tab={rent} />
      <Paginationn />
    </>
  );
}
export default Sell;
