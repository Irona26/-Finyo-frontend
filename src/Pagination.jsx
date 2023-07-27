import React, { useContext } from 'react';

import { useTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

import Context from './Context';

function Paginationn() {
  const theme = useTheme();

  const { paginate, cardListLength, cardsPerPage } = useContext(Context);
  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        height: '50px',
        width: 'auto',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        pb: 10,
        pt: 0,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.primary.background,
      }}
    >
      <Stack spacing={2}>
        <Pagination count={Math.ceil(cardListLength / cardsPerPage)} color="primary" onChange={handleChange} />
      </Stack>
    </Box>
  );
}
export default Paginationn;
