import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardCelulares = ({celular}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={celular.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {celular.celular}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {celular.modelo} | {celular.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};


export default CardCelulares;