// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const HNN = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
            <Ctrl.Checkbox checked= { c !== undefined ? c.hnn.chck : false } disabled />
            <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography text= "Hold Notice Number" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '160px' }} /></Box>
            <Box sx= {{ width: '80px', borderBottom: 'solid 1px  #b2bec3', textAlign: 'center' }}><Ctrl.Typography text= { c !== undefined ? c.hnn.txt : '-' } /></Box>
        </Box>
    );
}

export default HNN;