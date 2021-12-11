import React from 'react'
import { TextField } from '@mui/material'

function InputShop({ formik, classes, value, name, label }) {
    return (
        <div>
            <TextField
                variant="filled"
                label={label}
                value={value}
                name={name}
                {...formik.getFieldProps(name)}
                className={classes.input}
                fullWidth
            />
            {formik.errors[name] && formik.touched[name] && (
                <p className="flex justify-start text-red-500 text-lg">{formik.errors[name]}</p>
            )}
        </div>
    )
}

export default InputShop
