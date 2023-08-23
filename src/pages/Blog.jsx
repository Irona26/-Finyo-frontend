import React from 'react';
import { Link } from 'react-router-dom';

import {
  Typography, Box, TextField,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { useTheme } from '@mui/material/styles';
import useScrollTo from '../useScrollTo';

import blogimg1 from '../img/visit.jpg';
import blogimg2 from '../img/townhouses.jpg';
import blogimg3 from '../img/grodno.jpg';

export default function Blog() {
  const theme = useTheme();
  useScrollTo(0, 0);
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        pt: 0,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.primary.light,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          width: 'auto',
          maxWidth: '1200px',
          m: '0 auto',
          pt: 10,
          alignItems: 'center',
          bgcolor: theme.palette.primary.background,
        }}
      >
        <Typography
          component="span"
          color="secondary"
          sx={{
            m: '0 auto',
            gridRow: 1,
            textAlign: 'center',
          }}
        >
          FINYO / REAL ESTATE / BLOG
        </Typography>
        <Typography
          variant="h2"
          sx={{
            gridRow: 2,
            pb: 2,
            fontSize: '46px',
            fontWeight: '700',
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Welcome to our blog!
        </Typography>

        <Typography
          sx={{
            gridRow: 3,
            pb: 4,
            textAlign: 'center',
          }}
        >
          Analytics, overview, advices, news
        </Typography>

      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1200px',
          justifyContent: 'space-between',
          mt: 10,
          mb: 10,
          p: 0,
        }}
      >
        <Box>
          <Card sx={{
            width: 'auto',
            alignItems: 'center',
            boxShadow: 0,
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.background,
            ':hover': {
              boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
            },
          }}
          >
            <CardMedia
              image={blogimg1}
              alt="Places to visit in Grodno"
              title="Places to visit"
              sx={{
                height: 250, width: 350, display: 'flex', flexDirection: 'column', boxShadow: 3,
              }}
            >

              <Button
                smooth="true"
                to="/blog/visit"
                component={Link}
                variant="outlined"
                size="medium"
                sx={{
                  width: '280px',
                  height: '80px',
                  p: -2,
                  m: '0 auto',
                  position: 'relative',
                  top: '150px',
                  zIndex: 7,
                  backgroundColor: 'rgb(255, 193, 7, 0.85)',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: '18px',
                  color: theme.palette.primary.light,
                  textAlign: 'center',
                  lineHeight: '1.3',
                  ':hover': {
                    backgroundColor: 'rgb(236, 239, 241, 0.7)',
                    color: theme.palette.secondary.main,
                    border: 'none',
                  },
                }}
              >
                Places to visit in summer in Belarus
              </Button>
            </CardMedia>
          </Card>

        </Box>
        <Box>
          <Card sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.background,
            boxShadow: 0,
            ':hover': {
              boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
            },
          }}
          >
            <CardMedia
              image={blogimg2}
              alt="Buying a Townhouse"
              title="Buying a Townhouse"
              sx={{
                height: 250, width: 350, display: 'flex', flexDirection: 'column', boxShadow: 3,
              }}
            >

              <Button
                smooth="true"
                to="/blog/townhouses"
                component={Link}
                variant="outlined"
                size="medium"
                sx={{
                  width: '280px',
                  height: '80px',
                  p: -2,
                  m: '0 auto',
                  position: 'relative',
                  top: '150px',
                  zIndex: 7,
                  backgroundColor: 'rgb(255, 193, 7, 0.85)',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: '18px',
                  color: theme.palette.primary.light,
                  textAlign: 'center',
                  lineHeight: '1.3',
                  ':hover': {
                    backgroundColor: 'rgb(236, 239, 241, 0.7)',
                    color: theme.palette.secondary.main,
                    border: 'none',
                  },
                }}
              >
                Buying a Townhouse:
                <br />
                6 Pros and Cons
              </Button>
            </CardMedia>
          </Card>
        </Box>

        <Box>
          <Card sx={{
            display: 'flex',
            alignItems: 'center',
            boxShadow: 0,
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.background,
            ':hover': {
              boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
            },
          }}
          >
            <CardMedia
              image={blogimg3}
              alt="Places to visit in Grodno"
              title="Places to visit"
              sx={{
                height: 250, width: 350, display: 'flex', flexDirection: 'column', boxShadow: 3,
              }}
            >

              <Button
                smooth="true"
                to="/blog/grodno"
                component={Link}
                variant="outlined"
                size="medium"
                sx={{
                  width: '280px',
                  height: '80px',
                  p: -2,
                  m: '0 auto',
                  position: 'relative',
                  top: '150px',
                  zIndex: 7,
                  backgroundColor: 'rgb(255, 193, 7, 0.85)',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: '18px',
                  color: theme.palette.primary.light,
                  textAlign: 'center',
                  lineHeight: '1.3',
                  ':hover': {
                    backgroundColor: 'rgb(236, 239, 241, 0.7)',
                    color: theme.palette.secondary.main,
                    border: 'none',
                  },
                }}
              >
                Grodno: about
              </Button>
            </CardMedia>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          maxWidth: '1200px',
          p: 4,
          m: '0 auto',
          mb: 10,
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.palette.primary.background,
          boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          component="p"
          sx={{
            gridColumn: '1/4',
            gridRow: '1',
            color: theme.palette.primary.contrast,
          }}
        >
          Subscribe To Our Newsletter & Get News
        </Typography>
        <Typography
          component="span"
          sx={{
            gridColumn: '1/4',
            gridRow: '2',
            width: 'auto',
            m: '10px 0',
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Get notification about product discount and new place just for you
        </Typography>
        <Box
          sx={{
            gridColumn: '2',
            gridRow: '3',
            alignItems: 'center',
          }}
        >
          <TextField
            variant="outlined"
            sx={{
              width: '350px',
              bgcolor: '#ffffff',
              border: 'none',
              borderRadius: 3,
            }}
          />
          <Button
            sx={{
              gridColumn: '3',
              gridRow: '3',
              m: 1,
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
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
