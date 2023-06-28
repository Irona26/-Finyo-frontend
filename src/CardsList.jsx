import React, { useContext, useMemo } from 'react';

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
    firstCardIndex, lastCardIndex, isFormSubmitted, cardListLength, setLength,
  } = useContext(Context);

  const index = CurrencyItem;

  let arrayLength = 0;

  const cardListFilter = () => aparts.filter((apart) => {
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
      if (apart.price[index] <= MinPrice) {
        return false;
      }
    }

    if (MaxPrice) {
      if (apart.price[index] >= MaxPrice) {
        return false;
      }
    }
    arrayLength += 1;
    setLength(arrayLength);
    return true;
  }, console.log('total', cardListLength));

  const startFilter = useMemo(() => cardListFilter(), [isFormSubmitted]);

  return (
    <Grid container fixed spacing={2} sx={{ backgroundColor: '#eceff1' }}>

      { startFilter
        .map((apart) => (
          <Cards
            poster={apart.poster}
            name={apart.name}
            category={apart.category}
            currency={CurrencyData[index]}
            price={apart.price[index]}
            street={apart.street}
          />
        )).slice(firstCardIndex, lastCardIndex)}
    </Grid>
  );
}

export default CardsList;
