// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const b14 = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "b.14 Capacitor" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '23%', paddingLeft: '20px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '77%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "KVAR" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { c !== undefined ? c.capacitor.kvar : false } disabled />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "Brand" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { c !== undefined ? c.capacitor.brand : false } disabled />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default b14;