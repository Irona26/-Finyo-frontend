import React from 'react';
import Grid from "@mui/material/Grid";
import AdsCards from './AdsCards';
import aparts from './data';

    const AdsList = (props) => {
        
const {filtrAp} = props;
const {filtrRo} = props;
const {filtrCur} = props;
const {filtrFP} = props;
const {filtrLP} = props;

   
    const filteredAparts = aparts.filter(apart => {
        return apart.category.toLowerCase().includes(filtrAp.toLowerCase())
    
    });

    const filteredRooms = filteredAparts.filter(apartN => {
        return apartN.rooms.toString().includes(filtrRo.toLowerCase())
    
    });

    const filteredPrice = filteredRooms.filter(apartNN => {

        if (filtrCur === 1) {
        
        if (apartNN.price >= filtrFP && apartNN.price <= filtrLP){
        return apartNN.price.toString()}  
        }

        if (filtrCur === 2) {
            if (apartNN.price2 >= filtrFP && apartNN.price2 <= filtrLP){
            return apartNN.price2.toString()}
        } 
      
        if (filtrCur === 3) {
            if (apartNN.price3 >= filtrFP && apartNN.price3 <= filtrLP){
            return apartNN.price3.toString()}
        } 

});
  

    return (
        <Grid container fixed spacing={2} >

        {
            filteredPrice.map(apartNN =>
            <AdsCards
                poster={apartNN.poster}
                name={apartNN.name}
                category={apartNN.category}
                
                cur={ filtrCur === 1
                            ? apartNN.cur1
                             : filtrCur === 2
                                  ? apartNN.cur2
                                        : filtrCur === 3 && apartNN.cur3 
                     }


                price={ filtrCur === 1
                            ? apartNN.price
                             : filtrCur === 2
                                  ? apartNN.price2
                                        : filtrCur === 3 && apartNN.price3 
                     }
            />
        )} 
        </Grid>
    );
 }

export default AdsList;