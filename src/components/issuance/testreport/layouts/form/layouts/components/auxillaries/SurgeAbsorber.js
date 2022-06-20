// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const SurgeAbsorber = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Surge Absorber"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Type" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "saType" radius= "5px" padding= "12px 15px 8px 15px" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Rating" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "saRating" radius= "5px" padding= "12px 15px 8px 15px" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Brand" /></Box>
                <Box>
                    <Ctrl.Checkbox name= "saBrand" radius= "5px" padding= "12px 15px 8px 15px" size= "large" checked= { false } />
                </Box>
            </Box>
        </Box>
    );
}

export default SurgeAbsorber;