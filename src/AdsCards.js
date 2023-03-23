import React from 'react'
import { CenterFocusStrong } from '@mui/icons-material'
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Card,
  CardActions
} from '@mui/material'

const AdsCards = (props) => {
  const { category, name, price, poster } = props

  return (
    <Grid
      item
      md="4"
      sx={{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          image={poster}
          alt={name}
          title={name}
          sx={{
            height: 250,
            width: 350,
            display: 'flex',
            flexDirection: 'column'
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" component="h3">
            {name}
          </Typography>

          <Typography>{category}</Typography>

          <Typography variant="body1">Price: {price} $</Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Button
            variant="outlined"
            size="medium"
            sx={{
              border: '1px solid #b87f59',
              color: '#b87f59',
              '&:hover': {
                background: 'red'
              }
            }}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default AdsCards
