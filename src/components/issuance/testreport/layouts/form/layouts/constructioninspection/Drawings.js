// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import FreeStanding from './drawings/FreeStanding';
import WallMounted from './drawings/WallMounted';
import C11 from './drawings/C11';

const Drawings = (props) => {
    const { register, getValues } = props;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "c.1" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Enclosure dimensions correspond to approver drawings" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <FreeStanding register= { register } getValues= { getValues } />
            <WallMounted register= { register } getValues= { getValues } />
            <C11 register= { register } getValues= { getValues } />
        </Box>
    );
}

export default Drawings;