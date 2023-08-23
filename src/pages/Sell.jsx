import { React, useEffect, useContext } from 'react';

import {
  Box,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import sell from '../fixtures/sell';

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
      <CardsList tab={sell} />
      <Paginationn />
    </>
  );
}
export default Sell;
