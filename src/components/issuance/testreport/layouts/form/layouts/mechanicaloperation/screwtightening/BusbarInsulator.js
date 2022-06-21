// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const BusbarInsulator = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "d.41" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Busbar / Insulators" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "mo_st_insulator" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 20px' }}>
                <Ctrl.Typography text= "Power Cables" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "mo_sc_pc" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "Control Cables" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "mo_sc_cc" radius= "5px" size= "large" checked= { false } />
            </Box>
        </Box>
    );
}

export default BusbarInsulator;