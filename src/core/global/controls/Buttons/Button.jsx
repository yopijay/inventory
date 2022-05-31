// Libraries
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { Box } from '@mui/system';

const Button = ( props ) => {
    const { text, size, color, variant, type, bgcolor, fullWidth, event, ...other } = props;
    
    return (
        <Box width= "100%">
            <MuiButton variant= { variant || 'text' } fullWidth= { fullWidth } onClick= { event } { ...other }>{ text }</MuiButton>
        </Box>
    );
}

export default Button;