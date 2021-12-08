import React, { useEffect } from 'react'
import { Badge, Typography } from '@mui/material'
import { NavigationStyles } from './NavigationStyles'
import { Link, NavLink } from 'react-router-dom'
import { UseCart } from '../../Providers/CartProvider'
import { ShoppingCart } from '@mui/icons-material'

function Navigation() {

    const classes = NavigationStyles()
    const card = UseCart()

    const length = card && card.length ? card.length : 0

    return (
        <header className={classes.container}>
            <nav>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => "" + (isActive ? classes.active : "")}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cards" className={({ isActive }) => "" + (isActive ? classes.active : "")}>Cards</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Link to="/cards">
                <Badge badgeContent={length} color="primary" >
                    <ShoppingCart color="secondary" fontSize="large" />
                </Badge>
            </Link>
            <Typography variant="h5">Hossein shop</Typography>
        </header >
    )
}

export default Navigation
