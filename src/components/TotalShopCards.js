import React from 'react'
import PaymentIcon from '@mui/icons-material/Payment';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { UseCart } from '../Providers/CartProvider';
import { Link } from 'react-router-dom'

function TotalShopCards({ classes, totalPrice, totalOffPrice }) {

    return (
        <div>
            <Card className={classes.totalCard}>
                <CardContent className="text-center">
                    <div className="flex justify-between mb-3">
                        <Typography variant="h5" className="mr-4" color="text.secondary">Paymant</Typography>
                        <PaymentIcon fontSize="large" />
                    </div>
                    <hr />
                    <div className="flex justify-between mt-3">
                        <Typography variant="h4" color="text.secondary">Total</Typography>
                        <Typography variant="h4" color="text.secondary">$ {totalPrice}</Typography>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-3">
                        <Typography variant="h5" color="green">Total of price</Typography>
                        <Typography variant="h4" color="green">$ {totalOffPrice}</Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.totalCard}>
                <CardContent>
                    <div className="flex justify-between mt-3">
                        <Typography variant="h4" color="primary.dark">Original price</Typography>
                        <Typography variant="h4" color="primary.dark">$ {totalOffPrice}</Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.totalCard}>
                <CardContent>
                    <Link to="/signup?redirect=/checkout">
                        <Button variant="contained" color="warning" fullWidth>checkout</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default TotalShopCards
