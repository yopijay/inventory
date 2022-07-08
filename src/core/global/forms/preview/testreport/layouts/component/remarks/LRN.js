// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const LRN = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '50%' }}>
            <Ctrl.Checkbox checked= { c !== undefined ? c.lrn.chck : false } disabled />
            <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography text= "Lacking Report Number" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '160px' }} /></Box>
            <Box sx= {{ width: '80px', borderBottom: 'solid 1px  #b2bec3', textAlign: 'center' }}><Ctrl.Typography text= { c !== undefined ? c.lrn.txt : '-' } /></Box>
        </Box>
    );
}

export default LRN;