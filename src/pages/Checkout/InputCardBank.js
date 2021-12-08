import { TextField } from '@mui/material'
import React from 'react'

function InputCardBank({ value, handleChange, classes, name, label }) {
    return (
        <div>
            <TextField
                value={value}
                onChange={handleChange}
                name={name}
                color="primary"
                label={label}
                fullWidth
                required
                className={classes}
            />
        </div>
    )
}

export default InputCardBank
