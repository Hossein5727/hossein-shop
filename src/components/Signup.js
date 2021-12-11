import React, { useEffect, useState } from 'react'
import InputShop from '../common/InputShop';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { FormGroup, Button, CircularProgress } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { signupService } from '../services/signupService';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth, UseAuthActions } from '../Providers/AuthProvider';
import { useQuary } from '../hooks/QueryHook';

const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
}

const dataInput = [
    { id: 1, name: 'name', value: initialValues.name, label: 'Full Name' },
    { id: 2, name: 'email', value: initialValues.email, label: 'Email' },
    { id: 3, name: 'password', value: initialValues.password, label: 'Password' },
    { id: 3, name: 'phoneNumber', value: initialValues.phoneNumber, label: 'Phone' },
]

function Signup({ classes }) {

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const setAuth = UseAuthActions()
    const quary = useQuary()
    const redirect = quary.get("redirect") || "/";
    const userData = UseAuth()

    const validationSchema = () => yup.object({
        name: yup.string().required("Name is required"),
        phoneNumber: yup.string().required("Phone number is required").min(8),
        email: yup.string().email().required("Email is required"),
        password: yup.string().required('Password is required.')
            .min(8, 'Password is too short - should be 8 chars minimum.'),
    })

    const onSubmit = async (values) => {
        console.log(values);
        setIsLoading(true)
        try {
            const { data } = await signupService(values)
            setAuth(data)
            localStorage.setItem("authState", JSON.stringify(data))
            toast.success("Welcome" + values.name)
            setIsLoading(false)
            navigate(redirect)
        } catch (error) {
            toast.error(error.response.data.message)
            setIsLoading(false)
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
            <h2 className="mb-10 text-5xl text-center text-blue-600">Sign up</h2>
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
                        endIcon={<ExitToAppIcon />}
                        disabled={!formik.isValid}
                    >Sign up</Button>
                </FormGroup>
            </form>
            <Link to={`/login?redirect=${redirect}`} className="text-blue-700 text-lg">Already login?</Link>
            {isLoading && (
                <CircularProgress />
            )}
        </div>
    )
}

export default Signup
