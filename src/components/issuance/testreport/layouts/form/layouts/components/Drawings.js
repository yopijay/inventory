// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Drawings = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.1" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Device specification conform to final approved drawings" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Ctrl.Checkbox name= "comp_drawing" size= "large" checked= { false } />
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "S.O." />
                <Ctrl.Checkbox name= "comp_drawing_so" size= "large" checked= { false } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "P.O." />
                <Ctrl.Checkbox name= "comp_drawing_po" size= "large" checked= { false } />
            </Box>
        </Box>
    );
}

export default Drawings;