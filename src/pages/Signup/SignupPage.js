import React from 'react'
import { SignupStyles } from './SignupStyles'
import { Container } from '@mui/material'
import Signup from '../../components/Signup'

function SignupPage() {

    const classes = SignupStyles()

    return (
        <Container className={classes.container}>
            <Signup
                classes={classes}
            />
        </Container>
    )
}

export default SignupPage
