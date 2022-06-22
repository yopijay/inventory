// Libraries
import React from 'react';
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
import List from './components/list/index'

const Components = (props) => {
    const { register, control, getValues, errors } = props;

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 }>
                <List register= { register } control= { control } getValues= { getValues } errors= { errors } />
            </Grid>
            <Grid item xs= { 12 }>
                <Drawings register= { register } getValues= { getValues } />
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    <CircuitBreaker register= { register } getValues= { getValues } />
                    <LBS register= { register } getValues= { getValues } />
                    <MagneticSwitch register= { register } getValues= { getValues } />
                    <Capacitor register= { register } getValues= { getValues } />
                    <Auxillaries register= { register } getValues= { getValues } />
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
                <Remarks register= { register } getValues= { getValues } />
            </Grid>
        </Grid>
    );
}

export default Components;