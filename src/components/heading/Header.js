/* eslint-disable react/prop-types */
import './style.css'
import React, { useContext, useEffect } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Button
} from '@mui/material'
import Search from '../../Search'
import { Roofing } from '@mui/icons-material'
import Navbar from '../../components/navbar/Navbar'

import ApartsFilter from './ApartsFilter'
import RoomsFilter from './RoomsFilter'
import PriceFilter from './PriceFilter'
import GlobalContext from '../../SearchApartContext'

function Header ({ test123 }) {
  const context = useContext(GlobalContext)

  return (
    <>
      <AppBar
        className="appbar"
        position="static"
        sx={{ backgroundColor: '#b87f59' }}
      >
        <Toolbar>
          <IconButton color="inherit">
            <Roofing />
          </IconButton>
          <Typography variant="h6" component="span" sx={{ flexGrow: 0.5 }}>
            FINYO
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <div className="heading">
        <h2> Let&apos;s Find</h2>

        <ul className="search-container">
          <FormControl
            id="aparment-search"
            variant="standard"
            sx={{ m: 1, minWidth: 120, color: '#b87f59' }}
          >
            <InputLabel>Apartment</InputLabel>

            <ApartsFilter />
          </FormControl>

          <Search />

          <PriceFilter test654={test123} />

          <FormControl
            id="room-quant-search"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel>Rooms</InputLabel>

            <RoomsFilter />
          </FormControl>

          <Button
            variant="outlined"
            size="small"
            sx={{ border: '1px solid #b87f59', minWidth: 120, color: 'black' }}
          >
            Advance Search
          </Button>

          <Button
            variant="contained"
            size="medium"
            sx={{
              border: '1px solid inherit',
              minWidth: 120,
              color: 'black',
              backgroundColor: '#b87f59'
            }}
          >
            Search
          </Button>
        </ul>
      </div>
    </>
  )
}

export default Header
