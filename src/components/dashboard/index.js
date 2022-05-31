// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import Summary from './layouts/Summary';

const Index = () => {

    return (
        <Box padding= "10px 30px">
            <Ctrl.Typography color= "#2c3e50" text= "DASHBOARD" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Box margin= "20px 0 0 0"><Summary /></Box>
        </Box>
    );
}

export default Index;