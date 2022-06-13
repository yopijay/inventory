// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Layouts
import List from './list/brand';

const Brand = () => {
    return (
        <Box padding= "10px 15px" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
            <List />
        </Box>
    );
}

export default Brand;