// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import List from '../../../../../../list';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx= {{ width: '60%' }}><Ctrl.Typography text= "e.3 DIELECTRIC STRENGTH TEST" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '40%' }}>
                    <Ctrl.Typography text= "EQUIPMENT NO.:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
            </Box>
            <Box sx= {{ width: '100%' }}><List data= { [] } /></Box>
        </Box>
    );
}

export default Index;