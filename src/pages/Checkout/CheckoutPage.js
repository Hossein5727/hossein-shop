import React, { useState } from 'react'
import { Container, Box, FormControl, TextField, Button } from '@mui/material'
import { CheckoutStyles } from './CheckoutStyles'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import InputCardBank from './InputCardBank';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { UseCartActions } from '../../Providers/CartProvider';

function CheckoutPage() {

    const navigate = useNavigate()

    const [bankData, setBankData] = useState({
        cvc: '',
        expiry: '',
        name: '',
        number: '',
    })

    const dataTextFiled = [
        { id: 1, value: bankData.name, name: 'name', label: 'name' },
        { id: 2, value: bankData.number, name: 'number', label: 'number card' },
        { id: 3, value: bankData.expiry, name: 'expiry', label: 'expiry' },
        { id: 4, value: bankData.cvc, name: 'cvc', label: 'cvc' },
    ]

    const classes = CheckoutStyles()

    const handleChange = (e) => {
        setBankData({ ...bankData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        toast.success("Ok")
        navigate("/")
    }

    return (
        <Container className={classes.container}>
            <Box className={classes.bankCard}>
                <Cards
                    cvc={bankData.cvc}
                    expiry={bankData.expiry}
                    name={bankData.name}
                    number={bankData.number}
                />
            </Box>
            <form onSubmit={submitHandler} className="flex justify-center">
                <FormControl className={classes.formBank} >
                    {dataTextFiled.map((item) => (
                        <TextField
                            value={item.value}
                            onChange={handleChange}
                            name={item.name}
                            color="primary"
                            label={item.label}
                            fullWidth
                            required
                            className={classes.textField}
                        />
                    ))}
                    <Button
                        endIcon={<CreditScoreIcon />}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        type="submit"
                    >Paymant</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CheckoutPage
