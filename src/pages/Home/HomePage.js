import React, { useEffect, useState } from 'react'
import { Typography, Container } from '@mui/material'
import { products } from '../../data'
import { HomePageStyles } from './HomePageStyles'
import { UseCart, UseCartActions } from '../../Providers/CartProvider'
import HomeCards from '../../components/HomeCards'
import checkInCard from '../../utils/checkInCard'

function HomePage() {

    const card = UseCart()
    const [dataCard, setDataCard] = useState(card)

    const classes = HomePageStyles()

    useEffect(() => {
        setDataCard(card)
    }, [card, dataCard])

    const render = () => {
        let value = ""

        if (!products) {
            value = <div>
                <h4>Loading...</h4>
            </div>
        }

        else if (products && products.length > 0) {
            value = products.map((item) => (
                <HomeCards
                    key={item.id}
                    card={card}
                    checkInCard={checkInCard}
                    classes={classes}
                    item={item}
                />
            ))
        }

        return value
    }

    return (
        <Container className="mt-5">
            <Typography className="text-center" variant="h2">Products</Typography>
            <div className={classes.container}>
                {render()}
            </div>
        </Container>
    )
}

export default HomePage
