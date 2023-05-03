import React from 'react';
import { Select, MenuItem } from '@mui/material';


const MySelectApart = ({options, value, onChange}) => {


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

export default MySelectApart;