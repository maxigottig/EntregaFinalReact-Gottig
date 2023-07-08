import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./ItemDetailContainer.css"
import { useState } from 'react';
import Contador from '../Contador/Contador';


const ItemDetail = ({title, image, description, price}) => {

return (
    <div className= "DetailedProduct">

<Card sx={{ maxWidth: 380 }} >
        <CardMedia
        component="img"
        height="340"
        image={image}
        alt={title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title} - <Typography sx={{color: "green"}}>${price}</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        <Contador></Contador>
        </CardContent>

    </Card>

    </div>
    );
};
export default ItemDetail