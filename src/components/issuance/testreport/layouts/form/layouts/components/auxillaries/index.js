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
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.15" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Auxillaries" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
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