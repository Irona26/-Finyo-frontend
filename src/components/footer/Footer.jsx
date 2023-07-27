import React from 'react';

import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import {
  Typography, Box, Button, IconButton,
} from '@mui/material';
import { Roofing } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'grid',
        width: 'auto',
        p: 3,
        m: '0 auto',
        gridAutoFlow: 'column',
        gap: '0 30%',
        gridTemplateColumns: '200px',
        gridTemplateRows: '15px, 50px',
        alignItems: 'center',
        background: theme.palette.primary.gradient,
      }}
    >
      <Typography
        variant="h4"
        component="span"
        sx={{
          gridColumn: '1',
          gridRow: '1',
          color: theme.palette.primary.contrast,
        }}
      >
        <IconButton
          sx={{ color: theme.palette.primary.contrast }}
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
            color: theme.palette.primary.light,
          }}
        >
          You can support our project in socials!
        </Typography>

        <IconButton
          sx={{
            color: theme.palette.primary.light,
            ':hover': {
              color: theme.palette.primary.contrast,
            },
          }}
        >
          <TelegramIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.primary.light,
            ':hover': {
              color: theme.palette.primary.contrast,
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.primary.light,
            ':hover': {
              color: theme.palette.primary.contrast,
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.primary.light,
            ':hover': {
              color: theme.palette.primary.contrast,
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Box>
      <Typography
        variant="h4"
        sx={{
          gridColumn: '2',
          gridRow: '1',
          m: '0 10px 0 10px',
          color: theme.palette.primary.contrast,
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
          sx={{
            fontSize: '12px',
            color: theme.palette.primary.light,
            ':hover': {
              bgcolor: theme.palette.primary.contrast,
              color: theme.palette.primary.light,
            },
          }}
          to="/"
          component={Link}
        >
          Home
        </Button>
        <Button
          sx={{
            fontSize: '12px',
            color: theme.palette.primary.light,
            ':hover': {
              bgcolor: theme.palette.primary.contrast,
              color: theme.palette.primary.light,
            },
          }}
          to="/blog"
          component={Link}
        >
          Blog
        </Button>
        <Button
          sx={{
            fontSize: '12px',
            color: theme.palette.primary.light,
            ':hover': {
              bgcolor: theme.palette.primary.contrast,
              color: theme.palette.primary.light,
            },
          }}
          to="/about"
          component={Link}
        >
          About
        </Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '3',
        gridRow: '1/3',
        alignItems: 'start',
      }}
      >
        <Button
          color="primary"
          sx={{
            fontSize: '15px',
            ':hover': {
              bgcolor: theme.palette.primary.contrast,
              color: theme.palette.primary.light,
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
              bgcolor: theme.palette.primary.contrast,
              color: theme.palette.primary.light,
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
