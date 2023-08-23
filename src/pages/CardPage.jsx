import { React, useContext, useMemo } from 'react';

import { useTheme } from '@mui/material/styles';

import { Box, Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

import aparts from '../fixtures/buy';
import CurrencyData from '../fixtures/CurrencyData';
import Context from '../Context';

function CardPage() {
  const theme = useTheme();

  const { cardId } = useContext(Context);

  const detailedCard = useMemo(() => aparts.filter((apart) => {
    if (!apart.id.toLowerCase().includes(cardId)) {
      return false;
    }
    return true;
  }), [cardId]);

  return (
    <Box
      sx={{
        display: 'grid',
        width: '1200px',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        bgcolor: theme.palette.primary.light,
        justifyContent: 'center',
      }}
    >

      { detailedCard
        .map((apart) => (
          <>
            <Box
              sx={{
                display: 'grid',
                width: 'auto',
                gridColumn: 1,
                gridRow: 1,
                m: '0 auto',
                p: 4,
                pt: 10,
                pb: 10,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                image={apart.poster}
                alt={apart.name}
                title={apart.id}
                sx={{
                  display: 'grid',
                  gridColumn: '1/3',
                  gridRow: 1,
                  height: 375,
                  width: 525,
                  borderRadius: '10px',
                  boxShadow: 3,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  gridColumn: 1,
                  gridRow: 2,
                  p: 2,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                {apart.name}
                {' '}
                {apart.category}
              </Typography>
              <Rating
                name="rating"
                defaultValue={4}
                precision={0.5}
                sx={{
                  gridColumn: 2,
                  gridRow: 2,
                }}
              />
              <Box
                sx={{
                  display: 'grid',
                  gridColumn: '1/3',
                  gridRow: 5,
                  mb: 2,
                  border: '2px dotted',
                  borderRadius: '10px',
                  borderColor: theme.palette.primary.contrast,
                }}
              >
                <WeekendOutlinedIcon sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  m: '0 auto',
                  p: 2,
                  pb: 1,
                  fontSize: '2rem',
                  color: theme.palette.secondary.main,
                }}
                />
                <Typography
                  color="primary"
                  sx={{
                    display: 'grid',
                    gridColumn: 1,
                    gridRow: 3,
                    m: '0 auto',
                    p: 2,
                    pt: 0,
                    fontSize: '15px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1,
                  }}
                >
                  {apart.name}
                  <br />
                  {apart.category}
                </Typography>
                <DomainOutlinedIcon sx={{
                  gridColumn: 2,
                  gridRow: 1,
                  m: '0 auto',
                  p: 2,
                  pb: 1,
                  fontSize: '2rem',
                  color: theme.palette.secondary.main,
                }}
                />
                <Typography
                  color="primary"
                  sx={{
                    display: 'grid',
                    gridColumn: 2,
                    gridRow: 3,
                    m: '0 auto',
                    p: 2,
                    pt: 0,
                    fontSize: '15px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1,
                  }}
                >
                  {apart.floor}
                  {' '}
                  floor
                </Typography>
                <HomeOutlinedIcon sx={{
                  gridColumn: 3,
                  gridRow: 1,
                  m: '0 auto',
                  p: 2,
                  pb: 1,
                  fontSize: '2rem',
                  color: theme.palette.secondary.main,
                }}
                />
                <Typography
                  color="primary"
                  sx={{
                    display: 'grid',
                    gridColumn: 3,
                    gridRow: 3,
                    m: '0 auto',
                    p: 2,
                    pt: 0,
                    fontSize: '15px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1,
                  }}
                >
                  {apart.year}
                  <br />
                  year built
                </Typography>
                <WindowOutlinedIcon sx={{
                  gridColumn: 4,
                  gridRow: 1,
                  m: '0 auto',
                  p: 2,
                  pb: 1,
                  fontSize: '2rem',
                  color: theme.palette.secondary.main,
                }}
                />
                <Typography
                  color="primary"
                  sx={{
                    display: 'grid',
                    gridColumn: 4,
                    gridRow: 3,
                    m: '0 auto',
                    p: 2,
                    pt: 0,
                    fontSize: '15px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1,
                  }}
                >
                  {apart.area}
                  <br />
                  area
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'grid',
                width: 'auto',
                height: '500px',
                gridColumn: 2,
                gridRow: 1,
                p: 4,
                mt: 10,
                pb: 4,
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
                borderRadius: '10px',
                bgcolor: theme.palette.primary.light,
              }}
            >
              <Typography
                sx={{
                  gridColumn: '1/3',
                  gridRow: 1,
                  fontWeight: 500,
                  textAlign: 'start',
                  color: theme.palette.secondary.main,
                }}
              >
                Brief information
              </Typography>

              <Typography
                variant="h4"
                component="p"
                sx={{
                  gridColumn: '1/3',
                  gridRow: 2,
                  fontWeight: 600,
                  alignItems: 'center',
                  color: theme.palette.primary.main,
                }}
              >
                <LocalOfferOutlinedIcon />
                {' '}
                {apart.price[1]}
                {' '}
                {CurrencyData[1]}
              </Typography>
              <Typography
                sx={{
                  gridColumn: '1/3',
                  gridRow: 3,
                  pb: 2,
                  fontWeight: 500,
                  textAlign: 'start',
                  alignItems: 'start',
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                {apart.price[2]}
                {' '}
                {CurrencyData[2]}
                *
                /
                {apart.price[3]}
                {' '}
                {CurrencyData[3]}
                *
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  gridColumn: '1/3',
                  gridRow: 4,
                  pb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                <LocationOnOutlinedIcon />
                {apart.adress}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  gridColumn: '1/3',
                  gridRow: 5,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                Description:
              </Typography>
              <Typography
                sx={{
                  gridColumn: '1/3',
                  gridRow: 6,
                  width: '400px',
                  mb: 2,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                {apart.description}
              </Typography>
              <Typography
                sx={{
                  gridColumn: 1,
                  gridRow: 7,
                  fontWeight: 500,
                  color: theme.palette.secondary.main,
                }}
              >
                Owner:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  gridColumn: 1,
                  gridRow: 8,
                  fontWeight: 500,
                  textAlign: 'start',
                  color: theme.palette.primary.main,
                }}
              >
                {apart.owner}
              </Typography>
              <Button
                sx={{
                  gridColumn: '1/3',
                  gridRow: 9,
                  m: '0 auto',
                  mt: 4,
                  mb: 4,
                  width: 200,
                  border: '1px solid inherit',
                  height: 45,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.light,
                  ':hover': {
                    color: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.contrast,
                  },
                }}
              >
                Show contacts
              </Button>
            </Box>
          </>
        ))}
    </Box>
  );
}

export default CardPage;
