// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const FreeStanding = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Ctrl.Checkbox />
            <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography text= "Free-standing" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '120px' }} /></Box>
            <Box>asdasd</Box>
        </Box>
    );
}

export default FreeStanding;