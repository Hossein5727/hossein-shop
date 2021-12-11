import React, { useEffect, useState } from 'react'
import InputShop from '../common/InputShop';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { FormGroup, Button, CircularProgress } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import LoginIcon from '@mui/icons-material/Login';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { loginService } from '../services/loginService';
import { UseAuth, UseAuthActions } from '../Providers/AuthProvider'
import { useQuary } from '../hooks/QueryHook'

const initialValues = {
    password: '',
    email: '',
}

const dataInput = [
    { id: 1, name: 'email', value: initialValues.email, label: 'Email' },
    { id: 2, name: 'password', value: initialValues.password, label: 'Password' },
]

function Login({ classes }) {

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const setAuth = UseAuthActions()
    const quary = useQuary()
    const redirect = quary.get("redirect") || "/";
    const userData = UseAuth()

    const validationSchema = () => yup.object({
        password: yup.string().required("Password is required").min(8, 'Password is too short - should be 8 chars minimum.'),
        email: yup.string().email().required("Email is required"),
    })

    const onSubmit = async (values) => {
        console.log(values);
        setIsLoading(true)
        try {
            const { data } = await loginService(values)
            setAuth(data)
            localStorage.setItem("authState", JSON.stringify(data))
            toast.success("Welcome back")
            setIsLoading(false)
            // if (redirect) {
            //     navigate(`/${redirect}`)
            // }
            // else { navigate("/") }
            navigate(redirect)
        } catch (error) {
            setIsLoading(false)
            toast.error(error.response.data.message)
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnMount: true,
        validationSchema,
    })

    useEffect(() => {
        if (userData) navigate(redirect)
    }, [redirect, userData])

    return (
        <div>
            <h2 className="mb-10 text-5xl text-center text-blue-600">Login</h2>
            <form onSubmit={formik.handleSubmit} className={classes.boxInput}>
                <FormGroup>
                    {dataInput.map((item) => (
                        <InputShop
                            formik={formik}
                            label={item.label}
                            value={item.value}
                            name={item.name}
                            classes={classes}
                        />
                    ))}
                    <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        className={classes.btn}
                        fullWidth
                        endIcon={<LoginIcon />}
                        disabled={!formik.isValid}
                    >Login</Button>
                </FormGroup>
            </form>
            <Link to={`/signup?redirect=${redirect}`} className="text-blue-700 text-lg">You have not registered yet?</Link>
            {isLoading && (
                <CircularProgress />
            )}
        </div>
    )
}

export default Login
