// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const SurgeAbsorber = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Surge Absorber" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "comp_aux_sa_type" size= "large" checked= { false } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "comp_aux_sa_rating" size= "large" checked= { false } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "comp_aux_sa_brand" size= "large" checked= { false } />
            </Box>
        </Box>
    );
}

export default SurgeAbsorber;