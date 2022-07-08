// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Ctrl.Typography text= "Remarks" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase', width: '15%' }} />
            <Box sx= {{ width: '80%', borderBottom: 'solid 1px  #b2bec3' }}><Ctrl.Typography text= "-" /></Box>
        </Box>
    );
}

export default Index;