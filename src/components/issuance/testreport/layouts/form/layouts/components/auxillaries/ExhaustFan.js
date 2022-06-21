// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const ExhaustFan = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Exhaust Fan" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Type" /></Box>
                <Box><Ctrl.Checkbox name= "comp_aux_ef_type" size= "large" checked= { false } /></Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Rating" /></Box>
                <Box><Ctrl.Checkbox name= "comp_aux_ef_rating" size= "large" checked= { false } /></Box>
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box><Ctrl.Typography color= "#2c3e50" text= "Brand" /></Box>
                <Box><Ctrl.Checkbox name= "comp_aux_ef_brand" size= "large" checked= { false } /></Box>
            </Box>
        </Box>
    );
}

export default ExhaustFan;