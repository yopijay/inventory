// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const c35 = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '50%', paddingLeft: '20px' }}>
                <Ctrl.Typography text= "c.35" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                <Ctrl.Typography text= "Spacing between live parts conform to PEC:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', marginLeft: '15px' } }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', minWidth: '45%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '70%' }}>
                    <Ctrl.Typography text= "Mounted on the same surface" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '70%' }}>
                    <Ctrl.Typography text= "Held free in air" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox />
                </Box>
            </Box>
        </Box>
    );
}

export default c35;