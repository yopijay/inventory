// Libraries
import React from 'react';
import { TextField as MuiTextField, Box } from '@mui/material';

const TextField = ( props ) => {
    const { name, label, value, size, variant, fullWidth, bgcolor, radius, border, padding, startadornment, register, ...other } = props;

    return(
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
            <Box width= "100%" bgcolor= { bgcolor || '' } borderRadius= { radius || '0' } border= { border || 'none' } padding= { padding || '0' }>
                <MuiTextField 
                    variant= { variant || 'standard' } 
                    { ...register } 
                    label= { label } 
                    name= { name } 
                    size= { size || 'medium' } 
                    value= { value } 
                    fullWidth= { fullWidth || true } 
                    InputProps= {{ startAdornment: ( startadornment ), disableUnderline: true }} 
                    { ...other }/>
            </Box>
        </Box>
    );
}

export default TextField;