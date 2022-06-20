// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const CrimpingLugs = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', padding: '0 20px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.32"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct quantity of terminal / Crimping lugs:"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" margin= "0 20px">
                    <Box sx= {{ width: '150px' }}><Ctrl.Typography color= "#2c3e50" text= "Incoming / Line Bus" /></Box>
                    <Box>
                        <Ctrl.Checkbox name= "clLineBus" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" margin= "0 20px">
                    <Box sx= {{ width: '150px' }}><Ctrl.Typography color= "#2c3e50" text= "Outgoing" /></Box>
                    <Box>
                        <Ctrl.Checkbox name= "clOutgoing" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CrimpingLugs;