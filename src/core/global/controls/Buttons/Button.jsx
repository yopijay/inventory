// Libraries
import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ( props ) => {
    const { text, size = 'medium', variant = 'text', fullWidth = true, event, ...other } = props;
    
    return (
        <MuiButton variant= { variant } fullWidth= { fullWidth } size= { size } { ...other }>{ text }</MuiButton>
    );
}

export default Button;