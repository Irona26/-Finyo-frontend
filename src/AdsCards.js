import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


const AdsCards = (props) => {
    const {category, name, price, poster, cur} = props;

    return (
        <Grid item md="4" sx={{border: '1px solid black', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
           <Card sx={{display: 'flex', flexDirection:'column' }}>
                <CardMedia
                image={poster}
                alt={name}
                title={name}
                sx={{height: 250, width: 350, display: 'flex', flexDirection:'column'}}
                />
                <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center' }}>
                    <Typography
                    variant="h6"
                    component="h3"
                    >
                        {name}
                    </Typography>

                    <Typography>
                    {category}
                    </Typography>

                    <Typography
                    variant="body1">
                    Price: {price} {cur}
                     
                    </Typography>
                </CardContent>

                <CardActions sx={{display: 'flex', flexDirection:'column', alignItems: 'center' }}>
                <Button  variant="outlined" size="medium"
                 sx={{border: '1px solid #b87f59', color: '#b87f59'}}>
                      View 
                    </Button>
                </CardActions>
            </Card>
     </Grid>
    )
}

export default AdsCards;