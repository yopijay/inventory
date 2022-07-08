// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const c31 = () => {
    const { data } = useContext(DialogContext);
    const ci = data.construction_inspection;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Ctrl.Typography text= "c.31" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '5%', paddingLeft: '20px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '95%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "Grounding" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.grounding : false } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "Neutral" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.neutral : false } />
                </Box>
            </Box>
        </Box>
    );
}

export default c31;