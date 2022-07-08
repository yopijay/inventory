// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import FreeStanding from './FreeStanding';
import WallMounted from './WallMounted';
import C11 from './c11';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const ci = data.construction_inspection;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Ctrl.Typography text= "c.1 Enlosure dimensions correspond to approved drawings" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
            <FreeStanding />
            <WallMounted />
            <C11 />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
                <Ctrl.Typography text= "c.12" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, width: '40px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                        <Ctrl.Typography text= "Allowable gutter space/bending clearance" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.draw.gutter : false } disabled />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;