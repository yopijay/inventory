// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const MagneticSwitch = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.13"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '8px 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Magnetic Switch"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "AF" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "msAF" radius= "5px" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "OLR" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "msOLR" radius= "5px" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Brand" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "msBrand" radius= "5px" size= "large" checked= { false } />
                </Box>
            </Box>
        </Box>
    );
}

export default MagneticSwitch;