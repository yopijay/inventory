// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

// Layouts
import C1 from './constructioninspection/c1';

const ConstructionInspection = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Ctrl.Typography text= "C. Construction Inspection" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            <Box sx= {{ minWidth: '800px', margin: '15px 0 10px 10px' }}><C1 /></Box>
        </Box>
    );
}

export default ConstructionInspection;