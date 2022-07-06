// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../controls/Controls';

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
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', minWidth: '700px'  }}>
                <Ctrl.Typography text= "b.15 Auxillary:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '23%', paddingLeft: '20px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', minWidth: '77%' }}>
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
        </Box>
    );
}

export default Index;