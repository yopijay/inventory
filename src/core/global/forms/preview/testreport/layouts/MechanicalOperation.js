// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

// Layouts

const ConstructionInspection = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '15px 0 10px 0' }}>
            <Ctrl.Typography text= "D. Mechanical Operation" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}></Box>
        </Box>
    );
}

export default ConstructionInspection;