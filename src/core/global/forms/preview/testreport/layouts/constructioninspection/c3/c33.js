// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const c33 = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
            <Ctrl.Typography text= "c.33 Correct size / quantity of bolts on each interconnection" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '500px' }} />
            <Ctrl.Checkbox />
        </Box>
    );
}

export default c33;