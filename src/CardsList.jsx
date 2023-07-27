import React, { useContext, useMemo, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import Cards from './Cards';
import aparts from './fixtures/data';
import CurrencyData from './fixtures/CurrencyData';

import Context from './Context';

function CardsList() {
  const { getValues } = useFormContext();

  const {
    currentApartment: apartItem,
    currentStreet: streetName,
    currentRoomQuant: roomItem,
    fromPrice: minPrice,
    lastPrice: maxPrice,
    currency: currencyItem,
  } = getValues();

  const {
    firstCardIndex, lastCardIndex, isFormSubmitted, setLength,
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
  }), [isFormSubmitted]);

  useEffect(() => {
    setLength(cardListFilter.length);
  }, [cardListFilter.length]);

  return (
    <Grid
      container
      fixed
      spacing={2}
      sx={{
        boxSizing: 'content-box',
        width: '1200px',
        maxWidth: '1200px',
        m: '0 auto',
        p: 4,
        backgroundColor: '#eceff1',
      }}
    >

      { cardListFilter
        .map((apart) => (
          <Cards
            id={apart.id}
            poster={apart.poster}
            name={apart.name}
            category={apart.category}
            currency={CurrencyData[currencyItem]}
            price={apart.price[currencyItem]}
            street={apart.street}
            adress={apart.adress}
          />
        )).slice(firstCardIndex, lastCardIndex)}
    </Grid>
  );
}

export default CardsList;
