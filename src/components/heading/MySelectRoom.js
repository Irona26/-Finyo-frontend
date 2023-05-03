import React from 'react';
import { Select, MenuItem } from '@mui/material';
//import {Grid} from "@mui/material";
//import aparts from '../../data';



const MySelectRoom = ({options, defaultValue, value, onChange}) => {


    return (

 
        <>
        <Select

         value={value}
          onChange={(event) => onChange(event.target.value)}>
            {options.map(option =>
                <MenuItem  key={option.value} value={option.value}>
                    {option.name}
                    
                </MenuItem>
                
         
            )}

             
        </Select>

        </>
    );
}; 

export default MySelectRoom;