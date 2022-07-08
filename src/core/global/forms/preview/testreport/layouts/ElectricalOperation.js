// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

// Layouts
import E1 from './electricaloperation/e1';
import E2 from './electricaloperation/e2';
import E3 from './electricaloperation/e3';
import E4 from './electricaloperation/e4';
import E5 from './electricaloperation/e5';
import E6 from './electricaloperation/e6';
import E7 from './electricaloperation/e7';
import E8 from './electricaloperation/e8';
import Remarks from './electricaloperation/remarks';

const ElectricalOperation = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '15px 0 10px 0' }}>
            <Ctrl.Typography text= "E. Electrical Operation" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            <Box sx= {{ minWidth: '800px', margin: '10px 0 10px 10px' }}><E1 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 10px 10px' }}><E2 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 10px 10px' }}><E3 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 10px 10px' }}><E4 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><E5 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><E6 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><E7 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><E8 /></Box>
            <Box sx= {{ minWidth: '800px', margin: '10px 0 0 10px' }}><Remarks /></Box>
        </Box>
    );
}

export default ElectricalOperation;