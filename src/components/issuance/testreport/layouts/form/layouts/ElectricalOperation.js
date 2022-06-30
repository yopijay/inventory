// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';
import { get } from '../../../../../../core/request/Request';

// Layouts
import InsulationResistance from './electricaloperation/InsulationResistance';
import ControlCircuitInsulation from './electricaloperation/ControlCircuitInsulation';
import DielectricStrength from './electricaloperation/DielectricStrength';
import ControlCircuitDielectric from './electricaloperation/ControlCircuitDielectric';
import Polarity from './electricaloperation/Polarity';
import Simulation from './electricaloperation/Simulation';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

// Loader
import { SnakeLoader } from '../../../../../../core/loader/Loader';

const ElectricalOperation = () => {
    const { type, id } = useParams();
    const { register, getValues, setValue } = useContext(TestReportContext);
    const [ isLoad, setIsLoad ] = useState(type !== 'new');
    const defaultVal = getValues().electrical_operation;

    const [ isPst, setIsPst ] = useState(false);
    const [ isEt, setIsEt ] = useState(false);
    const [ isCt, setIsCt ] = useState(false);

    useEffect(() => {
        if(id !== undefined) {
            get(id, 'electrical_operation', setValue, setIsLoad, 'electrical_operation');
        }
    }, []);

    return (
        <Box>
            {
                !isLoad ? (
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
                            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Ctrl.Typography text= "e.7" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                                    <Ctrl.Typography text= "Electrical Tip" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                                    <Ctrl.Checkbox name= { `electrical_operation.et` } size= "large" 
                                        checked= { defaultVal !== undefined ? defaultVal.et > 0 ? true : isEt : isEt }
                                        register= { register(`electrical_operation.et`, {
                                            onChange: () => setIsEt(!isEt)
                                        }) } />
                                        <Ctrl.Typography text= "Continuity Test" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                                        <Ctrl.Checkbox name= { `electrical_operation.ct` } size= "large" 
                                            checked= { defaultVal !== undefined ? defaultVal.ct > 0 ? true : isCt : isCt }
                                            register= { register(`electrical_operation.ct`, {
                                                onChange: () => setIsCt(!isCt)
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
                ) : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default ElectricalOperation;