import React from 'react';

import {
  Box, Button, CardMedia, Typography,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import useScrollTo from '../useScrollTo';

import Header from '../components/heading/Header';
import CardsList from '../CardsList';
import Paginationn from '../Pagination';
import About from './About';

import img from '../img/7home.png';

function Home() {
  const theme = useTheme();
  useScrollTo();
  return (
    <>
      <Header />
      <Box sx={{
        display: 'grid',
        width: 'auto',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        pt: 10,
        pb: 0,
        justifyContent: 'center',
        alignContent: 'center',
        bgcolor: theme.palette.primary.background,
      }}
      >
        <Typography component="span" color="secondary" align="center" sx={{ m: 'auto' }}>
          Properties
        </Typography>

        <Typography
          variant="h2"
          sx={{
            m: 'auto',
            pb: 2,
            fontSize: '46px',
            fontWeight: '700',
            color: theme.palette.primary.main,
          }}
        >
          Latest Listings
        </Typography>

        <Typography component="span" color="inherit" align="center" sx={{ m: 'auto' }}>
          Check out some of our latest properties.
        </Typography>
      </Box>

      <CardsList />
      <Paginationn />

      <Box sx={{
        display: 'grid',
        width: 'auto',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        pt: 10,
        pb: 10,
        alignItems: 'center',
        alignContent: 'center',
        verticalAlign: 'top',
        justifyContent: 'space-around',
      }}
      >
        <CardMedia
          component="img"
          image={img}
          alt="houses"
          objectFit="inherit"
          sx={{
            height: 350,
            width: 350,
            mr: 2,
            gridColumn: 2,
            gridRowStart: 1,
            gridRowEnd: 12,
            borderRadius: '10px',
            boxShadow: 3,
          }}
        />
        <Typography
          color="secondary"
          sx={{
            gridColumn: '1/4',
            gridRow: '1',
            textAlign: 'start',
          }}
        >
          Practical way of use
        </Typography>

        <Typography
          variant="h4"
          component="p"
          sx={{
            pb: 2,
            gridColumn: '1/4',
            gridRow: 2,
            fontSize: '46px',
            fontWeight: '700',
            color: theme.palette.primary.main,
          }}
        >
          How It Works
        </Typography>
        <Typography sx={{
          gridColumn: '1/4',
          gridRow: 3,
          pb: 6,
        }}
        >
          These are steps for buying a house.
        </Typography>
        <Button
          disabled
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
            gridRowStart: 4,
            gridRowEnd: 6,
            p: 0,
            mb: 4,
            width: '50px',
            height: '50px',
            minWidth: '50px',
            color: theme.palette.primary.light,
            bgcolor: theme.palette.secondary.main,
            borderRadius: '50px',
            '&:disabled': {
              color: theme.palette.primary.light,
              bgcolor: theme.palette.secondary.main,
            },
          }}
        >
          1
        </Button>
        <Typography
          color="secondary"
          sx={{
            display: 'grid',
            gridColumn: 1,
            gridRow: 4,
            ml: 10,
            fontSize: '25px',
            verticalAlign: 'bottom',
          }}
        >
          Find a House you want to buy or rent
        </Typography>
        <Typography sx={{
          gridColumn: 1,
          gridRow: 5,
          ml: 10,
          pb: 4,
        }}
        >
          Do a search for the house you want there we are
        </Typography>

        <Button
          disabled
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
            gridRowStart: 7,
            gridRowEnd: 9,
            p: 0,
            mb: 4,
            width: '50px',
            height: '50px',
            minWidth: '50px',
            color: theme.palette.primary.light,
            bgcolor: theme.palette.secondary.main,
            borderRadius: '50px',
            '&:disabled': {
              color: theme.palette.primary.light,
              bgcolor: theme.palette.secondary.main,
            },
          }}
        >
          2
        </Button>
        <Typography
          color="secondary"
          sx={{
            gridColumn: 1,
            gridRow: 7,
            ml: 10,
            fontSize: '25px',
          }}
        >
          Call the Owner of the House
        </Typography>
        <Typography sx={{
          gridColumn: 1,
          gridRow: 8,
          ml: 10,
          pb: 4,
        }}
        >
          Call the owner of the house and ask for further details
        </Typography>
        <Button
          disabled
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
            gridRowStart: 10,
            gridRowEnd: 12,
            p: 0,
            mb: 4,
            width: '50px',
            height: '50px',
            minWidth: '50px',
            color: theme.palette.primary.light,
            bgcolor: theme.palette.secondary.main,
            borderRadius: '50px',
            '&:disabled': {
              color: theme.palette.primary.light,
              bgcolor: theme.palette.secondary.main,
            },
          }}
        >
          3
        </Button>
        <Typography
          color="secondary"
          sx={{
            gridColumn: 1,
            gridRow: 10,
            ml: 9,
            fontSize: '25px',
          }}
        >
          Take a Deal with The Owner
        </Typography>
        <Typography sx={{
          gridColumn: 1,
          gridRow: 11,
          ml: 10,
          pb: 4,
        }}
        >
          Make an agreement to buy or rent the house you want
        </Typography>
      </Box>

      <About />
    </>
  );
}

export default Home;
