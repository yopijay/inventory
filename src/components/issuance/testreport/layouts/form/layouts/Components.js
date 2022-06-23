// Libraries
import React, { useContext } from 'react';
import { Grid, Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

// Layouts
import Drawings from './components/Drawings';
import CircuitBreaker from './components/CircuitBreaker';
import LBS from './components/LBS';
import MagneticSwitch from './components/MagneticSwitch';
import Capacitor from './components/Capacitor';
import Auxillaries from './components/auxillaries';
import Remarks from './components/Remarks';
import List from './components/list/index';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

const Components = () => {
    const { register } = useContext(TestReportContext);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 }>
                <List />
            </Grid>
            <Grid item xs= { 12 }>
                <Drawings />
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    <CircuitBreaker />
                    <LBS />
                    <MagneticSwitch />
                    <Capacitor />
                    <Auxillaries />
                    <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "0 10px">
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Ctrl.Typography text= "b.16" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                            <Ctrl.Typography text= "Other" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                        </Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= { `component.others` } register= { register(`component.others`) } variant= "standard" 
                                fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Others..." />
                        </Box>
                    </Box>
                </Box>
                <Remarks />
            </Grid>
        </Grid>
    );
}

export default Components;