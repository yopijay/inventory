// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Layouts
import Meter from './Meter';
import ProtectiveRelays from './ProtectiveRelays';
import LVPT from './LVPT';
import CT from './CT';
import HVFuse from './HVFuse';
import LVFuse from './LVFuse';
import LightningArrester from './LightningArrester';
import SurgeAbsorber from './SurgeAbsorber';
import ExhaustFan from './ExhaustFan';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.15"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '8px 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Auxillaries"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginLeft: '15px' }}>
                <Meter />
                <ProtectiveRelays />
                <LVPT />
                <CT />
                <HVFuse />
                <LVFuse />
                <LightningArrester />
                <SurgeAbsorber />
                <ExhaustFan />
            </Box>
        </Box>
    );
}

export default Index;