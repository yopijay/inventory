// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Simulation = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "e.5" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Simulation Test" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "e.41" sx= {{ margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Control Logic Circuit" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Ctrl.Checkbox name= "eo_simulation_clc" size= "large" checked= { false } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 10px' }}>
                    <Ctrl.Typography text= "Voltage / Current Injection" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Ctrl.Checkbox name= "eo_simulation_vi" size= "large" checked= { false } />
                </Box>
            </Box>
        </Box>
    );
}

export default Simulation;