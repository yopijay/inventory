// Libraries
import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ( props ) => {
    const { register, ...other } = props;

    return(
        <MuiTextField { ...register } { ...other }/>
    );
}

export default TextField;