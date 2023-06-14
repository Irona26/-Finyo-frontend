import React from 'react';

import { Link } from 'react-router-dom';

import {
  Typography, Box, Button, IconButton,
} from '@mui/material';
import { Roofing } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{
        width: 'auto',
        display: 'grid',
        gridAutoFlow: 'column',
        gap: '0 30%',
        gridTemplateColumns: '200px',
        gridTemplateRows: '15px, 50px',
        alignItems: 'center',
        outline: '1px solid #ffc107',
        outlineOffset: '-10px',
        p: 3,
        m: '0 auto',
      }}
    >
      <Typography
        color="#fffff"
        variant="h4"
        component="span"
        sx={{
          gridColumn: '1',
          gridRow: '1',
        }}
      >
        <IconButton
          color="inherit"
        >
          <Roofing sx={{ fontSize: '2rem' }} />
        </IconButton>
        FINYO
      </Typography>
      <Box sx={{
        gridColumn: '1',
        gridRow: '2',
      }}
      >
        <Typography
          sx={{
            gridColumn: '1',
            gridRow: '2',
          }}
        >
          You can support our project in socials!
        </Typography>

        <IconButton
          color="inherit"
        >
          <TelegramIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          color="inherit"
        >
          <InstagramIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          color="inherit"
        >
          <FacebookIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          color="inherit"
        >
          <LinkedInIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        sx={{
          gridColumn: '2',
          gridRow: '1',
          m: '0 10px 0 10px',
        }}
      >
        Links
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '2',
        gridRow: '2/3',
        alignItems: 'start',
      }}
      >
        <Button
          color="secondary"
          sx={{
            fontSize: '12px',
            ':hover': {
              bgcolor: '#ffc107',
              color: '#ffffff',
            },
          }}
          to="/"
          component={Link}
        >
          Home
        </Button>
        <Button
          color="secondary"
          sx={{
            fontSize: '12px',
            ':hover': {
              bgcolor: '#ffc107',
              color: '#ffffff',
            },
          }}
          to="/blog"
          component={Link}
        >
          Blog
        </Button>
        <Button
          color="secondary"
          sx={{
            fontSize: '12px',
            ':hover': {
              bgcolor: '#ffc107',
              color: '#ffffff',
            },
          }}
          to="/help"
          component={Link}
        >
          Help
        </Button>
        <Button
          color="secondary"
          sx={{
            fontSize: '12px',
            ':hover': {
              bgcolor: '#ffc107',
              color: '#ffffff',
            },
          }}
          to="/about"
          component={Link}
        >
          About
        </Button>
      </Box>
      <Typography
        variant="h6"
        sx={{
          m: 1,
          gridColumn: '3',
          gridRow: '1',
        }}
      >
        Contact us
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '3',
        gridRow: '2/3',
        alignItems: 'start',
      }}
      >
        <Button
          color="primary"
          sx={{
            fontSize: '15px',
            ':hover': {
              bgcolor: '#ffc107',
              color: '#ffffff',
            },
          }}
          to="mailto:email@contact.com"
          component={Link}
        >
          email@finyo.com
        </Button>
        <Button
          color="primary"
          sx={{
            fontSize: '15px',
            ':hover': {
              bgcolor: '#ffc107',
              color: '#ffffff',
            },
          }}
          to="+13 674 567 75 54"
          component={Link}
        >
          +13 674 567 75 54
        </Button>
      </Box>
    </Box>
  );
}
export default Footer;
