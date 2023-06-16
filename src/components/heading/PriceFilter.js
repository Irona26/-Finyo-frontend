import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Context} from "../../Context";
import {useContext} from 'react';



function PriceFilter () {


  const [open, setOpen] = useState(false);

  const {firstprice, setFirstPrice} = useContext(Context);
  const {lastprice, setLastPrice} =useContext(Context);
  const {currency, setCurrency} = useContext(Context);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const setFP = (firstprice) => {
    setFirstPrice(firstprice)
    console.log(firstprice)
  };


  const setLP = (lastprice) => {
    setLastPrice(lastprice)
    console.log(lastprice)
  };

  const setCur = (currency) => {
    setCurrency(currency)
    console.log(currency)
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
                onChange={(event) => setFP(event.target.value)}
                type='number' 
        
              >
              </Input>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 50 }}>
              <InputLabel>To</InputLabel>
              <Input variant="outlined" 
                 value={lastprice}
                onChange={(event) => setLP(event.target.value)}
                type='number' 
              >
              </Input>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel>BYN</InputLabel>
              <Select
                value={currency}
                onChange={(event) => setCur(event.target.value)}
              >
                <MenuItem value={1}>BYN</MenuItem>
                <MenuItem value={2}>$</MenuItem>
                <MenuItem value={3}>€</MenuItem>
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



