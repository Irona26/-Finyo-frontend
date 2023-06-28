import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import {
  Box, Button, AppBar, Toolbar, IconButton, Typography,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import { Roofing } from '@mui/icons-material';
import backimg from '../../img/back1.png';

export default function Navbar() {
  const theme = useTheme();
  return (
    <AppBar
      className="appbar"
      position="static"
      sx={{
        width: '100%',
        display: 'inline-flex',
        gridTemplateColumns: 'repeat(4, 120px)',
        pl: 5,
        pr: 5,
        bgcolor: theme.palette.primary.background,
      }}
    >
      <Toolbar sx={{
        width: 'auto',
        justifyContent: 'space-between',
      }}
      >
        <Typography
          color="primary"
          variant="h3"
          component="span"
        >
          <IconButton
            color="primary"
            to="/"
            component={Link}
          >
            <Roofing sx={{ fontSize: '2rem' }} />
          </IconButton>
          FINYO
        </Typography>

        <Box
          sx={{
            width: 'auto',
            display: 'grid',
            margin: '10px 0',
            gridTemplateColumns: 'repeat(4, 120px)',
          }}
        >
          <Button
            color="secondary"
            sx={{
              fontSize: '18px',
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
              fontSize: '18px',
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
          <Button
            color="secondary"
            sx={{
              fontSize: '18px',
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
            color="secondary"
            sx={{
              fontSize: '18px',
              ':hover': {
                bgcolor: theme.palette.primary.contrast,
                color: theme.palette.primary.light,
              },
            }}
            to="/help"
            component={Link}
          >
            Help
          </Button>
        </Box>
        <CardMedia
          component="img"
          image={backimg}
          alt="houses"
          objectFit="inherit"
          sx={{
            height: 100,
            width: 500,
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
