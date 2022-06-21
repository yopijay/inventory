// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const CrimpingLugs = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', padding: '0 10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.32" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct quantity of terminal / Crimping lugs:" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Box sx= {{ width: '150px' }}><Ctrl.Typography color= "#2c3e50" text= "Incoming / Line Bus" /></Box>
                    <Ctrl.Checkbox name= "ci_crimp_line_bus" size= "large" checked= { false } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Box sx= {{ width: '150px' }}><Ctrl.Typography color= "#2c3e50" text= "Outgoing" /></Box>
                    <Ctrl.Checkbox name= "ci_crimp_outgoing" size= "large" checked= { false } />
                </Box>
            </Box>
        </Box>
    );
}

export default CrimpingLugs;