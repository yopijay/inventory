// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const HNN = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
            <Ctrl.Checkbox />
            <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography text= "Hold Notice Number" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '160px' }} /></Box>
            <Box sx= {{ width: '80px', borderBottom: 'solid 1px  #b2bec3', textAlign: 'center' }}><Ctrl.Typography text= "-" /></Box>
        </Box>
    );
}

export default HNN;