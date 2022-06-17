// Libraries
import React, { useEffect } from 'react';
import { Box } from '@mui/material';

// Layouts
// import Summary from './layouts/summary/'

const Index = () => {

    useEffect(() => {
        localStorage.setItem('nav', 'Home');
    }, []);

    return (
            <Box></Box>
    );
}

export default Index;