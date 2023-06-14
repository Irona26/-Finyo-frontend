import React, { useContext, useMemo } from 'react';

import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import Cards from './Cards';
import aparts from './fixtures/data';

import Context from './Context';

function CardsList() {
  const { getValues } = useFormContext();

  const ApartItem = getValues().currentApartment;
  const RoomItem = getValues().currentRoomQuant;
  const MinPrice = getValues().fromPrice;
  const MaxPrice = getValues().lastPrice;
  const CurrencyItem = getValues().currency;

  const {
    firstCardIndex, lastCardIndex, isFormSubmitted, cardListLength, setLength,
  } = useContext(Context);

  const CURRENCY = {
    1: 'BYN',
    2: '$',
    3: '€',
  };
  const val = CurrencyItem;
  let arrayLength = 0;

  const cardListFilter = () => aparts.filter((apart) => {
    if (ApartItem !== '') {
      if (!apart.category.toLowerCase().includes(ApartItem)) {
        return false;
      }
    }

    if (RoomItem !== '') {
      if (!apart.rooms.toString().includes(RoomItem)) {
        return false;
      }
    }

    if (MinPrice !== '') {
      if (apart.price[val] <= MinPrice) {
        return false;
      }
    }

    if (MaxPrice) {
      if (apart.price[val] >= MaxPrice) {
        return false;
      }
    }
    arrayLength += 1;
    setLength(arrayLength);
    return true;
  }, console.log('total', arrayLength, cardListLength));

  const startFilter = useMemo(() => cardListFilter(), [isFormSubmitted]);

  return (
    <Grid container fixed spacing={2} sx={{ backgroundColor: '#eceff1' }}>

      { startFilter
        .map((apart) => (
          <Cards
            poster={apart.poster}
            name={apart.name}
            category={apart.category}
            cur={CURRENCY[val]}
            price={apart.price[val]}
          />
        )).slice(firstCardIndex, lastCardIndex)}
    </Grid>
  );
}

export default CardsList;
