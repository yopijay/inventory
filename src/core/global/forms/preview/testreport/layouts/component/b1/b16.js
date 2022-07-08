// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const b16 = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "b.16 Others" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, width: '23%', paddingLeft: '20px' }} />
                <Box sx= {{ width: '77%', borderBottom: 'solid 1px  #b2bec3' }}><Ctrl.Typography text= { `${ c !== undefined ? c.other !== "undefined" ? c.other : '-' : '-' }` } /></Box>
            </Box>
        </Box>
    );
}

export default b16;