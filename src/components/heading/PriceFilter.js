import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Input from "@mui/material/Input"



function PriceFilter () {

  const [open, setOpen] = useState(false);
  const [firstprice, setFirstPrice] = useState('');
  const [lastprice, setLastPrice] = useState('');
  const [currency, setCurrency] = useState('');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{color: 'black'}}>Price</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          
            <FormControl sx={{ m: 1, minWidth: 50 }}>
              <InputLabel>From</InputLabel>
              <Input variant="outlined" 
                value={firstprice}
                onChange={(event) => setFirstPrice(event.target.value)}
                type='number' 
        
              >
              </Input>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 50 }}>
              <InputLabel>To</InputLabel>
              <Input variant="outlined" 
                 value={lastprice}
                onChange={(event) => setLastPrice(event.target.value)}
                type='number' 
              >
              </Input>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 50 }}>
              <InputLabel>$</InputLabel>
              <Select
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
              >
                <MenuItem value={10}>BYN</MenuItem>
                <MenuItem value={20}>$</MenuItem>
                <MenuItem value={30}>€</MenuItem>
              </Select>
            </FormControl>
          </Box>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PriceFilter;



