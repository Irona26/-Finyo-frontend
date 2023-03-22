import "./style.css";
import React, {useContext,useState} from 'react';
import { AppBar, IconButton, Toolbar, Typography, FormControl, InputLabel, Popper, Button } from "@mui/material"
import Search from '../../Search';
import { Roofing } from "@mui/icons-material"
import Navbar from "../../components/navbar/Navbar";

import MySelectRoom from "./MySelectRoom";
import {SearchApartContext, SearchApartContextCopy} from "../../SearchApartContext";
import ApartsFilter from "./ApartsFilter";
import RoomsFilter from "./RoomsFilter";
import PriceFilter from "./PriceFilter";
import { red } from "@mui/material/colors";



function Header() {
  return (
    <>

      <AppBar className="appbar" position="static" sx={{backgroundColor: '#b87f59'}} >
        <Toolbar>
          <IconButton
            color="inherit"
          >
            <Roofing />
          </IconButton>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 0.5 }}
          >
            FINYO
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <div className="heading">

        <h2> Let's Find</h2>

        <ul className="search-container">
          
            <FormControl id="aparment-search" variant="standard" sx={{ m: 1, minWidth: 120, color: '#b87f59'}}>
              <InputLabel >Apartment</InputLabel>

              <ApartsFilter />
    
            </FormControl>

            <Search />

            <PriceFilter />
            
      
            <FormControl id="room-quant-search" variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Rooms</InputLabel>

              <RoomsFilter />
             
            </FormControl>
          
            <Button variant="outlined" size="small"
              sx={{ border: '1px solid #b87f59', minWidth: 120, color: 'black'}}>
              Advance Search
            </Button>

            <Button variant="contained" size="medium"
              sx={{ border: '1px solid inherit', minWidth: 120, color: 'black', backgroundColor: '#b87f59' }}>
              Search
            </Button>
     
        </ul>
      </div>

    </>
  )
}

export default Header;