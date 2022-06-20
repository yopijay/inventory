// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import FreeStanding from './drawings/FreeStanding';
import WallMounted from './drawings/WallMounted';
import C11 from './drawings/C11';

const Drawings = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "c.1"
                    sx= {{ paddingLeft: { xs: '15px', md: 0 }, margin: '8px 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Enclosure dimensions correspond to approver drawings"
                    sx= {{ minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <FreeStanding />
            <WallMounted />
            <C11 />
        </Box>
    );
}

export default Drawings;