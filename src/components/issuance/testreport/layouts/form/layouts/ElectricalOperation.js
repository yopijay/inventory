// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

// Layouts
import InsulationResistance from './electricaloperation/InsulationResistance';
import ControlCircuitInsulation from './electricaloperation/ControlCircuitInsulation';
import DielectricStrength from './electricaloperation/DielectricStrength';
import ControlCircuitDielectric from './electricaloperation/ControlCircuitDielectric';
import Polarity from './electricaloperation/Polarity';
import Simulation from './electricaloperation/Simulation';

const ElectricalOperation = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }}>
            <Grid item xs= { 12 }>
                <InsulationResistance />
                <ControlCircuitInsulation />
                <DielectricStrength />
                <ControlCircuitDielectric />
                <Polarity />
                <Simulation />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "e.7" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                        <Ctrl.Typography text= "Phase Sequence Test" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                        <Ctrl.Checkbox name= "eo_pst" size= "large" checked= { false } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out', textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
                    </Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', width: '100%' }}>
                        <Ctrl.TextField name= "eo_remarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ElectricalOperation;