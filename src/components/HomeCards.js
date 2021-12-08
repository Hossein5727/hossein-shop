import React from 'react'
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'

function HomeCards({ item, classes, checkInCard ,card}) {
    return (
        <div key={item.id}>
            <Card className={classes.cardContainer}>
                <CardHeader
                    title={<Typography variant="h5"><Favorite fontSize="large" /></Typography>}
                    action={checkInCard(card, item)}
                    className={classes.headerProduct}
                />
                <CardMedia
                    component="img"
                    className={classes.imgProduct}
                    image={item.image}
                    alt={item.id}
                />
                <CardContent className={classes.descProduct}>
                    <Typography variant="h5" color="gray" >
                        {item.name}
                    </Typography>
                    <Typography variant="h4" color="orange" >
                        $ {item.price}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}

export default HomeCards
