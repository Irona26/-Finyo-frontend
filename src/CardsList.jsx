import React, { useContext, useMemo, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import Cards from './Cards';
import CurrencyData from './fixtures/CurrencyData';

import Context from './Context';

function CardsList({ tab }) {
  const { getValues } = useFormContext();
  const aparts = tab;

  const {
    currentApartment: apartItem,
    currentStreet: streetName,
    currentRoomQuant: roomItem,
    fromPrice: minPrice,
    lastPrice: maxPrice,
    currency: currencyItem,
  } = getValues();

  const {
    firstCardIndex, lastCardIndex, isFormSubmitted, setLength, cardListLength,
  } = useContext(Context);

  const cardListFilter = useMemo(() => aparts.filter((apart) => {
    if (apartItem !== '') {
      if (!apart.category.toLowerCase().includes(apartItem)) {
        return false;
      }
    }
    if (streetName !== '') {
      if (!apart.street.includes(streetName)) {
        return false;
      }
    }

    if (roomItem !== '') {
      if (!apart.rooms.toString().includes(roomItem)) {
        return false;
      }
    }

    if (minPrice !== '') {
      if (apart.price[currencyItem] <= minPrice) {
        return false;
      }
    }

    if (maxPrice) {
      if (apart.price[currencyItem] > maxPrice) {
        return false;
      }
    }
    return true;
  }), [isFormSubmitted, apartItem, streetName, roomItem, minPrice, maxPrice, aparts]);

  useEffect(() => {
    setLength(cardListFilter.length);
  }, [cardListFilter.length]);

  return (
    <Grid
      container
      fixed="true"
      spacing={2}
      sx={{
        boxSizing: 'content-box',
        width: '1200px',
        maxWidth: '1200px',
        justifyContent: 'space-evenly',
        m: '0 auto',
        p: 4,
        backgroundColor: '#eceff1',
      }}
    >

      { (cardListLength !== 0)
        ? cardListFilter
          .map((apart) => (
            <Cards
              key={apart.id}
              id={apart.id}
              poster={apart.poster}
              name={apart.name}
              category={apart.category}
              currency={CurrencyData[currencyItem]}
              price={apart.price[currencyItem]}
              street={apart.street}
              adress={apart.adress}
            />
          )).slice(firstCardIndex, lastCardIndex) : (
            <Typography
              color="secondary"
              sx={{
                display: 'grid',
                m: 5,
                fontSize: '25px',
                verticalAlign: 'bottom',
              }}
            >
              No results
              <SentimentVeryDissatisfiedIcon
                sx={{
                  m: '0 auto',
                  fontSize: 80,
                }}
              />
            </Typography>
        )}
    </Grid>
  );
}

CardsList.propTypes = {
  tab: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    poster: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.objectOf(PropTypes.number),
    street: PropTypes.string,
    adress: PropTypes.string,
  })).isRequired,
};

export default CardsList;
