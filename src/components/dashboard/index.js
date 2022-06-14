// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
// import Summary from './layouts/summary/'

const Index = () => {

    return (
        <Box sx= {{ padding: { xs: 0, md: '20px' } }}>
            <Ctrl.Typography color= "#2c3e50" text= "DASHBOARD" sx= {{ fontSize: { xs: '150%', sm: '180%', md: '200%' }, fontWeight: 'bold' }} />
            {/* <Box margin= "20px 0 0 0"><Summary /></Box> */}
        </Box>
    );
}

export default Index;