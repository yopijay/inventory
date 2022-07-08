// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const c34 = () => {
    const { data } = useContext(DialogContext);
    const ci = data.construction_inspection;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
            <Ctrl.Typography text= "c.34 Correct spacing / quantity busbar support" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '500px' }} />
            <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.support : false } />
        </Box>
    );
}

export default c34;