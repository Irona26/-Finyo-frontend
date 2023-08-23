import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useTheme } from '@mui/material/styles';

import {
  Typography, Box, Button,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useScrollTo from '../useScrollTo';

import img from '../img/1home.png';
import buy from '../img/buy.png';
import rent from '../img/rent.png';
import deal from '../img/deal.png';

export default function About() {
  const theme = useTheme();
  useScrollTo();
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          width: 'auto',
          maxWidth: '1200px',
          m: '0 auto',
          p: 4,
          pt: 10,
          pb: 10,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          bgcolor: theme.palette.primary.background,
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt="house"
          objectfit="inherit"
          sx={{
            gridColumn: '1',
            gridRow: '1/4',
            width: '350px',
            height: '300px',
            mr: 10,
            borderRadius: '10px',
          }}
        />
        <Typography
          component="span"
          color="secondary"
          sx={{
            gridColumn: '2',
            gridRow: '1',
            textAlign: 'start',
          }}
        >
          About us
        </Typography>
        <Typography
          variant="h2"
          sx={{
            gridColumn: '2',
            gridRow: '2',
            pb: 2,
            fontSize: '46px',
            fontWeight: '700',
            textAlign: 'start',
            color: theme.palette.primary.main,
          }}
        >
          Efficiency. Transparency.
          <br />
          Control.
        </Typography>

        <Typography
          sx={{
            gridColumn: '2',
            gridRow: '3',
            pb: 4,
          }}
        >
          Our company dedicated to innovating the luxury real estate industry,
          offers absolutely new experiences through a global network of exceptional agents.
          With a network of homes for sale worldwide our website lets you search property
          listings globally, and includes a large inventory of luxury homes for sale,
          including houses, townhomes, villas and more.
        </Typography>

        <Button
          smooth="true"
          to="/about"
          component={Link}
          sx={{
            gridColumn: 2,
            gridRow: '6',
            height: 45,
            width: 160,
            fontSize: '16px',
            justifyContent: 'start',
            color: theme.palette.primary.main,
            ':hover': {
              background: 'transparent',
              color: theme.palette.primary.contrast,
            },
          }}
        >
          Learn more
          <ArrowRightAltIcon sx={{ fontSize: '2rem' }} />
        </Button>
      </Box>
      <Box sx={{
        display: 'grid',
        maxWidth: '1200px',
        m: '0 auto',
        pt: 5,
        p: 10,
        pl: 4,
        pr: 4,
        alignItems: 'center',
        justifyContent: 'space-around',
        bgcolor: theme.palette.primary.light,
      }}
      >
        <Typography
          component="span"
          color="secondary"
          align="center"
          sx={{
            m: 'auto',
            gridColumn: '1/4',
            gridRow: 1,
          }}
        >
          Our Services
        </Typography>

        <Typography
          variant="h2"
          sx={{
            gridColumn: '1/4',
            gridRow: 2,
            m: 'auto',
            pb: 4,
            fontSize: '46px',
            fontWeight: '700',
            color: theme.palette.primary.main,
          }}
        >
          Our Main Focus
        </Typography>

        <CardMedia
          component="img"
          image={buy}
          alt="buy a house"
          objectfit="inherit"
          sx={{
            height: 50,
            width: 50,
            m: '0 auto',
            pt: 2,
            gridColumn: 1,
            gridRow: 3,
          }}
        />
        <Typography
          color="secondary"
          sx={{
            display: 'grid',
            gridColumn: 1,
            gridRow: 4,
            m: '0 auto',
            pb: 4,
            fontSize: '25px',
            verticalAlign: 'bottom',
          }}
        >
          Buy a home
        </Typography>
        <Typography sx={{
          gridColumn: 1,
          gridRow: 5,
          pb: 4,
          maxWidth: '300px',
          textAlign: 'center',
          fontSize: '14px',
        }}
        >
          over 1 million+ homes for sale available on the website,
          we can match you with a house you will want to call home.
        </Typography>
        <Button
          smooth="true"
          to="/#find"
          component={HashLink}
          sx={{
            gridColumn: 1,
            gridRow: '6',
            m: '0 auto',
            height: 45,
            fontSize: '16px',
            color: theme.palette.secondary.main,
            ':hover': {
              background: 'transparent',
              color: theme.palette.primary.contrast,
            },
          }}
        >
          Find a home
          <NavigateNextIcon sx={{ fontSize: '1.5rem' }} />
        </Button>
        <CardMedia
          component="img"
          image={rent}
          alt="rent a house"
          objectfit="inherit"
          sx={{
            height: 50,
            width: 50,
            m: '0 auto',
            pt: 2,
            gridColumn: 2,
            gridRow: 3,
          }}
        />
        <Typography
          color="secondary"
          sx={{
            display: 'grid',
            gridColumn: 2,
            gridRow: 4,
            m: '0 auto',
            pb: 4,
            fontSize: '25px',
            verticalAlign: 'bottom',
          }}
        >
          Rent a home
        </Typography>
        <Typography sx={{
          gridColumn: 2,
          gridRow: 5,
          pb: 4,
          fontSize: '14px',
          maxWidth: '300px',
          textAlign: 'center',
        }}
        >
          over 1 million+ homes for rent available on the website,
          we can match you with a house you will want to call home.
        </Typography>
        <Button
          smooth="true"
          to="/#find"
          component={HashLink}
          sx={{
            gridColumn: 2,
            gridRow: '6',
            m: '0 auto',
            height: 45,
            fontSize: '16px',
            color: theme.palette.secondary.main,
            ':hover': {
              background: 'transparent',
              color: theme.palette.primary.contrast,
            },
          }}
        >
          Find a home
          <NavigateNextIcon sx={{ fontSize: '1.5rem' }} />
        </Button>
        <CardMedia
          component="img"
          image={deal}
          alt="make a deal"
          objectfit="inherit"
          sx={{
            height: 50,
            width: 50,
            m: '0 auto',
            pt: 2,
            gridColumn: 3,
            gridRow: 3,
          }}
        />
        <Typography
          color="secondary"
          sx={{
            display: 'grid',
            gridColumn: 3,
            gridRow: 4,
            m: '0 auto',
            pb: 4,
            fontSize: '25px',
            verticalAlign: 'bottom',
          }}
        >
          Make a deal
        </Typography>
        <Typography sx={{
          gridColumn: 3,
          gridRow: 5,
          pb: 2,
          maxWidth: '300px',
          textAlign: 'center',
          fontSize: '14px',
        }}
        >
          over 1 million+ homes for rent available on the website,
          we can match you with a house you will want to call home.
        </Typography>

        <Button
          smooth="true"
          to="/#find"
          component={HashLink}
          sx={{
            gridColumn: 3,
            gridRow: '6',
            m: '0 auto',
            height: 45,
            fontSize: '16px',
            color: theme.palette.secondary.main,
            ':hover': {
              background: 'transparent',
              color: theme.palette.primary.contrast,
            },
          }}
        >
          Find a home
          <NavigateNextIcon sx={{ fontSize: '1.5rem' }} />
        </Button>
      </Box>
      <Box sx={{
        display: 'grid',
        maxWidth: '1200px',
        m: '0 auto',
        pt: 5,
        p: 10,
        pl: 4,
        pr: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: theme.palette.primary.background,
      }}
      >
        <Typography color="secondary" align="center" sx={{ textAlign: 'start' }}>
          Sell your house
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            gridColumn: '1',
            gridRow: '2',
            pb: 2,
            fontWeight: 700,
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
        <Button
          smooth="true"
          to="/contact"
          component={Link}
          sx={{
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
