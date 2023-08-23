import { React, useContext } from 'react';
import { PropTypes } from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import Context from './Context';

function Cards({
  id, category, name, price, poster, currency, adress,
}) {
  const { setCardId } = useContext(Context);

  const theme = useTheme();

  const setStateId = () => {
    setCardId(id);
  };

  return (
    <Grid
      item
      mb="4"
      sx={{
        m: '10px 0 10px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.background,
      }}
    >
      <Card sx={{
        display: 'flex',
        boxShadow: 0,
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.background,
        ':hover': {
          boxShadow: '10px 10px 10px rgb(8, 0, 92, 0.2)',
        },
      }}
      >
        <CardMedia
          image={poster}
          alt={name}
          title={id}
          sx={{
            height: 250, width: 350, display: 'flex', flexDirection: 'column', borderRadius: '10px', boxShadow: 3,
          }}
        >
          <Button
            id={id}
            smooth="true"
            to="/cardpage"
            component={Link}
            variant="outlined"
            size="medium"
            color="secondary"
            sx={{
              width: '350px',
              height: '40px',
              p: 0,
              position: 'relative',
              top: '180px',
              zIndex: 7,
              backgroundColor: 'rgb(236, 239, 241, 0.7)',
              border: 'none',
              borderRadius: 0,
              fontSize: '18px',
              ':hover': {
                bgcolor: 'rgb(255, 193, 7, 0.75)',
                color: theme.palette.primary.light,
                border: 'none',
              },
            }}
            onClick={setStateId}
          >
            View
          </Button>
        </CardMedia>
        <CardContent sx={{
          display: 'grid',
          pb: 0,
          gridAutoFlow: 'column',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
        >
          <Typography
            variant="body1"
            sx={{
              gridColumn: 2,
              gridRow: 1,
              color: theme.palette.primary.contrast,
              textAlign: 'end',
            }}
          >
            {price}
            {' '}
            {currency}
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              gridColumn: 1,
              gridRow: 1,
              color: theme.palette.primary.main,
            }}
          >
            {name}
          </Typography>

          <Typography sx={{
            gridColumn: 1,
            gridRow: 2,
          }}
          >
            {category}
          </Typography>

          <Typography sx={{
            gridColumn: '1/3',
            gridRow: 3,
          }}
          >
            {adress}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
};

export default Cards;
