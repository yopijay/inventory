// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

// Layouts
import D1 from './mechanicaloperation/d1';
import D2 from './mechanicaloperation/d2';
import D3 from './mechanicaloperation/d3';
import D4 from './mechanicaloperation/d4';
import Remarks from './mechanicaloperation/remarks';

const MechanicalOperation = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '15px 0 10px 0' }}>
            <Ctrl.Typography text= "D. Mechanical Operation" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><D1 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><D2 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><D3 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><D4 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><Remarks /></Box>
        </Box>
    );
}

export default MechanicalOperation;