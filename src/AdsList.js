import React, { useContext } from 'react'
import AdsCards from './AdsCards'
import { Grid } from '@mui/material'
import aparts from './data'

const AdsList = (props) => {
  const { values } = props

  const filteredAparts = aparts.filter((apart) => {
    return apart.category.toLowerCase().includes(values.toLowerCase())
  })

  return (
    <Grid container fixed spacing={2}>
      {filteredAparts.map((apart, index) => (
        <AdsCards
          key={index}
          poster={apart.poster}
          name={apart.name}
          price={apart.price}
          category={apart.category}
        />
      ))}
    </Grid>
  )
}

export default AdsList
