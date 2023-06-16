import logo from "./../../img/logo.png";

import { Box} from '@mui/material';
import {Typography} from '@mui/material';
import { red} from "@mui/material/colors";
import {Link} from 'react-router-dom';





export default function Navbar() {
    const preventDefault = (event) => event.preventDefault();
  
    return (
      <Typography
       color="inherit">
      
      <Box sx={{ display: 'grid', margin: 10, gridTemplateColumns: 'repeat(7, 120px)', backgroundColor: red }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/help">Help</Link>
            
</Box>

        
      </Typography>
    );
  }

