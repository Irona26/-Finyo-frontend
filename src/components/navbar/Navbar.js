import logo from "./../../img/logo.png";

import { Box} from '@mui/material';
import {Typography} from '@mui/material';
import { red } from "@mui/material/colors";



export default function Navbar() {
    const preventDefault = (event) => event.preventDefault();
  
    return (
      <Typography
       color="inherit">
    
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 120px)', backgroundColor: red }}>
     
          </Box>
        
      </Typography>
    );
  }

