import React from 'react';

import {
  Box, Button, CardMedia, Typography,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import Header from '../components/heading/Header';
import CardsList from '../CardsList';
import Paginationn from '../Pagination';
import himg from '../img/7home.png';

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
        <Typography variant="h5" component="p" sx={{ m: 'auto', color: theme.palette.primary.main }}>
          Recent Properties
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
        m: 2,
        p: 2,
        alignItems: 'center',
        alignContent: 'center',
        verticalAlign: 'top',
        justifyContent: 'space-around',
      }}
      >
        <CardMedia
          component="img"
          image={himg}
          alt="houses"
          objectFit="inherit"
          sx={{
            height: 350,
            width: 350,
            gridColumn: '1',
            gridRowStart: 1,
            gridRowEnd: 11,
            m: 1,
            borderRadius: '10px',
            boxShadow: 3,
          }}
        />
        <Typography
          variant="h4"
          component="p"
          sx={{
            gridColumn: '2/4',
            gridRow: '1',
            color: theme.palette.primary.main,
          }}
        >
          How It Works
        </Typography>
        <Typography sx={{
          gridColumn: '2/4',
          gridRow: '2',
          mb: 4,
        }}
        >
          These are steps for buying a house.
        </Typography>
        <Button
          disabled
          sx={{
            gridColumnStart: 2,
            gridColumnEnd: 4,
            gridRowStart: 3,
            gridRowEnd: 5,
            p: 0,
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
            gridColumn: '2',
            gridRow: '3',
            ml: 10,
            fontSize: '25px',
            verticalAlign: 'bottom',
          }}
        >
          Find a House you want to buy or rent
        </Typography>
        <Typography sx={{
          gridColumn: '2',
          gridRow: '4',
          ml: 10,
        }}
        >
          Do a search for the house you want there we are
        </Typography>

        <Button
          disabled
          sx={{
            gridColumnStart: 2,
            gridColumnEnd: 4,
            gridRowStart: 6,
            gridRowEnd: 8,
            p: 0,
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
            gridColumn: '2',
            gridRow: '6',
            ml: 10,
            fontSize: '25px',
          }}
        >
          Call the Owner of the House
        </Typography>
        <Typography sx={{
          gridColumn: '2',
          gridRow: '7',
          ml: 10,
        }}
        >
          Call the owner of the house and ask for further details
        </Typography>
        <Button
          disabled
          sx={{
            gridColumnStart: 2,
            gridColumnEnd: 4,
            gridRowStart: 9,
            gridRowEnd: 11,
            p: 0,
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
            gridColumn: '2',
            gridRow: '9',
            ml: 9,
            fontSize: '25px',
          }}
        >
          Take a Deal with The Owner
        </Typography>
        <Typography sx={{
          gridColumn: '2',
          gridRow: '10',
          ml: 10,
        }}
        >
          Make an agreement to buy or rent the house you want
        </Typography>
      </Box>
      <Box sx={{
        display: 'grid',
        width: 'auto',
        pt: 5,
        p: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: theme.palette.primary.background,
      }}
      >
        <Typography
          variant="h4"
          component="p"
          sx={{
            gridColumn: '1',
            gridRow: '2',
            mt: 1,
            color: theme.palette.primary.main,
          }}
        >
          Want To Sell Your Property?
        </Typography>
        <Typography sx={{
          gridColumn: '1',
          gridRow: '3',
        }}
        >
          If you want to sell a property, please contact us directly by sending a special message
        </Typography>
        <Button sx={{
          gridColumn: '2',
          gridRow: '2/4',
          m: 1,
          mr: 5,
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
    </>
  );
}

export default Home;
