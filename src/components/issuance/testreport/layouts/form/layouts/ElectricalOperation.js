// Libraries
import React, { useContext, useState } from 'react';
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

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

const ElectricalOperation = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().electrical_operation;

    const [ isPst, setIsPst ] = useState(false);

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
                        <Ctrl.Checkbox name= { `electrical_operation.pst` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.pst > 0 ? true : isPst : isPst }
                            register= { register(`electrical_operation.pst`, {
                                onChange: () => setIsPst(!isPst)
                            }) } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out', textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
                    </Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', width: '100%' }}>
                        <Ctrl.TextField name= { `electrical_operation.remarks` } register= { register(`electrical_operation.remarks`) }
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ElectricalOperation;