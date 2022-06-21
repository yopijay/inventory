// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import BusbarInsulator from './screwtightening/BusbarInsulator';
import Torque from './screwtightening/Torque';

const ScrewTightening = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "d.4" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Bold / Screw Tightening" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                    <Ctrl.Checkbox name= "mo_st_chck" size= "large" checked= { false } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', width: '300px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Bolt Marking" /></Box>
                        <Ctrl.Checkbox name= "mo_st_bolt_chck" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
            <BusbarInsulator />
            <Torque />
        </Box>
    );
}

export default ScrewTightening;