// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const LightningArrester = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Lightning Arrester"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Type" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "laType" radius= "5px" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Rating" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "laRating" radius= "5px" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Brand" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "laBrand" radius= "5px" size= "large" checked= { false } />
                </Box>
            </Box>
        </Box>
    );
}

export default LightningArrester;