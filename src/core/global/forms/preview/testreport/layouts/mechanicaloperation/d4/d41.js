// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const d41 = () => {
    const { data } = useContext(DialogContext);
    const mo = data.mechanical_operation;
    
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Ctrl.Typography text= "d.41" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '5%', paddingLeft: '20px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '95%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "Busbar/Insulators" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.screw_tightening.insulator : false } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "Power Cables" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.screw_tightening.powercables : false } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "Control Cables" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.screw_tightening.controlcables : false } />
                </Box>
            </Box>
        </Box>
    );
}

export default d41;