import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { UseCart, UseCartActions } from '../../Providers/CartProvider';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { CardsPageStyles } from './CardsPageStyles';
import ShopCards from '../../components/ShopCards';
import TotalShopCards from '../../components/TotalShopCards';

function CardsPage() {

    const card = UseCart()
    const { incrementQty, decrementQty, deleteCard } = UseCartActions()
    const classes = CardsPageStyles()

    const totalPrice = card.reduce((acc, item) => acc + item.qty * item.price, 0);
    const totalOffPrice = card.length > 0 && card.reduce((acc, item) => acc + item.qty * item.offPrice, 0);

    console.log(totalOffPrice);

    const render = () => {
        let value = "";

        if (card.length > 0) {
            value = <div>
                {card.map((item) => (
                    <ShopCards
                        key={item.id}
                        classes={classes}
                        decrementQty={decrementQty}
                        incrementQty={incrementQty}
                        deleteCard={deleteCard}
                        item={item}
                    />
                ))}
            </div>
        }

        return value
    }

    return (
        <Container className={classes.container}>
            {card.length > 0 ? (
                <Grid container maxWidth="lg" spacing={4}>
                    <Grid item xs={12} md={8}>
                        {render()}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TotalShopCards
                            classes={classes}
                            totalPrice={totalPrice}
                            totalOffPrice={totalOffPrice}
                        />
                    </Grid>
                </Grid>
            ) : (
                <div className="text-center">
                    <h4 className="text-5xl mb-3 text-red-500">No item in cart!</h4>
                    <Button variant="outlined" endIcon={<ShoppingCart />}><Link to="/" className="text-xl text-blue-700 "><h6>Go to Shop</h6></Link></Button>
                </div>
            )}
        </Container>
    )
}

export default CardsPage
