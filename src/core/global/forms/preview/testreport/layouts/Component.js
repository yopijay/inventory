// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

// Layout
import List from '../../../../list';
import B1 from './component/b1';
import Remarks from './component/remarks';

// Context
import { DialogContext } from '../../../../../context/DialogContext';

const Component = () => {
    const { data } = useContext(DialogContext);
    const items = data.items;
    
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Ctrl.Typography text= "B. Components List" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '10px' }}>
                <Box sx= {{ width: '100%' }}><List data= { items !== undefined ? items : [] } /></Box>
            </Box>
            <Box sx= {{ margin: '15px 0 10px 10px' }}><B1 /></Box>
            <Box sx= {{ margin: '10px 0 10px 10px' }}><Remarks /></Box>
        </Box>
    );
}

export default Component;