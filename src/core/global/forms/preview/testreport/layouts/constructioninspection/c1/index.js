// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import FreeStanding from './FreeStanding';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Ctrl.Typography text= "c1. Enlosure dimensions correspond to approved drawings" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
            <FreeStanding />
        </Box>
    );
}

export default Index;