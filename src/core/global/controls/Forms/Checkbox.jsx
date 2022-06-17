// Libraries
import React from 'react';
import { Checkbox as MuiCheckBox } from '@mui/material';

const Checkbox = (props) => {
    const { register, ...other } = props;
    
    return <MuiCheckBox { ...register } { ...other }/>
}

export default Checkbox;
