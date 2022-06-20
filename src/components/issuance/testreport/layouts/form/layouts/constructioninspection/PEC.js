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
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Ctrl.Typography text= "c.35"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Spacing between live parts conform to PEC:"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', width: '500px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Ctrl.Typography text= "Mounted on the same surface"
                            sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "surface" radius= "5px" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Ctrl.Typography text= "Held free in air"
                            sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "air" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
            <LLLG />
        </Box>
    );
}

export default PEC