// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const ci = data.construction_inspection;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Ctrl.Typography text= "c.5" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '2%' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '98%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 10px', minWidth: '300px' }}>
                    <Ctrl.Typography text= "Correct quantity and labels of nameplates" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { ci !== undefined ? ci.nameplates > 0 : false } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 10px', minWidth: '300px' }}>
                    <Ctrl.Typography text= "Correct quantity and labels of device nos." sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { ci !== undefined ? ci.devicenos > 0 : false } />
                </Box>
            </Box>
        </Box>
    );
}

export default Index;