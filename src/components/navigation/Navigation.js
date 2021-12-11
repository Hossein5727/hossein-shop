import React, { useEffect } from 'react'
import { Badge, Button, IconButton, Typography } from '@mui/material'
import { NavigationStyles } from './NavigationStyles'
import { Link, NavLink } from 'react-router-dom'
import { UseCart } from '../../Providers/CartProvider'
import { AccountCircleOutlined, ShoppingCart } from '@mui/icons-material'
import { UseAuth } from '../../Providers/AuthProvider'

function Navigation() {

    const classes = NavigationStyles()
    const card = UseCart()
    const userData = UseAuth()

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
            <div className="flex p-2 items-center">
                {userData ? (
                    <>
                        <IconButton className="mr-3 cursor-pointer">
                            <AccountCircleOutlined
                                color="success"
                                fontSize="large"
                            />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Link to="/signup" >
                            <Button variant="text">Signup</Button>
                        </Link>
                        <Link to="/login" className="mr-4">
                            <Button variant="text">Login</Button>
                        </Link>
                    </>
                )}
                <Typography variant="h5" className={classes.title}>Hossein shop</Typography>
            </div>
        </header >
    )
}

export default Navigation
