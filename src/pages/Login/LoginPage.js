import { Container } from '@mui/material'
import React from 'react'
import Login from '../../components/Login'
import { LoginStyles } from './LoginStyles'

function LoginPage() {

    const classes = LoginStyles()

    return (
        <Container className={classes.container}>
            <Login
                classes={classes}
            />
        </Container>
    )
}

export default LoginPage
