// Libraries
import React from 'react';
import { Grid, Box } from '@mui/material';

// Layouts
import List from './components/List';
import Drawings from './components/Drawings';
import CircuitBreaker from './components/CircuitBreaker';
import LBS from './components/LBS';
import MagneticSwitch from './components/MagneticSwitch';
import Capacitor from './components/Capacitor';
import Auxillaries from './components/auxillaries';

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
                </Box>
            </Grid>
        </Grid>
    );
}

export default Components;