// Libraries
import React from 'react';
import { Checkbox as MuiCheckBox } from '@mui/material';

const Checkbox = (props) => {
    let { name, register, ...other } = props;
    return <MuiCheckBox name= { name } { ...register } { ...other }/>
}

export default Checkbox;
