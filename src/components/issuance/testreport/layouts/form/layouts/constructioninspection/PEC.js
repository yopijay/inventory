// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import LLLG from './pec/LLLG';

const PEC = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Ctrl.Typography text= "c.35" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Spacing between live parts conform to PEC:" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', width: '300px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Ctrl.Typography text= "Mounted on the same surface"  sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_pec_surface" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Ctrl.Typography text= "Held free in air" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_pec_air" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
            <LLLG />
        </Box>
    );
}

export default PEC