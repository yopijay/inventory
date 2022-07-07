// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import B11 from './b11';
import B12 from './b12';
import B13 from './b13';
import B14 from './b14';
import B15 from './b15';
import B16 from './b16';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "b.1 Device specification conform to final approved drawings" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                <Ctrl.Checkbox />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', width: '80px' }}>
                    <Ctrl.Typography text= "S. O." sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', width: '80px' }}>
                    <Ctrl.Typography text= "P. O." sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch'}}>
                <B11 />
                <B12 />
                <B13 />
                <B14 />
                <B15 />
                <B16 />
            </Box>
        </Box>
    );
}

export default Index;