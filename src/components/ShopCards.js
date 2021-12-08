import React from 'react'
import { Button, Container, Grid, Box, TextField, Card, CardContent, Typography, Fab, Badge } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';


function ShopCards({
    item,
    classes,
    incrementQty,
    decrementQty,
    deleteCard
}) {
    return (
        <div>
            <Card key={item.id} className={classes.containerCard}>
                <article className={classes.imgCard}>
                    <img src={item.image} />
                </article>
                <section className={classes.descCard}>
                    <h1 className={classes.price}>$ {item.price}</h1>
                    <div className={classes.desc}>
                        {item.description.map(item => (<p>{item.support}</p>))}
                    </div>
                    {item.offPrice < item.price && (
                        <div className={classes.fabOff}>
                            <Fab size="large" className="flex flex-col">
                                <p className="text-xl">{item.offPrice}$</p>
                                <p className=" transform -rotate-12 text-green-600">OFF</p>
                            </Fab>
                        </div>
                    )}
                    <br />
                    <h2>
                        {item.name}
                    </h2>
                    <hr />
                    <Box className={classes.box}>
                        <Grid container className="flex justify-center items-center">
                            <Grid item xs={4}><Button fullWidth variant="outlined" onClick={() => incrementQty(item.id)}>+</Button></Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={2}><TextField disabled color="secondary" value={item.qty} /></Grid>
                            <Grid item xs={1}></Grid>
                            {item.qty > 1 ? (

                                <Grid item xs={4}><Button fullWidth variant="outlined" onClick={() => decrementQty(item.id)}>
                                    -
                                </Button></Grid>
                            ) : (
                                <Grid item xs={4}><Button fullWidth variant="outlined" onClick={() => deleteCard(item.id)}>
                                    <DeleteIcon />
                                </Button></Grid>
                            )}
                        </Grid>
                    </Box>
                </section>
            </Card>
        </div>
    )
}

export default ShopCards
