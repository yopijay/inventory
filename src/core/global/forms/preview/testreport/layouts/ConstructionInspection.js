// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

// Layouts
import C1 from './constructioninspection/c1';
import C2 from './constructioninspection/c2';
import C3 from './constructioninspection/c3';
import C4 from './constructioninspection/c4';
import C5 from './constructioninspection/c5';
import Remarks from './constructioninspection/remarks';

const ConstructionInspection = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Ctrl.Typography text= "C. Construction Inspection" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><C1 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '0 0 0 10px' }}><C2 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '0 0 0 10px' }}><C3 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '0 0 0 10px' }}><C4 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '0 0 0 10px' }}><C5 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '0 0 0 10px' }}><Remarks /></Box>
        </Box>
    );
}

export default ConstructionInspection;