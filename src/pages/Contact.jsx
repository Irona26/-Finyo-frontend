import React from 'react';

import {
  Typography, Box, Button, TextField,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';

import useScrollTo from '../useScrollTo';

export default function Contact() {
  const theme = useTheme();
  useScrollTo();
  return (
    <>
      <Box
        sx={{
          maxWidth: '1200px',
          m: '0 auto',
          p: 4,
          pt: 6,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.primary.background,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: '700px',
            m: '0 auto',
            pb: 2,
            fontSize: '46px',
            fontWeight: '700',
            color: theme.palette.primary.main,
          }}
        >
          Have Question? Get in touch!
        </Typography>
        <Typography
          sx={{
            width: '600px',
            m: '0 auto',
            textAlign: 'center',
          }}
        >
          A great plateform to buy, sell and rent your properties
          without any agent or commisions.
        </Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        pb: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
      >

        <Box
          sx={{
            display: 'grid',
            gridColumn: 1,
            gridRow: 1,
            width: '300px',
            height: '300px',
            m: 4,
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px dotted',
            borderColor: theme.palette.primary.contrast,
            ':hover': {
              boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          <MarkEmailReadOutlinedIcon sx={{
            display: 'grid',
            gridColumn: 1,
            gridRow: 1,
            m: '0 auto',
            mt: 3,
            fontSize: '3rem',
            color: theme.palette.secondary.main,
          }}
          />
          <Typography
            color="secondary"
            sx={{
              display: 'grid',
              gridColumn: 1,
              gridRow: 2,
              m: '0 auto',
              fontSize: '25px',
              textAligh: 'center',
            }}
          >
            Email Address
          </Typography>
          <StraightOutlinedIcon sx={{
            display: 'grid',
            gridColumn: 1,
            gridRow: 3,
            m: '0 auto',
            fontSize: '2rem',
            color: theme.palette.secondary.main,
          }}
          />
          <Typography sx={{
            display: 'grid',
            gridColumn: 1,
            gridRow: 4,
            m: '0 auto',
            pb: 4,
            textAlign: 'center',
            fontSize: '18px',
            color: theme.palette.primary.main,
          }}
          >
            email@finyo.com
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridColumn: 2,
            gridRow: 1,
            width: '300px',
            height: '300px',
            m: 4,
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px dotted',
            borderColor: theme.palette.primary.contrast,
            ':hover': {
              boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          <MobileFriendlyOutlinedIcon sx={{
            display: 'grid',
            gridColumn: 2,
            gridRow: 1,
            m: '0 auto',
            mt: 3,
            fontSize: '3rem',
            color: theme.palette.secondary.main,
          }}
          />
          <Typography
            color="secondary"
            sx={{
              display: 'grid',
              gridColumn: 2,
              gridRow: 2,
              m: '0 auto',
              fontSize: '25px',
              textAligh: 'center',
            }}
          >
            Phone Number
          </Typography>
          <StraightOutlinedIcon sx={{
            display: 'grid',
            gridColumn: 2,
            gridRow: 3,
            m: '0 auto',
            fontSize: '2rem',
            color: theme.palette.secondary.main,
          }}
          />
          <Typography sx={{
            display: 'grid',
            gridColumn: 2,
            gridRow: 4,
            m: '0 auto',
            pb: 4,
            textAlign: 'center',
            fontSize: '18px',
            color: theme.palette.primary.main,
          }}
          >
            +13 674 567 75 54
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridColumn: 3,
            gridRow: 1,
            width: '300px',
            height: '300px',
            m: 4,
            border: '2px dotted',
            borderColor: theme.palette.primary.contrast,
            justifyContent: 'center',
            alignItems: 'center',
            ':hover': {
              boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          <WhereToVoteOutlinedIcon sx={{
            display: 'grid',
            gridColumn: 3,
            gridRow: 1,
            m: '0 auto',
            mt: 3,
            fontSize: '3rem',
            color: theme.palette.secondary.main,
          }}
          />
          <Typography
            color="secondary"
            sx={{
              display: 'grid',
              gridColumn: 3,
              gridRow: 2,
              m: '0 auto',
              fontSize: '25px',
              textAligh: 'center',
            }}
          >
            Office Address
          </Typography>
          <StraightOutlinedIcon sx={{
            display: 'grid',
            gridColumn: 3,
            gridRow: 3,
            m: '0 auto',
            fontSize: '2rem',
            color: theme.palette.secondary.main,
          }}
          />
          <Typography sx={{
            display: 'grid',
            gridColumn: 3,
            gridRow: 4,
            m: '0 auto',
            pb: 4,
            textAlign: 'center',
            fontSize: '18px',
            color: theme.palette.primary.main,
          }}
          >
            37, Bolshaya Troitskaya
            Grodno, Belarus
          </Typography>
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
    </>
  );
}
