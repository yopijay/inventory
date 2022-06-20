// Libraries
import React from 'react';
import { Grid, Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

// Layouts
import List from './components/List';
import Drawings from './components/Drawings';
import CircuitBreaker from './components/CircuitBreaker';
import LBS from './components/LBS';
import MagneticSwitch from './components/MagneticSwitch';
import Capacitor from './components/Capacitor';
import Auxillaries from './components/auxillaries';
import Remarks from './components/Remarks';

const Components = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 }>
                <List />
            </Grid>
            <Grid item xs= { 12 }>
                <Drawings />
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '0 0 0 15px' }}>
                    <CircuitBreaker />
                    <LBS />
                    <MagneticSwitch />
                    <Capacitor />
                    <Auxillaries />
                    <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Ctrl.Typography text= "b.16"
                                sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '8px 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                            <Ctrl.Typography text= "Other"
                                sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out' }} />
                        </Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "comOthers" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                </Box>
                <Remarks />
            </Grid>
        </Grid>
    );
}

export default Components;