import React, { useContext, useMemo, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import Cards from './Cards';
import aparts from './fixtures/data';
import CurrencyData from './fixtures/CurrencyData';

import Context from './Context';

function CardsList() {
  const { getValues } = useFormContext();

  const ApartItem = getValues().currentApartment;
  const StreetName = getValues().currentStreet;
  const RoomItem = getValues().currentRoomQuant;
  const MinPrice = getValues().fromPrice;
  const MaxPrice = getValues().lastPrice;
  const CurrencyItem = getValues().currency;

  const {
    firstCardIndex, lastCardIndex, isFormSubmitted, setLength,
  } = useContext(Context);

  const cardListFilter = useMemo(() => aparts.filter((apart) => {
    if (ApartItem !== '') {
      if (!apart.category.toLowerCase().includes(ApartItem)) {
        return false;
      }
    }
    if (StreetName !== '') {
      if (!apart.street.includes(StreetName)) {
        return false;
      }
    }

    if (RoomItem !== '') {
      if (!apart.rooms.toString().includes(RoomItem)) {
        return false;
      }
    }

    if (MinPrice !== '') {
      if (apart.price[CurrencyItem] <= MinPrice) {
        return false;
      }
    }

    if (MaxPrice) {
      if (apart.price[CurrencyItem] > MaxPrice) {
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
            currency={CurrencyData[CurrencyItem]}
            price={apart.price[CurrencyItem]}
            street={apart.street}
            adress={apart.adress}
          />
        )).slice(firstCardIndex, lastCardIndex)}
    </Grid>
  );
}

export default CardsList;
