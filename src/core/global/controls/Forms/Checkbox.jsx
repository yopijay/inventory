// Libraries
import React from 'react';
import { Checkbox as MuiCheckBox } from '@mui/material';

const Checkbox = (props) => {
    const { register, ...other } = props;
    
    return <MuiCheckBox { ...register } { ...other } sx={{ color: '#b2bec3', '&.Mui-checked': { color: '#487eb0' } }} />
}

export default Checkbox;
